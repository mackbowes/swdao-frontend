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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface LiquidityGaugeRewardInterface extends utils.Interface {
  functions: {
    "user_checkpoint(address)": FunctionFragment;
    "claimable_tokens(address)": FunctionFragment;
    "claimable_reward(address)": FunctionFragment;
    "kick(address)": FunctionFragment;
    "set_approve_deposit(address,bool)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "claim_rewards()": FunctionFragment;
    "integrate_checkpoint()": FunctionFragment;
    "minter()": FunctionFragment;
    "crv_token()": FunctionFragment;
    "lp_token()": FunctionFragment;
    "controller()": FunctionFragment;
    "voting_escrow()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "future_epoch_time()": FunctionFragment;
    "approved_to_deposit(address,address)": FunctionFragment;
    "working_balances(address)": FunctionFragment;
    "working_supply()": FunctionFragment;
    "period()": FunctionFragment;
    "period_timestamp(uint256)": FunctionFragment;
    "integrate_inv_supply(uint256)": FunctionFragment;
    "integrate_inv_supply_of(address)": FunctionFragment;
    "integrate_checkpoint_of(address)": FunctionFragment;
    "integrate_fraction(address)": FunctionFragment;
    "inflation_rate()": FunctionFragment;
    "reward_contract()": FunctionFragment;
    "rewarded_token()": FunctionFragment;
    "reward_integral()": FunctionFragment;
    "reward_integral_for(address)": FunctionFragment;
    "rewards_for(address)": FunctionFragment;
    "claimed_rewards_for(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "user_checkpoint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable_tokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable_reward",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "kick", values: [string]): string;
  encodeFunctionData(
    functionFragment: "set_approve_deposit",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim_rewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "integrate_checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "crv_token", values?: undefined): string;
  encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_epoch_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approved_to_deposit",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "working_balances",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "working_supply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "period", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "period_timestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "integrate_inv_supply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "integrate_inv_supply_of",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "integrate_checkpoint_of",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "integrate_fraction",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "inflation_rate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reward_contract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewarded_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reward_integral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reward_integral_for",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rewards_for", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimed_rewards_for",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "user_checkpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimable_tokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimable_reward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set_approve_deposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claim_rewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "integrate_checkpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "crv_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_epoch_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approved_to_deposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "working_balances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "working_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "period", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "period_timestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "integrate_inv_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "integrate_inv_supply_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "integrate_checkpoint_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "integrate_fraction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inflation_rate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reward_contract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewarded_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reward_integral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reward_integral_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewards_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimed_rewards_for",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
    "UpdateLiquidityLimit(address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateLiquidityLimit"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber],
  { provider: string; value: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  { provider: string; value: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export type UpdateLiquidityLimitEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    user: string;
    original_balance: BigNumber;
    original_supply: BigNumber;
    working_balance: BigNumber;
    working_supply: BigNumber;
  }
>;

export type UpdateLiquidityLimitEventFilter = TypedEventFilter<UpdateLiquidityLimitEvent>;

export interface LiquidityGaugeReward extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidityGaugeRewardInterface;

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
    user_checkpoint(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable_tokens(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable_reward(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    kick(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set_approve_deposit(
      addr: string,
      can_deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(uint256,address)"(
      _value: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,bool)"(
      _value: BigNumberish,
      claim_rewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claim_rewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claim_rewards(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    integrate_checkpoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    crv_token(overrides?: CallOverrides): Promise<[string]>;

    lp_token(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    voting_escrow(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    future_epoch_time(overrides?: CallOverrides): Promise<[BigNumber]>;

    approved_to_deposit(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    working_balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    working_supply(overrides?: CallOverrides): Promise<[BigNumber]>;

    period(overrides?: CallOverrides): Promise<[BigNumber]>;

    period_timestamp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    integrate_inv_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    integrate_inv_supply_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    integrate_checkpoint_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    integrate_fraction(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    inflation_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    reward_contract(overrides?: CallOverrides): Promise<[string]>;

    rewarded_token(overrides?: CallOverrides): Promise<[string]>;

    reward_integral(overrides?: CallOverrides): Promise<[BigNumber]>;

    reward_integral_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewards_for(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    claimed_rewards_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  user_checkpoint(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable_tokens(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable_reward(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  kick(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set_approve_deposit(
    addr: string,
    can_deposit: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(uint256,address)"(
    _value: BigNumberish,
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,bool)"(
    _value: BigNumberish,
    claim_rewards: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claim_rewards()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claim_rewards(address)"(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  integrate_checkpoint(overrides?: CallOverrides): Promise<BigNumber>;

  minter(overrides?: CallOverrides): Promise<string>;

  crv_token(overrides?: CallOverrides): Promise<string>;

  lp_token(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  voting_escrow(overrides?: CallOverrides): Promise<string>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;

  approved_to_deposit(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  working_balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  working_supply(overrides?: CallOverrides): Promise<BigNumber>;

  period(overrides?: CallOverrides): Promise<BigNumber>;

  period_timestamp(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  integrate_inv_supply(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  integrate_inv_supply_of(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  integrate_checkpoint_of(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  integrate_fraction(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  inflation_rate(overrides?: CallOverrides): Promise<BigNumber>;

  reward_contract(overrides?: CallOverrides): Promise<string>;

  rewarded_token(overrides?: CallOverrides): Promise<string>;

  reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

  reward_integral_for(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewards_for(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimed_rewards_for(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    user_checkpoint(addr: string, overrides?: CallOverrides): Promise<boolean>;

    claimable_tokens(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable_reward(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kick(addr: string, overrides?: CallOverrides): Promise<void>;

    set_approve_deposit(
      addr: string,
      can_deposit: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(uint256,address)"(
      _value: BigNumberish,
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256)"(
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,bool)"(
      _value: BigNumberish,
      claim_rewards: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "claim_rewards()"(overrides?: CallOverrides): Promise<void>;

    "claim_rewards(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    integrate_checkpoint(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<string>;

    crv_token(overrides?: CallOverrides): Promise<string>;

    lp_token(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    voting_escrow(overrides?: CallOverrides): Promise<string>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;

    approved_to_deposit(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    working_balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    working_supply(overrides?: CallOverrides): Promise<BigNumber>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    period_timestamp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_inv_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_inv_supply_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_checkpoint_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_fraction(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inflation_rate(overrides?: CallOverrides): Promise<BigNumber>;

    reward_contract(overrides?: CallOverrides): Promise<string>;

    rewarded_token(overrides?: CallOverrides): Promise<string>;

    reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

    reward_integral_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards_for(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimed_rewards_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Deposit(address,uint256)"(
      provider?: string | null,
      value?: null
    ): DepositEventFilter;
    Deposit(provider?: string | null, value?: null): DepositEventFilter;

    "Withdraw(address,uint256)"(
      provider?: string | null,
      value?: null
    ): WithdrawEventFilter;
    Withdraw(provider?: string | null, value?: null): WithdrawEventFilter;

    "UpdateLiquidityLimit(address,uint256,uint256,uint256,uint256)"(
      user?: null,
      original_balance?: null,
      original_supply?: null,
      working_balance?: null,
      working_supply?: null
    ): UpdateLiquidityLimitEventFilter;
    UpdateLiquidityLimit(
      user?: null,
      original_balance?: null,
      original_supply?: null,
      working_balance?: null,
      working_supply?: null
    ): UpdateLiquidityLimitEventFilter;
  };

  estimateGas: {
    user_checkpoint(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable_tokens(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable_reward(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kick(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set_approve_deposit(
      addr: string,
      can_deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(uint256,address)"(
      _value: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256,bool)"(
      _value: BigNumberish,
      claim_rewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claim_rewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claim_rewards(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    integrate_checkpoint(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    crv_token(overrides?: CallOverrides): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    future_epoch_time(overrides?: CallOverrides): Promise<BigNumber>;

    approved_to_deposit(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    working_balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    working_supply(overrides?: CallOverrides): Promise<BigNumber>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    period_timestamp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_inv_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_inv_supply_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_checkpoint_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    integrate_fraction(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inflation_rate(overrides?: CallOverrides): Promise<BigNumber>;

    reward_contract(overrides?: CallOverrides): Promise<BigNumber>;

    rewarded_token(overrides?: CallOverrides): Promise<BigNumber>;

    reward_integral(overrides?: CallOverrides): Promise<BigNumber>;

    reward_integral_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards_for(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimed_rewards_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    user_checkpoint(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable_tokens(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable_reward(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kick(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set_approve_deposit(
      addr: string,
      can_deposit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(uint256,address)"(
      _value: BigNumberish,
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,bool)"(
      _value: BigNumberish,
      claim_rewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claim_rewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claim_rewards(address)"(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    integrate_checkpoint(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crv_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_epoch_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approved_to_deposit(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    working_balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    working_supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    period(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    period_timestamp(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    integrate_inv_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    integrate_inv_supply_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    integrate_checkpoint_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    integrate_fraction(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inflation_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reward_contract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewarded_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reward_integral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reward_integral_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewards_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimed_rewards_for(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
