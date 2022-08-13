import {
	Box,
	Center,
	Spinner,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { getSetTradeHistory } from '../../services/backend';
// import { getSingleTokenPrice } from '../../services/backend';
import { timestampSorter } from '../../utils';
import { safeFixed } from '../../utils/contracts';
import { ChangeDisplay } from '../atoms/ChangeDisplay';
import { formatDate, formatNumber } from './TransactionsTable';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';

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
	entryHash: string;
	exitHash: string;
	allocation: number;
}

const SYMBOLS: { [key: string]: string } = {
	'0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': 'WETH',
	'0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6': 'WBTC',
	'0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': 'WMATIC',
};
const SYMBOLSX2: { [key: string]: string } = {
	'0xf287D97B6345bad3D88856b26Fb7c0ab3F2C7976': 'MATIC2x-FLI-P',
	'0x3Ad707dA309f3845cd602059901E39C4dcd66473': 'ETH2x-FLI-P',
	'0xd6cA869a4EC9eD2C7E618062Cdc45306d8dBBc14': 'BTC2x-FLI-P',
};

// const ProgressProvider = ({
// 	valueStart,
// 	valueEnd,
// 	children,
// }: {
// 	valueStart: number;
// 	valueEnd: number;
// 	children: any;
// }) => {
// 	const [value, setValue] = React.useState(valueStart);
// 	React.useEffect(() => {
// 		setValue(valueEnd);
// 	}, [valueEnd]);

// 	return children(value);
// };

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

const convertTime = (ms: number) => {
	const now = Date.now();
	let s = now / 1000 - ms;
	// let s = Math.floor(nms / 1000000);
	let m = Math.floor(s / 60);
	let h = Math.floor(m / 60);
	const d = Math.floor(h / 24);
	s = s % 60;
	// m = s >= 30 ? m + 1 : m;
	m = m % 60;
	h = h % 24;
	if (d !== 0) {
		return `${d} days ${h} hrs ago`;
	}
	if (h !== 0) {
		return `${h} hrs ${m} min ago`;
	}
	if (m !== 0) {
		return `${m} min ago`;
	}
	return `under 1 min ago`;
};

function TableRows(props: { unit: Trade }): JSX.Element {
	const { unit } = props;
	if (!unit) return <></>;
	const exitDate = unit.exit ? `${formatDate(unit.exit.toString())}` : '-----';
	const entryDate = `${formatDate(unit.entry.toString())}`;
	const entryPrice = parseFloat(safeFixed(unit.entryPrice)).toLocaleString(undefined, {
		currency: 'USD',
		style: 'currency',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	const closePrice = unit.closePrice
		? parseFloat(safeFixed(unit.closePrice)).toLocaleString(undefined, {
				currency: 'USD',
				style: 'currency',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
		  })
		: '-----';
	// const change = await calcChange(unit);
	const comp = unit.component;
	const tradingPair = SYMBOLS[comp] ? `${SYMBOLS[comp]}/USDC` : '';
	const positionSize = parseInt(safeFixed(unit.allocation));
	const leverage = SYMBOLSX2[unit.component] ? 'x2' : 'x1';
	return (
		<Tr>
			<Td textAlign="center">
				<a href={`https://polygonscan.com/tx/${unit.entryHash}`} target="_blank">
					<Tooltip label={convertTime(unit.entry)} placement="top" hasArrow>
						{entryDate}
					</Tooltip>
				</a>
			</Td>
			<Td textAlign="center">
				<Status status={unit.status} />
			</Td>
			<Td textAlign="center">
				<Side title={unit.side} />
			</Td>
			<Td textAlign="center">
				<Center>
					<Box width="3rem">
						{/* <ProgressProvider valueStart={0} valueEnd={positionSize}>
							{(value: number) => ( */}
						<CircularProgressbar
							value={positionSize}
							text={`${positionSize}%`}
							styles={buildStyles({ textSize: '1.5rem', strokeLinecap: 'butt' })}
						/>
						{/* )}
						</ProgressProvider> */}
					</Box>
				</Center>
			</Td>
			<Td textAlign="center">{entryPrice}</Td>
			<Td textAlign="center">{closePrice}</Td>
			<Td textAlign="center">
				<Center>
					<Box width="3rem">
						<CircularProgressbar
							value={leverage === 'x1' ? 100 : 200}
							text={leverage}
							styles={buildStyles({
								pathColor: `${leverage === 'x1' ? '#6CB221' : 'rgb(255, 255, 0)'}`,
								trailColor: '#6CB221',
								textSize: '2rem',
							})}
						/>
					</Box>
				</Center>
			</Td>
			<Td textAlign="center">
				<Center>
					<ChangeDisplay change={unit.pnl} />
				</Center>
			</Td>
			<Td textAlign="center">
				<a
					href={unit.exitHash ? `https://polygonscan.com/tx/${unit.exitHash}` : '#'}
					target="_blank"
				>
					<Tooltip label={unit.exit ? convertTime(unit.exit) : undefined} placement="top" hasArrow>
						{exitDate}
					</Tooltip>
				</a>
			</Td>
		</Tr>
	);
}

export function TradesTable(props: { symbol: string }): JSX.Element {
	const { symbol } = props;
	// let tradesMap: TradesMap = {}
	const [tradesMap, setTradesMap] = useState<TradesMap>();
	useEffect(() => {
		getSetTradeHistory(symbol, 0, 19).then((r) => {
			console.log(r);
			setTradesMap(r);
		});
	}, []);
	let rows;

	if (!tradesMap) {
		rows = (
			<Tr>
				<Td colSpan={9}>
					<Center>
						<Spinner size="lg" />
					</Center>
				</Td>
			</Tr>
		);
	} else if (Object.keys(tradesMap).length === 0) {
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
		const key = Object.keys(tradesMap);
		key.sort((a, b) => timestampSorter(b, a));
		rows = key.map((unit) => <TableRows unit={tradesMap[parseInt(unit)]} />);
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
						Entered
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Status
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Side
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						<Tooltip label="Time of Entry" placement="top">
							Position Size
						</Tooltip>
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Entry Price
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Close Price
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						Leverage
					</Th>
					<Th textAlign="center" bgColor="bodydark">
						<Tooltip label="Calculated from Entry & Close Price" placement="top">
							Profit/Loss %
						</Tooltip>
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
