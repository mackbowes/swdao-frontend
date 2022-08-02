import { Box, popperCSSVars } from '@chakra-ui/react';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { DEFAULT_CHAIN_ID } from '../../config';
import { PRODUCTS_BY_SYMBOL } from '../../config/products';
import { getSingleTokenPrice, getTokenSetAllocation } from '../../services/backend';
import { allSwappableTokensState, breakpointState } from '../../state';
import { TokenSummaryInfoMap } from '../../types';
import { decimalsOf } from '../../utils/contracts';
import { currencyFormatter, PositionMap } from './AllocationTable';
import classNames from './inTradeDisplay.module.css';

interface Props {
	symbol: string;
}
interface Pos {
	component: string;
	unit: string;
}

async function getPrices(componentTokens: string[]) {
	const prices: Record<string, [number, number]> = {};
	const promises = Object.keys(componentTokens).map(async (i) => {
		const address = componentTokens[parseInt(i)];
		const data = await getSingleTokenPrice(address);
		if (data) {
			const pair: [number, number] = [data.currentPrice || 0, data.changePercentDay || 0];
			prices[address] = pair;
		}
	});
	await Promise.all(promises);

	return prices;
}

export function InTradeDisplay(props: Props): JSX.Element {
	const { symbol } = props;
	const [inTrade, setInTrade] = useState<number>(0);
	const breakpoint = useRecoilValue(breakpointState);
	const [positions, setPositions] = useState<
		{
			component: string;
			unit: string;
		}[]
	>();
	const [componentTokens, setComponentTokens] = useState<TokenSummaryInfoMap>({});
	const [positionMap, setPositionMap] = useState<PositionMap>({});
	const [priceMap, setPriceMap] = useState<Record<string, [number, number]>>({});
	const [addresses, setAddresses] = useState<string[]>([]);

	const [loading, setLoading] = useState<boolean>(false);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [updated, setUpdated] = useState(0);
	const swappable = useRecoilValue(allSwappableTokensState);
	const allowedTokens = useMemo(
		() => ({ ...swappable.ERC20, ...swappable.TokenProducts }),
		[swappable],
	);

	useEffect(() => {
		if (
			Object.keys(addresses).length > 0 &&
			!loading &&
			!loaded &&
			new Date().getTime() - updated > 300
		) {
			setUpdated(new Date().getTime());
			setLoading(true);
			getPrices(addresses)
				.then((prices) => {
					setPriceMap(prices);
					setLoaded(true);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [componentTokens, loading, loaded]);

	useEffect(() => {
		setLoading(true);
		getTokenSetAllocation(PRODUCTS_BY_SYMBOL[symbol].addresses['0x89'])
			.then((r) => {
				setPositions(r);
				const components: string[] = [];
				if (r) {
					r.forEach((c) => {
						components.push(c.component);
					});
				}
				setAddresses(components);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const addressMap: Record<string, string> = useMemo(() => {
		const map: Record<string, string> = {};
		const tokenAddresses = {
			...allowedTokens,
			...componentTokens,
		};
		Object.keys(tokenAddresses).forEach((token) => {
			map[tokenAddresses[token].address] = token;
		});
		return map;
	}, [allowedTokens, componentTokens]);
	useEffect(() => {
		if (loaded && positions && Object.keys(positionMap).length !== positions.length) {
			const map: PositionMap = {};
			let total = 0;
			positions.forEach((position) => {
				const { component: address, unit: balance } = position;
				const symbol = addressMap[address];
				const quantity = formatUnits(balance, decimalsOf(symbol));
				const [price, change] = priceMap[address] || [0, 0];
				const value = price * parseFloat(quantity);
				map[address] = {
					quantity,
					allocation: '',
					amount: value,
					value: currencyFormatter.format(value),
					change: `${change.toFixed(2)}%`,
				};
				total += value;
			});
			Object.keys(map).forEach((address) => {
				const percent = (map[address].amount / total) * 100;
				map[address].allocation = `${percent.toFixed(2)}%`;
			});
			setPositionMap(map);
		}
	}, [positions, loaded, componentTokens, priceMap, positionMap]);

	// useEffect(() => {
	// 	if (addresses.length > 0) {
	// 		// We've got a list of addresses of components of the tokenset
	// 		// but we need a symbol for all of them, so that we can use them
	// 		// in the main getBalance Loop
	// 		getSymbolMap(addresses, provider).then((symbolMap) => {
	// 			setComponentTokens(symbolMap);
	// 		});
	// 	}
	// }, [addresses, allowedTokens, isConnected, positions, provider, symbol]);
	useEffect(() => {
		if ('0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' in positionMap) {
			setInTrade(
				parseFloat(
					positionMap['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'].allocation.slice(0, -1),
				),
			);
		}
	}, [positionMap]);
	let row = <Box></Box>;
	if (inTrade >= 95) {
		row = (
			<Box display="flex" alignItems="center" paddingLeft="1rem">
				<svg height="14" width="14">
					<circle cx="7" cy="7" r="7" fill="yellow" />
				</svg>
				<p className={classNames.itdp}>Seeking Entry</p>
			</Box>
		);
	}
	if (inTrade < 95) {
		row = (
			<Box display="flex" alignItems="center" paddingLeft="1rem">
				<svg height="14" width="14" className={classNames.blink}>
					<circle cx="7" cy="7" r="7" fill="green" />
				</svg>
				<p className={classNames.itdpa}>Partial Trade</p>
			</Box>
		);
	}
	if (inTrade < 50) {
		row = (
			<Box display="flex" alignItems="center" paddingLeft="1rem">
				<svg height="14" width="14" className={classNames.blink}>
					<circle cx="7" cy="7" r="7" fill="green" />
				</svg>
				<p className={classNames.itdpa}>In Trade</p>
			</Box>
		);
	}
	if (Object.keys(positionMap).length === 0) {
		row = (
			<Box className={classNames.loadingDotBox}>
				<div className={classNames.loadingDot}></div>
			</Box>
		);
	}

	return row;
}
