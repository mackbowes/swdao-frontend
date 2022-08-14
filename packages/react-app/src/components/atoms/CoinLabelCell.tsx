import { Box, Text } from '@chakra-ui/react';
import { navigate } from 'hookrouter';
import { A } from 'hookrouter';
import React, { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { breakpointState } from '../../state';
import { InTradeDisplay } from '../molecules/InTradeDisplay';

import { CoinIcon } from './CoinIcon';

interface CoinLabelCellProps {
	symbol: string;
	icon: string;
	url?: string;
	name: string;
	height?: string;
	width?: string;
	linkCell?: boolean;
	hideSymbol?: boolean;
	fontSize?: string;
	color?: string;
}
export function CoinLabelCell({
	symbol,
	icon,
	url,
	name,
	height,
	linkCell,
	width,
	hideSymbol,
	fontSize,
	color = 'bodytext',
}: CoinLabelCellProps): JSX.Element {
	const [hover, setHover] = useState(false);
	const breakpoint = useRecoilValue(breakpointState);

	const tdProps: Record<string, any> = useMemo(
		() =>
			linkCell
				? {
						onClick: () => navigate(url),
						cursor: 'pointer',
						onMouseOver: () => setHover(true),
						onMouseLeave: () => setHover(false),
				  }
				: {},
		[url, linkCell],
	);

	const lableElement = () => {
		return (
			<Text
				as="span"
				fontSize={fontSize}
				color={hover ? 'white' : color}
				display="inline-flex"
				alignItems="center"
			>
				{name}
				{breakpoint !== 'sm' && (
					<Box>
						<InTradeDisplay symbol={symbol} dotOnly={true} />
					</Box>
				)}
			</Text>
		);
	};

	if (width) tdProps.width = width;
	return (
		<Box className="nobreak coin" {...tdProps} textAlign="left">
			<Box display="inline-block" marginRight="1.5rem">
				<CoinIcon symbol={symbol} src={icon} verticalAlign="middle" height={height || '2.5rem'} />
				{url ? (
					<A href={url}>
						<Text
							as="span"
							fontSize={fontSize}
							color={hover ? 'white' : color}
							display="inline-flex"
							alignItems="center"
						>
							{name}
							{breakpoint !== 'sm' && (
								<Box>
									<InTradeDisplay symbol={symbol} dotOnly={true} />
								</Box>
							)}
						</Text>
						{!hideSymbol && (
							<Text m="0 1rem" d="inline-block" className="symbol" as="span">
								{symbol.toUpperCase()}
							</Text>
						)}
					</A>
				) : (
					<Box>
						<Text
							as="span"
							fontSize={fontSize}
							color={hover ? 'white' : color}
							display="inline-flex"
							alignItems="center"
						>
							{name}
							{breakpoint !== 'sm' && (
								<Box>
									<InTradeDisplay symbol={symbol} dotOnly={true} />
								</Box>
							)}
						</Text>
						{!hideSymbol && (
							<Text m="0 1rem" d="inline-block" className="symbol" as="span">
								{symbol.toUpperCase()}
							</Text>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
}
