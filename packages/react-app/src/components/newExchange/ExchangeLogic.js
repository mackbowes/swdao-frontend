import { ethers, BigNumber, constants } from 'ethers';
import {
	ZERO_EX_ISSUANCE,
	ZERO_EX_PROXY,
	BALANCER_VAULT,
	SWD_TREASURY,
	MATIC_ADDRESS,
	WMATIC_ADDRESS,
	BALANCER_POOL_IDS,
} from './settings';
import tokenABI from './abi/ERC20.json';
import tokensetABI from './abi/TokenSet.json';
import tokensetZeroExABI from './abi/ExchangeIssuanceZeroEx.json';
import vaultABI from './abi/VaultAbi.json';

const BASIC = '0x38E5462BBE6A72F79606c1A0007468aA4334A92b';
const STANDARD = '0x3E7f7F520e4e52a0c139d77a5487586012C90F07';
const DEBT = '0xf2dC2f456b98Af9A6bEEa072AF152a7b0EaA40C9';

export const approve = async (tokenset, useBalancerPool, opts) => {
	let approval;
	try {
		approval = await new ethers.Contract(opts.tokenSend, tokenABI, opts.ethers.signer).approve(
			useBalancerPool ? BALANCER_VAULT : tokenset ? ZERO_EX_ISSUANCE : ZERO_EX_PROXY,
			opts.amountSend,
		);
	} catch (error) {
		return error;
	}
	return { code: (await approval.wait()).status };
};

export const approveCheck = async (tokenset, useBalancerPool, opts) => {
	if (opts.tokenSend == MATIC_ADDRESS) return opts.amountSend;
	return await new ethers.Contract(opts.tokenSend, tokenABI, opts.ethers.provider).allowance(
		opts.ethers.address,
		useBalancerPool ? BALANCER_VAULT : tokenset ? ZERO_EX_ISSUANCE : ZERO_EX_PROXY,
	);
};

export const trade = async (buySell, tokenset, useBalancerPool, opts) => {
	if ((await approveCheck(tokenset, useBalancerPool, opts)).lt(opts.amountSend))
		return { code: 4001, message: 'Not approved' };
	return useBalancerPool
		? buyBalancerToken(opts)
		: tokenset
		? buySell
			? sellTokenset(opts)
			: buyTokenset(opts)
		: buy0xToken(opts);
};

const buyTokenset = async (opts) => {
	// Get TokenSet allocations
	const reqAlloc = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ address: opts.tokenReceive }),
	};
	const allocation = (await (await fetch('/api/tokens/getInfo', reqAlloc)).json()).allocation;
	// Request 0x transaction data for each position (send token => position amount)
	const baseZeroEx =
		'https://polygon.api.0x.org/swap/v1/quote?intentOnFilling=true&enableSlippageProtection=true&sellToken=' +
		(opts.tokenSend == MATIC_ADDRESS ? 'WMATIC' : opts.tokenSend);
	let sellAmountFinal = BigNumber.from(0);
	const zeroExData = await Promise.all(
		allocation.map(async (position) => {
			const buyToken = position[0];
			if (opts.tokenSend == MATIC_ADDRESS) {
				if (buyToken.toLowerCase() == WMATIC_ADDRESS.toLowerCase()) return '0x';
			} else {
				if (buyToken.toLowerCase() == opts.tokenSend.toLowerCase()) return '0x';
			}
			const buyAmount = opts.amountReceive
				.mul(position[2])
				.div(BigNumber.from(10).pow(18))
				.toString();
			const zeroExResponse = await (
				await fetch(baseZeroEx + '&buyToken=' + buyToken + '&buyAmount=' + buyAmount)
			).json();
			sellAmountFinal = sellAmountFinal.add(zeroExResponse.sellAmount);
			return zeroExResponse.data;
		}),
	);
	if (sellAmountFinal.gt(opts.amountSend)) return { code: -1, message: 'Too much slippage' };
	// Find correct TokenSet issuance module
	const issuanceModule = { address: undefined, debt: false };
	const modules = await new ethers.Contract(
		opts.tokenReceive,
		tokensetABI,
		opts.ethers.provider,
	).getModules();
	if (modules.includes(BASIC)) {
		issuanceModule.address = BASIC;
	} else if (modules.includes(STANDARD)) {
		issuanceModule.address = STANDARD;
	} else if (modules.includes(DEBT)) {
		issuanceModule.address = DEBT;
		issuanceModule.debt = true;
	} else {
		return { code: -2, message: 'Set failed to report modules' };
	}
	// Transact with the ExchangeIssuanceZeroEx contract
	const zeroExIssuance = new ethers.Contract(
		ZERO_EX_ISSUANCE,
		tokensetZeroExABI,
		opts.ethers.signer,
	);
	if (opts.tokenSend == MATIC_ADDRESS) {
		let issue;
		try {
			issue = await zeroExIssuance.issueExactSetFromETH(
				opts.tokenReceive, // TokenSet address
				opts.amountReceive, // Required TokenSet receive amount
				zeroExData, // 0x transaction data for each TokenSet position
				issuanceModule.address, // The issuance module which governs the TokenSet
				issuanceModule.debt, // Whether the above module is a DebtIssuanceModule
				{ value: opts.amountSend }, // Amount of MATIC to send
			);
		} catch (error) {
			if (error?.error?.data?.message == 'execution reverted: ExchangeIssuance: OVERSPENT ETH')
				return { code: -1, message: 'Too much slippage' };
			return error;
		}
		return { code: (await issue.wait()).status };
	} else {
		let issue;
		try {
			issue = await zeroExIssuance.issueExactSetFromToken(
				opts.tokenReceive, // TokenSet address
				opts.tokenSend, // Sale token address
				opts.amountReceive, // Required TokenSet receive amount
				opts.amountSend, // Maximum amount of sale token to be sent
				zeroExData, // 0x transaction data for each TokenSet position
				issuanceModule.address, // The issuance module which governs the TokenSet
				issuanceModule.debt, // Whether the above module is a DebtIssuanceModule
			);
		} catch (error) {
			return error;
		}
		return { code: (await issue.wait()).status };
	}
};

const sellTokenset = async (opts) => {
	// Get TokenSet allocations
	const reqAlloc = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ address: opts.tokenSend }),
	};
	const allocation = (await (await fetch('/api/tokens/getInfo', reqAlloc)).json()).allocation;
	// Request 0x transaction data for each position (position amount => receive token)
	const baseZeroEx =
		'https://polygon.api.0x.org/swap/v1/quote?intentOnFilling=true&enableSlippageProtection=true&buyToken=' +
		(opts.tokenReceive == MATIC_ADDRESS ? 'WMATIC' : opts.tokenReceive);
	let buyAmountFinal = BigNumber.from(0);
	const zeroExData = await Promise.all(
		allocation.map(async (position) => {
			const sellToken = position[0];
			const sellAmount = opts.amountSend
				.mul(position[2])
				.div(BigNumber.from(10).pow(18))
				.toString();
			if (opts.tokenReceive == MATIC_ADDRESS) {
				if (sellToken.toLowerCase() == WMATIC_ADDRESS.toLowerCase()) {
					buyAmountFinal = buyAmountFinal.add(sellAmount);
					return '0x';
				}
			} else {
				if (sellToken.toLowerCase() == opts.tokenReceive.toLowerCase()) {
					buyAmountFinal = buyAmountFinal.add(sellAmount);
					return '0x';
				}
			}
			const zeroExResponse = await (
				await fetch(baseZeroEx + '&sellToken=' + sellToken + '&sellAmount=' + sellAmount)
			).json();
			buyAmountFinal = buyAmountFinal.add(zeroExResponse.buyAmount);
			return zeroExResponse.data;
		}),
	);
	if (buyAmountFinal.lt(opts.amountReceive)) return { code: -1, message: 'Too much slippage' };
	// Find correct TokenSet issuance module
	const issuanceModule = { address: undefined, debt: false };
	const modules = await new ethers.Contract(
		opts.tokenSend,
		tokensetABI,
		opts.ethers.provider,
	).getModules();
	if (modules.includes(BASIC)) {
		issuanceModule.address = BASIC;
	} else if (modules.includes(STANDARD)) {
		issuanceModule.address = STANDARD;
	} else if (modules.includes(DEBT)) {
		issuanceModule.address = DEBT;
		issuanceModule.debt = true;
	} else {
		return { code: -2, message: 'Set failed to report modules' };
	}
	// Transact with the ExchangeIssuanceZeroEx contract
	const zeroExIssuance = new ethers.Contract(
		ZERO_EX_ISSUANCE,
		tokensetZeroExABI,
		opts.ethers.signer,
	);
	if (opts.tokenReceive == MATIC_ADDRESS) {
		let redeem;
		try {
			redeem = await zeroExIssuance.redeemExactSetForETH(
				opts.tokenSend, // TokenSet address
				opts.amountSend, // Amount of TokenSet to send
				opts.amountReceive, // Required MATIC receive amount
				zeroExData, // 0x transaction data for each TokenSet position
				issuanceModule.address, // The issuance module which governs the TokenSet
				issuanceModule.debt, // Whether the above module is a DebtIssuanceModule
			);
		} catch (error) {
			return error;
		}
		return { code: (await redeem.wait()).status };
	} else {
		let redeem;
		try {
			redeem = await zeroExIssuance.redeemExactSetForToken(
				opts.tokenSend, // TokenSet address
				opts.tokenReceive, // Buy token address
				opts.amountSend, // Amount of TokenSet to send
				opts.amountReceive, // Required token receive amount
				zeroExData, // 0x transaction data for each TokenSet position
				issuanceModule.address, // The issuance module which governs the TokenSet
				issuanceModule.debt, // Whether the above module is a DebtIssuanceModule
			);
		} catch (error) {
			return error;
		}
		return { code: (await redeem.wait()).status };
	}
};

const buy0xToken = async (opts) => {
	// Construct 0x API request
	const sellToken = opts.tokenSend == MATIC_ADDRESS ? 'MATIC' : opts.tokenSend;
	const buyToken = opts.tokenReceive == MATIC_ADDRESS ? 'MATIC' : opts.tokenReceive;
	const buyTokenPercentageFee = opts.tokenReceive == MATIC_ADDRESS ? '0' : '0.001';
	const zeroExURL =
		'https://polygon.api.0x.org/swap/v1/quote?intentOnFilling=true&enableSlippageProtection=true&sellToken=' +
		sellToken +
		'&buyToken=' +
		buyToken +
		'&takerAddress=' +
		opts.ethers.address +
		'&buyTokenPercentageFee=' +
		buyTokenPercentageFee +
		'&feeRecipient=' +
		SWD_TREASURY +
		(opts.sendReceiveLastChanged
			? '&buyAmount=' + opts.amountReceive
			: '&sellAmount=' + opts.amountSend);
	// Issue 0x API request
	const {
		buyAmount = 0,
		sellAmount,
		to,
		data,
		value,
		gasPrice: maxFeePerGas,
		gas: gasLimit,
	} = await (await fetch(zeroExURL)).json();
	// Check API results
	if (to?.toLowerCase() != ZERO_EX_PROXY.toLowerCase())
		return { code: -3, message: '0x API call failed' };
	if (
		BigNumber.from(buyAmount).lt(opts.amountReceive) ||
		BigNumber.from(sellAmount).gt(opts.amountSend)
	)
		return { code: -1, message: 'Too much slippage' };
	// Send 0x transaction
	let tradeTx;
	try {
		tradeTx = await opts.ethers.signer.sendTransaction({
			to,
			data,
			value: BigNumber.from(value),
			gasLimit: BigNumber.from(gasLimit),
			maxFeePerGas: BigNumber.from(maxFeePerGas),
		});
	} catch (error) {
		return error;
	}
	return { code: (await tradeTx.wait()).status };
};

const buyBalancerToken = async (opts) => {
	const sellToken = opts.tokenSend == MATIC_ADDRESS ? constants.AddressZero : opts.tokenSend;
	const buyToken = opts.tokenReceive == MATIC_ADDRESS ? constants.AddressZero : opts.tokenReceive;
	const value = sellToken === constants.AddressZero ? BigNumber.from(opts.amountSend) : 0;
	const vaultContract = new ethers.Contract(BALANCER_VAULT, vaultABI, opts.ethers.signer);
	let swapTx;
	try {
		swapTx = await vaultContract.swap(
			[
				BALANCER_POOL_IDS[0],
				opts.sendReceiveLastChanged ? '0' : '1',
				sellToken,
				buyToken,
				opts.sendReceiveLastChanged ? opts.amountSend : opts.amountReceive,
				'0x',
			],
			[opts.ethers.address, false, opts.ethers.address, false],
			opts.sendReceiveLastChanged ? opts.amountReceive : opts.amountSend,
			Math.round(new Date().getTime() / 1000) + 300,
			{ value },
		);
	} catch (error) {
		return error;
	}
	return { code: (await swapTx.wait()).status };
};
