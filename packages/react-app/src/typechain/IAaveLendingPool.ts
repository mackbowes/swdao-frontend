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

export interface IAaveLendingPoolInterface extends utils.Interface {
  functions: {
    "core()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "core", values?: undefined): string;

  decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;

  events: {};
}

export interface IAaveLendingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAaveLendingPoolInterface;

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
    core(overrides?: CallOverrides): Promise<[string]>;
  };

  core(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    core(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    core(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    core(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
