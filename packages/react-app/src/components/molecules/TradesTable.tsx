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
	Heading,
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
import { useRecoilValue } from 'recoil';
import { breakpointState } from '../../state';
import classNames from './tradesTable.module.css';

interface TradesMap {
	[timeStamp: number]: Trade;
}

interface Trade {
	component: string;
	status: 'Open' | 'Closed';
	side: 'Short' | 'Long';
	entryPrice: string;
	closePrice: string | undefined;
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

function Leverage(props: { title: 'x1' | 'x2' }): JSX.Element {
	const { title } = props;
	// const Icon = title === 'Long' ? AiFillCaretUp : AiFillCaretDown;
	const color = title === 'x1' ? '#6CB221' : 'rgb(255, 255, 0)';
	const textColor = title === 'x1' ? 'white' : '#060119';

	return (
		<Box
			width="50px"
			display="flex"
			bgColor={color}
			color={textColor}
			padding=" .2rem .5rem  .2rem .5rem"
			borderRadius="1rem"
			justifyContent="space-evenly"
		>
			{/* <Box as={Icon} alignSelf="center" /> */}
			<Text>{title}</Text>
		</Box>
	);
}

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
						<Text textColor="#5252ff">{entryDate}</Text>
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
							styles={buildStyles({
								textSize: '1.5rem',
								strokeLinecap: 'round',
								textColor: '#AADCFE',
								pathColor: '#AADCFE',
								trailColor: '#1D1055',
							})}
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
					<Leverage title={leverage} />
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
						<Text textColor="#5252ff">{exitDate}</Text>
					</Tooltip>
				</a>
			</Td>
		</Tr>
	);
}

export function TradesTable(props: { symbol: string }): JSX.Element {
	const { symbol } = props;
	const breakpoint = useRecoilValue(breakpointState);
	const tradesMap: TradesMap = {
		'1654534989': {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Long',
			entryPrice: '1856.64957',
			closePrice: '1831.221181',
			pnl: -1.3695847299821986,
			entry: 1654534989,
			entryHash: '0x909d763edbce2469b94a39fee96c081ecfe33bd0cb1d77b7802319a62b040f93',
			exit: 1654637528,
			exitHash: '0x11fcb99fecbd6c12fd7ec3485fdeadaf2fe52f013100e467a9f0f589aa718d26',
			allocation: 100,
		},
		'1654674995': {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Long',
			entryPrice: '1806.289377',
			closePrice: '1341.911032',
			pnl: -25.70896728470324,
			entry: 1654674995,
			entryHash: '0x65c312eef75c3a741de11d8d31cfbce824a2e75da690e6e9b6aa5630bb65e6e5',
			exit: 1657988173,
			exitHash: '0x049a35a1f159016f0bc390343f93730df1e0e59ee4df2b4a318330ab3376274b',
			allocation: 100,
		},
		'1658001766': {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Long',
			entryPrice: '1343.748929',
			closePrice: '1353.59385',
			pnl: 0.7326458676567165,
			entry: 1658001766,
			entryHash: '0xd183e49625f2e9e81f26f14260c3cf841b355b6a23369796bb067ece36784a97',
			exit: 1658020429,
			exitHash: '0x4ad4278122afa364f08ec35a186338a62bc3327409f4fc91e149783a9e90e192',
			allocation: 100,
		},
		'1658103200': {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Long',
			entryPrice: '1352.952393',
			closePrice: '1476.225569',
			pnl: 9.111420079361205,
			entry: 1658103200,
			entryHash: '0xf94042fe13acbe920c2cabf861e4a0c4fbd7488cb705d0a80c37e41bded3ea87',
			exit: 1658136167,
			exitHash: '0xcb087b4d20b8bd43906b5a5756f3f6bb49ead7da811d66e8f66dfae3d803ec7f',
			allocation: 100,
		},
		'1658827835': {
			component: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
			status: 'Closed',
			side: 'Long',
			entryPrice: '1420.496843',
			closePrice: '1456.675513',
			pnl: 2.546902527681296,
			entry: 1658827835,
			entryHash: '0x8ecb351bd3337c53fe097e3c55c2867bf3b338c84cd19929d4923887cd23d4e7',
			exit: 1658915679,
			exitHash: '0x533562f82c4e0c5f5d405cf6322f031fa2e5d22df457705db84d9b6fef13e18a',
			allocation: 100,
		},
	};

	// const [tradesMap, setTradesMap] = useState<TradesMap>();
	// useEffect(() => {
	// 	getSetTradeHistory(symbol, 0, 9).then((r) => {
	// 		setTradesMap(r);
	// 	});
	// }, []);
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
	if (breakpoint === 'sm') {
		return (
			<Box className={classNames.ttmb}>
				<Text className={classNames.ttmh}>Recent Trades</Text>
				<Box className={classNames.ttmt}>
					<Box className={classNames.ttmg}>
						<div>
							<Text className={classNames.ttmtitle}>Entry</Text>
							<Text className={classNames.ttmd}>
								<a href="#">17 d 24 h ago</a>
							</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Price</Text>
							<Text>US$12,999.99</Text>
						</div>
						<div>
							<Box className={classNames.ttmpnl}>
								<Text className={classNames.ttmtitle}>Profit/Loss</Text>
								<Text fontSize={'18px'} fontWeight="700">
									53.99%
								</Text>
							</Box>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Exit</Text>
							<Text className={classNames.ttmd}>
								<a href="#">18 d 24 h ago</a>
							</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Price</Text>
							<Text>US$12,999.99</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Side</Text>
							<Side title="Short" />
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Position Size</Text>
							<Text>100%</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Leverage</Text>
							<Box height="17.45px">
								<Leverage title="x1" />
							</Box>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Status</Text>
							<Status status="Closed" />
						</div>
					</Box>
				</Box>
			</Box>
		);
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
