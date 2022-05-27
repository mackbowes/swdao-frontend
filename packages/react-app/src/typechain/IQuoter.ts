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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type SwapParamsStruct = {
  baseToken: string;
  isBaseToQuote: boolean;
  isExactInput: boolean;
  amount: BigNumberish;
  sqrtPriceLimitX96: BigNumberish;
};

export type SwapParamsStructOutput = [
  string,
  boolean,
  boolean,
  BigNumber,
  BigNumber
] & {
  baseToken: string;
  isBaseToQuote: boolean;
  isExactInput: boolean;
  amount: BigNumber;
  sqrtPriceLimitX96: BigNumber;
};

export type SwapResponseStruct = {
  deltaAvailableBase: BigNumberish;
  deltaAvailableQuote: BigNumberish;
  exchangedPositionSize: BigNumberish;
  exchangedPositionNotional: BigNumberish;
  sqrtPriceX96: BigNumberish;
};

export type SwapResponseStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  deltaAvailableBase: BigNumber;
  deltaAvailableQuote: BigNumber;
  exchangedPositionSize: BigNumber;
  exchangedPositionNotional: BigNumber;
  sqrtPriceX96: BigNumber;
};

export interface IQuoterInterface extends utils.Interface {
  functions: {
    "swap((address,bool,bool,uint256,uint160))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [SwapParamsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IQuoter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IQuoterInterface;

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
    swap(
      params: SwapParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    params: SwapParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      params: SwapParamsStruct,
      overrides?: CallOverrides
    ): Promise<SwapResponseStructOutput>;
  };

  filters: {};

  estimateGas: {
    swap(
      params: SwapParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      params: SwapParamsStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
