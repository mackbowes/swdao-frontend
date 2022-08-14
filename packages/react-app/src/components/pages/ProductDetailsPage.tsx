import { useQueryParams } from 'hookrouter';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useWindowSize } from '../../hooks/useWindowSize';
import {
	breakpointState,
	extendedTokenDetailsState,
	periodState,
	tokenDetailsForCurrentPeriod,
} from '../../state';
import { ChartData, ChartDataMap, TokenDetails } from '../../types';
import { getOverriddenDetails } from '../../utils';
import { HoveringArrowLink } from '../molecules/HoveringArrowLink';
import { PriceAndDateHeader } from '../molecules/PriceAndDateHeader';
import { ProductDetailHeader } from '../molecules/ProductDetailHeader';
import { TokenDetailBox } from '../molecules/TokenDetailBox';
import { StyledGrid } from '../molecules/StyledGrid';
import { StyledSection } from '../molecules/StyledSection';
import { AboutTokenSet } from '../organisms/AboutTokenSet';
import { ChartAndBuy } from '../organisms/ChartAndBuy';
import { FullHeightPage } from '../templates/FullHeightPage';
import RiskModal from '../atoms/RiskModal';
import AddToWalletButton from '../atoms/AddToWalletButton';
import { useRedirect } from 'hookrouter';
const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

export function ProductDetailsPage({ symbol }: { symbol: string }): JSX.Element {
	const [query, setQuery] = useQueryParams();
	// const { period: string = 'MAX' } = query;
	const [period, setPeriod] = useState('MAX');
	// const [periodVal, setPeriodState] = useRecoilState(periodState);
	const windowSize = useWindowSize();
	const tokenPrices = useRecoilValue(tokenDetailsForCurrentPeriod);
	const tokenDetails = useRecoilValue(tokenDetailsForCurrentPeriod);
	const detailMap = useRecoilValue(extendedTokenDetailsState);
	const [prices, setPrices] = useState<ChartData>([]); // SWD prices
	const [product, setProduct] = useState<TokenDetails | null>(null);
	const breakpoint = useRecoilValue(breakpointState);
	const [charts, setCharts] = useState<ChartDataMap>({});

	useRedirect('/product/SWD', '/token'); // redirects from /product/SWD to /token

	useEffect(() => {
		if (tokenDetails) {
			const product = tokenDetails[symbol];
			if (product) {
				setPrices(product.prices);
			}
		}
	}, [period, prices, symbol, tokenDetails]);

	useEffect(() => {
		if (tokenPrices) {
			const sym = symbol.toUpperCase();
			const token = tokenPrices[sym];
			if (token) {
				setProduct(token);
			}
		}
	}, [tokenPrices, symbol, period, tokenDetails]);

	// useEffect(() => {
	// 	if (periodVal !== period) {
	// 		setPeriodState(period);
	// 	}
	// }, [periodVal, period, setPeriodState]);

	// const setPeriod = (p: string) => {
	// 	setQuery({ ...query, period: p });
	// 	setPeriodState(p);
	// };

	const { image: icon, name } = getOverriddenDetails(symbol);

	const { currentPrice, marketCap, priceChange, volume, totalSupply } = useMemo(() => {
		if (!detailMap[symbol]) {
			return {
				currentPrice: 0,
				marketCap: 0,
				priceChange: 0,
				volume: 0,
				totalSupply: 0,
			};
		}
		const product = detailMap[symbol];

		return {
			currentPrice: product.currentPrice,
			marketCap: currencyFormatter.format(product.marketCap),
			priceChange: product.changePercent1Day,
			volume: currencyFormatter.format(product.volume1Day),
			totalSupply: new Intl.NumberFormat('en-US').format(product.totalSupply),
		};
	}, [detailMap, symbol]);

	const extendedTokenDetails = useMemo(() => detailMap[symbol] || {}, [detailMap, symbol]);

	const ifWidth = useMemo(
		() =>
			(targetWidth: number, toReturn: any, otherwise: any = {}) => {
				const isWide = (windowSize?.width || 0) > targetWidth;
				return isWide ? toReturn : otherwise;
			},
		[windowSize],
	);
	const [change, setChange] = useState(0);
	const updateChange = () => {
		if (prices.length > 0 && charts[period].length > 0) {
			const cP = currentPrice;
			const p = parseFloat(charts[period][0][1]);
			setChange(((cP - p) / p) * 100);
			return true;
		} else setChange(0);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			if (updateChange()) {
				clearInterval(interval);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [product, currentPrice, prices, charts, period]);
	useEffect(() => {
		updateChange();
	}, [period]);

	const handleChartChange = async (newChart: ChartDataMap) => {
		setCharts(newChart);
	};

	const swdDetailCells = [
		<TokenDetailBox
			height="7rem"
			key="MCAP"
			keyName="mcap"
			title="Market Cap"
			value={marketCap.toString()}
		/>,
		<TokenDetailBox
			height="7rem"
			key="VOL"
			keyName="volume"
			title="24Hr Volume"
			value={volume.toString()}
		/>,
		<TokenDetailBox
			height="7rem"
			key="MAX_SUPPLY"
			keyName="supply"
			title="Supply"
			value={totalSupply.toString()}
		/>,
	];

	function AddToMetamaskButton() {
		if (product?.address) {
			return <AddToWalletButton address={product?.address} symbol={symbol} />;
		}
		return null;
	}

	const metaTitle = 'SW DAO - ' + symbol;
	const metaDesc = 'Buy ' + name;
	const metaImage = '/images/meta/meta_' + symbol + '.png';
	return (
		<FullHeightPage pageKey="details">
			<Center>
				<StyledSection id="ProductDetails" section="body" marginBottom="3rem">
					<Box className="bodycontent">
						<VStack spacing="1rem" textAlign="left" align="left">
							<Box display="flex" alignItems="center">
								<ProductDetailHeader symbol={symbol} icon={icon || ''} name={name || ''} h="5rem" />
								{breakpoint !== 'sm' && <AddToMetamaskButton />}
							</Box>
							<Box display="flex" alignItems="center">
								<PriceAndDateHeader
									symbol={symbol}
									address={product?.address}
									change={change}
									price={currentPrice}
									date={Date.now()}
									showZero={false}
								/>
								<RiskModal symbol={symbol} />
							</Box>
						</VStack>
						<VStack spacing="2rem" margin="0 auto">
							<ChartAndBuy
								symbol={symbol}
								handleDateChange={setPeriod}
								setCharts={handleChartChange}
								price={currentPrice}
							/>
							<StyledGrid
								cells={swdDetailCells}
								display="table"
								width="100%"
								className="swdabout"
							/>
							<AboutTokenSet
								align="left"
								mt="3rem"
								symbol={symbol}
								textAlign="left"
								tokenData={product}
								tokenDetails={extendedTokenDetails}
								width="100%"
							/>
						</VStack>
					</Box>
				</StyledSection>
			</Center>
			<title>{metaTitle}</title>
			<meta name="description" content={metaDesc} />

			<meta property="og:url" content="https://app.swdao.org/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={metaTitle} />
			<meta property="og:description" content={metaDesc} />
			<meta property="og:image" content={metaImage} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="app.swdao.org" />
			<meta property="twitter:url" content="https://app.swdao.org/" />
			<meta name="twitter:title" content={metaTitle} />
			<meta name="twitter:description" content={metaDesc} />
			<meta name="twitter:image" content={metaImage} />
		</FullHeightPage>
	);
}
