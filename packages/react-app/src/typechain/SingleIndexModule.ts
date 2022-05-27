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

export interface SingleIndexModuleInterface extends utils.Interface {
  functions: {
    "anyoneTrade()": FunctionFragment;
    "assetInfo(address)": FunctionFragment;
    "balancerProxy()": FunctionFragment;
    "controller()": FunctionFragment;
    "getRebalanceComponents()": FunctionFragment;
    "getTargetUnits(address[])": FunctionFragment;
    "index()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "positionMultiplier()": FunctionFragment;
    "raiseAssetTargets()": FunctionFragment;
    "rebalanceComponents(uint256)": FunctionFragment;
    "removeModule()": FunctionFragment;
    "setCoolOffPeriods(address[],uint256[])": FunctionFragment;
    "setExchanges(address[],uint256[])": FunctionFragment;
    "setTradeMaximums(address[],uint256[])": FunctionFragment;
    "startRebalance(address[],uint256[],uint256[],uint256)": FunctionFragment;
    "sushiswapRouter()": FunctionFragment;
    "trade(address)": FunctionFragment;
    "tradeAllowList(address)": FunctionFragment;
    "tradeRemainingWETH(address)": FunctionFragment;
    "uniswapRouter()": FunctionFragment;
    "updateAnyoneTrade(bool)": FunctionFragment;
    "updateTraderStatus(address[],bool[])": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "anyoneTrade",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "assetInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balancerProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRebalanceComponents",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTargetUnits",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "positionMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "raiseAssetTargets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebalanceComponents",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCoolOffPeriods",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setExchanges",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTradeMaximums",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "startRebalance",
    values: [string[], BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sushiswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "trade", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tradeAllowList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tradeRemainingWETH",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAnyoneTrade",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTraderStatus",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "anyoneTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balancerProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRebalanceComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTargetUnits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "raiseAssetTargets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rebalanceComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoolOffPeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExchanges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTradeMaximums",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRebalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sushiswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tradeAllowList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tradeRemainingWETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAnyoneTrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTraderStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {
    "AnyoneTradeUpdated(bool)": EventFragment;
    "AssetExchangeUpdated(address,uint256)": EventFragment;
    "CoolOffPeriodUpdated(address,uint256)": EventFragment;
    "TargetUnitsUpdated(address,uint256,uint256)": EventFragment;
    "TradeExecuted(address,address,address,uint256,uint256)": EventFragment;
    "TradeMaximumUpdated(address,uint256)": EventFragment;
    "TraderStatusUpdated(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnyoneTradeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetExchangeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CoolOffPeriodUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TargetUnitsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TradeMaximumUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TraderStatusUpdated"): EventFragment;
}

export type AnyoneTradeUpdatedEvent = TypedEvent<
  [boolean],
  { _status: boolean }
>;

export type AnyoneTradeUpdatedEventFilter = TypedEventFilter<AnyoneTradeUpdatedEvent>;

export type AssetExchangeUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { _component: string; _newExchange: BigNumber }
>;

export type AssetExchangeUpdatedEventFilter = TypedEventFilter<AssetExchangeUpdatedEvent>;

export type CoolOffPeriodUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { _component: string; _newCoolOffPeriod: BigNumber }
>;

export type CoolOffPeriodUpdatedEventFilter = TypedEventFilter<CoolOffPeriodUpdatedEvent>;

export type TargetUnitsUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _component: string; _newUnit: BigNumber; _positionMultiplier: BigNumber }
>;

export type TargetUnitsUpdatedEventFilter = TypedEventFilter<TargetUnitsUpdatedEvent>;

export type TradeExecutedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    _executor: string;
    _sellComponent: string;
    _buyComponent: string;
    _amountSold: BigNumber;
    _amountBought: BigNumber;
  }
>;

export type TradeExecutedEventFilter = TypedEventFilter<TradeExecutedEvent>;

export type TradeMaximumUpdatedEvent = TypedEvent<
  [string, BigNumber],
  { _component: string; _newMaximum: BigNumber }
>;

export type TradeMaximumUpdatedEventFilter = TypedEventFilter<TradeMaximumUpdatedEvent>;

export type TraderStatusUpdatedEvent = TypedEvent<
  [string, boolean],
  { _trader: string; _status: boolean }
>;

export type TraderStatusUpdatedEventFilter = TypedEventFilter<TraderStatusUpdatedEvent>;

export interface SingleIndexModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SingleIndexModuleInterface;

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
    anyoneTrade(overrides?: CallOverrides): Promise<[boolean]>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        targetUnit: BigNumber;
        maxSize: BigNumber;
        coolOffPeriod: BigNumber;
        lastTradeTimestamp: BigNumber;
        exchange: BigNumber;
      }
    >;

    balancerProxy(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    getRebalanceComponents(overrides?: CallOverrides): Promise<[string[]]>;

    getTargetUnits(
      _components: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    index(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _index: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    positionMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    raiseAssetTargets(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalanceComponents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCoolOffPeriods(
      _components: string[],
      _coolOffPeriods: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExchanges(
      _components: string[],
      _exchanges: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTradeMaximums(
      _components: string[],
      _tradeMaximums: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startRebalance(
      _newComponents: string[],
      _newComponentsTargetUnits: BigNumberish[],
      _oldComponentsTargetUnits: BigNumberish[],
      _positionMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sushiswapRouter(overrides?: CallOverrides): Promise<[string]>;

    trade(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tradeAllowList(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    tradeRemainingWETH(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<[string]>;

    updateAnyoneTrade(
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTraderStatus(
      _traders: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  anyoneTrade(overrides?: CallOverrides): Promise<boolean>;

  assetInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      targetUnit: BigNumber;
      maxSize: BigNumber;
      coolOffPeriod: BigNumber;
      lastTradeTimestamp: BigNumber;
      exchange: BigNumber;
    }
  >;

  balancerProxy(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  getRebalanceComponents(overrides?: CallOverrides): Promise<string[]>;

  getTargetUnits(
    _components: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  index(overrides?: CallOverrides): Promise<string>;

  initialize(
    _index: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  positionMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  raiseAssetTargets(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalanceComponents(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  removeModule(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCoolOffPeriods(
    _components: string[],
    _coolOffPeriods: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExchanges(
    _components: string[],
    _exchanges: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTradeMaximums(
    _components: string[],
    _tradeMaximums: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startRebalance(
    _newComponents: string[],
    _newComponentsTargetUnits: BigNumberish[],
    _oldComponentsTargetUnits: BigNumberish[],
    _positionMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sushiswapRouter(overrides?: CallOverrides): Promise<string>;

  trade(
    _component: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tradeAllowList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  tradeRemainingWETH(
    _component: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapRouter(overrides?: CallOverrides): Promise<string>;

  updateAnyoneTrade(
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTraderStatus(
    _traders: string[],
    _statuses: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    anyoneTrade(overrides?: CallOverrides): Promise<boolean>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        targetUnit: BigNumber;
        maxSize: BigNumber;
        coolOffPeriod: BigNumber;
        lastTradeTimestamp: BigNumber;
        exchange: BigNumber;
      }
    >;

    balancerProxy(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    getRebalanceComponents(overrides?: CallOverrides): Promise<string[]>;

    getTargetUnits(
      _components: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    index(overrides?: CallOverrides): Promise<string>;

    initialize(_index: string, overrides?: CallOverrides): Promise<void>;

    positionMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    raiseAssetTargets(overrides?: CallOverrides): Promise<void>;

    rebalanceComponents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    removeModule(overrides?: CallOverrides): Promise<void>;

    setCoolOffPeriods(
      _components: string[],
      _coolOffPeriods: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setExchanges(
      _components: string[],
      _exchanges: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setTradeMaximums(
      _components: string[],
      _tradeMaximums: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    startRebalance(
      _newComponents: string[],
      _newComponentsTargetUnits: BigNumberish[],
      _oldComponentsTargetUnits: BigNumberish[],
      _positionMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sushiswapRouter(overrides?: CallOverrides): Promise<string>;

    trade(_component: string, overrides?: CallOverrides): Promise<void>;

    tradeAllowList(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    tradeRemainingWETH(
      _component: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapRouter(overrides?: CallOverrides): Promise<string>;

    updateAnyoneTrade(
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTraderStatus(
      _traders: string[],
      _statuses: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AnyoneTradeUpdated(bool)"(
      _status?: boolean | null
    ): AnyoneTradeUpdatedEventFilter;
    AnyoneTradeUpdated(_status?: boolean | null): AnyoneTradeUpdatedEventFilter;

    "AssetExchangeUpdated(address,uint256)"(
      _component?: string | null,
      _newExchange?: null
    ): AssetExchangeUpdatedEventFilter;
    AssetExchangeUpdated(
      _component?: string | null,
      _newExchange?: null
    ): AssetExchangeUpdatedEventFilter;

    "CoolOffPeriodUpdated(address,uint256)"(
      _component?: string | null,
      _newCoolOffPeriod?: null
    ): CoolOffPeriodUpdatedEventFilter;
    CoolOffPeriodUpdated(
      _component?: string | null,
      _newCoolOffPeriod?: null
    ): CoolOffPeriodUpdatedEventFilter;

    "TargetUnitsUpdated(address,uint256,uint256)"(
      _component?: string | null,
      _newUnit?: null,
      _positionMultiplier?: null
    ): TargetUnitsUpdatedEventFilter;
    TargetUnitsUpdated(
      _component?: string | null,
      _newUnit?: null,
      _positionMultiplier?: null
    ): TargetUnitsUpdatedEventFilter;

    "TradeExecuted(address,address,address,uint256,uint256)"(
      _executor?: string | null,
      _sellComponent?: string | null,
      _buyComponent?: string | null,
      _amountSold?: null,
      _amountBought?: null
    ): TradeExecutedEventFilter;
    TradeExecuted(
      _executor?: string | null,
      _sellComponent?: string | null,
      _buyComponent?: string | null,
      _amountSold?: null,
      _amountBought?: null
    ): TradeExecutedEventFilter;

    "TradeMaximumUpdated(address,uint256)"(
      _component?: string | null,
      _newMaximum?: null
    ): TradeMaximumUpdatedEventFilter;
    TradeMaximumUpdated(
      _component?: string | null,
      _newMaximum?: null
    ): TradeMaximumUpdatedEventFilter;

    "TraderStatusUpdated(address,bool)"(
      _trader?: string | null,
      _status?: null
    ): TraderStatusUpdatedEventFilter;
    TraderStatusUpdated(
      _trader?: string | null,
      _status?: null
    ): TraderStatusUpdatedEventFilter;
  };

  estimateGas: {
    anyoneTrade(overrides?: CallOverrides): Promise<BigNumber>;

    assetInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    balancerProxy(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    getRebalanceComponents(overrides?: CallOverrides): Promise<BigNumber>;

    getTargetUnits(
      _components: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _index: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    positionMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    raiseAssetTargets(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalanceComponents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCoolOffPeriods(
      _components: string[],
      _coolOffPeriods: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExchanges(
      _components: string[],
      _exchanges: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTradeMaximums(
      _components: string[],
      _tradeMaximums: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startRebalance(
      _newComponents: string[],
      _newComponentsTargetUnits: BigNumberish[],
      _oldComponentsTargetUnits: BigNumberish[],
      _positionMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sushiswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    trade(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tradeAllowList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tradeRemainingWETH(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    updateAnyoneTrade(
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTraderStatus(
      _traders: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    anyoneTrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balancerProxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRebalanceComponents(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTargetUnits(
      _components: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _index: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    positionMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    raiseAssetTargets(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalanceComponents(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCoolOffPeriods(
      _components: string[],
      _coolOffPeriods: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExchanges(
      _components: string[],
      _exchanges: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTradeMaximums(
      _components: string[],
      _tradeMaximums: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startRebalance(
      _newComponents: string[],
      _newComponentsTargetUnits: BigNumberish[],
      _oldComponentsTargetUnits: BigNumberish[],
      _positionMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sushiswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trade(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tradeAllowList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tradeRemainingWETH(
      _component: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAnyoneTrade(
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTraderStatus(
      _traders: string[],
      _statuses: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
