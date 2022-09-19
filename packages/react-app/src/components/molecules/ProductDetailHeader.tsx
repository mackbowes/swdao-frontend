import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { breakpointState } from '../../state';

import { getTokenUrl } from '../../utils';
import { InTradeDisplay } from './InTradeDisplay';

interface ProductDetailHeaderProps {
	icon: string;
	symbol: string;
	name: string;
	h?: string;
}

export function ProductDetailHeader({
	icon,
	symbol,
	name,
	h = '2.5rem',
}: ProductDetailHeaderProps): JSX.Element {
	const breakpoint = useRecoilValue(breakpointState);
	const src = useMemo(() => icon ?? getTokenUrl(symbol)[0], [icon, symbol]);
	const height = breakpoint !== 'sm' ? h : '3rem';
	const ml = breakpoint !== 'sm' ? '-.8rem' : '';
	const fontSize = breakpoint !== 'sm' ? undefined : '1.2rem';
	const paddingLeft = breakpoint !== 'sm' ? '1rem' : '20px';
	const alignItems = breakpoint !== 'sm' ? 'center' : 'flex-start';
	const flexDir = breakpoint !== 'sm' ? undefined : 'column';
	return (
		<Flex
			margin="0"
			width="100%"
			textAlign="left"
			spacing="1rem"
			fontSize="2rem"
			verticalAlign="middle"
			flexWrap="nowrap"
			lineHeight={h}
		>
			<Flex flexWrap="wrap" alignItems={alignItems} flexDir={flexDir}>
				<Box display="flex" alignItems="center">
					<Image d="inline-block" src={src} alt={`${symbol} Icon`} h={height} ml={ml} />
					<Box pr="1rem" color="#151C3F" fontWeight={500} fontSize={fontSize}>
						{name}
					</Box>
					<Box fontWeight={500} color="#43A7FD" fontSize={fontSize}>
						{symbol}
					</Box>
				</Box>
				<Box lineHeight="0" paddingLeft={paddingLeft}>
					<InTradeDisplay symbol={symbol} dotOnly={false} />
				</Box>
			</Flex>
		</Flex>
	);
}
