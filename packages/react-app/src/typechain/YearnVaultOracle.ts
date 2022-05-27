/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface YearnVaultOracleInterface extends utils.Interface {
  functions: {
    "dataDescription()": FunctionFragment;
    "read()": FunctionFragment;
    "underlyingFullUnit()": FunctionFragment;
    "underlyingOracle()": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "dataDescription",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlyingFullUnit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "dataDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingFullUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {};
}

export interface YearnVaultOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YearnVaultOracleInterface;

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
    dataDescription(overrides?: CallOverrides): Promise<[string]>;

    read(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingFullUnit(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingOracle(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  dataDescription(overrides?: CallOverrides): Promise<string>;

  read(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingFullUnit(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingOracle(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    dataDescription(overrides?: CallOverrides): Promise<string>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingFullUnit(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingOracle(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    dataDescription(overrides?: CallOverrides): Promise<BigNumber>;

    read(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingFullUnit(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingOracle(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    dataDescription(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    read(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingFullUnit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
