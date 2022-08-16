import { BigNumber, utils } from 'ethers';
import {
	getBalance,
	getBondsPageB,
	getStorageAt,
	getUserSwdAvailable,
} from '../../../../services/backend';
import { SWX, SWD, BONDS } from '../../utils/const';

export const getSwxBalance = async (address) => {
	return await await getBalance(address, SWX);
};

export const getSwdBalance = async (address) => {
	return await await getBalance(address, SWD);
};

export const getContractInfo = async () => {
	const slot0 = await await getStorageAt(BONDS, BigNumber.from(0));
	const swdRemaining = BigNumber.from(utils.hexDataSlice(slot0, 22, 32));
	const bonusMin = BigNumber.from(utils.hexDataSlice(slot0, 21, 22));
	const bonusMax = BigNumber.from(utils.hexDataSlice(slot0, 20, 21));
	const bonusModifier = BigNumber.from(utils.hexDataSlice(slot0, 6, 20));
	const bonusResetDate = BigNumber.from(utils.hexDataSlice(slot0, 0, 6));
	const now = BigNumber.from(Math.floor(Date.now() / 1000));
	const bonusRawThing = now.sub(bonusResetDate).mul(bonusModifier);
	const bonusRaw = Math.floor(bonusRawThing.div('1000000000000000000').add(bonusMin));
	const rate = bonusRaw > bonusMax ? bonusMax : bonusRaw;
	const apy = (10 * (Math.sqrt(rate + 100) - 10)).toString().substring(0, 4);
	const mpy = (100 * Math.pow(apy / 100 + 1, 1 / 12) - 100).toString().substring(0, 4);
	const wpy = (100 * Math.pow(apy / 100 + 1, 1 / 52) - 100).toString().substring(0, 4);
	return { swdRemaining, reward: rate.toString(), apy, mpy, wpy };
};

export const getSwdAvailable = async (address) => {
	return await await getUserSwdAvailable(address);
};

export const getBondsPage = async (address, page, amountToView) => {
	return await await getBondsPageB(address, page, amountToView);
};
