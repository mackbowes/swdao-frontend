import { Stack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { isTokenset, PRODUCTS_BY_SYMBOL } from '../../config/products';
import { allSwappableTokensState, breakpointState } from '../../state';
import { ChartDataMap } from '../../types';
import { BuyTokenForm } from '../molecules/BuyTokenForm';
import { IssueRedeemForm } from '../molecules/IssueRedeemForm';
import { TokenChart } from '../molecules/TokenChart';
import { PERIODS } from '../molecules/TokenChart/TimeFilter';
import TokenContainer from '../molecules/TokenChart/TokenContainer';

interface ChartAndBuyProps {
	symbol: string;
	handleDateChange: (date: string) => void;
	setCharts: (newChart: ChartDataMap) => void;
}

const WIDTHS: Record<string, [number, number | string, string, boolean]> = {
	sm: [100, 100, '1rem', false],
	md: [100, 100, '1rem', false],
	lg: [100, '30rem', '0', true],
	xl: [100, '30rem', '0', true],
};

export function ChartAndBuy(props: ChartAndBuyProps): JSX.Element {
	const { symbol, handleDateChange, setCharts } = props;

	const swappable = useRecoilValue(allSwappableTokensState);
	const breakpoint = useRecoilValue(breakpointState);
	const [period, setPeriod] = useState('MAX');
	const [chartLoadingEffect, setChartLoadingEffect] = useState(true);
	const [chartsAllLoaded, setChartsAllLoaded] = useState(false);
	const contract = {
		creationEpoch: PRODUCTS_BY_SYMBOL[symbol].creationEpoch,
		tokenAddress: PRODUCTS_BY_SYMBOL[symbol].addresses,
		tokenTicker: symbol,
		tokenset: undefined,
	};

	const [chartData, setChartData] = useState({
		chartToken: {
			...PERIODS.reduce((a, v) => ({ ...a, [v]: [] }), {}),
		},
		chartEth: {
			...PERIODS.reduce((a, v) => ({ ...a, [v]: [] }), {}),
		},
		chartBtc: {
			...PERIODS.reduce((a, v) => ({ ...a, [v]: [] }), {}),
		},
		chartMATIC: {
			...PERIODS.reduce((a, v) => ({ ...a, [v]: [] }), {}),
		},
	});
	useEffect(() => {
		handleDateChange(period);
		setCharts(chartData.chartToken);
	}, [period, chartData, chartsAllLoaded]);

	const TokenForm = useMemo(() => (isTokenset(symbol) ? IssueRedeemForm : BuyTokenForm), [symbol]);
	const allowedTokens = useMemo(
		() => ({ ...swappable.ERC20, ...swappable.TokenProducts }),
		[swappable],
	);

	const [width, formWidth, formMargin, singleLine] = useMemo(
		() => WIDTHS[breakpoint],
		[breakpoint],
	);

	return (
		<Stack
			direction={singleLine ? 'row' : 'column'}
			width="100%"
			className={singleLine ? 'singleline' : 'multiline'}
			alignItems="flex-start"
			justifyContent="space-between"
			spacing="1rem"
		>
			{/* <TokenChart
				symbol={symbol}
				onDateChange={handleDateChange}
				period={period}
				size={[width, 500]}
			/> */}
			<TokenContainer
				contract={contract}
				chartData={chartData}
				setChartData={setChartData}
				period={period}
				setPeriod={setPeriod}
				chartLoadingEffect={chartLoadingEffect}
				setChartLoadingEffect={setChartLoadingEffect}
				chartsAllLoaded={chartsAllLoaded}
				setChartsAllLoaded={setChartsAllLoaded}
			/>
			<TokenForm
				breakpoint={breakpoint}
				width={formWidth}
				id="TokenForm"
				symbol={symbol}
				allowedTokens={allowedTokens}
				marginTop={formMargin}
			/>
		</Stack>
	);
}
