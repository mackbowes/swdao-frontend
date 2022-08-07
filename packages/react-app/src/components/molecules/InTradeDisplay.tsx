import { Box, Tooltip } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { PRODUCTS_BY_SYMBOL } from '../../config/products';
import { extendedTokenDetailsState } from '../../state';
import { PositionMap } from './AllocationTable';
import classNames from './inTradeDisplay.module.css';

interface Props {
	symbol: string;
	dotOnly: boolean;
}

export function InTradeDisplay(props: Props): JSX.Element {
	const { symbol, dotOnly } = props;
	const [inTrade, setInTrade] = useState<number>(0);
	const tokenDetails = useRecoilValue(extendedTokenDetailsState);
	const [positionMap, setPositionMap] = useState<PositionMap>({});

	useEffect(() => {
		if (tokenDetails && tokenDetails[symbol]) {
			setPositionMap(tokenDetails[symbol].allocationTable);
		}
	}, [tokenDetails]);

	useEffect(() => {
		if ('0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' in positionMap) {
			setInTrade(
				parseFloat(
					positionMap['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'].allocation.slice(0, -1),
				),
			);
		}
	}, [positionMap]);
	let row = <Box></Box>;
	if (inTrade >= 95) {
		if (dotOnly) {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<Tooltip label={<p className={classNames.itdp}>Seeking Entry</p>}>
						<svg height="10" width="10" opacity="0.8">
							<circle cx="5" cy="5" r="5" fill="yellow" />
						</svg>
					</Tooltip>
				</Box>
			);
		} else {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<svg height="10" width="10" opacity="0.8">
						<circle cx="5" cy="5" r="5" fill="yellow" />
					</svg>
					<p className={classNames.itdp}>Seeking Entry</p>
				</Box>
			);
		}
	}
	if (inTrade < 95) {
		if (dotOnly) {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<Tooltip label={<p className={classNames.itdpa}>Partial Trade</p>}>
						<svg height="10" width="10" className={classNames.blink}>
							<circle cx="5" cy="5" r="5" fill="green" />
						</svg>
					</Tooltip>
				</Box>
			);
		} else {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<svg height="10" width="10" className={classNames.blink}>
						<circle cx="5" cy="5" r="5" fill="green" />
					</svg>
					<p className={classNames.itdpa}>Partial Trade</p>
				</Box>
			);
		}
	}
	if (inTrade < 50) {
		if (dotOnly) {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<Tooltip label={<p className={classNames.itdpa}>In Trade</p>}>
						<svg height="10" width="10" className={classNames.blink}>
							<circle cx="5" cy="5" r="5" fill="green" />
						</svg>
					</Tooltip>
				</Box>
			);
		} else {
			row = (
				<Box display="flex" alignItems="center" paddingLeft="1rem">
					<svg height="10" width="10" className={classNames.blink}>
						<circle cx="5" cy="5" r="5" fill="green" />
					</svg>
					<p className={classNames.itdpa}>In Trade</p>
				</Box>
			);
		}
	}
	if (Object.keys(positionMap).length === 0) {
		row = (
			<Box className={classNames.loadingDotBox}>
				{!dotOnly && <div className={classNames.loadingDot}></div>}
			</Box>
		);
		if (symbol === 'SWD') {
			row = <div></div>;
		}
		if (PRODUCTS_BY_SYMBOL[symbol].category === 'YIELD') {
			if (tokenDetails && tokenDetails[symbol]) {
				if (dotOnly) {
					row = (
						<Box display="flex" alignItems="center" paddingLeft="1rem">
							<Tooltip label={<p className={classNames.itdpa}>In Trade</p>}>
								<svg height="10" width="10" className={classNames.blink}>
									<circle cx="5" cy="5" r="5" fill="green" />
								</svg>
							</Tooltip>
						</Box>
					);
				} else {
					row = (
						<Box display="flex" alignItems="center" paddingLeft="1rem">
							<svg height="10" width="10" className={classNames.blink}>
								<circle cx="5" cy="5" r="5" fill="green" />
							</svg>
							<p className={classNames.itdpa}>In Trade</p>
						</Box>
					);
				}
			}
		}
	}

	return row;
}
