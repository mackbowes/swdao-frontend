import { BigNumber, utils } from 'ethers';
import { SWX, SWD, BONDS } from '../../utils/const';

export const getSwxBalance = async (address) => {
	const req = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ addressUser: address, addressToken: SWX }),
	};
	return await (await fetch('/api/bonds/getUserBalance', req)).json();
};

export const getSwdBalance = async (address) => {
	const req = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ addressUser: address, addressToken: SWD }),
	};
	return await (await fetch('/api/bonds/getUserBalance', req)).json();
};

export const getContractInfo = async () => {
	const req = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			address: BONDS,
			slotNumber: BigNumber.from(0),
		}),
	};
	const slot0 = await (await fetch('/api/bonds/getStorageAt', req)).json();
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

export const getValues = async () => {
	return await (await fetch('/api/bonds/getValues')).json();
};

export const getSwdAvailable = async (address) => {
	const req = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ address }),
	};
	return await (await fetch('/api/bonds/getUserSwdAvailable', req)).json();
};

export const getBondsPage = async (address, page, amountToView) => {
	const req = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ address, page, amountToView }),
	};
	return await (await fetch('/api/bonds/getBondsPage', req)).json();
};
