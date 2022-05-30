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

export interface ResourceIdentifierMockInterface extends utils.Interface {
  functions: {
    "testGetIntegrationRegistry(address)": FunctionFragment;
    "testGetPriceOracle(address)": FunctionFragment;
    "testGetSetValuer(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "testGetIntegrationRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetSetValuer",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "testGetIntegrationRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetSetValuer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ResourceIdentifierMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ResourceIdentifierMockInterface;

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
    testGetIntegrationRegistry(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    testGetPriceOracle(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    testGetSetValuer(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  testGetIntegrationRegistry(
    _controller: string,
    overrides?: CallOverrides
  ): Promise<string>;

  testGetPriceOracle(
    _controller: string,
    overrides?: CallOverrides
  ): Promise<string>;

  testGetSetValuer(
    _controller: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    testGetIntegrationRegistry(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<string>;

    testGetPriceOracle(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<string>;

    testGetSetValuer(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    testGetIntegrationRegistry(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetPriceOracle(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetSetValuer(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    testGetIntegrationRegistry(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetPriceOracle(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetSetValuer(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}