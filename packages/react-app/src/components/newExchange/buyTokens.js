export const BUY_TOKENS = {
	'0x89': [
		{
			name: 'MATIC',
			ticker: 'MATIC',
			address: '0x0000000000000000000000000000000000001010',
			decimals: '18',
		},
		{
			name: 'WMATIC',
			ticker: 'WMATIC',
			address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
			decimals: '18',
		},
		{
			name: 'DAI',
			ticker: 'DAI',
			address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
			decimals: '18',
		},
		{
			name: 'USDC',
			ticker: 'USDC',
			address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
			decimals: '6',
		},
		{
			name: 'USDT',
			ticker: 'USDT',
			address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
			decimals: '6',
		},
		{
			name: 'WBTC',
			ticker: 'WBTC',
			address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
			decimals: '8',
		},
		{
			name: 'WETH',
			ticker: 'WETH',
			address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			decimals: '18',
		},
	],
};

export const BUY_TOKENS_BY_SYMBOL = (chainId) => {
	const tokens = {};
	BUY_TOKENS[chainId].map((t) => {
		tokens[t.ticker] = {
			name: t.name,
			address: t.address,
			decimals: t.decimals,
		};
	});
	return tokens;
};
