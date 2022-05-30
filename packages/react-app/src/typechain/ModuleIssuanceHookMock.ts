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

export interface ModuleIssuanceHookMockInterface extends utils.Interface {
  functions: {
    "addExternalPosition(address,address,int256)": FunctionFragment;
    "componentIssueHook(address,uint256,address,bool)": FunctionFragment;
    "componentRedeemHook(address,uint256,address,bool)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "moduleIssueHook(address,uint256)": FunctionFragment;
    "moduleRedeemHook(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addExternalPosition",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "componentIssueHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "componentRedeemHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "moduleIssueHook",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleRedeemHook",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addExternalPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "componentIssueHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "componentRedeemHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moduleIssueHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "moduleRedeemHook",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ModuleIssuanceHookMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ModuleIssuanceHookMockInterface;

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
    addExternalPosition(
      _setToken: string,
      _component: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addExternalPosition(
    _setToken: string,
    _component: string,
    _quantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  componentIssueHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  componentRedeemHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _setToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleIssueHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleRedeemHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addExternalPosition(
      _setToken: string,
      _component: string,
      _quantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(_setToken: string, overrides?: CallOverrides): Promise<void>;

    moduleIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addExternalPosition(
      _setToken: string,
      _component: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addExternalPosition(
      _setToken: string,
      _component: string,
      _quantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}