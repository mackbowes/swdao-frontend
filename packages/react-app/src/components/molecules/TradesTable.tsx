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
	Button,
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
import { usePagination } from './Pagination/usePagination';

interface TradesMap {
	[timeStamp: number]: Trade;
}

interface Trade {
	len: number;
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

function Leverage(props: { title: 'x1' | 'x2'; h?: string | undefined }): JSX.Element {
	const { title, h } = props;
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
			h={h}
			alignItems="center"
		>
			{/* <Box as={Icon} alignSelf="center" /> */}
			<Text>{title}</Text>
		</Box>
	);
}

function Side(props: { title: 'Short' | 'Long'; h?: string | undefined }): JSX.Element {
	const { title, h } = props;
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
			alignItems="center"
			h={h}
		>
			<Box as={Icon} alignSelf="center" />
			<Text>{title}</Text>
		</Box>
	);
}

function Status(props: { status: 'Open' | 'Closed'; h?: string | undefined }): JSX.Element {
	const { status, h } = props;
	const color = status === 'Open' ? 'blue7' : 'white';
	const bgColor = status === 'Open' ? '#BCE7FE' : 'blue7';

	return (
		<Box
			display="flex"
			padding=" .2rem .5rem  .2rem .5rem"
			color={color}
			bgColor={bgColor}
			borderRadius="1rem"
			h={h}
			alignItems="center"
		>
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
		return `${d} d ${h} h ago`;
	}
	if (h !== 0) {
		return `${h} h ${m} m ago`;
	}
	if (m !== 0) {
		return `${m} m ago`;
	}
	return `under 1 min ago`;
};

function TableRows(props: { unit: Trade; breakpoint: string; index: number }): JSX.Element {
	const { unit, breakpoint, index } = props;
	if (!unit) return <></>;
	const exitDate = unit.exit ? `${formatDate(unit.exit.toString())}` : '-----';
	const exitDayDate = unit.exit ? convertTime(unit.exit) : '-----';
	const entryDate = `${formatDate(unit.entry.toString())}`;
	const entryDayDate = convertTime(unit.entry);
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
	const pnlbg = unit.pnl > 0 ? '#6CB221' : '#e53e3e';
	const Icon = unit.pnl > 0 ? AiFillCaretUp : AiFillCaretDown;

	if (breakpoint === 'sm') {
		return (
			<Box className={classNames.ttmb} key={index}>
				<Box className={classNames.ttmt}>
					<Box className={classNames.ttmg}>
						<div>
							<Text className={classNames.ttmtitle}>Entry</Text>
							<Text className={classNames.ttmd}>
								<a href={`https://polygonscan.com/tx/${unit.entryHash}`} target="_blank">
									{entryDayDate}
								</a>
							</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Entry Price</Text>
							<Text>{entryPrice}</Text>
						</div>
						<div className={classNames.ttmpnldiv}>
							<Box background={pnlbg} className={classNames.ttmpnl}>
								<Text color={'white'} className={classNames.ttmtitle}>
									Profit/Loss
								</Text>
								<Text color={'white'} fontSize={'18px'} fontWeight="700" display="flex">
									{safeFixed(unit.pnl)}%<Box fontSize="12px" as={Icon} alignSelf="center" />
								</Text>
							</Box>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Exit</Text>
							<Text className={classNames.ttmd}>
								<a
									href={`https://polygonscan.com/tx/${unit.exitHash}`}
									target="_blank"
									className={classNames.ttmd}
								>
									{exitDayDate}
								</a>
							</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Exit Price</Text>
							<Text>{closePrice}</Text>
						</div>
						<div className={classNames.ttmpdl}>
							<Text className={classNames.ttmtitle}>Side</Text>

							<Side title={unit.side} h="20px" />
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Position Size</Text>
							<Text fontSize="14px">{positionSize <= 100 ? `${positionSize}%` : '100%'}</Text>
						</div>
						<div>
							<Text className={classNames.ttmtitle}>Leverage</Text>
							<Box height="17.45px">
								<Leverage title={leverage} h="17.45" />
							</Box>
						</div>
						<div className={classNames.ttmpdl}>
							<Text className={classNames.ttmtitle}>Status</Text>
							<Status status={unit.status} h="17.45" />
						</div>
					</Box>
				</Box>
			</Box>
		);
	}
	return (
		<Tr key={index}>
			<Td textAlign="center">
				<a href={`https://polygonscan.com/tx/${unit.entryHash}`} target="_blank">
					<Tooltip label={entryDayDate} placement="top" hasArrow>
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
							text={positionSize <= 100 ? `${positionSize}%` : '100%'}
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
					<Tooltip label={exitDayDate} placement="top" hasArrow>
						<Text textColor="#5252ff">{exitDate}</Text>
					</Tooltip>
				</a>
			</Td>
		</Tr>
	);
}

const lastPage = (len: number, breakpoint: string) => {
	const amount = breakpoint === 'sm' ? 3 : 5;
	const t = Math.floor(len / 2) / amount;
	if (t % 1 === 0) {
		return Math.floor(t);
	}
	return Math.floor(t) + 1;
};

export function TradesTable(props: { symbol: string }): JSX.Element {
	const { symbol } = props;
	const breakpoint = useRecoilValue(breakpointState);
	const [isLoading, setIsLoading] = useState(false);

	const [tradesMap, setTradesMap] = useState<TradesMap>();
	console.log(breakpoint);
	// let amountToFetch = 190;
	let amountPerPage = 5;
	if (breakpoint === 'sm') {
		// amountToFetch = 9;
		amountPerPage = 3;
	}
	useEffect(() => {
		getSetTradeHistory(symbol, 0, 999).then((r) => {
			setTradesMap(r);
		});
	}, []);
	let rows;
	const key = tradesMap ? Object.keys(tradesMap) : undefined;

	const {
		currentPage,
		totalPages,
		setNextPage,
		setPreviousPage,
		nextEnabled,
		previousEnabled,
		startIndex,
		endIndex,
	} = usePagination({
		totalItems: key?.length,
		initialPageSize: amountPerPage,
	});
	const loadMore = () => {
		setIsLoading(true);
		if (!key) return;
		const from = key.length * 2 + 1;
		const to = key.length * 2 + (breakpoint === 'sm' ? 5 : 9) + 1;
		getSetTradeHistory(symbol, from, to).then((r) => {
			setTradesMap({ ...tradesMap, ...r });
			setIsLoading(false);
		});
	};

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
		if (breakpoint === 'sm') {
			rows = (
				<Center>
					<Spinner size="lg" />
				</Center>
			);
		}
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
		if (breakpoint === 'sm') {
			rows = (
				<Center>
					<Text fontStyle="italic" p="2rem" textAlign="center" color="bodytext">
						No Trades found
					</Text>
				</Center>
			);
		}
	} else {
		key?.sort((a, b) => timestampSorter(b, a));
		rows = key
			?.slice(startIndex, endIndex + 1)
			.map((unit, index) => (
				<TableRows unit={tradesMap[parseInt(unit)]} breakpoint={breakpoint} index={index} />
			));
	}
	if (breakpoint === 'sm') {
		return (
			<Box className={classNames.ttmmain}>
				<Text className={classNames.ttmh}>Recent Trades</Text>
				<Box>{rows}</Box>
				<Box
					display="inline-grid"
					alignItems="center"
					justifyContent="center"
					gridTemplateRows="auto"
					// gridTemplateColumns="1fr 2fr 1fr .5fr 1fr 1.5fr"
					gridAutoFlow="column"
					width="100%"
				>
					<Button
						onClick={setPreviousPage}
						disabled={!previousEnabled}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="2"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="right"
					>
						← Previous
					</Button>
					<Text
						padding=".5rem"
						textColor="white"
						gridColumn="3"
						minWidth=""
						maxWidth="7.5rem"
						justifySelf="center"
					>
						Page {currentPage + 1}&nbsp;of&nbsp;{totalPages}
						{/* {tradesMap && key ? lastPage(tradesMap[parseInt(key[0])].len, breakpoint) : 0} */}
					</Text>
					<Button
						onClick={setNextPage}
						disabled={!nextEnabled}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="4"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="left"
					>
						Next →
					</Button>
					{/* <Button
						onClick={() => loadMore()}
						disabled={false}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="5"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="left"
					>
						Load More {isLoading ? <Spinner /> : null}
					</Button> */}
				</Box>
			</Box>
		);
	}

	return (
		<Box className={classNames.ttmmain}>
			<Text className={classNames.ttmh}>Recent Trades</Text>
			<Box>
				<Table
					marginTop="2rem"
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
				<Box
					display="inline-grid"
					alignItems="center"
					justifyContent="center"
					gridTemplateRows="auto"
					gridTemplateColumns="1fr 2fr 1fr .5fr 1fr 1.5fr"
					gridAutoFlow="column"
					width="100%"
				>
					<Button
						onClick={setPreviousPage}
						disabled={!previousEnabled}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="2"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="right"
					>
						← Previous
					</Button>
					<Text
						padding=".5rem"
						textColor="white"
						gridColumn="3"
						minWidth=""
						maxWidth="7.5rem"
						justifySelf="center"
					>
						Page {currentPage + 1}&nbsp;of&nbsp;{totalPages}
						{/* {tradesMap && key ? lastPage(tradesMap[parseInt(key[0])].len, breakpoint) : 0} */}
					</Text>
					<Button
						onClick={setNextPage}
						disabled={!nextEnabled}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="4"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="left"
					>
						Next →
					</Button>
					{/* <Button
						onClick={() => loadMore()}
						disabled={false}
						padding="0.75rem"
						fontSize="0.8rem"
						height="0.85rem"
						gridColumn="5"
						minWidth=""
						maxWidth="6rem"
						width="100%"
						justifySelf="left"
					>
						Load More {isLoading ? <Spinner /> : null}
					</Button> */}
				</Box>
			</Box>
		</Box>
	);
}
