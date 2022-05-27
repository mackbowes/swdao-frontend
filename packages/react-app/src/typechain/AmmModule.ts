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

export interface AmmModuleInterface extends utils.Interface {
  functions: {
    "addLiquidity(address,string,address,uint256,address[],uint256[])": FunctionFragment;
    "addLiquiditySingleAsset(address,string,address,uint256,address,uint256)": FunctionFragment;
    "controller()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "removeLiquidity(address,string,address,uint256,address[],uint256[])": FunctionFragment;
    "removeLiquiditySingleAsset(address,string,address,uint256,address,uint256)": FunctionFragment;
    "removeModule()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, string, string, BigNumberish, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquiditySingleAsset",
    values: [string, string, string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [string, string, string, BigNumberish, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquiditySingleAsset",
    values: [string, string, string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeModule",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquiditySingleAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquiditySingleAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeModule",
    data: BytesLike
  ): Result;

  events: {
    "LiquidityAdded(address,address,int256,address[],int256[])": EventFragment;
    "LiquidityRemoved(address,address,int256,address[],int256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
}

export type LiquidityAddedEvent = TypedEvent<
  [string, string, BigNumber, string[], BigNumber[]],
  {
    _setToken: string;
    _ammPool: string;
    _ammPoolBalancesDelta: BigNumber;
    _components: string[];
    _componentBalancesDelta: BigNumber[];
  }
>;

export type LiquidityAddedEventFilter = TypedEventFilter<LiquidityAddedEvent>;

export type LiquidityRemovedEvent = TypedEvent<
  [string, string, BigNumber, string[], BigNumber[]],
  {
    _setToken: string;
    _ammPool: string;
    _ammPoolBalancesDelta: BigNumber;
    _components: string[];
    _componentBalancesDelta: BigNumber[];
  }
>;

export type LiquidityRemovedEventFilter = TypedEventFilter<LiquidityRemovedEvent>;

export interface AmmModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AmmModuleInterface;

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
    addLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _components: string[],
      _maxComponentUnits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _component: string,
      _maxComponentUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _components: string[],
      _minComponentUnitsReceived: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _component: string,
      _minComponentUnitsReceived: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    _setToken: string,
    _ammName: string,
    _ammPool: string,
    _minPoolTokenPositionUnit: BigNumberish,
    _components: string[],
    _maxComponentUnits: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquiditySingleAsset(
    _setToken: string,
    _ammName: string,
    _ammPool: string,
    _minPoolTokenPositionUnit: BigNumberish,
    _component: string,
    _maxComponentUnit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  initialize(
    _setToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    _setToken: string,
    _ammName: string,
    _ammPool: string,
    _poolTokenPositionUnits: BigNumberish,
    _components: string[],
    _minComponentUnitsReceived: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquiditySingleAsset(
    _setToken: string,
    _ammName: string,
    _ammPool: string,
    _poolTokenPositionUnits: BigNumberish,
    _component: string,
    _minComponentUnitsReceived: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeModule(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _components: string[],
      _maxComponentUnits: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    addLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _component: string,
      _maxComponentUnit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    initialize(_setToken: string, overrides?: CallOverrides): Promise<void>;

    removeLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _components: string[],
      _minComponentUnitsReceived: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _component: string,
      _minComponentUnitsReceived: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeModule(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "LiquidityAdded(address,address,int256,address[],int256[])"(
      _setToken?: string | null,
      _ammPool?: string | null,
      _ammPoolBalancesDelta?: null,
      _components?: null,
      _componentBalancesDelta?: null
    ): LiquidityAddedEventFilter;
    LiquidityAdded(
      _setToken?: string | null,
      _ammPool?: string | null,
      _ammPoolBalancesDelta?: null,
      _components?: null,
      _componentBalancesDelta?: null
    ): LiquidityAddedEventFilter;

    "LiquidityRemoved(address,address,int256,address[],int256[])"(
      _setToken?: string | null,
      _ammPool?: string | null,
      _ammPoolBalancesDelta?: null,
      _components?: null,
      _componentBalancesDelta?: null
    ): LiquidityRemovedEventFilter;
    LiquidityRemoved(
      _setToken?: string | null,
      _ammPool?: string | null,
      _ammPoolBalancesDelta?: null,
      _components?: null,
      _componentBalancesDelta?: null
    ): LiquidityRemovedEventFilter;
  };

  estimateGas: {
    addLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _components: string[],
      _maxComponentUnits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _component: string,
      _maxComponentUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _components: string[],
      _minComponentUnitsReceived: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _component: string,
      _minComponentUnitsReceived: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _components: string[],
      _maxComponentUnits: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _minPoolTokenPositionUnit: BigNumberish,
      _component: string,
      _maxComponentUnit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _components: string[],
      _minComponentUnitsReceived: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquiditySingleAsset(
      _setToken: string,
      _ammName: string,
      _ammPool: string,
      _poolTokenPositionUnits: BigNumberish,
      _component: string,
      _minComponentUnitsReceived: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
