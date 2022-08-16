import { useWallet } from '@raidguild/quiver';
import { useState, useEffect } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import createContract from '../../utils/contractMaker';
import ConnectionIndicator from '../ConnectionIndicator/ConnectionIndicator';
import DepositButton from '../LiquidityMining/DepositButton';
import WithdrawButton from '../LiquidityMining/WithdrawButton';
import styles from './BondingCard.module.scss';
import { SWXABI } from './SWXABI';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
// import ReactPaginate from 'react-paginate';

export function safeFixed(val, digits = 2, trimZeroes = false) {
	let work = '';
	try {
		work = val?.toFixed(digits);
	} catch (err) {
		// pass
	}
	if (!work) {
		try {
			work = parseFloat(`${val}`).toFixed(digits);
		} catch (err) {
			// pass
		}
	}
	if (trimZeroes) {
		work = work.replace(/\.?0+$/, '');
	}
	return work;
}

const BondingCard = (props) => {
	const { isConnected, provider, chainId, address } = useWallet();
	const amountToView = 8; // max rows for bonds
	const [cardState, setCardState] = useState('');
	const [contract, setContract] = useState();
	const [swxContract, setSWXContract] = useState();
	const [heldSWD, setHeldSWD] = useState();
	const [heldSWX, setHeldSWX] = useState();
	const [displaySWX, setDisplaySWX] = useState();
	const [withdrawAmount, setWithdrawAmount] = useState();
	const [displayWithdrawAmount, setDisplayWithdrawAmount] = useState();
	const [amountToDeposit, setAmountToDeposit] = useState('');
	const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
	const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
	const [rewardRate, setRewardRate] = useState();
	const [APY, setAPY] = useState();
	const [MPY, setMPY] = useState();
	const [WPY, setWPY] = useState();
	const [bondsPage, setBondsPage] = useState(1);
	const [bonds, setBonds] = useState([]);
	const [needsUpdate, setNeedsUpdate] = useState(false);
	const SWXAddress = '0x24Ec3C300Ff53b96937c39b686844dB9E471421e';
	const contractData = props?.contract;

	// console.log('address: ', contractData?.contract_address)

	const alchemyProvider = new ethers.providers.AlchemyProvider(
		'matic',
		'udDNia_66u_xVjkV4F97GyZv14rVLbCt',
	);

	async function getContract() {
		if (isConnected && provider && chainId && contractData) {
			const signer = provider.getSigner();
			const tempABI = await JSON.parse(contractData.ABI.ABI);
			let tempContract = await createContract(
				tempABI,
				contractData.contract_address,
				provider,
				signer,
			);
			setContract({ read: tempContract.read, write: tempContract.write });
			tempContract = await createContract(SWXABI, SWXAddress, provider, signer);
			setSWXContract({
				read: tempContract.read,
				write: tempContract.write,
			});
		}
	}

	useEffect(() => {
		getContract();
	}, [isConnected, provider, chainId]);

	async function getSWXBalance() {
		const temp = await swxContract?.read?.balanceOf(address);
		setHeldSWX(temp);
	}
	useEffect(() => {
		if (address) {
			getSWXBalance();
		}
		if (needsUpdate) {
			setNeedsUpdate(false);
		}
	}, [swxContract, address, needsUpdate]);

	useEffect(() => {
		if (typeof heldSWX !== 'undefined') {
			let tempbal = ethers.utils.formatEther(heldSWX);
			// tempbal = tempbal.toLocaleString('en-us', {
			//     minimumFractionDigits: 2,
			// })
			setDisplaySWX(tempbal.toLocaleString());
		}
		if (needsUpdate) {
			setNeedsUpdate(false);
		}
	}, [heldSWX, needsUpdate]);

	function fillMaxTokens() {
		setAmountToDeposit(ethers.utils.formatEther(heldSWX));
	}

	function handleAmountToDeposit(value) {
		console.log('Handling Change');
		const validInput = new RegExp('^[-,.0-9]*$');
		setAmountToDeposit((v) => {
			if (validInput.test(value)) {
				// true if number or undefined
				// console.log('undefined number check', value)
				return value.replace(',', '.');
			} else {
				return v;
			}
		});
	}

	async function deposit(address) {
		if (!amountToDeposit) {
			toast.error('Amount required');
			return null;
		}
		const tempDep = ethers.utils.parseEther(amountToDeposit);
		if (amountToDeposit == 0) {
			toast.error('Nothing to deposit');
			return null;
		}
		try {
			console.log(contract?.read?.address);
			const allowance = await swxContract?.read?.allowance(address, contract?.read?.address);
			if (Math.abs(allowance < tempDep)) {
				toast('Approve Token');
				const txAppr = await swxContract?.write?.approve(contract?.read?.address, tempDep);
				toast('Awaiting Approval... Please be Patient');
				await txAppr.wait();
				toast('Successfully Approved!');
			}
			toast('Attempting Deposit');
			const tx = await contract?.write?.stake(tempDep);
			toast('Transaction Send!');
			const receipt = await tx.wait();
			toast('Deposit has been Sucessfull! ');
			setIsDepositModalOpen(false);
			setAmountToDeposit();
			setNeedsUpdate(true);
		} catch (error) {
			if (Math.abs(tempDep > heldSWX)) {
				toast.error('Not Enough SWX');
				return null;
			}
			toast.error('Deposit Failed');
			console.error(error);
		}
	}

	async function withdraw() {
		if (withdrawAmount == 0) {
			toast.error('Nothing to withdraw');
			return null;
		}
		try {
			toast('Attempting Withdrawal');
			const tx = await contract?.write?.withdraw();
			const receipt = await tx.wait();
			toast('Withdarw was sucessfull');
			setNeedsUpdate(true);
			// if receipt is confirmed, will have a status === 1, use for toast handling
			console.log(receipt);
		} catch (error) {
			// toast.error('Withdrawal Failed')
			console.error(error);
		}
	}

	// new func - kwakamole
	function handlePageClick(event) {
		setBondsPage(event.selected + 1);
	}

	const getRewardPercent = async () => {
		console.log(contract?.read?.address);
		const thisAddress = contract?.read?.address;
		if (typeof provider == 'undefined') {
			return null;
		}
		if (provider == null) {
			return null;
		}
		const slot0 = await alchemyProvider.getStorageAt(`${thisAddress}`, ethers.BigNumber.from('0'));
		const bonusMin = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 21, 22));
		const bonusMax = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 20, 21));
		const bonusModifier = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 6, 20));
		const bonusResetDate = ethers.BigNumber.from(ethers.utils.hexDataSlice(slot0, 0, 6));
		const now = ethers.BigNumber.from(`${Math.floor(Date.now() / 1000)}`);
		const bonusRawThing = ethers.BigNumber.from(`${(now - bonusResetDate) * bonusModifier}`);
		const bonusRaw = Math.floor(bonusRawThing.div('1000000000000000000').add(bonusMin));
		const rate = bonusRaw > bonusMax ? bonusMax : bonusRaw;
		setRewardRate(rate.toString());
		const thisAPY = 10 * (Math.sqrt(rate + 100) - 10);
		setAPY(thisAPY.toString().substring(0, 4));
		setMPY((100 * Math.pow(thisAPY / 100 + 1, 1 / 12) - 100).toString().substring(0, 4));
		setWPY((100 * Math.pow(thisAPY / 100 + 1, 1 / 52) - 100).toString().substring(0, 4));
	};

	async function getBalances() {
		if (contract?.read?.balanceAvailable && address) {
			console.log(contract?.read);
			const tempWithdrawAmount = await contract?.read?.balanceAvailable(address);
			setWithdrawAmount(tempWithdrawAmount);
			console.log({ tempWithdrawAmount });
			let tempbal = ethers.utils.formatEther(tempWithdrawAmount.toString());
			// tempbal = tempbal.toLocaleString('en-us', {
			//     minimumFractionDigits: 2,
			// })
			if (parseFloat(tempbal) < 0.000001) {
				tempbal = 0;
			}
			setDisplayWithdrawAmount(tempbal.toLocaleString());
		}
	}

	const getBondsPage = async (page) => {
		/*
		const bondsAddress = contract?.read?.address;
		console.log({ bondsAddress });
		const bondsArrayHashData = ethers.utils.concat([
			ethers.utils.zeroPad(bondsAddress, 32),
			ethers.utils.zeroPad('0x01', 32),
		]);
		const bondsArraySlot = ethers.utils.keccak256(bondsArrayHashData);
		const bondsArrayFirstSlot = ethers.BigNumber.from(ethers.utils.keccak256(bondsArraySlot));
		// const totalBonds = ethers.BigNumber.from(
		// 	await contract?.read?.getStorageAt(amountToView, bondsArraySlot),
		// ).toNumber();
		const bondsThing = await alchemyProvider.getStorageAt(bondsAddress, bondsArraySlot);
		console.log({ bondsThing });
		// HERE: Check to make sure there are enough bonds to render the selected page.
		const bonds = [];
		const bondsArrayFirstPageSlot = bondsArrayFirstSlot.add(page * amountToView);
		console.log({ bondsArrayFirstPageSlot });
		// for (let i = 0; i < amountToView; i++) {
		// 	const bond: ethers.BytesLike = await contract?.read?.getStorageAt(
		// 		contract?.read?.address,
		// 		bondsArrayFirstPageSlot.add(i),
		// 	);
		// 	const depositDate: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 0, 11),
		// 	).toNumber();
		// 	const amount: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 12, 21),
		// 	).toNumber();
		// 	const withdrawn: number = ethers.BigNumber.from(
		// 		ethers.utils.hexDataSlice(bond, 22, 31),
		// 	).toNumber();
		// 	bonds.push({ depositDate, amount, withdrawn });
		// }
		// console.log({ bonds });
		*/
	};

	useEffect(() => {
		getBalances();
		if (typeof contract !== 'undefined') {
			getRewardPercent();
		}
		if (needsUpdate) {
			setNeedsUpdate(false);
		}
	}, [contract, address, provider, needsUpdate]);

	useEffect(() => {
		if (typeof address !== 'undefined' && address !== null) {
			getBondsPage(bondsPage);
		}
	}, [address, bondsPage]);

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
						{contractData.product_name}
					</Heading>
					<ConnectionIndicator />
					{/* Contract Metadata */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Box sx={{ color: `#857AFD` }}>
								{/* indicator modal thing */}
								<p>2 Yr. Reward</p>
							</Box>
							<h4>{rewardRate}%</h4>
						</div>
						<div>
							<Text sx={{ color: `#857AFD` }}>Vault Holdings</Text>
							<h4>2300.00 SWD</h4>
						</div>
					</Box>
					{/* Deposit */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available For Deposit</Text>
							{isConnected && contract?.read ? (
								<h4 className={styles.connected}>{parseFloat(safeFixed(displaySWX, 10))}</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<DepositButton contract={contract} onClick={() => setIsDepositModalOpen(true)} />
						</div>
					</Box>
					{/* Claim */}
					<Box className={styles.dataContainer} sx={{ backgroundColor: `#150637` }}>
						<div>
							<Text sx={{ color: `#857AFD` }}>Available to Withdraw</Text>
							{isConnected ? (
								<h4 className={styles.tooltip}>
									{parseFloat(safeFixed(displayWithdrawAmount, 10))}
									<span className={styles.tooltiptext}>{displayWithdrawAmount}</span>
								</h4>
							) : (
								<h4 className={styles.disconnected}>0.00</h4>
							)}
						</div>
						<div>
							<WithdrawButton contract={contract} onClick={() => withdraw()} />
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
							{contractData.product_name}
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
								<input
									type="text"
									pattern="[0-9]*"
									placeholder="0.0"
									value={amountToDeposit}
									onChange={(e) => handleAmountToDeposit(e.target.value)}
								/>
								<button onClick={() => fillMaxTokens()} cursor="pointer">
									MAX
								</button>
							</Box>
							<Box className={styles.modalCurrencyIndicator}>SWX</Box>
						</Box>
						<DepositButton contract={contract} onClick={() => deposit(address)} />
						{/* Bond List */}
						<Box>
							<Box className={styles.bondTableHeader} sx={{ color: `#AADCFE` }}>
								<p>Deposit</p>
								<p>Amount</p>
								<p style={{ textAlign: `right` }}>Available</p>
							</Box>
							<br />
							{bonds?.length > 0 &&
								bonds.map((bond, index) => {
									if (index < amountToView * bondsPage && index >= amountToView * (bondsPage - 1)) {
										return (
											<Box
												className={styles.bondTableRow}
												sx={{ color: `#857AFD` }}
												_hover={{ color: `#AADCFE` }}
											>
												<p>{bond.depositDate}</p>
												<p>{bond.amount}</p>
												<p
													style={{
														textAlign: `right`,
													}}
												>
													{bond.maturationDate}
												</p>
											</Box>
										);
									}
								})}
							{bonds?.length > amountToView && (
								<Box className={styles.bondTablePages} style={{ width: '100%' }}>
									{/* <ReactPaginate
										breakLabel="..."
										nextLabel="next >"
										onPageChange={handlePageClick}
										pageRangeDisplayed={5}
										pageCount={Math.floor(
											bonds?.length / amountToView + (bonds?.length % amountToView === 0 ? 0 : 1),
										)}
										previousLabel="< previous"
										renderOnZeroPageCount={undefined}
									/> */}
								</Box>
							)}
						</Box>
					</Box>
				)}
			</Box>
		</>
	);
};

export default BondingCard;
