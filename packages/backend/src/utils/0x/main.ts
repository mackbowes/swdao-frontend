// const { performance } = require("perf_hooks");
import axios from "axios";
import { AbiItem } from "web3-utils";
import TokenSetABI from "../../abi/TokenSetABI.json";
import ERC20ABI from "../../abi/ERC20.json";
import tokenSetStreamingFeeABI from "../../abi/TokenSetStreamingFeeModule.json";
import tokenSetIssueFeeABI from "../../abi/TokenSetIssueFeeModule.json";
import swxAbi from "../../abi/AbiSwx.json";
import { baseUrl0x } from "../../settings";
import { web3 } from "../../bin/www";
import {
  ADDRESSES,
  COMMON_DECIMALS,
  PRECISION_REQUIRED,
  HARDCODED_SUPPLY,
  PositionMap,
} from "./exports";
import { isUndefined } from "lodash";
import { AssetTransfersCategory } from "@alch/alchemy-web3";
import { BigNumber, utils } from "ethers";

export const getDecimals = async (address: string) => {
  return (
    COMMON_DECIMALS[address.toLowerCase()] ||
    (await web3.alchemy.getTokenMetadata(address)).decimals ||
    18
  );
};

const getTotalSupply = async (address: string) => {
  if (ADDRESSES.includes(address.toLowerCase())) {
    return (
      (await new web3.eth.Contract(TokenSetABI as AbiItem[], address).methods
        .totalSupply()
        .call((err: any, res: any) => {
          if (err) {
            console.log("An error occurred", err);
          }
          return res;
        })) /
      10 ** 18
    );
  } else {
    if (address.toLowerCase() === "0x24Ec3C300Ff53b96937c39b686844dB9E471421e") {
      return (
        (
          await new web3.eth.Contract(
            swxAbi as AbiItem[],
            '0x24ec3c300ff53b96937c39b686844db9e471421e'
          ).methods
          .getCirculatingSupply()
          .call((err: any, res: any) => {
            if (err) {
              console.log("An error occurred", err);
            }
            return res;
          })
        ) / 10 ** 18
      );
    }
    return HARDCODED_SUPPLY[address.toLowerCase()] || 0;
  }
};

const allocationAtBlock = async (
  address: string,
  block: number | undefined
) => {
  return (await new web3.eth.Contract(TokenSetABI as AbiItem[], address).methods
    .getPositions()
    .call(block, (err: any, res: any) => {
      if (err) {
        console.log("An error occurred", err);
      }
      return res;
    })) as { component: string; unit: string }[];
};

export const getTokenSetAllocation = async (address: string) => {
  return allocationAtBlock(address, undefined);
};

export const getSingleTokenPrice = async (address: string) => {
  address = address.toLowerCase();
  if (address === '0x24ec3c300ff53b96937c39b686844db9e471421e') {
    const swxContract = new web3.eth.Contract(
      swxAbi as AbiItem[],
      '0x24ec3c300ff53b96937c39b686844db9e471421e'
    );
    const price = +utils.formatUnits(BigNumber.from((await swxContract.methods.getValue().call())[0]), 18);
    console.log(price);
    return {
      currentPrice: price,
      changePercentDay: undefined,
      allocationTable: {},
    };
  }
  if (address === "0x0000000000000000000000000000000000001010")
    address = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
  if (ADDRESSES.includes(address)) {
    const allocToday = await allocationAtBlock(address, undefined);
    const allocYesterday = await allocationAtBlock(
      address,
      (await web3.eth.getBlockNumber()) - 43200
    );
    const compsAddr: string[] = [];
    allocToday.forEach((c) => {
      if (!compsAddr.includes(c.component)) {
        compsAddr.push(c.component);
      }
    });
    allocYesterday.forEach((c) => {
      if (!compsAddr.includes(c.component)) {
        compsAddr.push(c.component);
      }
    });
    let precision = false;
    const tokens = Promise.all(
      compsAddr.map(async (a) => {
        if (PRECISION_REQUIRED.includes(a.toLowerCase())) {
          precision = true;
        }
        const decimals = await getDecimals(a);
        return {
          symbol: `${a},${decimals}`,
          decimals,
          tokenAddress: a,
        };
      })
    );
    const prices: { symbol: string; prices: number[] }[] = (
      await axios.post(baseUrl0x + `/history`, {
        buyTokens: await tokens,
        stepSize: 43200,
        stepCount: 1,
        precision,
      })
    ).data;
    const promises: Promise<void>[][] = [];
    const allocationTable: PositionMap = {};
    let currentPrice = 0;
    promises.push(
      allocToday.map(async (c) => {
        const details = prices.find(
          (p) => p.symbol.split(",")[0] === c.component
        );
        if (isUndefined(details)) {
          return;
        }
        currentPrice +=
          details.prices[0] * (+c.unit / 10 ** +details.symbol.split(",")[1]);
        const symbol = details.symbol.split(",")[0];
        let tokenSymbol = "";
        tokenSymbol = await new web3.eth.Contract(
          ERC20ABI as AbiItem[],
          symbol
        ).methods
          .symbol()
          .call((err: any, res: any) => {
            if (err) {
              console.log("An error occurred", err);
            }
            return res;
          });
        allocationTable[c.component] = {
          symbol: tokenSymbol,
          quantity: (+c.unit / 10 ** +details.symbol.split(",")[1]).toString(),
          allocation: "",
          amount:
            details.prices[0] * (+c.unit / 10 ** +details.symbol.split(",")[1]),
          value: (
            details.prices[0] *
            (+c.unit / 10 ** +details.symbol.split(",")[1])
          )
            .toFixed(2)
            .toString(),
          change: `${(
            ((details.prices[0] - details.prices[1]) / details.prices[1]) *
            100
          ).toFixed(2)}%`,
        };
        return;
      })
    );
    let yesterdayPrice = 0;
    promises.push(
      allocYesterday.map(async (c) => {
        const details = prices.find(
          (p) => p.symbol.split(",")[0] === c.component
        );
        if (isUndefined(details)) {
          return;
        }
        yesterdayPrice +=
          details.prices[1] * (+c.unit / 10 ** +details.symbol.split(",")[1]);

        return;
      })
    );
    await Promise.allSettled(promises.flat(2));
    Object.keys(allocationTable).forEach((symbol) => {
      const percent = (allocationTable[symbol].amount / currentPrice) * 100;
      allocationTable[symbol].allocation = `${percent.toFixed(2)}%`;
    });
    return {
      currentPrice,
      changePercentDay:
        ((currentPrice - yesterdayPrice) / yesterdayPrice) * 100,
      allocationTable,
    };
  } else {
    const precision = PRECISION_REQUIRED.includes(address);
    const prices: { symbol: string; prices: number[] }[] = (
      await axios.post(baseUrl0x + `/history`, {
        buyTokens: [
          {
            symbol: "",
            decimals: await getDecimals(address),
            tokenAddress: address,
          },
        ],
        stepSize: 43200,
        stepCount: 1,
        precision,
      })
    ).data;
    return {
      currentPrice: prices[0].prices[0],
      changePercentDay:
        ((prices[0].prices[0] - prices[0].prices[1]) / prices[0].prices[1]) *
        100,
      allocationTable: {},
    };
  }
};

export const getPrices = async (address: string) => {
  const prices = await getSingleTokenPrice(address);
  const totalSupply = await getTotalSupply(address);
  return {
    ...prices,
    totalSupply,
    marketCap: totalSupply * prices.currentPrice,
  };
};

const getCreationTokenset = async (address: string) => {
  const block = (await web3.eth.getPastLogs({
    fromBlock: "0x0",
    toBlock: "latest",
    address: "0x14f0321be5e581abf9d5bc76260bf015dc04c53d",
    topics: [
      "0xb7b1e89d4bb640b93b0cb96b27077ceb558d073e00531c0a712a4afc9ccf06fe",
      web3.utils.padLeft(address, 64)
    ],
  }))[0].blockNumber;
  return block ?
    (await web3.eth.getBlock(block)).timestamp :
    Math.round((new Date()).getTime() / 1000) - 31536000; // One year
};

export const getCreation0xToken = async (address: string) => {
  const block = (await web3.alchemy.getAssetTransfers({
    fromBlock: "0x0",
    toBlock: "latest",
    fromAddress: "0x0000000000000000000000000000000000000000",
    contractAddresses: [address],
    category: [AssetTransfersCategory.ERC20],
    maxCount: 1,
  }))?.transfers[0]?.blockNum;
  return block ?
    (await web3.eth.getBlock(web3.utils.hexToNumber(block))).timestamp :
    Math.round((new Date()).getTime() / 1000) - 31536000; // One year
};

const getStreamingFeeTokenset = async (address: string) => {
  const feeStreaming =
    (await new web3.eth.Contract(
      tokenSetStreamingFeeABI as AbiItem[],
      "0x8440f6a2c42118bed0D6E6A89Bf170ffd13e21c0"
    ).methods
      .feeStates(address)
      .call((err: any, res: any) => {
        if (err) {
          console.log("An error occurred", err);
        }
        return res;
      })).streamingFeePercentage / 1e16;
  const issue =
    await new web3.eth.Contract(
      tokenSetIssueFeeABI as AbiItem[],
      "0x3E7f7F520e4e52a0c139d77a5487586012C90F07"
    ).methods
      .issuanceSettings(address)
      .call((err: any, res: any) => {
        if (err) {
          console.log("An error occurred", err);
        }
        return res;
      });
  return { feeStreaming, feeIssue: [issue.managerIssueFee / 1e16, issue.managerRedeemFee / 1e16] };
};

export const getInfo = async (address: string, tokenset: boolean) => {
  const totalSupply = await getTotalSupply(address);
  if (tokenset) {
    const creationEpoch = await getCreationTokenset(address);
    const allocation = await getTokenSetAllocation(address);
    const { feeStreaming, feeIssue } = await getStreamingFeeTokenset(address);
    return {
      totalSupply,
      creationEpoch,
      allocation,
      feeStreaming,
      feeIssue,
    };
  } else {
    const creationEpoch = await getCreation0xToken(address);
    return {
      totalSupply,
      creationEpoch,
      allocation: false,
    };
  }
};

export default getPrices;
