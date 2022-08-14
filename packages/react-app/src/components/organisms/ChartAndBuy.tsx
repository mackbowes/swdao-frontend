import { Stack } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { PRODUCTS_BY_SYMBOL } from '../../config/products';
import { breakpointState } from '../../state';
import { ChartDataMap } from '../../types';
import { PERIODS } from '../molecules/TokenChart/TimeFilter';
import TokenContainer from '../molecules/TokenChart/TokenContainer';
import ExchangeContainer from '../newExchange/ExchangeContainer';

interface ChartAndBuyProps {
	symbol: string;
	handleDateChange: (date: string) => void;
	setCharts: (newChart: ChartDataMap) => void;
	price: number;
}

const WIDTHS: Record<string, [string, boolean]> = {
	sm: ['100%', false],
	md: ['100%', false],
	lg: ['35rem', true],
	xl: ['35rem', true],
};

export function ChartAndBuy(props: ChartAndBuyProps): JSX.Element {
	const { symbol, handleDateChange, setCharts, price } = props;
	const tokenPrice = {
		currentPrice: price,
		changePercentDay: undefined,
	};
	const breakpoint = useRecoilValue(breakpointState);
	const [period, setPeriod] = useState('MAX');
	const [chartLoadingEffect, setChartLoadingEffect] = useState(true);
	const [chartsAllLoaded, setChartsAllLoaded] = useState(false);
	const contract = {
		creationEpoch: PRODUCTS_BY_SYMBOL[symbol].creationEpoch,
		tokenAddress: PRODUCTS_BY_SYMBOL[symbol].addresses['0x89'],
		tokenTicker: symbol,
		tokenset: PRODUCTS_BY_SYMBOL[symbol].is_tokenset,
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

	const [formWidth, singleLine] = useMemo(() => WIDTHS[breakpoint], [breakpoint]);

	return (
		<Stack
			direction={singleLine ? 'row' : 'column'}
			width="100%"
			className={singleLine ? 'singleline' : 'multiline'}
			alignItems="flex-start"
			justifyContent="space-between"
			spacing="1rem"
			style={{ display: `flex`, justifyContent: `center`, alignItems: `stretch` }}
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
			<ExchangeContainer contract={contract} tokenPrice={tokenPrice} width={formWidth} />
			{/* <TokenForm
				breakpoint={breakpoint}
				width={formWidth}
				id="TokenForm"
				symbol={symbol}
				allowedTokens={allowedTokens}
				marginTop={formMargin}
			/> */}
		</Stack>
	);
}
