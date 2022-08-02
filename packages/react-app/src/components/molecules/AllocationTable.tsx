import { Center, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import PromiseThrottle from 'promise-throttle';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getSingleTokenPrice, getTokenSetAllocation } from '../../services/backend';
import { breakpointState, extendedTokenDetailsState } from '../../state';
import { TokenSummaryInfoMap } from '../../types';
import { getTokenUrl } from '../../utils';
import { CoinIcon } from '../atoms/CoinIcon';
import DisplayNumber from '../atoms/DisplayNumber';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

export type PositionMap = {
	[key: string]: {
		symbol: string;
		quantity: string;
		allocation: string;
		value: string;
		amount: number;
		change: string;
	};
};

type AllocationTableProps = {
	symbol: string;
};

export async function getPrices(componentTokens: TokenSummaryInfoMap, chainId: string) {
	const prices: Record<string, [number, number]> = {};

	const promiseThrottle = new PromiseThrottle({
		requestsPerSecond: 120,
		promiseImplementation: Promise,
	});
	const promises = Object.keys(componentTokens).map(async (sym) => {
		const address = componentTokens[sym].address;
		return promiseThrottle.add(async () => {
			const data = await getSingleTokenPrice(address);
			if (data) {
				const pair: [number, number] = [data.currentPrice || 0, data.changePercentDay || 0];
				prices[sym] = pair;
			}
		});
	});
	await Promise.all(promises);

	return prices;
}

export function AllocationTable(props: AllocationTableProps): JSX.Element {
	const { symbol } = props;
	const breakpoint = useRecoilValue(breakpointState);
	const tokenDetails = useRecoilValue(extendedTokenDetailsState);
	const [positionMap, setPositionMap] = useState<PositionMap>({});

	useEffect(() => {
		if (tokenDetails && tokenDetails[symbol]) {
			setPositionMap(tokenDetails[symbol].allocationTable);
		}
	}, [tokenDetails]);

	const tableRows = useMemo(() => {
		const keys = Object.keys(positionMap);
		if (!keys.length) {
			return (
				<Tr>
					<Td colSpan={breakpoint === 'sm' ? 4 : 5}>
						<Center>
							<Spinner size="lg" />
						</Center>
					</Td>
				</Tr>
			);
		}
		keys.sort();
		return keys.map((address) => {
			const position = positionMap[address];
			const symbol = position.symbol;
			if (parseFloat(position.quantity) < 0.001) {
				return;
			}
			return (
				<Tr key={symbol} color="purple">
					<Td padding="0 0 0 0.5em" className="nobreak coin">
						<CoinIcon symbol={symbol} src={getTokenUrl(symbol)[0]} />
						<Text fontSize="0.7rem" d="inline-block" className="symbol">
							{symbol}
						</Text>
					</Td>
					{breakpoint !== 'sm' && (
						<Td textAlign="center" fontSize="0.8rem" padding="0 0.25em">
							<DisplayNumber value={position.quantity} symbol={symbol} hideSymbol />
						</Td>
					)}
					{breakpoint !== 'sm' && (
						<Td textAlign="center" fontSize="0.8rem" padding="0 0.25em">
							{position.value}
						</Td>
					)}
					<Td textAlign="center" fontSize="0.8rem" padding="0 0.25em">
						{position.allocation}
					</Td>
					<Td textAlign="center" fontSize="0.8rem" padding="0 0.25em">
						{position.change}
					</Td>
				</Tr>
			);
		});
	}, [breakpoint, positionMap]);

	return (
		<Table
			variant="unstyled"
			bgColor="blue5"
			className="token"
			fontSize="0.9rem"
			borderRadius="2em"
		>
			<Thead>
				<Tr color="alttext" textAlign="center">
					<Th textAlign="center" bgColor="bodydark" borderRadius="2em 0 0 0">
						Name
					</Th>
					{breakpoint !== 'sm' && (
						<Th textAlign="center" bgColor="bodydark">
							Quantity per token
						</Th>
					)}
					{breakpoint !== 'sm' && (
						<Th textAlign="center" bgColor="bodydark">
							Value per token
						</Th>
					)}
					<Th textAlign="center" bgColor="bodydark">
						Allocation
					</Th>
					<Th textAlign="center" bgColor="bodydark" borderRadius="0 2em 0 0">
						24hr Change
					</Th>
				</Tr>
			</Thead>
			<Tbody>{tableRows}</Tbody>
		</Table>
	);
}
