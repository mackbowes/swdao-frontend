import { Box, Center, Spinner, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
// import { getSingleTokenPrice } from '../../services/backend';
import { timestampSorter } from '../../utils';
import { ChangeDisplay } from '../atoms/ChangeDisplay';
import { formatDate, formatNumber } from './TransactionsTable';

interface TradesMap {
	[timeStamp: number]: Trade;
}

interface Trade {
	component: string;
	status: 'Open' | 'Closed';
	side: 'Short' | 'Long';
	entryPrice: number;
	closePrice: number | undefined;
	pnl: number;
	entry: number;
	exit: number | undefined;
}

const SYMBOLS: { [key: string]: string } = {
	'0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': 'WETH',
	'0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6': 'WBTC',
	'0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': 'WMATIC',
};

function Side(props: { title: 'Short' | 'Long' }): JSX.Element {
	const { title } = props;
	const Icon = title === 'Long' ? AiFillCaretUp : AiFillCaretDown;
	const color = title === 'Long' ? '#6CB221' : '#e53e3e';

	return (
		<Box
			display="flex"
			bgColor={color}
			color="white"
			padding=" .2rem .5rem  .2rem .5rem"
			borderRadius="1rem"
			justifyContent="space-evenly"
		>
			<Box as={Icon} alignSelf="center" />
			<Text>{title}</Text>
		</Box>
	);
}

// const calcChange = async (unit: Trade) => {
// 	const entryPrice = unit.entryPrice;
// 	const currentPrice = (await getSingleTokenPrice(unit.component)).currentPrice;
// 	const cP = entryPrice;
// 	const p = currentPrice;
// 	return ((cP - p) / p) * 100;
// };

function Status(props: { status: 'Open' | 'Closed' }): JSX.Element {
	const { status } = props;
	const color = status === 'Open' ? 'blue7' : 'white';
	const bgColor = status === 'Open' ? '#BCE7FE' : 'blue7';

	return (
		<Box padding=" .2rem .5rem  .2rem .5rem" color={color} bgColor={bgColor} borderRadius="1rem">
			{status}
		</Box>
	);
}

function TableRows(props: { unit: Trade }): JSX.Element {
	const { unit } = props;
	console.log(unit);

	const exitDate = unit.exit ? formatDate(unit.exit.toString()) : '-----';
	const entryDate = formatDate(unit.entry.toString());
	const entryPrice = formatNumber(unit.entryPrice);
	const closePrice = unit.closePrice ? formatNumber(unit.closePrice) : '-----';
	// const change = await calcChange(unit);
	const comp = unit.component;
	const tradingPair = SYMBOLS[comp] ? `${SYMBOLS[comp]}/USDC` : '';
	return (
		<Tr>
			<Td textAlign="center">{tradingPair}</Td>
			<Td textAlign="center">
				<Status status={unit.status} />
			</Td>
			<Td textAlign="center">
				<Side title={unit.side} />
			</Td>
			<Td textAlign="center">{entryPrice}</Td>
			<Td textAlign="center">{closePrice}</Td>
			<Td textAlign="center">
				<ChangeDisplay change={unit.pnl} />
			</Td>
			<Td textAlign="center">{entryDate}</Td>
			<Td textAlign="center">{exitDate}</Td>
		</Tr>
	);
}

export function TradesTable(): JSX.Element {
	const tradesMap: TradesMap = {
		1660000000: {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Open',
			side: 'Long',
			entryPrice: 1000.11,
			closePrice: undefined,
			pnl: 10.1,
			entry: 1660000000,
			exit: undefined,
		},
		1650000000: {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Short',
			entryPrice: 2000.11,
			closePrice: 1888.88,
			pnl: -8.12,
			entry: 1650000000,
			exit: 1651000000,
		},
	};
	const keys = Object.keys(tradesMap);
	let rows;

	if (!tradesMap) {
		rows = (
			<Tr>
				<Td colSpan={8}>
					<Center>
						<Spinner size="lg" />
					</Center>
				</Td>
			</Tr>
		);
	} else if (keys.length === 0) {
		rows = (
			<Tr>
				<Td colSpan={8} textAlign="center" color="bodytext">
					<Text fontStyle="italic" p="2rem">
						No Trades found
					</Text>
				</Td>
			</Tr>
		);
	} else {
		keys.sort((a, b) => timestampSorter(b, a));
		rows = keys.map((unit) => <TableRows unit={tradesMap[parseInt(unit)]} />);
	}

	return (
		<Table
			marginTop="5rem"
			variant="unstyled"
			bgColor="blue5"
			className="token"
			fontSize="0.9rem"
			borderRadius="2em"
		>
			<Thead>
				<Tr>
					<Th textAlign="center" bgColor="bodydark">
						Pair
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Status
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Side
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Entry Price
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Close Price
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Profit/Loss %
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Entered
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Closed
					</Th>
				</Tr>
			</Thead>
			<Tbody>{rows}</Tbody>
		</Table>
	);
}
