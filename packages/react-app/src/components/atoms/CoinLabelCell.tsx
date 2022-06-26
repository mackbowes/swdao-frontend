import { Box, Text } from '@chakra-ui/react';
import { navigate } from 'hookrouter';
import { A } from 'hookrouter';
import React, { useMemo, useState } from 'react';

import { CoinIcon } from './CoinIcon';

interface CoinLabelCellProps {
	symbol: string;
	icon: string;
	url: string;
	name: string;
	height?: string;
	width?: string;
	linkCell?: boolean;
	hideSymbol?: boolean;
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
}: CoinLabelCellProps): JSX.Element {
	const [hover, setHover] = useState(false);

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

	if (width) tdProps.width = width;

	return (
		<Box className="nobreak coin" {...tdProps} textAlign="center">
			<A href={url}>
				<CoinIcon symbol={symbol} src={icon} verticalAlign="middle" height={height || '2.5rem'} />
			</A>
		</Box>
	);
}
