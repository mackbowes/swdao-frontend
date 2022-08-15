import { BigNumber } from 'ethers';
import { bondsContract } from '../../utils/provider';

export default async function handler(req, res) {
	const { address } = JSON.parse(req.body);
	const available = BigNumber.from(await bondsContract.balanceAvailable(address));
	res.status(available ? 201 : 500).json(available);
}