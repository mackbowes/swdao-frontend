import express, { NextFunction, Request, Response, Router } from "express";
import {
  Result,
  ValidationError,
  param,
  query,
  validationResult,
} from "express-validator";
import NodeCache from "node-cache";
import { ExtendedTokenDetailResponse, TokenDetailsResponse } from "src/types";
import {
  getSingleTokenPrice,
  getTokenSetAllocation,
  getInfo,
} from "../utils/0x/main";
import controllerAbi from "../abi/TokenSetController.json";
import vaultAbi from "../abi/VaultAbi.json";
import swxAbi from "../abi/AbiSwx.json";
import { AbiItem } from "web3-utils";
import {
  SupportedCurrencies,
  SwappableTokens,
  TIME_PERIODS,
  BALANCER_POOL_IDS
} from "../settings";
import { getEthPrice, validTimeFrame } from "../utils/coingecko";
import { handleError } from "../utils/error";
import {
  getExtendedTokenDetails,
  getTokenPriceData,
} from "../utils/tokenhandler";
import { web3, ethersProvider } from "../bin/www";
import { getChart0xToken, getChartTokenset, getChartBalancer } from "../utils/0x/charts";
import getSetTradeHistory from "../utils/0x/tradeHistory";
import { ethers, BigNumber, utils, constants } from "ethers";

const BALANCER_VAULT = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";
const WMATIC_ADDRESS = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270';
const SWX = '0x24Ec3C300Ff53b96937c39b686844dB9E471421e';

const cache = new NodeCache({ stdTTL: 15 });

const router: Router = express.Router();

// TODO use caching
const verifyCacheCompleteData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, currency, timeframe } = req.params;
    const key = `${token}_${currency}_${timeframe}`;
    console.log(`Cache key for ${token} ${currency} ${timeframe} is ${key}`);
    if (cache.has(key)) {
      const cachedData = cache.get(key);
      // console.log("Returning cached data");
      return res.status(200).json(cache.get(key));
    }
    return next();
  } catch (err) {
    handleError(err);
  }
};

/* GET all tradable token symbol and addresses */
router.get(
  "/swappable/all",
  query("chainId", "Please provide a valid chainId")
    .notEmpty()
    .isString()
    .trim(),
  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const chainId = req.query.chainId as string;
    if (
      !SwappableTokens.ERC20[chainId] ||
      !SwappableTokens.TokenProducts[chainId]
    ) {
      return res.status(400).json({
        errors: [
          {
            msg: `No supported tokens for chainId ${chainId}`,
          },
        ],
      });
    }
    res.send({
      ERC20: SwappableTokens.ERC20[chainId],
      TokenProducts: SwappableTokens.TokenProducts[chainId],
    });
  }
);

/* GET token market data and tokenset data if applicable */
router.get(
  "/detail/:symbol",
  param("symbol", "Please provide valid token address or full")
    .notEmpty()
    .trim(), // TODO token input validation
  query("chainId", "Please provide a valid chainId")
    .notEmpty()
    .isString()
    .trim(),
  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const chainId = req.query.chainId as string;
    const symbols = req.params.symbol.slice(0, -1).split(",");

    if (
      !SwappableTokens.ERC20[chainId] ||
      !SwappableTokens.TokenProducts[chainId]
    ) {
      return res.status(400).json({
        errors: [
          {
            msg: `No supported tokens for chainId ${chainId}`,
          },
        ],
      });
    }
    const promises = [];
    const tokenDetails: { [symbol: string]: ExtendedTokenDetailResponse } = {};
    for (const symbol of symbols) {
      promises.push(
        getExtendedTokenDetails(symbol, chainId).then((r) => {
          tokenDetails[r.symbol] = r;
        })
      );
    }
    Promise.allSettled(promises).then(() => {
      res.json(tokenDetails);
    });
  }
);

router.get(
  "/swappable/price/:address/",
  param("address", "Please provide a valid token address")
    .notEmpty()
    .trim()
    .isEthereumAddress(),

  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    await getSingleTokenPrice(req.params.address).then((r) => {
      console.log(`Getting single Price data`, r);
      res.json(r);
    });
    // console.log(`Getting Token Price`, positionsRequest);
  }
);

router.get(
  "/tokenset/:address/",
  param("address", "Please provide a valid token address")
    .notEmpty()
    .trim()
    .isEthereumAddress(),

  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    await getTokenSetAllocation(req.params.address).then((r) => {
      res.json(
        r.map((c) => {
          return { component: c.component, unit: c.unit };
        })
      );
    });
    // console.log(`Getting Token Price`, positionsRequest);
  }
);

/* GET simple price info from Coingecko for address */
router.get(
  "/swappable/price/ethereum/",
  async (req: Request, res: Response) => {
    const key = `ETH_PRICE`;
    if (cache.has(key)) {
      return res.status(200).json(cache.get(key));
    }

    const currency = (
      req.params.currency || SupportedCurrencies.usd
    ).toUpperCase();
    const response = await getEthPrice(currency);
    const ethPrice = response?.data?.ethereum?.usd || 0;
    cache.set(key, ethPrice, 60); // 1 minute
    res.json({ ETH: ethPrice });
  }
);

/* GET all tradable products info, details, market and charting data */
router.get(
  "/swappable/products/:token/:currency/:timeframe",
  param("token", "Please provide valid token address or full")
    .notEmpty()
    .trim(), // TODO token input validation
  param("currency", "Please provide valid currency")
    .notEmpty()
    .isString()
    .trim()
    .custom((value) =>
      Object.values(SupportedCurrencies).includes(value.toLowerCase())
    ),
  param("timeframe", "Please provide valid time period")
    .notEmpty()
    .isString()
    .trim()
    .custom((value) => validTimeFrame(value)),
  query("chainId", "Please provide valid chainId").notEmpty().isString().trim(),
  verifyCacheCompleteData,
  async (req: Request, res: Response) => {
    const errors: Result<ValidationError> = validationResult(req);

    const { token: swapToken, currency, timeframe } = req.params;

    const { chainId } = req.query;
    const chain = `${chainId}`;

    console.log(`Got token detail call for ${swapToken} on ${chainId}`);

    const tokens = SwappableTokens.TokenProducts[chain];
    if (!tokens) {
      console.warn(`No tokens found for chain ${chain}`);
    }
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const key = `${swapToken}_${currency}_${timeframe}`;
    const days: string = TIME_PERIODS[timeframe];

    let token = tokens;
    if (swapToken !== "full") {
      const selectedToken =
        SwappableTokens.TokenProducts[chain][swapToken] ||
        SwappableTokens.ERC20[chain][swapToken];
      console.log(`Selected token found in swappableTokens: ${selectedToken}`);
      if (selectedToken) {
        token = { [swapToken]: selectedToken };
      }
    }
    console.log(
      `Selected token to get Price data is ${Object.keys(token).toString()}`
    );

    const tokenPriceData: TokenDetailsResponse = await getTokenPriceData(
      chain,
      token,
      currency,
      days
    );

    if (tokenPriceData.length > 0) {
      cache.set(key, tokenPriceData);
      if (+days === 1) cache.ttl(key, 60);
      else if (+days > 1 && +days < 365) cache.ttl(key, 60 * 60);
      else if (+days >= 365) cache.ttl(key, 1 * 60 * 60);
    }
    res.json(tokenPriceData);
  }
);

router.post("/getChart", async (req: Request, res: Response) => {
  const { address, days } = req.body;
  const setContract = new web3.eth.Contract(
    controllerAbi as AbiItem[],
    "0x75FBBDEAfE23a48c0736B2731b956b7a03aDcfB2"
  );
  const tokenset = await setContract.methods.isSet(address).call();
  let chart;
  if (address.toLowerCase() === '0x24ec3c300ff53b96937c39b686844db9e471421e') {
    chart = await getChartBalancer(days, 0);
  } else {
    chart = tokenset
      ? await getChartTokenset(address, days)
      : await getChart0xToken(address, days);
  }
  let plusHours = 0;
  if (days === 1) {
    plusHours = 1
  } else {
    const jitter = Math.round((Math.random() - 0.5) * 5);
    plusHours = 24 + jitter;
  }
  res.setHeader("X-Accel-Expires", chart ? (plusHours * 60 * 60).toString() : "1");
  res.status(chart ? 201 : 500).json(chart);
});

router.post("/getSetTradeHistory", async (req: Request, res: Response) => {
  const { address, days, from, to } = req.body;
  const setContract = new web3.eth.Contract(
    controllerAbi as AbiItem[],
    "0x75FBBDEAfE23a48c0736B2731b956b7a03aDcfB2"
  );
  const tokenset = await setContract.methods.isSet(address).call();
  const history = tokenset
    ? await getSetTradeHistory(address, days, from, to)
    : undefined;
  res.setHeader("X-Accel-Expires", history ? (60 * 60).toString() : "1");
  res.status(history ? 201 : 500).json(history);
});

router.post("/getBalance", async (req: Request, res: Response) => {
  const { addressTokens, addressUser } = req.body;
  const data = await web3.alchemy.getTokenBalances(addressUser, addressTokens);
  res.setHeader("X-Accel-Expires", data ? "5" : "1");
  res.status(data ? 201 : 500).json(data);
});

router.post("/getPrices", async (req: Request, res: Response) => {
  const { address } = req.body;
  const price = await getSingleTokenPrice(address);
  res.setHeader("X-Accel-Expires", price ? (5 * 60).toString() : "1");
  res.status(price ? 201 : 500).json(price);
});

router.post("/getInfo", async (req: Request, res: Response) => {
  const { address } = req.body;
  const setContract = new web3.eth.Contract(
    controllerAbi as AbiItem[],
    "0x75FBBDEAfE23a48c0736B2731b956b7a03aDcfB2"
  );
  const tokenset = await setContract.methods.isSet(address).call();
  const info = await getInfo(address, tokenset);
  res.setHeader("X-Accel-Expires", info ? "5" : "1");
  res.status(info ? 201 : 500).json(info);
});

router.post("/getMetadata", async (req: Request, res: Response) => {
  const { address } = req.body;
  const data = await web3.alchemy.getTokenMetadata(address);
  res.setHeader("X-Accel-Expires", data ? "31536000" : "1");
  res.status(data ? 201 : 500).json(data);
});

router.post("/getBalancerPoolTokens", async (req: Request, res: Response) => {
  const { poolIndex = 0 } = req.body;
  const vaultContract = new web3.eth.Contract(
    vaultAbi as AbiItem[],
    BALANCER_VAULT
  );
  const tokenInfo = await vaultContract.methods.getPoolTokens(BALANCER_POOL_IDS[poolIndex]).call();
  const tokens: {[key: string]: string} = {};
  await Promise.all(tokenInfo?.tokens.map(async (t: string, i: number) => {
    tokens[t.toLowerCase()] = tokenInfo.balances[i];
  }));
  res.setHeader("X-Accel-Expires", tokens ? (24 * 60 * 60).toString() : "1");
  res.status(tokens ? 201 : 500).json(tokens);
});

router.post("/getBalancerPoolTradeAmounts", async (req: Request, res: Response) => {
  const { poolIndex = 0, sendReceive, sellToken: sellTokenRaw, buyToken: buyTokenRaw, amountSend, amountReceive } = req.body;
  const sellToken = sellTokenRaw === 'MATIC' ? WMATIC_ADDRESS : sellTokenRaw;
  const buyToken = buyTokenRaw === 'MATIC' ? WMATIC_ADDRESS : buyTokenRaw;
  const vaultContract = new web3.eth.Contract(
    vaultAbi as AbiItem[],
    BALANCER_VAULT
  );
  const tokenInfo = await vaultContract.methods.getPoolTokens(BALANCER_POOL_IDS[poolIndex]).call();
  const buyIndex =
    tokenInfo.tokens.findIndex((t: string) => t.toLowerCase() === buyToken.toLowerCase());
  const sellIndex =
    tokenInfo.tokens.findIndex((t: string) => t.toLowerCase() === sellToken.toLowerCase());
  const swxContract = new ethers.Contract(
      SWX,
      swxAbi,
      ethersProvider
    );
  let swxResult;
  try {
    swxResult = await swxContract.callStatic.onSwap(
      [
        sendReceive ? '0' : '1',
        sellToken,
        buyToken,
        sendReceive ? BigNumber.from(amountSend) : BigNumber.from(amountReceive),
        "0x24ec3c300ff53b96937c39b686844db9e471421e000000000000000000000514",
        0,
        BALANCER_VAULT,
        BALANCER_VAULT,
        "0x"
      ],
      tokenInfo.balances,
      sellIndex,
      buyIndex,
      { from: BALANCER_VAULT }
    );
  } catch (error) {
    console.log(error);
    swxResult = sendReceive ? BigNumber.from(0) : constants.MaxUint256;
  }
  console.log(swxResult);
  res.setHeader("X-Accel-Expires", "10");
  res.status(swxResult ? 201 : 500).json(
    sendReceive
      ? [BigNumber.from(amountSend), swxResult]
      : [swxResult, BigNumber.from(amountReceive)]
  );
});

export default router;