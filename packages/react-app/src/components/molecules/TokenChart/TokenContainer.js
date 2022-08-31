import { useState, useEffect, useMemo } from 'react';
import { Box, Spinner, Text, Checkbox } from '@chakra-ui/react';
import {
	DotProps,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	YAxis,
	XAxis,
	CartesianGrid,
} from 'recharts';
// import moment from "moment";
// import { useResponsive } from "../contexts/ResponsiveContext";
import TimeFilter, { TIME_PERIODS, PERIODS } from './TimeFilter';
// import { WETH_ADDRESS, WBTC_ADDRESS } from "../utils/settings";
// import { useSiteContext } from "../contexts/SiteContext";
import ChartTooltip from './ChartTooltip';
import { getChart } from '../../../services/backend';
import { getDomain, getHorizontalPoints, getTickCount, tickFormatter } from './chartMath';

const WETH_ADDRESS = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';
const WBTC_ADDRESS = '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6';
const WMATIC_ADDRESS = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270';

export default function TokenContainer(props) {
	const {
		contract,
		chartData,
		setChartData,
		period,
		setPeriod,
		chartLoadingEffect,
		setChartLoadingEffect,
		chartsAllLoaded,
		setChartsAllLoaded,
	} = props;

	const [thisWidth, setThisWidth] = useState('100%');
	const [xRange, setXRange] = useState({ min: 0, max: 100 });
	const [yRange, setYRange] = useState({ min: -1, max: 1 });
	const [chartInitialLoading, setChartInitialLoading] = useState(true);
	const [chartsAllLoading, setChartsAllLoading] = useState(false);
	const [compEth, setCompEth] = useState(false);
	const [compBtc, setCompBtc] = useState(false);
	const [compMatic, setCompMatic] = useState(false);
	const [tickCount, setTickCount] = useState(0);

	const [chartDataParsed, setChartDataParsed] = useState([
		{
			timestamp: undefined,
			token: undefined,
			scaledToken: undefined,
			eth: undefined,
			scaledEth: undefined,
			compEth,
			btc: undefined,
			scaledBtc: undefined,
			compBtc,
			matic: undefined,
			scaledMATIC: undefined,
			compMatic,
			symbol: undefined,
		},
	]);
	const isMobile = false;
	const isTablet = false;
	const isDesktop = true;
	// const { isMobile, isTablet, isDesktop } = useResponsive();
	// const { colors } = useSiteContext();

	const colors = { contrastText: '#BCE7FE', backgroundColor: '#060119' };

	useEffect(() => {
		if (!period && contract.creationEpoch)
			setPeriod(() => {
				const epoch = Math.round(new Date().getTime() / 1000);
				const periods = Object.keys(TIME_PERIODS).reverse();
				for (const timePeriod of periods) {
					if (timePeriod == 'MAX') continue;
					if (contract.creationEpoch <= epoch - TIME_PERIODS[timePeriod].days * 86400) {
						return timePeriod;
					}
				}
				return '1D';
			});
	}, [contract]);

	// useEffect(() => {
	//   if (isMobile) {
	//     setThisWidth(`100%`);
	//   }
	//   if (isTablet) {
	//     setThisWidth(`100%`);
	//   }
	//   if (isDesktop) {
	//     setThisWidth("100%");
	//   }
	// }, [isMobile, isTablet, isDesktop]);

	useEffect(() => {
		if (!period) return;
		if (chartsAllLoading) return;
		if (chartsAllLoaded) {
			readChart();
			setChartLoadingEffect(false);
			return;
		}
		setChart().then(() => {
			setChartInitialLoading(false);
			setChartLoadingEffect(false);
		});
	}, [period, compEth, compBtc, compMatic, chartsAllLoaded]);

	useEffect(() => {
		if (chartsAllLoaded) return;
		if (chartInitialLoading) return;
		setChartLoadingEffect(false);
		setChartsAllLoading(true);
		const loadAllCharts = async () => {
			await Promise.all(
				PERIODS.map((periodStr) => {
					return setChart(periodStr, true);
				}),
			);
			setChartsAllLoading(false);
			setChartsAllLoaded(true);
		};
		loadAllCharts();
	}, [chartInitialLoading]);

	useEffect(() => {
		if (chartsAllLoading || chartInitialLoading) setChartLoadingEffect(true);
	}, [period, compEth, compBtc, compMatic]);

	const readChart = async () => {
		if (
			!chartData.chartToken[period] ||
			!chartData.chartMATIC[period] ||
			!chartData.chartBtc[period] ||
			!chartData.chartEth[period]
		) {
			return;
		}
		const scalarToken = chartData.chartToken[period][0][1];
		const scalarEth = chartData.chartEth[period][0] ? chartData.chartEth[period][0][1] : undefined;
		const scalarBtc = chartData.chartBtc[period][0] ? chartData.chartBtc[period][0][1] : undefined;
		const scalarMATIC = chartData.chartMATIC[period][0]
			? chartData.chartMATIC[period][0][1]
			: undefined;
		setChartDataParsed(
			chartData.chartToken[period].map((data, i) => {
				return {
					timestamp: data[0],
					token: data[1],
					scaledToken: data[1] / scalarToken,
					eth: scalarEth ? chartData.chartEth[period][i][1] : undefined,
					scaledEth: scalarEth ? chartData.chartEth[period][i][1] / scalarEth : undefined,
					compEth,
					btc: scalarBtc ? chartData.chartBtc[period][i][1] : undefined,
					scaledBtc: scalarBtc ? chartData.chartBtc[period][i][1] / scalarBtc : undefined,
					compBtc,
					matic: scalarMATIC ? chartData.chartMATIC[period][i][1] : undefined,
					scaledMATIC: scalarMATIC ? chartData.chartMATIC[period][i][1] / scalarMATIC : undefined,
					compMatic,
					symbol: contract?.tokenTicker,
				};
			}),
		);
	};

	const setChart = async (periodRequest = period, loadAll = false) => {
		const epoch = new Date().getTime() / 1000;
		const reqBody = {
			address: contract?.tokenAddress,
			days:
				periodRequest == 'MAX'
					? Math.round((epoch - contract.creationEpoch) / 86400)
					: TIME_PERIODS[periodRequest].days,
		};
		// const req = {
		// 	method: 'POST',
		// 	body: JSON.stringify(reqBody),
		// };
		const chartDataTemp = chartData;
		const pricePromises = [
			chartDataTemp.chartToken[periodRequest].length == 0 ? getChart('', '', reqBody) : undefined,
			undefined,
			undefined,
			undefined,
		];
		if ((compEth || loadAll) && chartDataTemp.chartEth[periodRequest].length == 0) {
			reqBody.address = WETH_ADDRESS;
			// req.body = JSON.stringify(reqBody);
			pricePromises[1] = getChart('', '', reqBody);
		}
		if ((compBtc || loadAll) && chartDataTemp.chartBtc[periodRequest].length == 0) {
			reqBody.address = WBTC_ADDRESS;
			// req.body = JSON.stringify(reqBody);
			pricePromises[2] = getChart('', '', reqBody);
		}
		if ((compMatic || loadAll) && chartDataTemp.chartMATIC[periodRequest].length == 0) {
			reqBody.address = WMATIC_ADDRESS;
			// req.body = JSON.stringify(reqBody);
			pricePromises[3] = getChart('', '', reqBody);
		}
		if (pricePromises[0] || pricePromises[1] || pricePromises[2] || pricePromises[3]) {
			if (!loadAll) setChartInitialLoading(true);
			await Promise.allSettled(pricePromises);
			if (pricePromises[0]) chartDataTemp.chartToken[periodRequest] = await pricePromises[0];
			if ((compEth || loadAll) && pricePromises[1])
				chartDataTemp.chartEth[periodRequest] = await pricePromises[1];
			if ((compBtc || loadAll) && pricePromises[2])
				chartDataTemp.chartBtc[periodRequest] = await pricePromises[2];
			if ((compMatic || loadAll) && pricePromises[3])
				chartDataTemp.chartMATIC[periodRequest] = await pricePromises[3];
			setChartData(chartDataTemp);
		}
		if (!loadAll) await readChart();
	};

	useEffect(() => {
		setTickCount(getTickCount(yRange.min, yRange.max));
	}, [yRange.min, yRange.max]);

	const timeButtons = useMemo(
		// maps time period buttons
		() =>
			Object.keys(TIME_PERIODS).map((current) => {
				// get the label - just the first letter of the period, if narrow screen
				const label = isMobile ? current.slice(-1) : TIME_PERIODS[current].label;
				const epoch = new Date().getTime() / 1000;
				const disabled =
					current == 'MAX'
						? false
						: contract.creationEpoch > epoch - TIME_PERIODS[current].days * 86400;
				return (
					<TimeFilter
						period={current}
						active={current === period}
						onClick={disabled ? () => void 0 : setPeriod}
						key={current}
						disabled={disabled}
						label={label}
					/>
				);
			}),
		[isMobile, period, setPeriod],
	);

	if (!(contract && contract.tokenAddress && contract.creationEpoch))
		return (
			<>
				<section
					name="container"
					style={{
						gridColumn: `span 2`,
						position: `relative`,
						border: `1px solid #C0C0C0`,
						borderRadius: `1.3em`,
						boxShadow: `0px 6px 15px rgba(8, 114, 201, 0.05)`,
						width: `min(80vw, 100%)`,
						overflow: `hidden`,
						display: `flex`,
						flexDirection: `column`,
						justifyContent: `space-evenly`,
					}}
				>
					<div
						name="loading surface"
						style={{
							display: `flex`,
							justifyContent: `center`,
							alignItems: `center`,
							position: `absolute`,
							width: `100%`,
							height: `100%`,
							top: 0,
							left: 0,
							background: colors?.backgroundColor || `#060119`,
							opacity: 0.75,
						}}
					>
						<Box textAlign="center" color={colors?.contrastText || `black`}>
							<Text fontStyle="italic" p="2rem 2rem 0 2rem">
								Loading chart ...
							</Text>
							<Spinner size="lg" margin="2rem auto" />
						</Box>
					</div>
				</section>
			</>
		);

	return (
		<>
			{!isMobile && !isTablet && (
				<>
					<section
						name="container"
						style={{
							position: `relative`,
							border: `2px solid #1D1055`,
							borderRadius: `1.3em`,
							gridColumn: `span 2`,
							width: `100%`,
							display: `flex`,
							overflow: `hidden`,
							flexDirection: `column`,
							justifyContent: `space-between`,
							backgroundColor: `#150637`,
						}}
					>
						<div
							name="heading area"
							style={{
								width: `100%`,
								height: `64px`,
								backgroundColor: `var(--chakra-colors-blue5)`,
								display: `flex`,
								fontSize: `20px`,
								fontWeight: `500`,
								justifyContent: `space-around`,
								alignItems: `center`,
								borderRadius: '1.25em 1.25em 0 0',
							}}
						>
							{timeButtons}
						</div>
						<div
							name="graph area"
							style={{
								width: `100%`,
								height: `446px`,
								background: `transparent`,
							}}
						>
							<ResponsiveContainer width={`100%`} height={`100%`}>
								<LineChart
									data={chartDataParsed}
									margin={{ top: 25, bottom: 25, left: 5, right: 5 }}
								>
									<defs>
										<linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#1f8cfd" stopOpacity={1} />
											<stop offset="95%" stopColor="#7200e6" stopOpacity={1} />
										</linearGradient>
									</defs>
									<CartesianGrid
										stroke="rgb(66, 153, 225, 0.1)"
										verticalCoordinatesGenerator={(props) => getHorizontalPoints(props, tickCount)}
									/>
									<YAxis
										domain={[
											(dataMin) => {
												if (yRange.min !== dataMin) setYRange({ max: yRange.max, min: dataMin });
												return getDomain(dataMin, yRange.max, false);
											},
											(dataMax) => {
												if (yRange.max !== dataMax) setYRange({ min: yRange.min, max: dataMax });
												return getDomain(yRange.min, dataMax, true);
											},
										]}
										type="number"
										axisLine={true}
										tick={true}
										tickLine={false}
										tickCount={tickCount}
										interval={0}
										scale="linear"
										hide={false}
										width={60}
										tickFormatter={tickFormatter}
										style={{ fontFamily: `Montserrat, sans-serif` }}
										animationDuration={500}
									/>
									{compBtc && chartDataParsed[0].btc && (
										<Line
											dataKey="scaledBtc"
											type="monotone"
											stroke="#F7931A"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderBtcDot}
											animationDuration={500}
										/>
									)}
									{compEth && chartDataParsed[0].eth && (
										<Line
											dataKey="scaledEth"
											type="monotone"
											stroke="#66A236"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderEthDot}
											animationDuration={500}
										/>
									)}
									{compMatic && chartDataParsed[0].matic && (
										<Line
											dataKey="scaledMATIC"
											type="monotone"
											stroke="#e9c46a"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderMATICDot}
											animationDuration={500}
										/>
									)}
									<Line
										dataKey="scaledToken"
										type="monotone"
										stroke={/*mergedPrices.flat ? */ '#1f8cfd' /* : 'url(#gradient1)'*/}
										strokeWidth={2}
										stroke-linecap="round"
										legendType="none"
										dot={false}
										//activeDot={renderCoinDot}
										animationDuration={500}
									/>
									<Tooltip
										filterNull={true}
										cursor={{ stroke: '#BCE7FE' }}
										animationDuration={400}
										animationEasing="ease"
										content={ChartTooltip}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
						<Box
							height="3em"
							bgColor="blue5"
							borderRadius="0 0 1.25em 1.25em"
							padding="0 1rem"
							textAlign="center"
							lineHeight="3em"
							display="flex"
							justifyContent="center"
						>
							<Text fontSize="sm" color="purple" d="inline-block">
								Compare with
							</Text>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompEth(e.target.checked)}
								checked={compEth}
								color="ethcolor"
								borderColor="#AADCFE"
							>
								ETH
							</Checkbox>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompMatic(e.target.checked)}
								checked={compMatic}
								color="maticcolor"
								borderColor="#AADCFE"
							>
								MATIC
							</Checkbox>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompBtc(e.target.checked)}
								checked={compBtc}
								color="btcorange"
								borderColor="#AADCFE"
							>
								BTC
							</Checkbox>
						</Box>
						{chartLoadingEffect && (
							<div
								name="loading surface"
								style={{
									display: `flex`,
									justifyContent: `center`,
									alignItems: `center`,
									position: `absolute`,
									width: `100%`,
									height: `100%`,
									top: 0,
									left: 0,
									background: colors?.backgroundColor || `white`,
									opacity: 0.75,
								}}
							>
								<Box textAlign="center" color={colors?.contrastText || `black`}>
									<Text fontStyle="italic" p="2rem 2rem 0 2rem">
										Loading chart ...
									</Text>
									<Spinner size="lg" margin="2rem auto" />
								</Box>
							</div>
						)}
					</section>
				</>
			)}

			{(isMobile || isTablet) && (
				<>
					<section
						name="container"
						style={{
							position: `relative`,
							border: `1px solid #0686CE`,
							boxShadow: `0px 6px 15px rgba(8, 114, 201, 0.05)`,
							borderRadius: `3px 3px 15px 15px`,
							width: `min(80vw, 100%)`,
							overflow: `hidden`,
							boxShadow: `0px 6px 15px rgba(8, 114, 201, 0.05)`,
						}}
					>
						<div
							name="heading area"
							style={{
								width: `100%`,
								height: `64px`,
								backgroundColor: `var(--chakra-colors-blue5)`,
								display: `flex`,
								fontSize: `20px`,
								fontWeight: `500`,
								justifyContent: `space-around`,
								alignItems: `center`,
							}}
						>
							{timeButtons}
						</div>
						<div
							name="graph area"
							style={{
								width: `100%`,
								height: `268px`,
								background: `white`,
							}}
						>
							<ResponsiveContainer width={`100%`} height={`100%`}>
								<LineChart
									data={chartDataParsed}
									margin={{ top: 25, bottom: 25, left: 5, right: 5 }}
								>
									<defs>
										<linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
											<stop offset="5%" stopColor="#1f8cfd" stopOpacity={1} />
											<stop offset="95%" stopColor="#7200e6" stopOpacity={1} />
										</linearGradient>
									</defs>
									<CartesianGrid
										stroke="rgb(66 153 225 / 0.1)"
										verticalCoordinatesGenerator={(props) => getHorizontalPoints(props, tickCount)}
									/>
									<YAxis
										domain={[
											(dataMin) => {
												if (yRange.min !== dataMin) setYRange({ max: yRange.max, min: dataMin });
												return getDomain(dataMin, yRange.max, false);
											},
											(dataMax) => {
												if (yRange.max !== dataMax) setYRange({ min: yRange.min, max: dataMax });
												return getDomain(yRange.min, dataMax, true);
											},
										]}
										type="number"
										axisLine={true}
										tick={true}
										tickLine={false}
										tickCount={tickCount}
										interval={0}
										scale="linear"
										hide={false}
										width={60}
										tickFormatter={tickFormatter}
										style={{ fontFamily: `Montserrat, sans-serif` }}
										animationDuration={500}
									/>
									{compBtc && chartDataParsed[0].btc && (
										<Line
											dataKey="scaledBtc"
											type="monotone"
											stroke="#F7931A"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderBtcDot}
											animationDuration={500}
										/>
									)}
									{compEth && chartDataParsed[0].eth && (
										<Line
											dataKey="scaledEth"
											type="monotone"
											stroke="#66A236"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderEthDot}
											animationDuration={500}
										/>
									)}
									{compMatic && chartDataParsed[0].matic && (
										<Line
											dataKey="scaledMATIC"
											type="monotone"
											stroke="#e9c46a"
											strokeWidth={2}
											stroke-linecap="round"
											legendType="none"
											dot={false}
											//activeDot={renderEthDot}
											animationDuration={500}
										/>
									)}
									<Line
										dataKey="scaledToken"
										type="monotone"
										stroke={/*mergedPrices.flat ? */ '#1f8cfd' /* : 'url(#gradient1)'*/}
										strokeWidth={2}
										stroke-linecap="round"
										legendType="none"
										dot={false}
										//activeDot={renderCoinDot}
										animationDuration={500}
									/>
									<Tooltip
										filterNull={true}
										cursor={{ stroke: '#BCE7FE' }}
										animationDuration={400}
										animationEasing="ease"
										content={ChartTooltip}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
						<Box
							height="3em"
							bgColor="blue5"
							borderRadius="0 0 1.25em 1.25em"
							padding="0 1rem"
							textAlign="center"
							lineHeight="3em"
							display="flex"
							justifyContent="center"
						>
							<Text fontSize="sm" color="purple" d="inline-block">
								Compare with
							</Text>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompEth(e.target.checked)}
								checked={compEth}
								color="ethcolor"
								borderColor="#AADCFE"
							>
								ETH
							</Checkbox>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompMatic(e.target.checked)}
								checked={compMatic}
								color="maticcolor"
								borderColor="#AADCFE"
							>
								MATIC
							</Checkbox>
							<Checkbox
								m="0 1rem 0 1rem"
								onChange={(e) => setCompBtc(e.target.checked)}
								checked={compBtc}
								color="btcorange"
								borderColor="#AADCFE"
							>
								BTC
							</Checkbox>
						</Box>
						{chartLoadingEffect && (
							<div
								name="loading surface"
								style={{
									display: `flex`,
									justifyContent: `center`,
									alignItems: `center`,
									position: `absolute`,
									width: `100%`,
									height: `100%`,
									top: 0,
									left: 0,
									background: colors?.backgroundColor || `white`,
									opacity: 0.75,
								}}
							>
								<Box textAlign="center" color={colors?.contrastText || `black`}>
									<Text fontStyle="italic" p="2rem 2rem 0 2rem">
										Loading chart ...
									</Text>
									<Spinner size="lg" margin="2rem auto" />
								</Box>
							</div>
						)}
					</section>
				</>
			)}
		</>
	);
}
