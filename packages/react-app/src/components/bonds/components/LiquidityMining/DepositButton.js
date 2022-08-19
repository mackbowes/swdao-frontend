import { useState, useEffect } from 'react';
import styles from './DepositButton.module.scss';

export default function DepositButton(props) {
	const [buttonState, setButtonState] = useState('disabled');
	const { address, verified = true, menu = false } = props;
	const text = menu ? 'Deposit SWX ☰' : 'Deposit SWX';

	useEffect(() => {
		setButtonState(address && verified ? 'connected' : 'disabled');
	}, [address, verified]);

	return (
		<>
			{buttonState == 'disabled' && (
				<button className={styles.button} disabled>
					{text}
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					{text}
				</button>
			)}
		</>
	);
}
