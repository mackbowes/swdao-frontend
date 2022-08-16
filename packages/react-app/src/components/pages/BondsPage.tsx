import { Box, Center, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { useWallet } from '@raidguild/quiver';
import { useRecoilValue } from 'recoil';

import { breakpointState } from '../../state';

import BondingCard from '../bonds/components/BondingCard/BondingCard';

import { StyledSection } from '../molecules/StyledSection';
import { FullHeightPage } from '../templates/FullHeightPage';

export function BondsPage(): JSX.Element {
	const { chainId } = useWallet();
	const breakpoint = useRecoilValue(breakpointState);

	return (
		<FullHeightPage pageKey="token">
			<Center>
				<StyledSection id="ProductDetails" section="body" marginBottom="3rem">
					<Box className="bodycontent">
						<VStack spacing="1rem" textAlign="left" align="left">
							<Box display="flex" alignItems="center" justifyContent="center">
								<BondingCard />
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
