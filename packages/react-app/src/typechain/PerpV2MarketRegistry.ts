/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type MarketInfoStruct = {
  pool: string;
  exchangeFeeRatio: BigNumberish;
  uniswapFeeRatio: BigNumberish;
  insuranceFundFeeRatio: BigNumberish;
};

export type MarketInfoStructOutput = [string, number, number, number] & {
  pool: string;
  exchangeFeeRatio: number;
  uniswapFeeRatio: number;
  insuranceFundFeeRatio: number;
};

export interface PerpV2MarketRegistryInterface extends utils.Interface {
  functions: {
    "addPool(address,uint24)": FunctionFragment;
    "candidate()": FunctionFragment;
    "getClearingHouse()": FunctionFragment;
    "getFeeRatio(address)": FunctionFragment;
    "getInsuranceFundFeeRatio(address)": FunctionFragment;
    "getMarketInfo(address)": FunctionFragment;
    "getMaxOrdersPerMarket()": FunctionFragment;
    "getPool(address)": FunctionFragment;
    "getQuoteToken()": FunctionFragment;
    "getUniswapV3Factory()": FunctionFragment;
    "hasPool(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setClearingHouse(address)": FunctionFragment;
    "setFeeRatio(address,uint24)": FunctionFragment;
    "setInsuranceFundFeeRatio(address,uint24)": FunctionFragment;
    "setMaxOrdersPerMarket(uint8)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "updateOwner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPool",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getClearingHouse",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getFeeRatio", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getInsuranceFundFeeRatio",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxOrdersPerMarket",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getQuoteToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUniswapV3Factory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setClearingHouse",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRatio",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInsuranceFundFeeRatio",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxOrdersPerMarket",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInsuranceFundFeeRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxOrdersPerMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getQuoteToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUniswapV3Factory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInsuranceFundFeeRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxOrdersPerMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;

  events: {
    "ClearingHouseChanged(address)": EventFragment;
    "FeeRatioChanged(address,uint24)": EventFragment;
    "InsuranceFundFeeRatioChanged(uint24)": EventFragment;
    "MaxOrdersPerMarketChanged(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PoolAdded(address,uint24,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClearingHouseChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeRatioChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InsuranceFundFeeRatioChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxOrdersPerMarketChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
}

export type ClearingHouseChangedEvent = TypedEvent<
  [string],
  { clearingHouse: string }
>;

export type ClearingHouseChangedEventFilter = TypedEventFilter<ClearingHouseChangedEvent>;

export type FeeRatioChangedEvent = TypedEvent<
  [string, number],
  { baseToken: string; feeRatio: number }
>;

export type FeeRatioChangedEventFilter = TypedEventFilter<FeeRatioChangedEvent>;

export type InsuranceFundFeeRatioChangedEvent = TypedEvent<
  [number],
  { feeRatio: number }
>;

export type InsuranceFundFeeRatioChangedEventFilter = TypedEventFilter<InsuranceFundFeeRatioChangedEvent>;

export type MaxOrdersPerMarketChangedEvent = TypedEvent<
  [number],
  { maxOrdersPerMarket: number }
>;

export type MaxOrdersPerMarketChangedEventFilter = TypedEventFilter<MaxOrdersPerMarketChangedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type PoolAddedEvent = TypedEvent<
  [string, number, string],
  { baseToken: string; feeRatio: number; pool: string }
>;

export type PoolAddedEventFilter = TypedEventFilter<PoolAddedEvent>;

export interface PerpV2MarketRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpV2MarketRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addPool(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    candidate(overrides?: CallOverrides): Promise<[string]>;

    getClearingHouse(overrides?: CallOverrides): Promise<[string]>;

    getFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getInsuranceFundFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getMarketInfo(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[MarketInfoStructOutput]>;

    getMaxOrdersPerMarket(overrides?: CallOverrides): Promise<[number]>;

    getPool(baseToken: string, overrides?: CallOverrides): Promise<[string]>;

    getQuoteToken(overrides?: CallOverrides): Promise<[string]>;

    getUniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;

    hasPool(baseToken: string, overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      uniswapV3FactoryArg: string,
      quoteTokenArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeRatio(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInsuranceFundFeeRatio(
      baseToken: string,
      insuranceFundFeeRatioArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxOrdersPerMarket(
      maxOrdersPerMarketArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPool(
    baseToken: string,
    feeRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  candidate(overrides?: CallOverrides): Promise<string>;

  getClearingHouse(overrides?: CallOverrides): Promise<string>;

  getFeeRatio(baseToken: string, overrides?: CallOverrides): Promise<number>;

  getInsuranceFundFeeRatio(
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getMarketInfo(
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<MarketInfoStructOutput>;

  getMaxOrdersPerMarket(overrides?: CallOverrides): Promise<number>;

  getPool(baseToken: string, overrides?: CallOverrides): Promise<string>;

  getQuoteToken(overrides?: CallOverrides): Promise<string>;

  getUniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  hasPool(baseToken: string, overrides?: CallOverrides): Promise<boolean>;

  initialize(
    uniswapV3FactoryArg: string,
    quoteTokenArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClearingHouse(
    clearingHouseArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeRatio(
    baseToken: string,
    feeRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInsuranceFundFeeRatio(
    baseToken: string,
    insuranceFundFeeRatioArg: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxOrdersPerMarket(
    maxOrdersPerMarketArg: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPool(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    candidate(overrides?: CallOverrides): Promise<string>;

    getClearingHouse(overrides?: CallOverrides): Promise<string>;

    getFeeRatio(baseToken: string, overrides?: CallOverrides): Promise<number>;

    getInsuranceFundFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getMarketInfo(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<MarketInfoStructOutput>;

    getMaxOrdersPerMarket(overrides?: CallOverrides): Promise<number>;

    getPool(baseToken: string, overrides?: CallOverrides): Promise<string>;

    getQuoteToken(overrides?: CallOverrides): Promise<string>;

    getUniswapV3Factory(overrides?: CallOverrides): Promise<string>;

    hasPool(baseToken: string, overrides?: CallOverrides): Promise<boolean>;

    initialize(
      uniswapV3FactoryArg: string,
      quoteTokenArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeRatio(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setInsuranceFundFeeRatio(
      baseToken: string,
      insuranceFundFeeRatioArg: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxOrdersPerMarket(
      maxOrdersPerMarketArg: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateOwner(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ClearingHouseChanged(address)"(
      clearingHouse?: string | null
    ): ClearingHouseChangedEventFilter;
    ClearingHouseChanged(
      clearingHouse?: string | null
    ): ClearingHouseChangedEventFilter;

    "FeeRatioChanged(address,uint24)"(
      baseToken?: null,
      feeRatio?: null
    ): FeeRatioChangedEventFilter;
    FeeRatioChanged(
      baseToken?: null,
      feeRatio?: null
    ): FeeRatioChangedEventFilter;

    "InsuranceFundFeeRatioChanged(uint24)"(
      feeRatio?: null
    ): InsuranceFundFeeRatioChangedEventFilter;
    InsuranceFundFeeRatioChanged(
      feeRatio?: null
    ): InsuranceFundFeeRatioChangedEventFilter;

    "MaxOrdersPerMarketChanged(uint8)"(
      maxOrdersPerMarket?: null
    ): MaxOrdersPerMarketChangedEventFilter;
    MaxOrdersPerMarketChanged(
      maxOrdersPerMarket?: null
    ): MaxOrdersPerMarketChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PoolAdded(address,uint24,address)"(
      baseToken?: string | null,
      feeRatio?: BigNumberish | null,
      pool?: string | null
    ): PoolAddedEventFilter;
    PoolAdded(
      baseToken?: string | null,
      feeRatio?: BigNumberish | null,
      pool?: string | null
    ): PoolAddedEventFilter;
  };

  estimateGas: {
    addPool(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    getClearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInsuranceFundFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketInfo(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxOrdersPerMarket(overrides?: CallOverrides): Promise<BigNumber>;

    getPool(baseToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getQuoteToken(overrides?: CallOverrides): Promise<BigNumber>;

    getUniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;

    hasPool(baseToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      uniswapV3FactoryArg: string,
      quoteTokenArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeRatio(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInsuranceFundFeeRatio(
      baseToken: string,
      insuranceFundFeeRatioArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxOrdersPerMarket(
      maxOrdersPerMarketArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPool(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInsuranceFundFeeRatio(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketInfo(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxOrdersPerMarket(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuoteToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUniswapV3Factory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPool(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      uniswapV3FactoryArg: string,
      quoteTokenArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeRatio(
      baseToken: string,
      feeRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInsuranceFundFeeRatio(
      baseToken: string,
      insuranceFundFeeRatioArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxOrdersPerMarket(
      maxOrdersPerMarketArg: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
