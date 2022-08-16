import { useState, useEffect } from 'react';
import icon from './depositbutton-icon.png';
import disabledicon from './disabled-depositbutton-icon.png';
import styles from './DepositButton.module.scss';
import { Image } from '@chakra-ui/react';

export default function DepositButton(props) {
	const [buttonState, setButtonState] = useState('disabled');
	const { address, verified = true } = props;

	useEffect(() => {
		setButtonState(address && verified ? 'connected' : 'disabled');
	}, [address, verified]);

	return (
		<>
			{buttonState == 'disabled' && (
				<button className={styles.button} disabled>
					Deposit SWX <Image {...disabledicon} />
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					Deposit SWX <Image {...icon} />
				</button>
			)}
		</>
	);
}
