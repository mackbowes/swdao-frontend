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

export interface ChainlinkAggregatorMockInterface extends utils.Interface {
  functions: {
    "decimals()": FunctionFragment;
    "getRoundData(uint80)": FunctionFragment;
    "latestAnswer()": FunctionFragment;
    "latestAnsweredInRound()": FunctionFragment;
    "latestRoundData()": FunctionFragment;
    "latestRoundId()": FunctionFragment;
    "latestStartedAt()": FunctionFragment;
    "latestUpdatedAt()": FunctionFragment;
    "setLatestAnswer(int256)": FunctionFragment;
    "setRoundData(uint80,int256,uint256,uint256,uint80)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnsweredInRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestStartedAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestUpdatedAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLatestAnswer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoundData",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnsweredInRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestStartedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestUpdatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLatestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoundData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ChainlinkAggregatorMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChainlinkAggregatorMockInterface;

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
    decimals(overrides?: CallOverrides): Promise<[number]>;

    getRoundData(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestAnsweredInRound(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestRoundId(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestStartedAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestUpdatedAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    setLatestAnswer(
      _latestAnswer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoundData(
      _roundId: BigNumberish,
      _answer: BigNumberish,
      _startedAt: BigNumberish,
      _updatedAt: BigNumberish,
      _answeredInRound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  decimals(overrides?: CallOverrides): Promise<number>;

  getRoundData(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  latestAnsweredInRound(overrides?: CallOverrides): Promise<BigNumber>;

  latestRoundData(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      roundId: BigNumber;
      answer: BigNumber;
      startedAt: BigNumber;
      updatedAt: BigNumber;
      answeredInRound: BigNumber;
    }
  >;

  latestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

  latestStartedAt(overrides?: CallOverrides): Promise<BigNumber>;

  latestUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

  setLatestAnswer(
    _latestAnswer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoundData(
    _roundId: BigNumberish,
    _answer: BigNumberish,
    _startedAt: BigNumberish,
    _updatedAt: BigNumberish,
    _answeredInRound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    decimals(overrides?: CallOverrides): Promise<number>;

    getRoundData(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnsweredInRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        roundId: BigNumber;
        answer: BigNumber;
        startedAt: BigNumber;
        updatedAt: BigNumber;
        answeredInRound: BigNumber;
      }
    >;

    latestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    latestStartedAt(overrides?: CallOverrides): Promise<BigNumber>;

    latestUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

    setLatestAnswer(
      _latestAnswer: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoundData(
      _roundId: BigNumberish,
      _answer: BigNumberish,
      _startedAt: BigNumberish,
      _updatedAt: BigNumberish,
      _answeredInRound: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getRoundData(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    latestAnsweredInRound(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    latestStartedAt(overrides?: CallOverrides): Promise<BigNumber>;

    latestUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

    setLatestAnswer(
      _latestAnswer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoundData(
      _roundId: BigNumberish,
      _answer: BigNumberish,
      _startedAt: BigNumberish,
      _updatedAt: BigNumberish,
      _answeredInRound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoundData(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestAnsweredInRound(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRoundId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestStartedAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestUpdatedAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setLatestAnswer(
      _latestAnswer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoundData(
      _roundId: BigNumberish,
      _answer: BigNumberish,
      _startedAt: BigNumberish,
      _updatedAt: BigNumberish,
      _answeredInRound: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
