import { Grid, GridItem } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { breakpointState } from '../../state';

interface DynamicGridProps {
	cells: JSX.Element[];
	className?: string;
	display?: string;
	height?: string;
	width?: string;
	gap?: number | string;
}

const CELLS_PER_ROW: Record<string, number> = {
	sm: 1,
	md: 2,
	lg: 3,
	xl: 3,
};
const GRID_ITEM_MAXW: Record<string, string> = {
	sm: '98%',
	md: '100%',
	lg: '100%',
	xl: '100%',
};

export function DynamicGrid({
	cells,
	className = 'dynamic-grid',
	gap = '2rem',
	...rest
}: DynamicGridProps): JSX.Element {
	const breakpoint = useRecoilValue(breakpointState);

	const rows = useMemo(
		() =>
			cells.map((cell, ix) => (
				<GridItem maxW={GRID_ITEM_MAXW[breakpoint]} key={`item{${ix}}`}>
					{cell}
				</GridItem>
			)),
		[cells],
	);

	return (
		<Grid
			className={className}
			templateColumns={`repeat(${CELLS_PER_ROW[breakpoint]}, 1fr)`}
			gap={gap}
			{...rest}
		>
			{rows}
		</Grid>
	);
}
