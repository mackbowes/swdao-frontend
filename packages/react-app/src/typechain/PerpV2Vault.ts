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

export interface PerpV2VaultInterface extends utils.Interface {
  functions: {
    "candidate()": FunctionFragment;
    "decimals()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getAccountBalance()": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getClearingHouse()": FunctionFragment;
    "getClearingHouseConfig()": FunctionFragment;
    "getExchange()": FunctionFragment;
    "getFreeCollateral(address)": FunctionFragment;
    "getFreeCollateralByRatio(address,uint24)": FunctionFragment;
    "getInsuranceFund()": FunctionFragment;
    "getSettlementToken()": FunctionFragment;
    "getTotalDebt()": FunctionFragment;
    "getTrustedForwarder()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setClearingHouse(address)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setTrustedForwarder(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateOwner()": FunctionFragment;
    "versionRecipient()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "candidate", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getClearingHouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClearingHouseConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExchange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFreeCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFreeCollateralByRatio",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInsuranceFund",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSettlementToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setClearingHouse",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "versionRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "candidate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccountBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouseConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFreeCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFreeCollateralByRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInsuranceFund",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSettlementToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClearingHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "versionRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposited(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "TrustedForwarderUpdated(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TrustedForwarderUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type DepositedEvent = TypedEvent<
  [string, string, BigNumber],
  { collateralToken: string; trader: string; amount: BigNumber }
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type TrustedForwarderUpdatedEvent = TypedEvent<
  [string],
  { trustedForwarder: string }
>;

export type TrustedForwarderUpdatedEventFilter = TypedEventFilter<TrustedForwarderUpdatedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  { collateralToken: string; trader: string; amount: BigNumber }
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface PerpV2Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpV2VaultInterface;

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

    decimals(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountBalance(overrides?: CallOverrides): Promise<[string]>;

    getBalance(trader: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getClearingHouse(overrides?: CallOverrides): Promise<[string]>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<[string]>;

    getExchange(overrides?: CallOverrides): Promise<[string]>;

    getFreeCollateral(
      trader: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFreeCollateralByRatio(
      trader: string,
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getInsuranceFund(overrides?: CallOverrides): Promise<[string]>;

    getSettlementToken(overrides?: CallOverrides): Promise<[string]>;

    getTotalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTrustedForwarder(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      insuranceFundArg: string,
      clearingHouseConfigArg: string,
      accountBalanceArg: string,
      exchangeArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

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

    setTrustedForwarder(
      trustedForwarderArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    versionRecipient(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  candidate(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  deposit(
    token: string,
    amountX10_D: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountBalance(overrides?: CallOverrides): Promise<string>;

  getBalance(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

  getClearingHouse(overrides?: CallOverrides): Promise<string>;

  getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

  getExchange(overrides?: CallOverrides): Promise<string>;

  getFreeCollateral(
    trader: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFreeCollateralByRatio(
    trader: string,
    ratio: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getInsuranceFund(overrides?: CallOverrides): Promise<string>;

  getSettlementToken(overrides?: CallOverrides): Promise<string>;

  getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

  getTrustedForwarder(overrides?: CallOverrides): Promise<string>;

  initialize(
    insuranceFundArg: string,
    clearingHouseConfigArg: string,
    accountBalanceArg: string,
    exchangeArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

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

  setTrustedForwarder(
    trustedForwarderArg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOwner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  versionRecipient(overrides?: CallOverrides): Promise<string>;

  withdraw(
    token: string,
    amountX10_D: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    candidate(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    deposit(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccountBalance(overrides?: CallOverrides): Promise<string>;

    getBalance(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getClearingHouse(overrides?: CallOverrides): Promise<string>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

    getExchange(overrides?: CallOverrides): Promise<string>;

    getFreeCollateral(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFreeCollateralByRatio(
      trader: string,
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInsuranceFund(overrides?: CallOverrides): Promise<string>;

    getSettlementToken(overrides?: CallOverrides): Promise<string>;

    getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    getTrustedForwarder(overrides?: CallOverrides): Promise<string>;

    initialize(
      insuranceFundArg: string,
      clearingHouseConfigArg: string,
      accountBalanceArg: string,
      exchangeArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setClearingHouse(
      clearingHouseArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    setTrustedForwarder(
      trustedForwarderArg: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateOwner(overrides?: CallOverrides): Promise<void>;

    versionRecipient(overrides?: CallOverrides): Promise<string>;

    withdraw(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposited(address,address,uint256)"(
      collateralToken?: string | null,
      trader?: string | null,
      amount?: null
    ): DepositedEventFilter;
    Deposited(
      collateralToken?: string | null,
      trader?: string | null,
      amount?: null
    ): DepositedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "TrustedForwarderUpdated(address)"(
      trustedForwarder?: null
    ): TrustedForwarderUpdatedEventFilter;
    TrustedForwarderUpdated(
      trustedForwarder?: null
    ): TrustedForwarderUpdatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdrawn(address,address,uint256)"(
      collateralToken?: string | null,
      trader?: string | null,
      amount?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      collateralToken?: string | null,
      trader?: string | null,
      amount?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    candidate(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(trader: string, overrides?: CallOverrides): Promise<BigNumber>;

    getClearingHouse(overrides?: CallOverrides): Promise<BigNumber>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getExchange(overrides?: CallOverrides): Promise<BigNumber>;

    getFreeCollateral(
      trader: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFreeCollateralByRatio(
      trader: string,
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInsuranceFund(overrides?: CallOverrides): Promise<BigNumber>;

    getSettlementToken(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalDebt(overrides?: CallOverrides): Promise<BigNumber>;

    getTrustedForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      insuranceFundArg: string,
      clearingHouseConfigArg: string,
      accountBalanceArg: string,
      exchangeArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

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

    setTrustedForwarder(
      trustedForwarderArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    versionRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    candidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalance(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClearingHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClearingHouseConfig(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExchange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFreeCollateral(
      trader: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFreeCollateralByRatio(
      trader: string,
      ratio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInsuranceFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSettlementToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTrustedForwarder(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      insuranceFundArg: string,
      clearingHouseConfigArg: string,
      accountBalanceArg: string,
      exchangeArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setTrustedForwarder(
      trustedForwarderArg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOwner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    versionRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amountX10_D: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
