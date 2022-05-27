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

export interface CompoundLeverageModuleInterface extends utils.Interface {
  functions: {
    "addBorrowAssets(address,address[])": FunctionFragment;
    "addCollateralAssets(address,address[])": FunctionFragment;
    "addCompoundMarket(address,address)": FunctionFragment;
    "allowedSetTokens(address)": FunctionFragment;
    "anySetAllowed()": FunctionFragment;
    "borrowCTokenEnabled(address,address)": FunctionFragment;
    "collateralCTokenEnabled(address,address)": FunctionFragment;
    "componentIssueHook(address,uint256,address,bool)": FunctionFragment;
    "componentRedeemHook(address,uint256,address,bool)": FunctionFragment;
    "controller()": FunctionFragment;
    "delever(address,address,address,uint256,uint256,string,bytes)": FunctionFragment;
    "deleverToZeroBorrowBalance(address,address,address,uint256,string,bytes)": FunctionFragment;
    "getEnabledAssets(address)": FunctionFragment;
    "initialize(address,address[],address[])": FunctionFragment;
    "lever(address,address,address,uint256,uint256,string,bytes)": FunctionFragment;
    "moduleIssueHook(address,uint256)": FunctionFragment;
    "moduleRedeemHook(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerToModule(address,address)": FunctionFragment;
    "removeBorrowAssets(address,address[])": FunctionFragment;
    "removeCollateralAssets(address,address[])": FunctionFragment;
    "removeCompoundMarket(address)": FunctionFragment;
    "removeModule()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sync(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underlyingToCToken(address)": FunctionFragment;
    "updateAllowedSetToken(address,bool)": FunctionFragment;
    "updateAnySetAllowed(bool)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBorrowAssets",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateralAssets",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addCompoundMarket",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedSetTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "anySetAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowCTokenEnabled",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralCTokenEnabled",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "componentIssueHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "componentRedeemHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delever",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deleverToZeroBorrowBalance",
    values: [string, string, string, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEnabledAssets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "lever",
    values: [
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleIssueHook",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleRedeemHook",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerToModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBorrowAssets",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCollateralAssets",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCompoundMarket",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sync",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToCToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAllowedSetToken",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAnySetAllowed",
    values: [boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBorrowAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateralAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCompoundMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedSetTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "anySetAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowCTokenEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralCTokenEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "componentIssueHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "componentRedeemHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delever", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleverToZeroBorrowBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEnabledAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lever", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moduleIssueHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleRedeemHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerToModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBorrowAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCollateralAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCompoundMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToCToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAllowedSetToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAnySetAllowed",
    data: BytesLike
  ): Result;

  events: {
    "AnySetAllowedUpdated(bool)": EventFragment;
    "BorrowAssetsUpdated(address,bool,address[])": EventFragment;
    "CollateralAssetsUpdated(address,bool,address[])": EventFragment;
    "LeverageDecreased(address,address,address,address,uint256,uint256,uint256)": EventFragment;
    "LeverageIncreased(address,address,address,address,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetTokenStatusUpdated(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnySetAllowedUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowAssetsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollateralAssetsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeverageDecreased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeverageIncreased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTokenStatusUpdated"): EventFragment;
}

export type AnySetAllowedUpdatedEvent = TypedEvent<
  [boolean],
  { _anySetAllowed: boolean }
>;

export type AnySetAllowedUpdatedEventFilter = TypedEventFilter<AnySetAllowedUpdatedEvent>;

export type BorrowAssetsUpdatedEvent = TypedEvent<
  [string, boolean, string[]],
  { _setToken: string; _added: boolean; _assets: string[] }
>;

export type BorrowAssetsUpdatedEventFilter = TypedEventFilter<BorrowAssetsUpdatedEvent>;

export type CollateralAssetsUpdatedEvent = TypedEvent<
  [string, boolean, string[]],
  { _setToken: string; _added: boolean; _assets: string[] }
>;

export type CollateralAssetsUpdatedEventFilter = TypedEventFilter<CollateralAssetsUpdatedEvent>;

export type LeverageDecreasedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  {
    _setToken: string;
    _collateralAsset: string;
    _repayAsset: string;
    _exchangeAdapter: string;
    _totalRedeemAmount: BigNumber;
    _totalRepayAmount: BigNumber;
    _protocolFee: BigNumber;
  }
>;

export type LeverageDecreasedEventFilter = TypedEventFilter<LeverageDecreasedEvent>;

export type LeverageIncreasedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, BigNumber],
  {
    _setToken: string;
    _borrowAsset: string;
    _collateralAsset: string;
    _exchangeAdapter: string;
    _totalBorrowAmount: BigNumber;
    _totalReceiveAmount: BigNumber;
    _protocolFee: BigNumber;
  }
>;

export type LeverageIncreasedEventFilter = TypedEventFilter<LeverageIncreasedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type SetTokenStatusUpdatedEvent = TypedEvent<
  [string, boolean],
  { _setToken: string; _added: boolean }
>;

export type SetTokenStatusUpdatedEventFilter = TypedEventFilter<SetTokenStatusUpdatedEvent>;

export interface CompoundLeverageModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CompoundLeverageModuleInterface;

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
    addBorrowAssets(
      _setToken: string,
      _newBorrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCollateralAssets(
      _setToken: string,
      _newCollateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCompoundMarket(
      _cToken: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedSetTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    anySetAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    borrowCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    collateralCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    delever(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _minRepayQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deleverToZeroBorrowBalance(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getEnabledAssets(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<[string[], string[]]>;

    initialize(
      _setToken: string,
      _collateralAssets: string[],
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lever(
      _setToken: string,
      _borrowAsset: string,
      _collateralAsset: string,
      _borrowQuantity: BigNumberish,
      _minReceiveQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleIssueHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleRedeemHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerToModule(
      _setToken: string,
      _debtIssuanceModule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBorrowAssets(
      _setToken: string,
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeCollateralAssets(
      _setToken: string,
      _collateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeCompoundMarket(
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sync(
      _setToken: string,
      _shouldAccrueInterest: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingToCToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    updateAllowedSetToken(
      _setToken: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAnySetAllowed(
      _anySetAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBorrowAssets(
    _setToken: string,
    _newBorrowAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCollateralAssets(
    _setToken: string,
    _newCollateralAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCompoundMarket(
    _cToken: string,
    _underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedSetTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  anySetAllowed(overrides?: CallOverrides): Promise<boolean>;

  borrowCTokenEnabled(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  collateralCTokenEnabled(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  componentIssueHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  componentRedeemHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controller(overrides?: CallOverrides): Promise<string>;

  delever(
    _setToken: string,
    _collateralAsset: string,
    _repayAsset: string,
    _redeemQuantity: BigNumberish,
    _minRepayQuantity: BigNumberish,
    _tradeAdapterName: string,
    _tradeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deleverToZeroBorrowBalance(
    _setToken: string,
    _collateralAsset: string,
    _repayAsset: string,
    _redeemQuantity: BigNumberish,
    _tradeAdapterName: string,
    _tradeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getEnabledAssets(
    _setToken: string,
    overrides?: CallOverrides
  ): Promise<[string[], string[]]>;

  initialize(
    _setToken: string,
    _collateralAssets: string[],
    _borrowAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lever(
    _setToken: string,
    _borrowAsset: string,
    _collateralAsset: string,
    _borrowQuantity: BigNumberish,
    _minReceiveQuantity: BigNumberish,
    _tradeAdapterName: string,
    _tradeData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleIssueHook(
    _setToken: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleRedeemHook(
    _setToken: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerToModule(
    _setToken: string,
    _debtIssuanceModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBorrowAssets(
    _setToken: string,
    _borrowAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeCollateralAssets(
    _setToken: string,
    _collateralAssets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeCompoundMarket(
    _underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeModule(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sync(
    _setToken: string,
    _shouldAccrueInterest: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingToCToken(arg0: string, overrides?: CallOverrides): Promise<string>;

  updateAllowedSetToken(
    _setToken: string,
    _status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAnySetAllowed(
    _anySetAllowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBorrowAssets(
      _setToken: string,
      _newBorrowAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addCollateralAssets(
      _setToken: string,
      _newCollateralAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addCompoundMarket(
      _cToken: string,
      _underlying: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedSetTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    anySetAllowed(overrides?: CallOverrides): Promise<boolean>;

    borrowCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    collateralCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    controller(overrides?: CallOverrides): Promise<string>;

    delever(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _minRepayQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    deleverToZeroBorrowBalance(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getEnabledAssets(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<[string[], string[]]>;

    initialize(
      _setToken: string,
      _collateralAssets: string[],
      _borrowAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    lever(
      _setToken: string,
      _borrowAsset: string,
      _collateralAsset: string,
      _borrowQuantity: BigNumberish,
      _minReceiveQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleIssueHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleRedeemHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerToModule(
      _setToken: string,
      _debtIssuanceModule: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBorrowAssets(
      _setToken: string,
      _borrowAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeCollateralAssets(
      _setToken: string,
      _collateralAssets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeCompoundMarket(
      _underlying: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeModule(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sync(
      _setToken: string,
      _shouldAccrueInterest: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingToCToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    updateAllowedSetToken(
      _setToken: string,
      _status: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAnySetAllowed(
      _anySetAllowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AnySetAllowedUpdated(bool)"(
      _anySetAllowed?: boolean | null
    ): AnySetAllowedUpdatedEventFilter;
    AnySetAllowedUpdated(
      _anySetAllowed?: boolean | null
    ): AnySetAllowedUpdatedEventFilter;

    "BorrowAssetsUpdated(address,bool,address[])"(
      _setToken?: string | null,
      _added?: boolean | null,
      _assets?: null
    ): BorrowAssetsUpdatedEventFilter;
    BorrowAssetsUpdated(
      _setToken?: string | null,
      _added?: boolean | null,
      _assets?: null
    ): BorrowAssetsUpdatedEventFilter;

    "CollateralAssetsUpdated(address,bool,address[])"(
      _setToken?: string | null,
      _added?: boolean | null,
      _assets?: null
    ): CollateralAssetsUpdatedEventFilter;
    CollateralAssetsUpdated(
      _setToken?: string | null,
      _added?: boolean | null,
      _assets?: null
    ): CollateralAssetsUpdatedEventFilter;

    "LeverageDecreased(address,address,address,address,uint256,uint256,uint256)"(
      _setToken?: string | null,
      _collateralAsset?: string | null,
      _repayAsset?: string | null,
      _exchangeAdapter?: null,
      _totalRedeemAmount?: null,
      _totalRepayAmount?: null,
      _protocolFee?: null
    ): LeverageDecreasedEventFilter;
    LeverageDecreased(
      _setToken?: string | null,
      _collateralAsset?: string | null,
      _repayAsset?: string | null,
      _exchangeAdapter?: null,
      _totalRedeemAmount?: null,
      _totalRepayAmount?: null,
      _protocolFee?: null
    ): LeverageDecreasedEventFilter;

    "LeverageIncreased(address,address,address,address,uint256,uint256,uint256)"(
      _setToken?: string | null,
      _borrowAsset?: string | null,
      _collateralAsset?: string | null,
      _exchangeAdapter?: null,
      _totalBorrowAmount?: null,
      _totalReceiveAmount?: null,
      _protocolFee?: null
    ): LeverageIncreasedEventFilter;
    LeverageIncreased(
      _setToken?: string | null,
      _borrowAsset?: string | null,
      _collateralAsset?: string | null,
      _exchangeAdapter?: null,
      _totalBorrowAmount?: null,
      _totalReceiveAmount?: null,
      _protocolFee?: null
    ): LeverageIncreasedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SetTokenStatusUpdated(address,bool)"(
      _setToken?: string | null,
      _added?: boolean | null
    ): SetTokenStatusUpdatedEventFilter;
    SetTokenStatusUpdated(
      _setToken?: string | null,
      _added?: boolean | null
    ): SetTokenStatusUpdatedEventFilter;
  };

  estimateGas: {
    addBorrowAssets(
      _setToken: string,
      _newBorrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCollateralAssets(
      _setToken: string,
      _newCollateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCompoundMarket(
      _cToken: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedSetTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    anySetAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    borrowCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    delever(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _minRepayQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deleverToZeroBorrowBalance(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getEnabledAssets(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _setToken: string,
      _collateralAssets: string[],
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lever(
      _setToken: string,
      _borrowAsset: string,
      _collateralAsset: string,
      _borrowQuantity: BigNumberish,
      _minReceiveQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleIssueHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleRedeemHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerToModule(
      _setToken: string,
      _debtIssuanceModule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBorrowAssets(
      _setToken: string,
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeCollateralAssets(
      _setToken: string,
      _collateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeCompoundMarket(
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sync(
      _setToken: string,
      _shouldAccrueInterest: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingToCToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAllowedSetToken(
      _setToken: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAnySetAllowed(
      _anySetAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBorrowAssets(
      _setToken: string,
      _newBorrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCollateralAssets(
      _setToken: string,
      _newCollateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCompoundMarket(
      _cToken: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedSetTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    anySetAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralCTokenEnabled(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delever(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _minRepayQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deleverToZeroBorrowBalance(
      _setToken: string,
      _collateralAsset: string,
      _repayAsset: string,
      _redeemQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getEnabledAssets(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _setToken: string,
      _collateralAssets: string[],
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lever(
      _setToken: string,
      _borrowAsset: string,
      _collateralAsset: string,
      _borrowQuantity: BigNumberish,
      _minReceiveQuantity: BigNumberish,
      _tradeAdapterName: string,
      _tradeData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleIssueHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleRedeemHook(
      _setToken: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerToModule(
      _setToken: string,
      _debtIssuanceModule: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBorrowAssets(
      _setToken: string,
      _borrowAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeCollateralAssets(
      _setToken: string,
      _collateralAssets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeCompoundMarket(
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeModule(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sync(
      _setToken: string,
      _shouldAccrueInterest: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingToCToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAllowedSetToken(
      _setToken: string,
      _status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAnySetAllowed(
      _anySetAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
