import { useState, useEffect } from 'react';
import styles from './DepositButton.module.scss';
import { Text } from '@chakra-ui/react';

export default function DepositButton(props) {
	const [buttonState, setButtonState] = useState('disabled');
	const { address, verified = true, menu = false } = props;
	const text = menu ? 'Calculate Deposit' : 'Deposit SWX';

	useEffect(() => {
		setButtonState(address && verified ? 'connected' : 'disabled');
	}, [address, verified]);

	return (
		<>
			{buttonState == 'disabled' && (
				<button className={styles.button} disabled>
					<Text whiteSpace="nowrap" padding={'0 4px 0 4px'}>
						{text}
					</Text>
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					<Text whiteSpace="nowrap">{text}</Text>
				</button>
			)}
		</>
	);
}
