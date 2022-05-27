/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ZeroExApiAdapterInterface extends utils.Interface {
  functions: {
    "getSpender()": FunctionFragment;
    "getTradeCalldata(address,address,address,uint256,uint256,bytes)": FunctionFragment;
    "wethAddress()": FunctionFragment;
    "zeroExAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSpender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeCalldata",
    values: [string, string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "zeroExAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getSpender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTradeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "zeroExAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ZeroExApiAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZeroExApiAdapterInterface;

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
    getSpender(overrides?: CallOverrides): Promise<[string]>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;

    zeroExAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  getSpender(overrides?: CallOverrides): Promise<string>;

  getTradeCalldata(
    _sourceToken: string,
    _destinationToken: string,
    _destinationAddress: string,
    _sourceQuantity: BigNumberish,
    _minDestinationQuantity: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  zeroExAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getSpender(overrides?: CallOverrides): Promise<string>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    wethAddress(overrides?: CallOverrides): Promise<string>;

    zeroExAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getSpender(overrides?: CallOverrides): Promise<BigNumber>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;

    zeroExAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getSpender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTradeCalldata(
      _sourceToken: string,
      _destinationToken: string,
      _destinationAddress: string,
      _sourceQuantity: BigNumberish,
      _minDestinationQuantity: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zeroExAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
