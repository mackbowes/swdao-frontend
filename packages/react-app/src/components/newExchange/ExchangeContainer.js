import { useWallet } from '@raidguild/quiver';
import { BsInfoCircle } from 'react-icons/bs';
import styles from './ExchangeContainer.module.scss';
import { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffectOnce } from 'react-use';
import { Box, Button, Spinner, Image } from '@chakra-ui/react';
import BigNumberInput from './BigNumberInput';
import { BigNumber, utils } from 'ethers';
import { trade, approve, approveCheck } from './ExchangeLogic';
import { MATIC_ADDRESS, COMMON_DECIMALS } from './settings';
import { BUY_TOKENS, BUY_TOKENS_BY_SYMBOL } from './buyTokens';

const limitDecimals = (num) => {
	const parts = num.split('.');
	if (parts.length < 2 || parts[1].length < 7) return num;
	return parts[0] + '.' + parts[1].slice(0, 6 - parts[1].length);
};

export default function ExchangeContainer(props) {
	const { tokenPrice, contract, height, width } = props;
	const { tokenAddress, tokenTicker, tokenChainId = '0x89', tokenset } = contract;
	const [tokenDecimals, setTokenDecimals] = useState(tokenset ? 18 : undefined);
	const { provider, connectWallet: connectProvider, address } = useWallet();
	const signer = !provider ? undefined : provider.getSigner();
	const [isTokenSelectOpen, setIsTokenSelectOpen] = useState(false);
	const [buySell, setBuySell] = useState(false);
	const [selectedToken, setSelectedToken] = useState('USDC');
	const [inputSend, setInputSend] = useState('');
	const [inputReceive, setInputReceive] = useState('');
	const [sendReceiveLastChanged, setSendReceiveLastChanged] = useState(false);
	const [transactDisabled, setTransactDisabled] = useState(true);
	const [tokenBalances] = useState({});
	const [tokenBalancesLoaded, setTokenBalancesLoaded] = useState(false);
	const [tokenBalanceTooLow, setTokenBalanceTooLow] = useState(false);
	const [tokenPrices] = useState({});
	const [tradeOpts, setTradeOpts] = useState({
		tokenSend: undefined,
		amountSend: undefined,
		tokenReceive: undefined,
		amountReceive: undefined,
		sendReceiveLastChanged: undefined,
		ethers: undefined,
	});
	const [initiateTrade, setInitiateTrade] = useState(false);
	const [tradeApproving, setTradeApproving] = useState(false);
	const [tradeApproved, setTradeApproved] = useState(false);
	const [tradeCompleting, setTradeCompleting] = useState(false);
	const [tradeCompleted, setTradeCompleted] = useState(false);
	const [priceGetterRunning, setPriceGetterRunning] = useState(false);

	// Find decimals for 0x token products
	useEffectOnce(() => {
		if (!tokenDecimals) {
			const req = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ address: tokenAddress }),
			};
			fetch('/api/tokens/getMetadata', req).then((resultMetadata) => {
				resultMetadata.json().then((resultJson) => {
					setTokenDecimals(resultJson.decimals);
				});
			});
		}
	});

	const updatePricesEveryOtherMinute = async () => {
		while (true) {
			if (!initiateTrade) {
				await Promise.allSettled(
					BUY_TOKENS[tokenChainId].map(async (token) => {
						const req = {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ address: token.address }),
						};
						tokenPrices[token.ticker] = (
							await (await fetch('/api/tokens/getPrices', req)).json()
						).currentPrice;
					}),
				);
			}
			await new Promise((r) => setTimeout(r, 120000));
		}
	};

	// Continually update prices
	useEffectOnce(() => {
		if (!priceGetterRunning) {
			updatePricesEveryOtherMinute();
			setPriceGetterRunning(true);
		}
	});

	// Handle input calculations
	useEffect(() => {
		if (
			!(
				inputSend.length !== 0 &&
				+inputSend != 0 &&
				!sendReceiveLastChanged &&
				tokenPrices[selectedToken] > 0 &&
				tokenPrice.currentPrice > 0 &&
				tokenDecimals
			)
		)
			return;
		setInputReceive(
			buySell
				? (((+inputSend * tokenPrice.currentPrice) / tokenPrices[selectedToken]) * 0.98)
						.toFixed(BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals)
						.toString()
				: (((+inputSend * tokenPrices[selectedToken]) / tokenPrice.currentPrice) * 0.98)
						.toFixed(tokenDecimals)
						.toString(),
		);
	}, [inputSend, tokenPrices[selectedToken], tokenBalances[selectedToken], tokenDecimals]);

	useEffect(() => {
		if (
			!(
				inputReceive.length !== 0 &&
				+inputReceive != 0 &&
				sendReceiveLastChanged &&
				tokenPrices[selectedToken] > 0 &&
				tokenPrice.currentPrice > 0 &&
				tokenDecimals
			)
		)
			return;
		setInputSend(
			buySell
				? (((+inputReceive * tokenPrices[selectedToken]) / tokenPrice.currentPrice) * 1.02)
						.toFixed(tokenDecimals)
						.toString()
				: (((+inputReceive * tokenPrice.currentPrice) / tokenPrices[selectedToken]) * 1.02)
						.toFixed(BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals)
						.toString(),
		);
	}, [inputReceive, tokenPrices[selectedToken], tokenBalances[selectedToken], tokenDecimals]);

	// Construct trade options
	useEffect(() => {
		if (
			!(
				address &&
				tokenAddress &&
				tokenDecimals &&
				selectedToken &&
				inputSend > 0 &&
				inputReceive > 0
			)
		) {
			setInitiateTrade(false);
			setTokenBalanceTooLow(false);
			setTransactDisabled(true);
			return;
		}
		const selectedTokenInfo = BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken];
		const tokenSendTicker = buySell ? tokenTicker : selectedToken;
		const sendDecimals = buySell ? tokenDecimals : selectedTokenInfo.decimals;
		const receiveDecimals = buySell ? selectedTokenInfo.decimals : tokenDecimals;
		if (
			!tokenBalances[tokenSendTicker] ||
			utils.parseUnits(inputSend, sendDecimals).gt(tokenBalances[tokenSendTicker])
		) {
			setTokenBalanceTooLow(true);
			setTransactDisabled(true);
			return;
		}
		setTradeOpts({
			tokenSend: buySell ? tokenAddress : selectedTokenInfo.address,
			amountSend: utils.parseUnits(inputSend, sendDecimals),
			tokenReceive: buySell ? selectedTokenInfo.address : tokenAddress,
			amountReceive: utils.parseUnits(inputReceive, receiveDecimals),
			sendReceiveLastChanged,
			ethers: { provider, signer, address },
		});
		setTokenBalanceTooLow(false);
		setTransactDisabled(false);
	}, [
		address,
		contract,
		buySell,
		selectedToken,
		inputSend,
		inputReceive,
		tokenBalances[selectedToken],
		tokenDecimals,
	]);

	// Get user balances
	useEffect(() => {
		if (!address) {
			setTokenBalancesLoaded(false);
			return;
		}
		const addressToSymbol = [];
		const addressTokens = BUY_TOKENS[tokenChainId].map((token) => {
			addressToSymbol[token.address] = token.ticker;
			return token.address;
		});
		addressToSymbol[tokenAddress] = tokenTicker;
		addressTokens.push(tokenAddress);
		const req = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ addressUser: address, addressTokens }),
		};
		fetch('/api/tokens/getBalance', req).then((resultBalances) => {
			resultBalances.json().then(async (resultJson) => {
				await Promise.allSettled(
					resultJson.tokenBalances.map(async (balance) => {
						if (balance.contractAddress == MATIC_ADDRESS) {
							// Subtract MATIC for slippage/gas
							const subBalance = BigNumber.from(balance.tokenBalance).gt(BigNumber.from(10).pow(17))
								? BigNumber.from(balance.tokenBalance).sub(BigNumber.from(10).pow(17))
								: BigNumber.from(0);
							tokenBalances[addressToSymbol[balance.contractAddress]] = subBalance.toString();
						} else {
							tokenBalances[addressToSymbol[balance.contractAddress]] = balance.tokenBalance;
						}
					}),
				);
				setTokenBalancesLoaded(true);
			});
		});
	}, [address, tokenChainId, tokenPrices[selectedToken]]);

	useEffect(() => {
		if (initiateTrade) {
			approveCheck(tokenset, tradeOpts).then((approved) =>
				setTradeApproved(approved.gte(tradeOpts.amountSend)),
			);
		} else {
			setTradeApproved(false);
		}
	}, [initiateTrade]);

	const handleInput = (value, sendReceive) => {
		setSendReceiveLastChanged(sendReceive);
		sendReceive ? setInputReceive(value) : setInputSend(value);
	};

	const handleCurrencySelect = (token) => {
		if (token.ticker.slice(-5) != selectedToken.slice(-5))
			buySell ? setInputReceive('') : setInputSend('');
		setSelectedToken(token.ticker);
		setIsTokenSelectOpen(false);
	};

	const handleBuySellSelect = (requested) => {
		if (buySell !== requested) {
			const oldValues = [inputReceive, inputSend];
			setInputSend(oldValues[0]);
			setInputReceive(oldValues[1]);
			setBuySell(requested);
		}
	};

	const handleInitiateTrade = () => {
		setInitiateTrade(true);
	};

	const handleApproval = () => {
		setTradeApproving(true);
		approve(tokenset, tradeOpts).then(async (result) => {
			if (result.code == 1) {
				let approved;
				for (let i = 0; i < 12 && !approved; i++) {
					await new Promise((r) => setTimeout(r, 5000));
					approved = (await approveCheck(tokenset, tradeOpts)).gte(tradeOpts.amountSend);
				}
				if (approved) {
					setTradeApproved(true);
				} else {
					// TODO: NOTIFY THE USER OF FAILURE OR RETRY(?)
					console.error('(handleApproval): approveCheck failed.', approved);
				}
			} else {
				if (result.code != 4001) {
					// TODO: NOTIFY THE USER OF FAILURE
					console.error('(handleApproval) Metamask Error:', result);
				}
			}
			setTradeApproving(false);
		});
	};

	const handleTrade = () => {
		setTradeCompleting(true);
		const tradeOptsCached = tradeOpts;
		trade(buySell, tokenset, tradeOptsCached).then(async (result) => {
			if (result.code == 1) {
				let success;
				let newBalances;
				const addressToSymbol = [];
				BUY_TOKENS[tokenChainId].forEach((token) => {
					addressToSymbol[token.address] = token.ticker;
				});
				addressToSymbol[tokenAddress] = tokenTicker;
				for (let i = 0; i < 12 && !success; i++) {
					await new Promise((r) => setTimeout(r, 5000));
					const req = {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							addressUser: address,
							addressTokens: [tradeOptsCached.tokenReceive, tradeOptsCached.tokenSend],
						}),
					};
					newBalances = (await (await fetch('/api/tokens/getBalance', req)).json()).tokenBalances;
					success = BigNumber.from(newBalances[0].tokenBalance).gt(
						tokenBalances[addressToSymbol[tradeOptsCached.tokenReceive]],
					);
				}
				if (success) {
					tokenBalances[addressToSymbol[tradeOptsCached.tokenReceive]] =
						newBalances[0].tokenBalance;
					tokenBalances[addressToSymbol[tradeOptsCached.tokenSend]] = newBalances[1].tokenBalance;
					setTradeCompleted(true);
				} else {
					// TODO: NOTIFY THE USER OF FAILURE OR RETRY(?)
					console.error('(handleTrade): Balance check failed.', success);
				}
			} else {
				if (result.code != 4001) {
					// TODO: NOTIFY THE USER OF FAILURE
					console.error('(handleTrade) Metamask Error:', result);
				}
			}
			setTradeCompleting(false);
		});
	};

	const handleReset = () => {
		setInitiateTrade(false);
		setTradeApproved(false);
		setTradeCompleted(false);
	};

	// Buy/sell field variants
	const inputField = (sendReceive) => {
		if (sendReceive) {
			// RECEIVE
			if (buySell) {
				// SELL
				return (
					<>
						<section className={styles.input}>
							<BigNumberInput
								id="inputReceive"
								value={inputReceive}
								onValueChange={(change) => handleInput(change, true)}
								name="buyAmount"
								placeholder="0.00"
								decimals={BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals}
								readOnly={initiateTrade}
							/>
							<div style={{ fontSize: `10px`, paddingLeft: `5px`, paddingRight: `5px` }}>
								<BsInfoCircle />
							</div>

							<div
								onClick={() => setIsTokenSelectOpen(initiateTrade ? false : (v) => !v)}
								style={{
									display: `flex`,
									height: `50%`,
									fontSize: `10px`,
									fontWeight: `600`,
									alignItems: `center`,
									cursor: initiateTrade ? `default` : `pointer`,
								}}
							>
								<div>{selectedToken}</div>
								{!initiateTrade && <RiArrowDropDownLine />}
							</div>
							{isTokenSelectOpen && (
								<Box
									sx={{
										width: `100vw`,
										height: `100vh`,
										position: `fixed`,
										left: `0`,
										top: `0`,
										backgroundColor: `rgba(0,0,0,0)`,
									}}
									onClick={() => setIsTokenSelectOpen(false)}
								></Box>
							)}
							{isTokenSelectOpen && (
								<div
									style={{
										display: `flex`,
										flexDirection: `column`,
										fontSize: `11px`,
										position: `absolute`,
										right: `5px`,
										bottom: `30px`,
										listStyle: `none`,
										backgroundColor: `var(--chakra-colors-blue5)`,
										border: `1px solid var(--chakra-colors-gray-200)`,
										zIndex: `1`,
									}}
								>
									{BUY_TOKENS[tokenChainId] &&
										BUY_TOKENS[tokenChainId].map((token, index) => {
											return (
												<Box
													sx={{ padding: `1ex` }}
													onClick={() => handleCurrencySelect(token)}
													key={index}
													_hover={{
														cursor: `pointer`,
														backgroundColor: `rgba(0,0,0,0.2)`,
													}}
												>
													{token.ticker}
												</Box>
											);
										})}
								</div>
							)}
						</section>
						<div className={styles.balance} style={{ paddingBottom: `20px` }}>
							<p>
								<strong>Balance:</strong>{' '}
								{tokenBalancesLoaded && tokenBalances[selectedToken]
									? limitDecimals(
											utils.formatUnits(
												tokenBalances[selectedToken],
												BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals,
											),
									  )
									: '—'}{' '}
								{selectedToken}
							</p>
						</div>
					</>
				);
			} else {
				// BUY
				return (
					<>
						<section className={styles.input}>
							<BigNumberInput
								id="inputReceive"
								value={inputReceive}
								onValueChange={(change) => handleInput(change, true)}
								name="buyAmount"
								placeholder="0.00"
								decimals={tokenDecimals}
								readOnly={initiateTrade}
							/>
							<div style={{ fontSize: `10px`, paddingLeft: `5px` }}>{tokenTicker}</div>
						</section>
						<div className={styles.balance} style={{ paddingBottom: `20px` }}>
							<p>
								<strong>Balance:</strong>{' '}
								{tokenBalancesLoaded && tokenDecimals && tokenBalances[tokenTicker]
									? limitDecimals(utils.formatUnits(tokenBalances[tokenTicker], tokenDecimals))
									: '—'}{' '}
								{tokenTicker}
							</p>
						</div>
					</>
				);
			}
		} else {
			// SEND
			if (buySell) {
				// SELL
				return (
					<>
						<section className={styles.input}>
							<BigNumberInput
								id="inputSend"
								value={inputSend}
								onValueChange={(change) => handleInput(change, false)}
								name="SellAmount"
								placeholder="0.00"
								decimals={tokenDecimals}
								readOnly={initiateTrade}
							/>
							<div style={{ fontSize: `10px`, paddingLeft: `5px` }}>{tokenTicker}</div>
							{!initiateTrade && (
								<button
									className={styles.maxButton}
									onClick={
										tokenBalancesLoaded && tokenDecimals && tokenBalances[tokenTicker]
											? () =>
													handleInput(
														utils.formatUnits(tokenBalances[tokenTicker], tokenDecimals),
														false,
													)
											: () => void 0
									}
								>
									Max
								</button>
							)}
						</section>
						<div className={styles.balance} style={tokenBalanceTooLow ? { color: `red` } : {}}>
							<p>
								<strong>Balance:</strong>{' '}
								{tokenBalancesLoaded && tokenDecimals && tokenBalances[tokenTicker]
									? limitDecimals(utils.formatUnits(tokenBalances[tokenTicker], tokenDecimals))
									: '—'}{' '}
								{tokenTicker}
							</p>
						</div>
					</>
				);
			} else {
				// BUY
				return (
					<>
						<section className={styles.input}>
							<BigNumberInput
								id="inputSend"
								value={inputSend}
								onValueChange={(change) => handleInput(change, false)}
								name="sellAmount"
								placeholder="0.00"
								decimals={BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals}
								readOnly={initiateTrade}
							/>
							<div style={{ fontSize: `10px`, paddingLeft: `5px`, paddingRight: `5px` }}>
								<BsInfoCircle />
							</div>

							<div
								onClick={() => setIsTokenSelectOpen(initiateTrade ? false : (v) => !v)}
								style={{
									display: `flex`,
									height: `50%`,
									fontSize: `10px`,
									fontWeight: `600`,
									alignItems: `center`,
									cursor: initiateTrade ? `default` : `pointer`,
								}}
							>
								<div>{selectedToken}</div>
								{!initiateTrade && <RiArrowDropDownLine />}
							</div>
							{isTokenSelectOpen && (
								<Box
									sx={{
										width: `100vw`,
										height: `100vh`,
										position: `fixed`,
										left: `0`,
										top: `0`,
										backgroundColor: `rgba(0,0,0,0)`,
									}}
									onClick={() => setIsTokenSelectOpen(false)}
								></Box>
							)}
							{isTokenSelectOpen && (
								<div
									style={{
										display: `flex`,
										flexDirection: `column`,
										fontSize: `11px`,
										position: `absolute`,
										right: `40px`,
										top: `30px`,
										listStyle: `none`,
										backgroundColor: `var(--chakra-colors-blue5)`,
										border: `1px solid var(--chakra-colors-gray-200)`,
										zIndex: `1`,
									}}
								>
									{BUY_TOKENS[tokenChainId] &&
										BUY_TOKENS[tokenChainId].map((token, index) => {
											return (
												<Box
													sx={{ padding: `1ex` }}
													onClick={() => handleCurrencySelect(token)}
													key={index}
													_hover={{
														cursor: `pointer`,
														backgroundColor: `rgba(0,0,0,0.2)`,
													}}
												>
													{token.ticker}
												</Box>
											);
										})}
								</div>
							)}
							{!initiateTrade && (
								<button
									className={styles.maxButton}
									onClick={
										tokenBalancesLoaded && tokenBalances[selectedToken]
											? () =>
													handleInput(
														utils.formatUnits(
															tokenBalances[selectedToken],
															BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals,
														),
														false,
													)
											: () => void 0
									}
								>
									Max
								</button>
							)}
						</section>
						<div className={styles.balance} style={tokenBalanceTooLow ? { color: `red` } : {}}>
							<p>
								<strong>Balance:</strong>{' '}
								{tokenBalancesLoaded && tokenBalances[selectedToken]
									? limitDecimals(
											utils.formatUnits(
												tokenBalances[selectedToken],
												BUY_TOKENS_BY_SYMBOL(tokenChainId)[selectedToken].decimals,
											),
									  )
									: '—'}{' '}
								{selectedToken}
							</p>
						</div>
					</>
				);
			}
		}
	};

	// HTML
	return (
		<>
			<main className={styles.exchangeContainer} style={{ width: width }}>
				{!initiateTrade && (
					<div
						style={{
							display: `flex`,
							gap: `1rem`,
							width: `100%`,
							height: `64px`,
							backgroundColor: `var(--chakra-colors-blue5)`,
							justifyContent: `center`,
							alignItems: `center`,
						}}
					>
						<Button
							role="tab"
							variant="secondary"
							active={buySell ? 'false' : 'true'}
							onClick={() => handleBuySellSelect(false)}
						>
							Buy
						</Button>
						<Button
							role="tab"
							variant="secondary"
							active={buySell ? 'true' : 'false'}
							onClick={() => handleBuySellSelect(true)}
						>
							Sell
						</Button>
					</div>
				)}
				<div>
					<h1>
						{buySell ? 'Sell' : 'Buy'} {tokenTicker}
					</h1>
				</div>
				<div>
					<h2>
						{(!initiateTrade && (
							<>
								Please enter the amount of {tokenTicker} to {buySell ? 'sell' : 'buy'}
								<br />
								and wait a moment to get a quote.
							</>
						)) || (
							<>
								Please make sure these details are correct
								<br />
								before clicking "confirm".
							</>
						)}
					</h2>
				</div>
				{inputField(false)}
				{inputField(true)}
				{(initiateTrade && (
					<div style={{ display: `flex`, flexDirection: `column`, gap: `1rem`, marginTop: `auto` }}>
						<Button
							onClick={handleApproval}
							disabled={tradeApproved || tradeApproving || tradeCompleted}
						>
							{tradeApproved ? (
								'Approved ✓'
							) : tradeApproving ? (
								<>
									Approving... <Spinner size="sm" />
								</>
							) : (
								'Approve'
							)}
						</Button>
						<Button
							onClick={handleTrade}
							disabled={!tradeApproved || tradeCompleting || tradeCompleted}
							style={
								tradeCompleted
									? {
											background: `linear-gradient(90deg, #06cead -1.89%, #0bf976 100%)`,
											boxShadow: `0px 6px 15px rgba(8, 201, 169, 0.25)`,
									  }
									: {}
							}
						>
							{tradeCompleted ? (
								'Trade Complete ✓'
							) : tradeCompleting ? (
								<>
									Confirming... <Spinner size="sm" />
								</>
							) : (
								'Confirm'
							)}
						</Button>
					</div>
				)) || (
					<Button
						onClick={signer ? handleInitiateTrade : connectProvider}
						disabled={signer ? transactDisabled : false}
						style={{ marginTop: `auto` }}
					>
						{signer ? (
							<>
								{buySell ? 'Sell' : 'Buy'}
								<Image src="../deposittoken.png" alt="" />
							</>
						) : (
							<>
								Connect Wallet
								<Image src="../peakcrown.png" alt="" />
							</>
						)}
					</Button>
				)}
				{initiateTrade && !(tradeApproving || tradeCompleting) && (
					<button
						onClick={handleReset}
						style={{
							position: `absolute`,
							overflow: `hidden`,
							top: `5px`,
							right: `5px`,
							color: tradeCompleted ? `#0bf976` : `var(--chakra-colors-bodytext)`,
							fontSize: tradeCompleted ? `30px` : `40px`,
							fontWeight: `600`,
							background: `transparent`,
							height: `30px`,
							width: `30px`,
						}}
					>
						<p style={{ position: `relative`, top: tradeCompleted ? `-7px` : `-18px` }}>
							{tradeCompleted ? '✓' : '×'}
						</p>
					</button>
				)}
			</main>
		</>
	);
}
