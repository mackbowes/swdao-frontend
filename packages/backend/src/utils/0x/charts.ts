import axios from "axios";
import tokenSetABI from "../../abi/TokenSetABI.json";
import { baseUrl0x } from "../../settings";
import { getDecimals } from "./main";
import { web3 } from "../../bin/www";
import { PRECISION_REQUIRED } from "./exports";
import { AbiItem } from "web3-utils";
import SWXAbi from "../../abi/AbiSwx.json";
import TPCAbi from "../../abi/TokenPriceController.json";
import TPMAbi from "../../abi/TokenPriceManager.json";
import { utils } from "ethers";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getStepInfo = async (days: number) => {
  const thisBlock = Math.floor((await web3.eth.getBlockNumber()) / 1800) * 1800;
  const now = Math.round(new Date().getTime() / 1000);
  const epochLastHour = now - (now % 3600);
  const epochEnd = epochLastHour - days * 86400;
  const stepCount = 14;
  let stepTime = (epochLastHour - epochEnd) / stepCount;
  const stepSize = Math.round(stepTime / 2);
  stepTime = Math.round(stepTime);
  const timestamps = new Map();
  const blocks = [];
  for (let i = 0; i <= stepCount; i++) {
    timestamps.set(thisBlock - stepSize * i, epochLastHour - stepTime * i);
    blocks.push(thisBlock - stepSize * i);
  }
  return { thisBlock, stepCount, stepSize, timestamps, blocks };
};

export const getChartTokenset = async (
  address: string | undefined,
  days: any
) => {
  const setContract = new web3.eth.Contract(tokenSetABI as AbiItem[], address);
  const { thisBlock, stepCount, stepSize, timestamps } = await getStepInfo(
    days
  );
  const fromBlock = thisBlock - stepSize * stepCount;
  let positionsCurrent = await setContract.methods
    .getPositions()
    .call(thisBlock);
  let blockLast: number;
  const positionsMap = new Map();
  positionsMap.set(thisBlock, positionsCurrent);
  // Find blocks where rebalances occur.
  const changes = [];
  await Promise.allSettled(
    (
      await web3.eth.getPastLogs({
        fromBlock,
        toBlock: "latest",
        address: "0xd04AabadEd11e92Fefcd92eEdbBC81b184CdAc82",
        topics: [
          "0xf26ad8d17d1f980b62e857e137d0a000ce14bcf3b2aa54e1a0c7d57cf907e1a4",
          web3.utils.padLeft(address as string, 64)
        ],
      })
    )
      .map((l) => {
        return l.blockNumber - 1;
      })
      .filter((b, i) => {
        if (i === 0) {
          blockLast = b;
          return true;
        }
        const blockDifferent = b !== blockLast;
        blockLast = b;
        if (b >= thisBlock) {
          return false;
        }
        return blockDifferent;
      })
      .reverse()
      .map(async (b, i) => {
        await sleep(5 * i);
        const p = setContract.methods.getPositions().call(b);
        const positionsChanged = p !== positionsCurrent;
        positionsCurrent = p;
        if (positionsChanged) {
          positionsMap.set(b, p);
          changes.push(b);
        }
        return positionsChanged;
      })
  );
  // Map rebalances to 0x calls.
  const blockSteps = [];
  let blockUnchanged = thisBlock;
  let stepsSubtract = 0;
  let j = 0;
  changes.push(0);
  let positions = positionsMap.get(thisBlock);
  for (let i = 0; i <= stepCount; i++) {
    const block = thisBlock - i * stepSize;
    if (changes[j] >= block) {
      positions =
        j === 0
          ? positionsMap.get(thisBlock)
          : await positionsMap.get(changes[j - 1]);
      blockSteps.push({
        block: blockUnchanged,
        steps: i - 1 - stepsSubtract,
        positions,
      });
      stepsSubtract = i;
      while (changes[j] >= block) {
        j++;
      }
      blockUnchanged = block;
    }
  }
  positions =
    j === 0
      ? positionsMap.get(thisBlock)
      : await positionsMap.get(changes[j - 1]);
  blockSteps.push({
    block: blockUnchanged,
    steps: stepCount - stepsSubtract,
    positions,
  });
  const setPrices = blockSteps.map(async (step) => {
    const positionsLocal = step.positions;
    let hasUSDC = false;
    const USDC = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
    let precision = false;
    const tokensDataPromise = positionsLocal
      .filter((p: string[]) => {
        const isUSDC = p[0].toLowerCase() === USDC;
        if (isUSDC) {
          hasUSDC = true;
        }
        return isUSDC ? false : true;
      })
      .map(async (p: string[], i: { toString: () => any }) => {
        const addr = p[0].toLowerCase();
        const decimals = await getDecimals(addr);
        if (PRECISION_REQUIRED.includes(addr.toLowerCase())) {
          precision = true;
        }
        return {
          symbol: i.toString(),
          decimals,
          tokenAddress: addr,
        };
      });
    const tokensData = await Promise.all(tokensDataPromise);
    const results = await axios
      .post(baseUrl0x + `/history`, {
        buyTokens: tokensData,
        stepSize: step.steps !== 0 ? stepSize : undefined,
        stepCount: step.steps !== 0 ? step.steps : undefined,
        startBlock: step.block,
        precision,
      })
      .then((res) => {
        return res.data;
      });
    let amountUSDC = 0;
    if (hasUSDC) {
      const index = positionsLocal.findIndex(
        (p: string[]) => p[0].toLowerCase() === USDC
      );
      amountUSDC = positionsLocal[index][2] / 1e6;
      const pricesUSDC = [];
      for (let y = 0; y <= step.steps; y++) {
        pricesUSDC.push(1);
      }
      results.push({ symbol: "USDC", prices: pricesUSDC });
    }
    const localPrices: any = [];
    results.forEach((r: { symbol: string; prices: number[] }) => {
      const isUSDC = r.symbol === "USDC";
      const pi = isUSDC ? 0 : parseInt(r.symbol, 10);
      // @ts-ignore
      const pd = isUSDC ? 6 : tokensData[pi].decimals;
      const amount = isUSDC
        ? amountUSDC
        : positionsLocal.find(
            (pl: string[]) =>
              // @ts-ignore
              pl[0].toLowerCase() === tokensData[pi].tokenAddress
          )[2] /
          10 ** pd;
      r.prices.forEach((p, k) => {
        const pf = p * amount;
        if (!localPrices[k]) {
          localPrices[k] = pf;
        } else {
          localPrices[k] += pf;
        }
      });
    });
    return localPrices.map(async (p: any, i: number) => {
      return [timestamps.get(step.block - i * stepSize), p];
    });
  });
  return (await Promise.all((await Promise.all(setPrices)).flat()))
    .filter((p) => p[1] && p[1] !== 0 && p[0] !== 0)
    .reverse();
};

export const getChart0xToken = async (address: string, days: any) => {
  const { thisBlock, stepCount, stepSize, timestamps } = await getStepInfo(
    days
  );
  const precision = PRECISION_REQUIRED.includes(address.toLowerCase());
  const prices = (
    await axios.post(baseUrl0x + `/history`, {
      buyTokens: [
        {
          symbol: "",
          decimals: await getDecimals(address),
          tokenAddress: address,
        },
      ],
      stepSize,
      stepCount,
      precision,
    })
  ).data[0].prices;
  return prices
    .map((p: any, i: number) => {
      return [timestamps.get(thisBlock - i * stepSize), p];
    })
    .filter((p: number[]) => p[1] && p[1] !== 0 && p[0] !== 0)
    .reverse();
};

const SWX = "0x24Ec3C300Ff53b96937c39b686844dB9E471421e";

export const getChartBalancer = async (days: any, index = 0) => {
  const { timestamps, blocks } = await getStepInfo(
    days
  );
  const swxContract = new web3.eth.Contract(SWXAbi as AbiItem[], SWX);
  const prices = await Promise.all(blocks.reverse().map(async (b: number) => {
    let price;
    try {
      price = +utils.formatUnits(
        (await swxContract.methods.getValue().call(undefined, b))[index],
        18
      );
    } catch (error) {
      price = 0;
    }
    return [timestamps.get(b), price]
  }));
  return prices
    .filter((p: number[]) => p[1] && p[1] !== 0 && p[0] !== 0);
};

/*
const TPC = "0x8A46Eb6d66100138A5111b803189B770F5E5dF9a";

export const getChartTpc = async (address: string, days: any) => {
  const { timestamps, blocks } = await getStepInfo(
    days
  );
  const tpcContract = new web3.eth.Contract(TPCAbi as AbiItem[], TPC);
  const { symbol, decimals } =
    await web3.alchemy.getTokenMetadata(address) as { symbol: string, decimals: number };
  const tpmAddress = await tpcContract.methods.getManager(symbol.toUpperCase()).call();
  const tpmContract = new web3.eth.Contract(TPMAbi as AbiItem[], tpmAddress);
  const prices = await Promise.all(blocks.reverse().map(async (b: number) => {
    const price = utils.formatUnits(
      (await tpmContract.methods.getPrice(2).call(undefined, b))[0],
      decimals
    );
    return [timestamps.get(b), price]
  }));
  return prices
    .filter((p: number[]) => p[1] && p[1] !== 0 && p[0] !== 0);
};
*/