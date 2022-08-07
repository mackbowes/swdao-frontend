import { Box, Text } from '@chakra-ui/react';

export default function ChartToolTip(props) {
	const { active, payload } = props;
	if (!active || !payload || !payload[0]) {
		return <></>;
	}
	const { timestamp, token, eth, compEth, btc, compBtc, compMATIC, matic, symbol } =
		payload[0].payload;

	const formatCurrency = (num) => {
		if (num) {
			return num.toLocaleString(undefined, {
				currency: 'USD',
				style: 'currency',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
	};

	const formatDate = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleDateString('en', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
	};

	const formatTime = (timestamp) => {
		return new Date(timestamp * 1000).toLocaleTimeString(undefined, {
			timeStyle: 'short',
		});
	};

	return (
		<Box
			color="#AADCFE"
			textAlign="right"
			marginTop="100px"
			width="200px"
			bgColor="#1D1055"
			border="1px solid #6053E5"
			padding="1rem"
			borderRadius="3px"
		>
			<Box>
				<Text fontSize="md" color="swdblue" d="inline-block" pr="0.5rem">
					{symbol}
				</Text>
				<Text fontSize="lg" color="white" fontWeight="700" d="inline-block">
					{formatCurrency(token)}
				</Text>
			</Box>
			{compBtc && (
				<Box>
					<Text fontSize="md" color="btcorange" d="inline-block" pr="0.5rem">
						BTC
					</Text>
					<Text fontSize="lg" color="white" fontWeight="700" d="inline-block">
						{formatCurrency(btc)}
					</Text>
				</Box>
			)}
			{compEth && (
				<Box>
					<Text fontSize="md" color="ethcolor" d="inline-block" pr="0.5rem">
						ETH
					</Text>
					<Text fontSize="lg" color="white" fontWeight="700" d="inline-block">
						{formatCurrency(eth)}
					</Text>
				</Box>
			)}
			{compMATIC && (
				<Box>
					<Text fontSize="md" color="maticcolor" d="inline-block" pr="0.5rem">
						MATIC
					</Text>
					<Text fontSize="lg" color="white" fontWeight="700" d="inline-block">
						{formatCurrency(matic)}
					</Text>
				</Box>
			)}
			<Text fontSize="sm">{formatDate(timestamp)}</Text>
			<Text fontSize="sm">{formatTime(timestamp)}</Text>
		</Box>
	);
}
