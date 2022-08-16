import { useState, useEffect } from 'react';
import icon from './claim-icon.png';
import disabledicon from './disabled-claim-icon.png';
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
					Claim SWD <Image {...disabledicon} />
				</button>
			)}
			{buttonState == 'connected' && (
				<button className={styles.button} onClick={props?.onClick}>
					Claim SWD <Image {...icon} />
				</button>
			)}
		</>
	);
}
