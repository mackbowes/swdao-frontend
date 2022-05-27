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

export interface IssuanceValidationUtilsMockInterface extends utils.Interface {
  functions: {
    "testValidateCollateralizationPostTransferInPreHook(address,address,uint256,uint256)": FunctionFragment;
    "testValidateCollateralizationPostTransferOut(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "testValidateCollateralizationPostTransferInPreHook",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testValidateCollateralizationPostTransferOut",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "testValidateCollateralizationPostTransferInPreHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testValidateCollateralizationPostTransferOut",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IssuanceValidationUtilsMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IssuanceValidationUtilsMockInterface;

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
    testValidateCollateralizationPostTransferInPreHook(
      _setToken: string,
      _component: string,
      _initialSetSupply: BigNumberish,
      _componentQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    testValidateCollateralizationPostTransferOut(
      _setToken: string,
      _component: string,
      _finalSetSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  testValidateCollateralizationPostTransferInPreHook(
    _setToken: string,
    _component: string,
    _initialSetSupply: BigNumberish,
    _componentQuantity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  testValidateCollateralizationPostTransferOut(
    _setToken: string,
    _component: string,
    _finalSetSupply: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    testValidateCollateralizationPostTransferInPreHook(
      _setToken: string,
      _component: string,
      _initialSetSupply: BigNumberish,
      _componentQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    testValidateCollateralizationPostTransferOut(
      _setToken: string,
      _component: string,
      _finalSetSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    testValidateCollateralizationPostTransferInPreHook(
      _setToken: string,
      _component: string,
      _initialSetSupply: BigNumberish,
      _componentQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testValidateCollateralizationPostTransferOut(
      _setToken: string,
      _component: string,
      _finalSetSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    testValidateCollateralizationPostTransferInPreHook(
      _setToken: string,
      _component: string,
      _initialSetSupply: BigNumberish,
      _componentQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testValidateCollateralizationPostTransferOut(
      _setToken: string,
      _component: string,
      _finalSetSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
