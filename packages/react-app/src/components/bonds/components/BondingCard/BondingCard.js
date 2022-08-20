import { useWallet } from '@raidguild/quiver';
import { useState, useEffect } from 'react';
import { Box, Heading, Text, Spinner, useToast, Tooltip, Stack } from '@chakra-ui/react';
import ConnectionIndicator from '../ConnectionIndicator/ConnectionIndicator';
import DepositButton from '../LiquidityMining/DepositButton';
import WithdrawButton from '../LiquidityMining/WithdrawButton';
import styles from './BondingCard.module.scss';
import {
	showErrorToast,
	showSuccessToast,
	showToast,
	showTransactionApprovalToast,
	showTransactionSendingToast,
	showTransactionSentToast,
} from '../../../../utils/toasts';
import ReactPaginate from 'react-paginate';
import { utils } from 'ethers';
import {
	getSwxBalance,
	getSwdBalance,
	getContractInfo,
	getSwdAvailable,
	getBondsPage,
} from './LogicData';
import { approve, approveCheck, deposit, withdraw } from './LogicTx';
import BigNumberInput from '../LiquidityMining/BigNumberInput';
import { BigNumber } from 'ethers';
import { PRODUCTS_BY_SYMBOL } from '../../../../config/products';
import { swxContract } from '../../utils/provider';
import { safeFixed } from '../../../../utils/contracts';

const formatNumber = (n, length = 7) => {
	if (typeof n === 'string') n = parseFloat(n, 10);
	const num = n.toLocaleString(undefined, {
		minimumSignificantDigits: 2,
		maximumSignificantDigits: length,
	});
	return num.length > length + 4 ? n.toExponential(length - 4) : num;
};

const BondingCard = () => {
	const { isConnected, provider: walletProvider, address } = useWallet();
	const ethersPack = {
		address,
		walletProvider,
		signer: walletProvider?.getSigner(),
	};
	const amountToView = 5; // max rows for bonds
	const [balanceUserSwx, setBalanceUserSwx] = useState();
	const [textBalanceUserSwx, setTextBalanceUserSwx] = useState('—');
	const [amountWithdraw, setAmountWithdraw] = useState(null);
	const [textAmountWithdraw, setTextAmountWithdraw] = useState('—');
	const [amountWithdrawTooLong, setAmountWithdrawTooLong] = useState(false);
	const [amountDeposit, setAmountDeposit] = useState('');
	const [amountDepositVerified, setAmountDepositVerified] = useState(false);
	const [amountDepositTooHigh, setAmountDepositTooHigh] = useState(false);
	const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
	const [textSwdRemaining, setTextSwdRemaining] = useState('—');
	const [textRewardRate, setTextRewardRate] = useState('—');
	const [textApy, setTextApy] = useState('—');
	const [textMpy, setTextMpy] = useState('—');
	const [textWpy, setTextWpy] = useState('—');
	const [bondsTotal, setBondsTotal] = useState(0);
	const [bondsPage, setBondsPage] = useState(0);
	const [bonds, setBonds] = useState([]);
	const [bondsLoading, setBondsLoading] = useState(false);
	const [txInProgress, setTxInProgress] = useState(false);
	const [rateGetterRunning, setRateGetterRunning] = useState(false);
	const [calcValue, setCalcValue] = useState(0);
	const [priceSWX, setPriceSWX] = useState(0);
	const [priceSWD, setPriceSWD] = useState(0);
	const [r, setR] = useState(0);
	const toast = useToast();

	const updateRates = async () => {
		const { swdRemaining, reward, apy, mpy, wpy } = await getContractInfo();
		setTextSwdRemaining(formatNumber(utils.formatUnits(swdRemaining, 18)) + ' SWD');
		setTextRewardRate(reward + '%');
		setR(reward);
		setTextApy(apy + '%');
		setTextMpy(mpy + '%');
		setTextWpy(wpy + '%');
		const prices = await swxContract.getValue();
		setPriceSWX(parseFloat(prices[0].toString()) / 10 ** 18);
		setPriceSWD(parseFloat(prices[1].toString()) / 10 ** 18);
		console.log(priceSWD, priceSWX);
	};

	const updateRatesEveryFiveMinutes = async () => {
		while (true) {
			await updateRates();
			await new Promise((r) => setTimeout(r, 300000));
		}
	};

	const updateAmountWithdraw = async () => {
		const amount = await getSwdAvailable(address);
		const parsed = utils.formatUnits(amount, 18);
		const formatted = formatNumber(parsed);
		const tooSmall = formatted.includes('e');
		setAmountWithdraw(tooSmall ? BigNumber.from(0) : BigNumber.from(amount));
		setTextAmountWithdraw(tooSmall ? '0' : formatted);
		setAmountWithdrawTooLong(!tooSmall && parsed !== formatted ? true : false);
	};

	useEffect(() => {
		if (!rateGetterRunning) {
			updateRatesEveryFiveMinutes();
			setRateGetterRunning(true);
		}
	}, []);

	useEffect(() => {
		if (txInProgress) return;
		if (!address) {
			setBalanceUserSwx(null);
			setTextBalanceUserSwx('—');
			setAmountWithdraw(null);
			setTextAmountWithdraw('—');
			setAmountWithdrawTooLong(false);
		} else {
			updateAmountWithdraw();
			getSwxBalance(address).then((result) => {
				setBalanceUserSwx(result);
			});
		}
	}, [address, txInProgress]);

	useEffect(() => {
		if (!balanceUserSwx) return;
		setTextBalanceUserSwx(
			BigNumber.from(balanceUserSwx).eq(0) ? '0' : formatNumber(utils.formatUnits(balanceUserSwx)),
		);
	}, [balanceUserSwx]);

	useEffect(() => {
		if (!(amountDeposit && balanceUserSwx)) return;
		const balanceTooLow = utils.parseUnits(amountDeposit, 18).gt(balanceUserSwx);
		setAmountDepositTooHigh(balanceTooLow);
		setAmountDepositVerified(!(balanceTooLow || parseFloat(amountDeposit) <= 0));
	}, [amountDeposit, balanceUserSwx]);

	useEffect(() => {
		if (!address || txInProgress) return;
		setBondsLoading(true);
		getBondsPage(address, bondsPage, amountToView).then((result) => {
			const { totalBonds, bonds } = result;
			setBondsTotal(totalBonds);
			setBonds(bonds);
			setBondsLoading(false);
		});
	}, [address, bondsPage, txInProgress]);

	const handlePageClick = (event) => {
		setBondsPage(event.selected);
	};

	const handleMaxButton = () => {
		if (!balanceUserSwx) return;
		const amount = utils.formatUnits(balanceUserSwx, 18);
		setAmountDeposit(amount === '0.0' ? '0' : amount);
	};

	const withdrawAsync = async () => {
		showToast(
			'Bond withdrawal initiated',
			{ title: 'Bond withdrawal initiated', description: '' },
			toast,
		);
		const oldBalance = await getSwdBalance(address);
		const result = await withdraw(ethersPack, toast);
		if (result.code == 1) {
			let success = false;
			toast.close('tx_sent');
			showToast(
				'checking_balance',
				{
					title: 'Checking Balance',
					description: 'This may take up to 1 minute',
					duration: 60000,
				},
				toast,
			);
			for (let i = 0; i < 12 && !success; i++) {
				await new Promise((r) => setTimeout(r, 5000));
				const newBalance = await getSwdBalance(address);
				success = BigNumber.from(newBalance).gt(oldBalance);
			}
			if (success) {
				await updateRates();
				await updateAmountWithdraw();
				toast.close('checking_balance');
				showToast(
					'Withdrawal successful',
					{ title: 'Withdrawal successful', description: '' },
					toast,
				);
			} else {
				showErrorToast(
					'Withdrawal failed, or took too long',
					{ title: 'Withdrawal failed, or took too long' },
					result.message,
					toast,
				);
				console.error('(withdrawAsync): Balance check failed.', success);
			}
		} else {
			if (result.code != 4001) {
				console.error('(withdrawAsync) Metamask Error:', result);
				showErrorToast('Withdrawal failed', {}, result.message, toast);
			}
			// showErrorToast('tx_rejected', {}, result.message, toast);
		}
		setTxInProgress(false);
	};

	const handleWithdraw = () => {
		setTxInProgress(true);
		withdrawAsync();
	};

	const depositAsync = async () => {
		const amountDepositNum = BigNumber.from(utils.parseUnits(amountDeposit, 18));
		// APPROVAL
		if ((await approveCheck(ethersPack)).lt(amountDepositNum)) {
			showTransactionApprovalToast(1, toast);
			const result = await approve(ethersPack, amountDepositNum, toast);
			if (result.code == 1) {
				let approved = false;
				toast.close('approving');
				showToast(
					'checking_approval',
					{
						title: 'Checking Approval',
						description: 'This may take up to 1 minute',
						duration: 60000,
					},
					toast,
				);
				for (let i = 0; i < 12 && !approved; i++) {
					await new Promise((r) => setTimeout(r, 5000));

					approved = (await approveCheck(ethersPack)).gte(amountDepositNum);
				}
				if (approved) {
					toast.close('checking_approval');
					showToast('Approval successful', { title: 'Approval successful' }, toast);
				} else {
					console.error('(depositAsync): approveCheck failed.', approved);
					showErrorToast(
						'Approval failed, or took too long',
						{ title: 'Approval failed, or took too long' },
						result.message,
						toast,
					);
					setTxInProgress(false);
					return;
				}
			} else {
				if (result.code != 4001) {
					console.error('(depositAsync) Metamask Error:', result);
					showErrorToast('Approval failed', { title: 'Approval failed' }, result.message, toast);
				}
				// showErrorToast('tx_rejected', {}, result.message, toast);
				setTxInProgress(false);
				return;
			}
		}
		// DEPOSIT
		showTransactionSendingToast('sending_trade', toast);
		const result = await deposit(ethersPack, amountDepositNum, toast);
		if (result.code == 1) {
			let success = false;
			let newBalance;
			for (let i = 0; i < 12 && !success; i++) {
				await new Promise((r) => setTimeout(r, 5000));
				newBalance = await getSwxBalance(address);
				success = BigNumber.from(newBalance).lt(balanceUserSwx);
			}
			if (success) {
				await updateRates();
				setBalanceUserSwx(newBalance);
				setAmountDeposit('');
				setIsDepositModalOpen(false);
				toast.close('tx_sent');
				showSuccessToast(
					'Deposit successful',
					{ title: 'Deposit successful', description: '' },
					toast,
				);
			} else {
				showErrorToast(
					'Deposit failed, or took too long',
					{ title: 'Deposit failed, or took too long' },
					undefined,
					toast,
				);
				console.error('(depositAsync): Balance check failed.', success);
			}
		} else {
			if (result.code != 4001) {
				console.error('(depositAsync) Metamask Error:', result);
				showErrorToast('Deposit failed', { title: 'Deposit failed' }, result.message, toast);
			}
			// showErrorToast('tx_rejected', {}, result.message, toast);
		}
		setTxInProgress(false);
	};

	const handleDeposit = () => {
		setTxInProgress(true);
		depositAsync();
	};

	return (
		<>
			{isDepositModalOpen && (
				<Box className={styles.modalBackground} onClick={() => setIsDepositModalOpen(false)}></Box>
			)}
			<Box className={styles.containerWrapper}>
				<Box
					className={styles.container}
					sx={{
						border: `1px solid #857afd`,
						backgroundColor: `#1d1055`,
					}}
				>
					<Heading
						as="h3"
						sx={{
							color: `white`,
							fontSize: `1.5rem`,
							fontWeight: `500`,
						}}
					>
						Bond Issuer
					</Heading>
					<ConnectionIndicator />
					{/* Contract Metadata */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Box sx={{ color: `#857AFD` }}>
								{/* indicator modal thing */}
								<Tooltip label={'Yield and capital paid linearly'} hasArrow placement="top">
									<p>2 Yr. Reward ⓘ </p>
								</Tooltip>
							</Box>
							<Box display="flex">
								<h4>{textRewardRate}</h4>{' '}
								<Tooltip
									label={
										<Stack>
											<Text>1 Week - {textWpy} </Text>
											<Text>1 Month - {textMpy} </Text>
										</Stack>
									}
								>
									<Text color="white" paddingLeft=".5rem" alignSelf="center">
										ⓘ
									</Text>
								</Tooltip>
							</Box>
						</div>
						<div>
							<Text sx={{ color: `#857AFD` }}>Vault Holdings</Text>
							<h4>{textSwdRemaining}</h4>
						</div>
					</Box>
					{/* Calculator */}
					<Box className={styles.calculator} sx={{ backgroundColor: `#150637` }}>
						<Box className={styles.calculatorInput}>
							<Box>
								<BigNumberInput
									id="calculator-input"
									value={calcValue}
									onValueChange={setCalcValue}
									name="calculato-input"
									placeholder="0.00"
									decimals={18}
									style={{
										backgroundColor: '#150637',
									}}
								/>
								<Text
									fontSize="small"
									whiteSpace={'nowrap'}
									alignSelf="flex-end"
									paddingLeft={'1rem'}
									color="gray"
								>
									≈ US$ {safeFixed(calcValue * priceSWX, 2, false)}
								</Text>
							</Box>

							<Box display="flex">
								<Text sx={{ color: `#857AFD` }}>
									{safeFixed(((calcValue * priceSWX) / priceSWD) * (1 + r / 100), 2, false) || 0}{' '}
									SWD
								</Text>
								<Text
									fontSize="small"
									whiteSpace={'nowrap'}
									alignSelf="flex-end"
									paddingLeft={'1rem'}
									color="gray"
								>
									≈ US$
									{safeFixed(
										((calcValue * priceSWX) / priceSWD) * (1 + r / 100) * priceSWD,
										2,
										false,
									) || 0}
								</Text>
							</Box>
						</Box>
					</Box>
					{/* Deposit */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available For Deposit</Text>
							{address ? (
								<h4 className={styles.connected}>{textBalanceUserSwx}</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<DepositButton
								address={address}
								onClick={() => setIsDepositModalOpen(true)}
								menu={true}
							/>
						</div>
					</Box>
					{/* Claim */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available to Withdraw</Text>
							{isConnected ? (
								<h4 className={styles.tooltip}>
									{textAmountWithdraw}
									{amountWithdrawTooLong && (
										<span className={styles.tooltiptext}>
											{utils.formatUnits(amountWithdraw, 18)}
										</span>
									)}
								</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<WithdrawButton
								address={address}
								onClick={handleWithdraw}
								verified={amountWithdraw?.gt && amountWithdraw.gt(0) && !txInProgress}
							/>
						</div>
					</Box>
				</Box>
				{isDepositModalOpen && (
					<Box className={styles.modal}>
						<Heading
							as="h3"
							sx={{
								fontSize: `1.5rem`,
							}}
							className={styles.modalHeading}
						>
							Bond Issuer
							<svg
								onClick={() => setIsDepositModalOpen(false)}
								cursor="pointer"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18 6L6 18"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
								<path
									d="M6 6L18 18"
									stroke="white"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</Heading>
						<Box className={styles.modalDataContainer} sx={{ backgroundColor: `#1d1055` }}>
							<Box className={styles.modalTextInput}>
								<BigNumberInput
									id="amountDeposit"
									value={amountDeposit}
									onValueChange={setAmountDeposit}
									name="amountDeposit"
									placeholder="0.00"
									decimals={18}
									readOnly={txInProgress}
									style={{
										color: amountDepositTooHigh ? `red` : `white`,
									}}
								/>
								<button onClick={handleMaxButton} cursor="pointer">
									MAX
								</button>
							</Box>
							<Box className={styles.modalCurrencyIndicator}>SWX</Box>
						</Box>
						<DepositButton
							address={address}
							verified={amountDepositVerified && !txInProgress}
							onClick={handleDeposit}
						/>
						{/* Bond List */}
						{bonds.length > 0 && (
							<Box>
								<Box className={styles.bondTableHeader} sx={{ color: `#AADCFE` }}>
									<p>Deposit</p>
									<p style={{ textAlign: `center` }}>SWD Purchased</p>
									<p style={{ textAlign: `right` }}>Maturity</p>
								</Box>
								<div
									style={{
										position: `relative`,
										height: `82.5px`,
									}}
								>
									{bondsTotal > 0 &&
										bonds.map((bond, index) => {
											return (
												<Box
													key={'bond' + index}
													className={styles.bondTableRow}
													sx={{ color: `#857AFD` }}
													_hover={{
														color: `#AADCFE`,
													}}
												>
													<p>{new Date(bond.depositDate * 1000).toLocaleDateString()}</p>
													<p
														style={{
															textAlign: `center`,
														}}
													>
														{formatNumber(utils.formatUnits(bond.amount, 18), 12)}
													</p>
													<p
														style={{
															textAlign: `right`,
														}}
													>
														{new Date((bond.depositDate + 63072000) * 1000).toLocaleDateString()}
													</p>
												</Box>
											);
										})}
									{bondsLoading && (
										<div
											name="loading surface"
											style={{
												display: `flex`,
												justifyContent: `center`,
												alignItems: `center`,
												position: `absolute`,
												width: `100%`,
												height: `100%`,
												top: 0,
												left: 0,
												background: `#150637`,
												opacity: 0.75,
											}}
										>
											<Box textAlign="center" color="white">
												<Text fontStyle="italic" p="1rem 1rem 0 1rem">
													Loading bonds ...
												</Text>
												<Spinner size="sm" margin="1rem auto" />
											</Box>
										</div>
									)}
								</div>
								{bondsTotal > amountToView && (
									<Box
										className={styles.bondTablePages}
										style={{
											width: '100%',
											color: `#AADCFE`,
										}}
									>
										<ReactPaginate
											previousLabel={'←'}
											nextLabel={'→'}
											onPageChange={handlePageClick}
											pageRangeDisplayed={5}
											forcePage={bondsPage}
											pageCount={Math.ceil(bondsTotal / amountToView)}
											renderOnZeroPageCount={null}
										/>
									</Box>
								)}
							</Box>
						)}
					</Box>
				)}
			</Box>
		</>
	);
};

export default BondingCard;
