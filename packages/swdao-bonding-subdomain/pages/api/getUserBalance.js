import { alchemyProvider } from '../../utils/provider';
import { BigNumber } from 'ethers';

export default async function handler(req, res) {
	const { addressUser, addressToken } = JSON.parse(req.body);
	const balance = BigNumber.from(
		(await alchemyProvider.core.getTokenBalances(addressUser, [addressToken]))
			.tokenBalances[0].tokenBalance
	);
	res.status(balance ? 201 : 500).json(balance);
}