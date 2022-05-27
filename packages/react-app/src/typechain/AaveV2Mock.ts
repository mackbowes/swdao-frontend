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

export interface AaveV2MockInterface extends utils.Interface {
  functions: {
    "initializeModuleOnSet(address)": FunctionFragment;
    "testGetBorrowCalldata(address,address,uint256,uint256,uint16,address)": FunctionFragment;
    "testGetDepositCalldata(address,address,uint256,address,uint16)": FunctionFragment;
    "testGetRepayCalldata(address,address,uint256,uint256,address)": FunctionFragment;
    "testGetSetUserUseReserveAsCollateralCalldata(address,address,bool)": FunctionFragment;
    "testGetSwapBorrowRateModeCalldata(address,address,uint256)": FunctionFragment;
    "testGetWithdrawCalldata(address,address,uint256,address)": FunctionFragment;
    "testInvokeBorrow(address,address,address,uint256,uint256)": FunctionFragment;
    "testInvokeDeposit(address,address,address,uint256)": FunctionFragment;
    "testInvokeRepay(address,address,address,uint256,uint256)": FunctionFragment;
    "testInvokeSetUserUseReserveAsCollateral(address,address,address,bool)": FunctionFragment;
    "testInvokeSwapBorrowRateMode(address,address,address,uint256)": FunctionFragment;
    "testInvokeWithdraw(address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializeModuleOnSet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetBorrowCalldata",
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetDepositCalldata",
    values: [string, string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetRepayCalldata",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetSetUserUseReserveAsCollateralCalldata",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetSwapBorrowRateModeCalldata",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testGetWithdrawCalldata",
    values: [string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeBorrow",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeDeposit",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeRepay",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeSetUserUseReserveAsCollateral",
    values: [string, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeSwapBorrowRateMode",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "testInvokeWithdraw",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "initializeModuleOnSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetBorrowCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetDepositCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetRepayCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetSetUserUseReserveAsCollateralCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetSwapBorrowRateModeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testGetWithdrawCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeRepay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeSetUserUseReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeSwapBorrowRateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testInvokeWithdraw",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AaveV2Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveV2MockInterface;

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
    initializeModuleOnSet(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testGetBorrowCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetDepositCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _onBehalfOf: string,
      _referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetRepayCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetSetUserUseReserveAsCollateralCalldata(
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetSwapBorrowRateModeCalldata(
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetWithdrawCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testInvokeBorrow(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testInvokeDeposit(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testInvokeRepay(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testInvokeSetUserUseReserveAsCollateral(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testInvokeSwapBorrowRateMode(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testInvokeWithdraw(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  initializeModuleOnSet(
    _setToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testGetBorrowCalldata(
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _interestRateMode: BigNumberish,
    _referralCode: BigNumberish,
    _onBehalfOf: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testGetDepositCalldata(
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _onBehalfOf: string,
    _referralCode: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testGetRepayCalldata(
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _interestRateMode: BigNumberish,
    _onBehalfOf: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testGetSetUserUseReserveAsCollateralCalldata(
    _lendingPool: string,
    _asset: string,
    _useAsCollateral: boolean,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testGetSwapBorrowRateModeCalldata(
    _lendingPool: string,
    _asset: string,
    _rateMode: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testGetWithdrawCalldata(
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _receiver: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, string]>;

  testInvokeBorrow(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _interestRateMode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testInvokeDeposit(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testInvokeRepay(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    _interestRateMode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testInvokeSetUserUseReserveAsCollateral(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _useAsCollateral: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testInvokeSwapBorrowRateMode(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _rateMode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testInvokeWithdraw(
    _setToken: string,
    _lendingPool: string,
    _asset: string,
    _amountNotional: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    initializeModuleOnSet(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    testGetBorrowCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetDepositCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _onBehalfOf: string,
      _referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetRepayCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetSetUserUseReserveAsCollateralCalldata(
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetSwapBorrowRateModeCalldata(
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testGetWithdrawCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, string]>;

    testInvokeBorrow(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    testInvokeDeposit(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    testInvokeRepay(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testInvokeSetUserUseReserveAsCollateral(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    testInvokeSwapBorrowRateMode(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    testInvokeWithdraw(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    initializeModuleOnSet(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testGetBorrowCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetDepositCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _onBehalfOf: string,
      _referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetRepayCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetSetUserUseReserveAsCollateralCalldata(
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetSwapBorrowRateModeCalldata(
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testGetWithdrawCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testInvokeBorrow(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testInvokeDeposit(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testInvokeRepay(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testInvokeSetUserUseReserveAsCollateral(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testInvokeSwapBorrowRateMode(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testInvokeWithdraw(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializeModuleOnSet(
      _setToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testGetBorrowCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _referralCode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetDepositCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _onBehalfOf: string,
      _referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetRepayCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetSetUserUseReserveAsCollateralCalldata(
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetSwapBorrowRateModeCalldata(
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testGetWithdrawCalldata(
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testInvokeBorrow(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testInvokeDeposit(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testInvokeRepay(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      _interestRateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testInvokeSetUserUseReserveAsCollateral(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testInvokeSwapBorrowRateMode(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _rateMode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testInvokeWithdraw(
      _setToken: string,
      _lendingPool: string,
      _asset: string,
      _amountNotional: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
