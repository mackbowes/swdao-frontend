import { Box, Button, Heading } from '@chakra-ui/react';
import classNames from './riskModal.module.css';
import 'charts.css';
import { useState } from 'react';
import $ from 'jquery';
import { PRODUCTS_BY_SYMBOL } from '../../config/products';
import { RISK_TEXT } from '../../config/riskText';
import { useRecoilValue } from 'recoil';
import { breakpointState } from '../../state';

interface RiskModal {
	symbol: string;
}

export default function RiskModal({ symbol }: RiskModal) {
	const [modalOpen, setModalOpen] = useState(false);
	const risk = PRODUCTS_BY_SYMBOL[symbol].risk;
	const breakpoint = useRecoilValue(breakpointState);
	const lalbeColor = {
		color: 'white',
	};
	if (modalOpen) {
		$('.recharts-wrapper').css('position', 'unset');
	}
	if (!modalOpen) {
		$('.recharts-wrapper').css('position', 'relative');
	}

	$(`#${risk}`).css('--color', '#BCE7FE');
	$(`#lable-${risk}`).css('font-size', 'larger');
	// if (breakpoint === 'sm' || breakpoint === 'md') {
	// 	return null;
	// }
	const h = breakpoint === 'sm' ? '50px' : '100px';
	const w = breakpoint === 'sm' ? '100px' : '200px';
	const top = breakpoint === 'sm' ? '-1rem' : undefined;
	const position = breakpoint === 'sm' ? 'relative' : undefined;
	return (
		<Box display="flex" justifyContent="flex-end" marginRight="-0.3rem">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="right"
				height={h}
				width={w}
				flexDir="column"
				top={top}
				position={position}
			>
				<table id="riskModal" className="charts-css column hide-data show-labels data-spacing-5 ">
					<caption> Risk Ratio 1-5 </caption>
					<thead>
						<tr>
							<th scope="col"> Risk </th> <th scope="col"> Ratio </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row" style={{ ...lalbeColor }} id="lable-one">
								1
							</th>
							<td className={classNames.one} id="one">
								<span className="data"> 1 </span>
							</td>
						</tr>
						<tr>
							<th scope="row" style={{ ...lalbeColor }} id="lable-two">
								2
							</th>
							<td className={classNames.two} id="two">
								<span className="data"> 2 </span>
							</td>
						</tr>
						<tr>
							<th scope="row" style={{ ...lalbeColor }} id="lable-three">
								3
							</th>
							<td className={classNames.three} id="three">
								<span className="data"> 3 </span>
							</td>
						</tr>
						<tr>
							<th scope="row" style={{ ...lalbeColor }} id="lable-four">
								4
							</th>
							<td className={classNames.four} id="four">
								<span className="data"> 4 </span>
							</td>
						</tr>
						<tr>
							<th scope="row" style={{ ...lalbeColor }} id="lable-five">
								5
							</th>
							<td className={classNames.five} id="five">
								<span className="data"> 5 </span>
							</td>
						</tr>
					</tbody>
				</table>
				<Box
					onClick={() => setModalOpen(!modalOpen)}
					color="white"
					cursor="pointer"
					alignSelf="center"
				>
					ⓘ Risk Level
				</Box>
			</Box>
			{modalOpen && (
				<Box className={classNames.riskBlocker}>
					<Box onClick={() => setModalOpen(false)} className={classNames.riskBlocker}></Box>
					<Box className={classNames.riskModalTextBox} width={breakpoint === 'sm' ? '100%' : '33%'}>
						<Heading fontSize="xl" lineHeight="1.2" color="black" marginBottom="1rem">
							{RISK_TEXT[risk].header}
						</Heading>
						<p className="chakra-text">{RISK_TEXT[risk].description}</p>
						<Button onClick={() => setModalOpen(false)} className={classNames.riskButton}>
							Close
						</Button>
					</Box>
				</Box>
			)}
		</Box>
	);
}
