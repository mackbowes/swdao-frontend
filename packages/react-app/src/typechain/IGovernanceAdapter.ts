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

export interface IGovernanceAdapterInterface extends utils.Interface {
  functions: {
    "getDelegateCalldata(address)": FunctionFragment;
    "getProposeCalldata(bytes)": FunctionFragment;
    "getRegisterCalldata(address)": FunctionFragment;
    "getRevokeCalldata()": FunctionFragment;
    "getVoteCalldata(uint256,bool,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDelegateCalldata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposeCalldata",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisterCalldata",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRevokeCalldata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteCalldata",
    values: [BigNumberish, boolean, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDelegateCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisterCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRevokeCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteCalldata",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGovernanceAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGovernanceAdapterInterface;

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
    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRegisterCalldata(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRevokeCalldata(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;
  };

  getDelegateCalldata(
    _delegatee: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getProposeCalldata(
    _proposalData: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getRegisterCalldata(
    _setToken: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getRevokeCalldata(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  getVoteCalldata(
    _proposalId: BigNumberish,
    _support: boolean,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string] & {
      _target: string;
      _value: BigNumber;
      _calldata: string;
    }
  >;

  callStatic: {
    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRegisterCalldata(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getRevokeCalldata(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string] & {
        _target: string;
        _value: BigNumber;
        _calldata: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegisterCalldata(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRevokeCalldata(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDelegateCalldata(
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposeCalldata(
      _proposalData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegisterCalldata(
      _setToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRevokeCalldata(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVoteCalldata(
      _proposalId: BigNumberish,
      _support: boolean,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
