import { Box, Center, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useQueryParams } from 'hookrouter';
import React, { useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
	breakpointState,
	extendedTokenDetailsState,
	periodState,
	tokenDetailsForCurrentPeriod,
} from '../../state';
import { ChartData, ChartDataMap, TokenDetails } from '../../types';
import AddToWalletButton from '../atoms/AddToWalletButton';
import { EtherscanLink } from '../atoms/EtherscanLink';
import RiskModal from '../atoms/RiskModal';
import { YoutubeEmbed } from '../atoms/YoutubeEmbed';
import BondingCard from '../bonds/components/BondingCard/BondingCard';
import supabase from '../bonds/utils/supabase';
import { DynamicGrid } from '../molecules/DynamicGrid';
import { PriceAndDateHeader } from '../molecules/PriceAndDateHeader';
import { ProductDetailHeader } from '../molecules/ProductDetailHeader';
import { StyledGrid } from '../molecules/StyledGrid';
import { StyledSection } from '../molecules/StyledSection';
import { TokenDetailBox } from '../molecules/TokenDetailBox';
import FeeBox from '../organisms/AboutTokenSet/tokens/FeeBox';
import { FullHeightPage } from '../templates/FullHeightPage';
import { PERIODS } from './ProductListPage/TimeButton';

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});

const symbol = 'SWD';

export function BondsPage(): JSX.Element {
	const { chainId } = useWallet();
	const breakpoint = useRecoilValue(breakpointState);
	const [contractData, setContractData] = useState<any>(null);

	async function getContracts() {
		try {
			const { data, error } = await supabase
				.from('Liquidity Mining Contracts')
				.select('*')
				.range(0, 9);
			if (error) throw error;
			if (data) {
				setContractData(data);
			}
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		getContracts();
	}, []);

	return (
		<FullHeightPage pageKey="token">
			<Center>
				<StyledSection id="ProductDetails" section="body" marginBottom="3rem">
					<Box className="bodycontent">
						<VStack spacing="1rem" textAlign="left" align="left">
							<Box display="flex" alignItems="center" justifyContent="center">
								{contractData?.length > 0 &&
									contractData.map((contract: any, index: any) => {
										return <BondingCard contract={contract} key={index} />;
									})}
							</Box>
						</VStack>
						<VStack spacing="2rem" margin="0 auto">
							<Box color="bodytext"></Box>
						</VStack>
					</Box>
				</StyledSection>
			</Center>
			<title>SW DAO - Bonds</title>
			<meta name="description" content="Buy SWD" />

			<meta property="og:url" content="https://app.swdao.org/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="SW DAO - SWD" />
			<meta property="og:description" content="Buy SWD" />
			<meta property="og:image" content="/images/meta/meta_SWD.png" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="app.swdao.org" />
			<meta property="twitter:url" content="https://app.swdao.org/" />
			<meta name="twitter:title" content="SW DAO - SWD" />
			<meta name="twitter:description" content="Buy SWD" />
			<meta name="twitter:image" content="/images/meta/meta_SWD.png" />
		</FullHeightPage>
	);
}
