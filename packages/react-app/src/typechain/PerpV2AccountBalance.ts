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

export type InfoStruct = {
  takerPositionSize: BigNumberish;
  takerOpenNotional: BigNumberish;
  lastTwPremiumGrowthGlobalX96: BigNumberish;
};

export type InfoStructOutput = [BigNumber, BigNumber, BigNumber] & {
  takerPositionSize: BigNumber;
  takerOpenNotional: BigNumber;
  lastTwPremiumGrowthGlobalX96: BigNumber;
};

export interface PerpV2AccountBalanceInterface extends utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "deregisterBaseToken(address,address)": FunctionFragment;
    "getAccountInfo(address,address)": FunctionFragment;
    "getBase(address,address)": FunctionFragment;
    "getBaseTokens(address)": FunctionFragment;
    "getClearingHouse()": FunctionFragment;
    "getClearingHouseConfig()": FunctionFragment;
    "getMarginRequirementForLiquidation(address)": FunctionFragment;
    "getOrderBook()": FunctionFragment;
    "getPnlAndPendingFee(address)": FunctionFragment;
    "getQuote(address,address)": FunctionFragment;
    "getTakerOpenNotional(address,address)": FunctionFragment;
    "getTakerPositionSize(address,address)": FunctionFragment;
    "getTotalAbsPositionValue(address)": FunctionFragment;
    "getTotalDebtValue(address)": FunctionFragment;
    "getTotalOpenNotional(address,address)": FunctionFragment;
    "getTotalPositionSize(address,address)": FunctionFragment;
    "getTotalPositionValue(address,address)": FunctionFragment;
    "getVault()": FunctionFragment;
    "hasOrder(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "modifyOwedRealizedPnl(address,int256)": FunctionFragment;
    "modifyTakerBalance(address,address,int256,int256)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerBaseToken(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setClearingHouse(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setVault(address)": FunctionFragment;
    "settleBalanceAndDeregister(address,address,int256,int256,int256,int256)": FunctionFragment;
    "settleOwedRealizedPnl(address)": FunctionFragment;
    "settleQuoteToOwedRealizedPnl(address,address,int256)": FunctionFragment;
    "updateOwner()": FunctionFragment;
    "updateTwPremiumGrowthGlobal(address,address,int256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deregisterBaseToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountInfo",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBase",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getBaseTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getClearingHouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClearingHouseConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMarginRequirementForLiquidation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderBook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPnlAndPendingFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuote",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTakerOpenNotional",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTakerPositionSize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAbsPositionValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDebtValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalOpenNotional",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPositionSize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPositionValue",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasOrder", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyOwedRealizedPnl",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyTakerBalance",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerBaseToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setClearingHouse",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "setVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "settleBalanceAndDeregister",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "settleOwedRealizedPnl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "settleQuoteToOwedRealizedPnl",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateTwPremiumGrowthGlobal",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deregisterBaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBase", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouseConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarginRequirementForLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPnlAndPendingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getQuote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTakerOpenNotional",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTakerPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAbsPositionValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDebtValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalOpenNotional",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPositionSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPositionValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modifyOwedRealizedPnl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyTakerBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerBaseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settleBalanceAndDeregister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleOwedRealizedPnl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleQuoteToOwedRealizedPnl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTwPremiumGrowthGlobal",
    data: BytesLike
  ): Result;

  events: {
    "ClearingHouseChanged(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PnlRealized(address,int256)": EventFragment;
    "VaultChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClearingHouseChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PnlRealized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultChanged"): EventFragment;
}

export type ClearingHouseChangedEvent = TypedEvent<
  [string],
  { clearingHouse: string }
>;

export type ClearingHouseChangedEventFilter = TypedEventFilter<ClearingHouseChangedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type PnlRealizedEvent = TypedEvent<
  [string, BigNumber],
  { trader: string; amount: BigNumber }
>;

export type PnlRealizedEventFilter = TypedEventFilter<PnlRealizedEvent>;

export type VaultChangedEvent = TypedEvent<[string], { vault: string }>;

export type VaultChangedEventFilter = TypedEventFilter<VaultChangedEvent>;

export interface PerpV2AccountBalance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpV2AccountBalanceInterface;

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
    candidate(overrides?: CallOverrides): Promise<[string]>;

    deregisterBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountInfo(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[InfoStructOutput]>;

    getBase(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBaseTokens(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getClearingHouse(overrides?: CallOverrides): Promise<[string]>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<[string]>;

    getMarginRequirementForLiquidation(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOrderBook(overrides?: CallOverrides): Promise<[string]>;

    getPnlAndPendingFee(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getQuote(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTakerOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTakerPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalAbsPositionValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalDebtValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPositionValue(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    hasOrder(trader: string, overrides?: CallOverrides): Promise<[boolean]>;

    initialize(
      clearingHouseConfigArg: string,
      orderBookArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyOwedRealizedPnl(
      trader: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyTakerBalance(
      trader: string,
      baseToken: string,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVault(
      vaultArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleBalanceAndDeregister(
      maker: string,
      baseToken: string,
      takerBase: BigNumberish,
      takerQuote: BigNumberish,
      realizedPnl: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleOwedRealizedPnl(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settleQuoteToOwedRealizedPnl(
      trader: string,
      baseToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTwPremiumGrowthGlobal(
      trader: string,
      baseToken: string,
      lastTwPremiumGrowthGlobalX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  deregisterBaseToken(
    trader: string,
    baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountInfo(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<InfoStructOutput>;

  getBase(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBaseTokens(trader: string, overrides?: CallOverrides): Promise<string[]>;

  getClearingHouse(overrides?: CallOverrides): Promise<string>;

  getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

  getMarginRequirementForLiquidation(
    trader: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOrderBook(overrides?: CallOverrides): Promise<string>;

  getPnlAndPendingFee(
    trader: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  getQuote(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTakerOpenNotional(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTakerPositionSize(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalAbsPositionValue(
    trader: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalDebtValue(
    trader: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalOpenNotional(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPositionSize(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPositionValue(
    trader: string,
    baseToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVault(overrides?: CallOverrides): Promise<string>;

  hasOrder(trader: string, overrides?: CallOverrides): Promise<boolean>;

  initialize(
    clearingHouseConfigArg: string,
    orderBookArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyOwedRealizedPnl(
    trader: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyTakerBalance(
    trader: string,
    baseToken: string,
    base: BigNumberish,
    quote: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerBaseToken(
    trader: string,
    baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClearingHouse(
    clearingHouseArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVault(
    vaultArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleBalanceAndDeregister(
    maker: string,
    baseToken: string,
    takerBase: BigNumberish,
    takerQuote: BigNumberish,
    realizedPnl: BigNumberish,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleOwedRealizedPnl(
    trader: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settleQuoteToOwedRealizedPnl(
    trader: string,
    baseToken: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTwPremiumGrowthGlobal(
    trader: string,
    baseToken: string,
    lastTwPremiumGrowthGlobalX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    deregisterBaseToken(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccountInfo(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<InfoStructOutput>;

    getBase(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBaseTokens(trader: string, overrides?: CallOverrides): Promise<string[]>;

    getClearingHouse(overrides?: CallOverrides): Promise<string>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

    getMarginRequirementForLiquidation(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderBook(overrides?: CallOverrides): Promise<string>;

    getPnlAndPendingFee(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    getQuote(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTakerOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTakerPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalAbsPositionValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDebtValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPositionValue(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<string>;

    hasOrder(trader: string, overrides?: CallOverrides): Promise<boolean>;

    initialize(
      clearingHouseConfigArg: string,
      orderBookArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyOwedRealizedPnl(
      trader: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyTakerBalance(
      trader: string,
      baseToken: string,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerBaseToken(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    setVault(vaultArg: string, overrides?: CallOverrides): Promise<void>;

    settleBalanceAndDeregister(
      maker: string,
      baseToken: string,
      takerBase: BigNumberish,
      takerQuote: BigNumberish,
      realizedPnl: BigNumberish,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    settleOwedRealizedPnl(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settleQuoteToOwedRealizedPnl(
      trader: string,
      baseToken: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    updateTwPremiumGrowthGlobal(
      trader: string,
      baseToken: string,
      lastTwPremiumGrowthGlobalX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClearingHouseChanged(address)"(
      clearingHouse?: string | null
    ): ClearingHouseChangedEventFilter;
    ClearingHouseChanged(
      clearingHouse?: string | null
    ): ClearingHouseChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PnlRealized(address,int256)"(
      trader?: string | null,
      amount?: null
    ): PnlRealizedEventFilter;
    PnlRealized(trader?: string | null, amount?: null): PnlRealizedEventFilter;

    "VaultChanged(address)"(vault?: string | null): VaultChangedEventFilter;
    VaultChanged(vault?: string | null): VaultChangedEventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    deregisterBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountInfo(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBase(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBaseTokens(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getMarginRequirementForLiquidation(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderBook(overrides?: CallOverrides): Promise<BigNumber>;

    getPnlAndPendingFee(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getQuote(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTakerOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTakerPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalAbsPositionValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDebtValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPositionValue(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    hasOrder(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      clearingHouseConfigArg: string,
      orderBookArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyOwedRealizedPnl(
      trader: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyTakerBalance(
      trader: string,
      baseToken: string,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVault(
      vaultArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleBalanceAndDeregister(
      maker: string,
      baseToken: string,
      takerBase: BigNumberish,
      takerQuote: BigNumberish,
      realizedPnl: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleOwedRealizedPnl(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settleQuoteToOwedRealizedPnl(
      trader: string,
      baseToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTwPremiumGrowthGlobal(
      trader: string,
      baseToken: string,
      lastTwPremiumGrowthGlobalX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deregisterBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountInfo(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBase(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBaseTokens(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClearingHouseConfig(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarginRequirementForLiquidation(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPnlAndPendingFee(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getQuote(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTakerOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTakerPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalAbsPositionValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalDebtValue(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalOpenNotional(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPositionSize(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPositionValue(
      trader: string,
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasOrder(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      clearingHouseConfigArg: string,
      orderBookArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyOwedRealizedPnl(
      trader: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyTakerBalance(
      trader: string,
      baseToken: string,
      base: BigNumberish,
      quote: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerBaseToken(
      trader: string,
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVault(
      vaultArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleBalanceAndDeregister(
      maker: string,
      baseToken: string,
      takerBase: BigNumberish,
      takerQuote: BigNumberish,
      realizedPnl: BigNumberish,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleOwedRealizedPnl(
      trader: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settleQuoteToOwedRealizedPnl(
      trader: string,
      baseToken: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTwPremiumGrowthGlobal(
      trader: string,
      baseToken: string,
      lastTwPremiumGrowthGlobalX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
