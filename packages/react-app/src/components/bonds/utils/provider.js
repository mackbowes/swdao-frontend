// import { ethers } from 'ethers';
// import { Alchemy, Network } from 'alchemy-sdk';
// import { BONDS, SWX } from './const';
// import abiBonds from './abi/AbiBonds.json';
// import abiSwx from './abi/AbiSwx.json';

// const alchemyKey = process.env.ALCHEMY_KEY || process.exit?.(1);
// const ethersProvider = new ethers.providers.AlchemyProvider('matic', alchemyKey);
// export const alchemyProvider = new Alchemy({
// 	apiKey: alchemyKey,
// 	network: Network.MATIC_MAINNET,
// });

// export const bondsContract = new ethers.Contract(BONDS, abiBonds, ethersProvider);
// export const swxContract = new ethers.Contract(SWX, abiSwx, ethersProvider);
