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

export interface AddressArrayUtilsMockInterface extends utils.Interface {
  functions: {
    "getStorageArray()": FunctionFragment;
    "setStorageArray(address[])": FunctionFragment;
    "storageArray(uint256)": FunctionFragment;
    "testContains(address[],address)": FunctionFragment;
    "testHasDuplicate(address[])": FunctionFragment;
    "testIndexOf(address[],address)": FunctionFragment;
    "testPop(address[],uint256)": FunctionFragment;
    "testRemove(address[],address)": FunctionFragment;
    "testRemoveStorage(address)": FunctionFragment;
    "testValidatePairsWithArrayAddress(address[],address[])": FunctionFragment;
    "testValidatePairsWithArrayBool(address[],bool[])": FunctionFragment;
    "testValidatePairsWithArrayBytes(address[],bytes[])": FunctionFragment;
    "testValidatePairsWithArrayString(address[],string[])": FunctionFragment;
    "testValidatePairsWithArrayUint(address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getStorageArray",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStorageArray",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "storageArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testContains",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "testHasDuplicate",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testIndexOf",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "testPop",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testRemove",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "testRemoveStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidatePairsWithArrayAddress",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidatePairsWithArrayBool",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidatePairsWithArrayBytes",
    values: [string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidatePairsWithArrayString",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidatePairsWithArrayUint",
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStorageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStorageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storageArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testContains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testHasDuplicate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testPop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testRemove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testRemoveStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidatePairsWithArrayAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidatePairsWithArrayBool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidatePairsWithArrayBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidatePairsWithArrayString",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidatePairsWithArrayUint",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AddressArrayUtilsMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressArrayUtilsMockInterface;

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
    getStorageArray(overrides?: CallOverrides): Promise<[string[]]>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    testContains(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testHasDuplicate(
      A: string[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    testPop(
      A: string[],
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string]>;

    testRemove(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testValidatePairsWithArrayAddress(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    testValidatePairsWithArrayBool(
      A: string[],
      a: boolean[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    testValidatePairsWithArrayBytes(
      A: string[],
      a: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    testValidatePairsWithArrayString(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    testValidatePairsWithArrayUint(
      A: string[],
      a: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  getStorageArray(overrides?: CallOverrides): Promise<string[]>;

  setStorageArray(
    A: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storageArray(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  testContains(
    A: string[],
    a: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  testHasDuplicate(A: string[], overrides?: CallOverrides): Promise<boolean>;

  testIndexOf(
    A: string[],
    a: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean]>;

  testPop(
    A: string[],
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], string]>;

  testRemove(
    A: string[],
    a: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  testRemoveStorage(
    a: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testValidatePairsWithArrayAddress(
    A: string[],
    a: string[],
    overrides?: CallOverrides
  ): Promise<void>;

  testValidatePairsWithArrayBool(
    A: string[],
    a: boolean[],
    overrides?: CallOverrides
  ): Promise<void>;

  testValidatePairsWithArrayBytes(
    A: string[],
    a: BytesLike[],
    overrides?: CallOverrides
  ): Promise<void>;

  testValidatePairsWithArrayString(
    A: string[],
    a: string[],
    overrides?: CallOverrides
  ): Promise<void>;

  testValidatePairsWithArrayUint(
    A: string[],
    a: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    getStorageArray(overrides?: CallOverrides): Promise<string[]>;

    setStorageArray(A: string[], overrides?: CallOverrides): Promise<void>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    testContains(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    testHasDuplicate(A: string[], overrides?: CallOverrides): Promise<boolean>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean]>;

    testPop(
      A: string[],
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string]>;

    testRemove(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    testRemoveStorage(a: string, overrides?: CallOverrides): Promise<void>;

    testValidatePairsWithArrayAddress(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    testValidatePairsWithArrayBool(
      A: string[],
      a: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    testValidatePairsWithArrayBytes(
      A: string[],
      a: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    testValidatePairsWithArrayString(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    testValidatePairsWithArrayUint(
      A: string[],
      a: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getStorageArray(overrides?: CallOverrides): Promise<BigNumber>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testContains(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testHasDuplicate(
      A: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testPop(
      A: string[],
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testRemove(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testValidatePairsWithArrayAddress(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testValidatePairsWithArrayBool(
      A: string[],
      a: boolean[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testValidatePairsWithArrayBytes(
      A: string[],
      a: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testValidatePairsWithArrayString(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testValidatePairsWithArrayUint(
      A: string[],
      a: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStorageArray(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setStorageArray(
      A: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storageArray(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testContains(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testHasDuplicate(
      A: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testIndexOf(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testPop(
      A: string[],
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testRemove(
      A: string[],
      a: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testRemoveStorage(
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testValidatePairsWithArrayAddress(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testValidatePairsWithArrayBool(
      A: string[],
      a: boolean[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testValidatePairsWithArrayBytes(
      A: string[],
      a: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testValidatePairsWithArrayString(
      A: string[],
      a: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testValidatePairsWithArrayUint(
      A: string[],
      a: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
