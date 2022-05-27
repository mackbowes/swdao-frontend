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

export interface GenericLogicInterface extends utils.Interface {
  functions: {
    "HEALTH_FACTOR_LIQUIDATION_THRESHOLD()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GenericLogic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GenericLogicInterface;

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
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
