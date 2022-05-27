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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IKyberNetworkProxyInterface extends utils.Interface {
  functions: {
    "getExpectedRate(address,address,uint256)": FunctionFragment;
    "trade(address,uint256,address,address,uint256,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getExpectedRate",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "trade",
    values: [
      string,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getExpectedRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "trade", data: BytesLike): Result;

  events: {};
}

export interface IKyberNetworkProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKyberNetworkProxyInterface;

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
    getExpectedRate(
      _src: string,
      _dest: string,
      _srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    trade(
      _src: string,
      _srcAmount: BigNumberish,
      _dest: string,
      _destAddress: string,
      _maxDestAmount: BigNumberish,
      _minConversionRate: BigNumberish,
      _referalFeeAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getExpectedRate(
    _src: string,
    _dest: string,
    _srcQty: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  trade(
    _src: string,
    _srcAmount: BigNumberish,
    _dest: string,
    _destAddress: string,
    _maxDestAmount: BigNumberish,
    _minConversionRate: BigNumberish,
    _referalFeeAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getExpectedRate(
      _src: string,
      _dest: string,
      _srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    trade(
      _src: string,
      _srcAmount: BigNumberish,
      _dest: string,
      _destAddress: string,
      _maxDestAmount: BigNumberish,
      _minConversionRate: BigNumberish,
      _referalFeeAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getExpectedRate(
      _src: string,
      _dest: string,
      _srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    trade(
      _src: string,
      _srcAmount: BigNumberish,
      _dest: string,
      _destAddress: string,
      _maxDestAmount: BigNumberish,
      _minConversionRate: BigNumberish,
      _referalFeeAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getExpectedRate(
      _src: string,
      _dest: string,
      _srcQty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    trade(
      _src: string,
      _srcAmount: BigNumberish,
      _dest: string,
      _destAddress: string,
      _maxDestAmount: BigNumberish,
      _minConversionRate: BigNumberish,
      _referalFeeAddress: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
