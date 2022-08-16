import { ethers } from 'ethers';
import { SWX, BONDS } from '../../utils/const';
import abiSwx from '../../utils/abi/AbiSwx.json';
import abiBonds from '../../utils/abi/AbiBonds.json';

const swxContract = new ethers.Contract(SWX, abiSwx, undefined);
const bondsContract = new ethers.Contract(BONDS, abiBonds, undefined);

export const approveCheck = async (ethersPack) => {
	const { address, walletProvider } = ethersPack;
	const swxContractRead = swxContract.connect(walletProvider);
	return await swxContractRead.allowance(address, BONDS);
};

export const approve = async (ethersPack, amountDeposit) => {
	const { signer } = ethersPack;
	const swxContractWrite = swxContract.connect(signer);
	let approval;
	try {
		approval = await swxContractWrite.approve(BONDS, amountDeposit);
	} catch (error) {
		return error;
	}
	return { code: (await approval.wait()).status };
};

export const deposit = async (ethersPack, amountDeposit) => {
	const { signer } = ethersPack;
	const bondsContractWrite = bondsContract.connect(signer);
	let depositTx;
	try {
		depositTx = await bondsContractWrite.stake(amountDeposit);
	} catch (error) {
		return error;
	}
	return { code: (await depositTx.wait()).status };
};

export const withdraw = async (ethersPack) => {
	const { signer } = ethersPack;
	const bondsContractWrite = bondsContract.connect(signer);
	let withdrawTx;
	try {
		withdrawTx = await bondsContractWrite.withdraw();
	} catch (error) {
		return error;
	}
	return { code: (await withdrawTx.wait()).status };
};
