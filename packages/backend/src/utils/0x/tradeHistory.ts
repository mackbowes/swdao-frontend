import { web3 } from "../../bin/www";
import tokenSetABI from "../../abi/TokenSetABI.json";
import { AbiItem } from "web3-utils";
import axios from "axios";
import { getDecimals } from "./main";
import { baseUrl0x } from "../../settings";

const USDC = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";

interface TradesMap {
  [timestamp: string]: Trade;
}

interface Trade {
  len: number;
  component: string;
  status: "Open" | "Closed";
  side: "Short" | "Long";
  entryPrice: string;
  closePrice: string | undefined;
  pnl: number;
  entry: number;
  entryBlock: string;
  entryHash: string;
  exit: number | undefined;
  exitHash: string;
  allocation: number;
  USDC: number | undefined;
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
  for (let i = 0; i <= stepCount; i++) {
    timestamps.set(thisBlock - stepSize * i, epochLastHour - stepTime * i);
  }
  return { thisBlock, stepCount, stepSize, timestamps };
};

const SetTradeHistory = async (
  positionsMap: Map<any, any>,
  f: number,
  t: number,
  address: string
) => {
  const setContract = new web3.eth.Contract(tokenSetABI as AbiItem[], address);
  const trade: any = {};
  let promises: any[] = [];
  let index = -1;

  for (const [key, value] of new Map(Array.from(positionsMap).reverse())) {
    index++;
    if (index < f) continue;
    if (index > t) break;

    // let temp: { component: string; unit: string; transactionHash: string }[] =
    //   [];
    promises.push(
      await setContract.methods
        .getPositions()
        .call(key)
        .then(async (pos: any[]) => {
          for (const e of pos) {
            if (!trade[key]) {
              trade[key] = [{ transactionHash: value, blocknumber: key }];
            }
            trade[key].push({
              component: e.component,
              unit: e.unit,
            });
            // await web3.eth
            //   .getBlock(key)
            //   .then((d) => (trade[key].timestamp = d.timestamp));
          }
        })
    );

    // await web3.eth.getBlock(key).then((d) => {
    //   trade[d.timestamp] = temp
    // });
  }
  await Promise.allSettled(promises);
  promises = [];
  for (const i of Object.keys(trade)) {
    promises.push(
      await web3.eth
        .getBlock(i)
        .then((d) => (trade[i][0].timestamp = d.timestamp))
    );
  }
  await Promise.allSettled(promises);
  return trade;
};

const getLogs = async (address: string, days: number) => {
  const { thisBlock, stepCount, stepSize, timestamps } = await getStepInfo(
    days
  );
  const positionsMap = new Map();
  const fromBlock = thisBlock - stepSize * stepCount;
  await Promise.allSettled(
    (
      await web3.eth.getPastLogs({
        fromBlock,
        toBlock: "latest",
        address: "0xd04AabadEd11e92Fefcd92eEdbBC81b184CdAc82",
        topics: [
          "0xf26ad8d17d1f980b62e857e137d0a000ce14bcf3b2aa54e1a0c7d57cf907e1a4",
          web3.utils.padLeft(address as string, 64),
        ],
      })
    ).map((l) => {
      const transactionHash = l.transactionHash;
      positionsMap.set(l.blockNumber, transactionHash);
    })
  );
  return positionsMap;
};

const processTrade = (trade: any) => {
  let index = 0;
  const tradesMap: TradesMap = {};
  let temp: Trade = {
    len: 0,
    component: "",
    status: "Open",
    side: "Long",
    entryPrice: "0",
    closePrice: undefined,
    pnl: 0,
    entry: 0,
    entryBlock: "",
    entryHash: "",
    exit: undefined,
    exitHash: "",
    allocation: 100,
    USDC: undefined,
  };
  for (const block of Object.keys(trade)) {
    const con = trade[block][0];
    let t = trade[block][1];

    if (trade[block].length > 2) {
      if (trade[block][2].component === USDC) temp.USDC = trade[block][2].unit;
      if (trade[block][2].component !== USDC) t = trade[block][2];
      if (trade[block][1].component === USDC) temp.USDC = trade[block][1].unit;
    }
    if (index === 0 && t.component === USDC) continue;
    index++;
    if (t.component === USDC) {
      temp.closePrice = t.unit;
      temp.exit = con.timestamp;
      temp.exitHash = con.transactionHash;
      temp.status = "Closed";
    } else {
      temp.component = t.component;
      temp.entryPrice = t.unit;
      temp.entry = con.timestamp;
      temp.entryBlock = con.blocknumber;
      temp.entryHash = con.transactionHash;
    }
    if (temp.exit && temp.component !== "") {
      tradesMap[temp.entry] = temp;
      temp = {
        len: 0,
        component: "",
        status: "Open",
        side: "Long",
        entryPrice: "0",
        closePrice: undefined,
        pnl: 0,
        entry: 0,
        entryBlock: "",
        entryHash: "",
        exit: undefined,
        exitHash: "",
        allocation: 100,
        USDC: undefined,
      };
    }
  }
  if (!temp.closePrice && temp.entry !== 0) {
    temp.status = "Open";
    tradesMap[temp.entry] = temp;
  }
  return tradesMap;
};

const getPrice = async (
  address: string,
  blockNumber: string,
  blockNow: number
) => {
  const decimals = await getDecimals(address);
  const stepSize = blockNow - parseInt(blockNumber, 10);
  const price = await axios
    .post(baseUrl0x + `/history`, {
      buyTokens: [{ decimals, tokenAddress: address }],
      stepSize,
      stepCount: 1,
      precision: false,
    })
    .then((response) => {
      return response.data; // return price and decimals
    })
    .catch((err) => console.log(err.response.data));
  const r: [number, number, number] = [
    price[0].prices[1],
    decimals,
    price[0].prices[0],
  ];
  return r; // returns [price, decimals] returned from const price = axios
};

const addPnL = async (tradesMap: TradesMap, len: number) => {
  const blockNow = await web3.eth.getBlockNumber();
  let previous: number = 0;
  for (const ts of Object.keys(tradesMap)) {
    const trade = tradesMap[ts];
    trade.len = len;
    if (!trade.closePrice) {
      await getPrice(trade.component, trade.entryBlock, blockNow).then(
        async (d) => {
          trade.pnl = ((d[2] - d[0]) / d[0]) * 100;
          if (trade.USDC) {
            trade.allocation =
              100 -
              ((d[0] *
                (parseInt(trade.entryPrice, 10) /
                  10 ** (await getDecimals(trade.component))) *
                10 ** 6) /
                trade.USDC) *
                10;
          }
          trade.entryPrice = d[0].toString();
        }
      );
      continue;
    }
    const tmp = trade.closePrice;
    trade.closePrice = web3.utils.fromWei(
      (
        ((1 * 10 ** (await getDecimals(trade.component))) /
          parseFloat(trade.entryPrice)) *
        parseFloat(trade.closePrice)
      )
        .toString()
        .split(".")[0],
      "mwei"
    );
    if (previous === 0) {
      await getPrice(trade.component, trade.entryBlock, blockNow).then((d) => {
        previous = d[0];
      });
    } else {
      previous = parseFloat(
        web3.utils.fromWei(
          (
            ((1 * 10 ** (await getDecimals(trade.component))) /
              parseFloat(trade.entryPrice)) *
            previous
          )
            .toString()
            .split(".")[0],
          "mwei"
        )
      );
    }
    trade.entryPrice = previous.toString();
    previous = parseFloat(tmp);
    if (trade.USDC) {
      trade.allocation = (parseInt(trade.entryPrice, 10) / trade.USDC) * 100;
    }

    const p = parseFloat(trade.entryPrice);
    const cP = parseFloat(trade.closePrice);
    trade.pnl = ((cP - p) / p) * 100;
  }

  return tradesMap;
};

export const getSetTradeHistory = async (
  address: string,
  days: number,
  from: number,
  to: number
) => {
  const logs = await getLogs(address, days);
  const trade = await SetTradeHistory(logs, from, to, address);
  const tradesMap = processTrade(trade);
  return await addPnL(tradesMap, logs.size);
};
export default getSetTradeHistory;
