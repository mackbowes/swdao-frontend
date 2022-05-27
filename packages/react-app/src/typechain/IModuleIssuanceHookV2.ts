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

export interface IModuleIssuanceHookV2Interface extends utils.Interface {
  functions: {
    "componentIssueHook(address,uint256,address,bool)": FunctionFragment;
    "componentRedeemHook(address,uint256,address,bool)": FunctionFragment;
    "getIssuanceAdjustments(address,uint256)": FunctionFragment;
    "getRedemptionAdjustments(address,uint256)": FunctionFragment;
    "moduleIssueHook(address,uint256)": FunctionFragment;
    "moduleRedeemHook(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "componentIssueHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "componentRedeemHook",
    values: [string, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuanceAdjustments",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedemptionAdjustments",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleIssueHook",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleRedeemHook",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "componentIssueHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "componentRedeemHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuanceAdjustments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedemptionAdjustments",
    data: BytesLike
  ): Result;
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

export interface IModuleIssuanceHookV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IModuleIssuanceHookV2Interface;

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
    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIssuanceAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRedemptionAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
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

  componentIssueHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    _isEquity: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  componentRedeemHook(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    _component: string,
    _isEquity: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIssuanceAdjustments(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRedemptionAdjustments(
    _setToken: string,
    _setTokenQuantity: BigNumberish,
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
    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getIssuanceAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

    getRedemptionAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]]>;

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
    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIssuanceAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRedemptionAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
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
    componentIssueHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    componentRedeemHook(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      _component: string,
      _isEquity: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIssuanceAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRedemptionAdjustments(
      _setToken: string,
      _setTokenQuantity: BigNumberish,
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
