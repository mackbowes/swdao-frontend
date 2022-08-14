import { BiCoin } from 'react-icons/bi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import styles from './BuySellButton.module.scss';
import { useState } from 'react';

export default function BuySellButton(props) {
	return (
		<>
			{props?.type === 'Buy' && (
				<>
					<div>
						<button
							onClick={props?.onClick}
							className={props?.swapState === 'Buy' ? styles.buttonSellGreen : styles.buttonSell}
						>
							Buy
							<div
								style={{
									fontSize: `18px`,
								}}
							>
								<BiCoin />
							</div>
						</button>
					</div>
				</>
			)}
			{props?.type === 'Sell' && (
				<>
					<div>
						<button
							onClick={props?.onClick}
							className={props?.swapState === 'Sell' ? styles.buttonSellGreen : styles.buttonSell}
						>
							Sell
							<div
								style={{
									fontSize: `18px`,
								}}
							>
								<FaMoneyBillAlt />
							</div>
						</button>
					</div>
				</>
			)}
		</>
	);
}
