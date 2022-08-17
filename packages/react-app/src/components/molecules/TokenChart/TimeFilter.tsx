import { BsFillCalendarEventFill } from 'react-icons/bs';
import { BiCalendar } from 'react-icons/bi';
import { FaCalendarWeek } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { string } from 'prop-types';

interface TimePeriods {
	[key: string]: {
		label: string;
		icon: JSX.Element;
		days: number;
	};
}

export const TIME_PERIODS: TimePeriods = {
	'1D': {
		label: '1 Day',
		icon: <BsFillCalendarEventFill />,
		days: 1,
	},
	'1M': {
		label: '1 Month',
		icon: <BiCalendar />,
		days: 30,
	},
	'3M': {
		label: '3 Months',
		icon: <BiCalendar />,
		days: 90,
	},
	MAX: {
		label: 'MAX',
		icon: <FaCalendarWeek />,
		days: 0,
	},
};

export const PERIODS = Object.keys(TIME_PERIODS);

interface TimeFilterProps {
	period: string;
	onClick: React.Dispatch<React.SetStateAction<string>>;
	disabled: boolean;
	active: boolean;
}

// export interface TimeButtonProps {
// 	period: string;
// 	onClick: (period: string) => void;
// }

export default function TimeFilter({
	period,
	onClick,
	disabled,
	active,
}: TimeFilterProps): JSX.Element {
	// get next index, wrapping around
	const key = period.toUpperCase();
	const { icon, label } = TIME_PERIODS[key];
	let color = 'purple';
	if (!active) {
		color = 'purple';
	}
	return (
		<Button
			height="2rem"
			maxWidth="10rem"
			fontWeight="500"
			fontSize="20px"
			background={active ? 'bodytext' : 'transparent'}
			bgColor="transparent"
			bgGradient="none"
			color={active ? 'blue5' : color}
			variant="none"
			_hover={{
				background: 'bodytext',
				color: 'blue5',
			}}
			display="flex"
			onClick={() => onClick(period)}
			backgroundColor="transparent"
			disabled={disabled}
		>
			{icon}&nbsp;{label}
		</Button>
	);
}
