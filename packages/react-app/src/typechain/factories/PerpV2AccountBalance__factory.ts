/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PerpV2AccountBalance,
  PerpV2AccountBalanceInterface,
} from "../PerpV2AccountBalance";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clearingHouse",
        type: "address",
      },
    ],
    name: "ClearingHouseChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "PnlRealized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
    ],
    name: "VaultChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "candidate",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "deregisterBaseToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getAccountInfo",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "takerPositionSize",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "takerOpenNotional",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "lastTwPremiumGrowthGlobalX96",
            type: "int256",
          },
        ],
        internalType: "struct AccountMarket.Info",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getBase",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getBaseTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "getClearingHouse",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "getClearingHouseConfig",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getMarginRequirementForLiquidation",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "getOrderBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getPnlAndPendingFee",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getQuote",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getTakerOpenNotional",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getTakerPositionSize",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getTotalAbsPositionValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "getTotalDebtValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getTotalOpenNotional",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getTotalPositionSize",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getTotalPositionValue",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "hasOrder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clearingHouseConfigArg",
        type: "address",
      },
      {
        internalType: "address",
        name: "orderBookArg",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "modifyOwedRealizedPnl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "int256",
        name: "base",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "quote",
        type: "int256",
      },
    ],
    name: "modifyTakerBalance",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "registerBaseToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clearingHouseArg",
        type: "address",
      },
    ],
    name: "setClearingHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vaultArg",
        type: "address",
      },
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "int256",
        name: "takerBase",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "takerQuote",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "realizedPnl",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "fee",
        type: "int256",
      },
    ],
    name: "settleBalanceAndDeregister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
    ],
    name: "settleOwedRealizedPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "settleQuoteToOwedRealizedPnl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "int256",
        name: "lastTwPremiumGrowthGlobalX96",
        type: "int256",
      },
    ],
    name: "updateTwPremiumGrowthGlobal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612a12806100206000396000f3fe608060405234801561001057600080fd5b50600436106101c65760003560e01c80638da5cb5b116100fa578063bc5920ba1161009d578063bc5920ba146103c0578063c575ff79146103c8578063cb3c7b8e146103d0578063d50d01b7146103f0578063ec647a1214610403578063f75c266d14610416578063fa8e30af14610429578063fc7372141461043c578063fd6ceee51461044f576101c6565b80638da5cb5b1461032d578063aa2a829414610335578063af74e7361461033d578063b248c4ef1461035d578063b2e2714814610365578063b394569014610378578063b3bd6e121461038b578063bba85bcf1461039e576101c6565b80636817031b1161016d5780636817031b1461029657806368f12e12146102a95780636c8381f8146102bc5780636ccdc82e146102d1578063715018a6146102e45780637a5b45a0146102ec578063874044f3146102ff57806389f92177146103125780638d928af814610325576101c6565b806313af4035146101cb578063293a5077146101e05780632e4586c3146102095780633c9b5ad11461021c5780633f9351071461023d578063449323d814610250578063485cc955146102635780636332fef614610276575b600080fd5b6101de6101d93660046123ea565b610462565b005b6101f36101ee3660046123ea565b6105bd565b60405161020091906127a6565b60405180910390f35b6101de610217366004612436565b6106c0565b61022f61022a366004612471565b6106f7565b6040516102009291906127af565b6101f361024b366004612404565b61071b565b6101de61025e3660046123ea565b61075d565b6101de610271366004612404565b610804565b610289610284366004612404565b610945565b60405161020091906128ef565b6101de6102a43660046123ea565b61099c565b6101f36102b7366004612404565b610a71565b6102c4610c01565b60405161020091906126a0565b6101f36102df3660046123ea565b610c10565b6101de610cd9565b6101f36102fa366004612404565b610d7a565b6101de61030d366004612506565b610e48565b6101de6103203660046124b2565b610e5e565b6102c4610f97565b6102c4610fa6565b6102c4610fb5565b61035061034b3660046123ea565b610fc4565b604051610200919061274e565b6102c461103a565b6101f3610373366004612404565b611049565b6101f3610386366004612404565b611091565b6101f3610399366004612404565b61113d565b6103b16103ac3660046123ea565b611201565b604051610200939291906127bd565b6101de6112cb565b6102c46113b7565b6103e36103de3660046123ea565b6113c6565b604051610200919061279b565b6101f36103fe366004612404565b61145a565b6101de610411366004612436565b611488565b6101f36104243660046123ea565b61149b565b6101de610437366004612404565b611538565b6101de61044a366004612404565b61154a565b6101f361045d3660046123ea565b6116a3565b61046a611700565b6001600160a01b031661047b610fa6565b6001600160a01b0316146104bf576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6001600160a01b038116610503576040805162461bcd60e51b81526020600482015260066024820152650534f5f4e57360d41b604482015290519081900360640190fd5b6033546001600160a01b038281169116141561054f576040805162461bcd60e51b8152602060048201526006602482015265534f5f53414f60d01b604482015290519081900360640190fd5b6034546001600160a01b038281169116141561059b576040805162461bcd60e51b8152602060048201526006602482015265534f5f53414360d01b604482015290519081900360640190fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152609e602052604081205481908190815b8181101561068c576001600160a01b0386166000908152609e6020526040812080548390811061060857fe5b60009182526020822001546001600160a01b03169150610628888361113d565b905060008082121561065b5761065861064861064385611704565b611807565b8390670de0b6b3a7640000611853565b90505b61066586826118f9565b955061067b6106748a85610d7a565b88906118f9565b965050600190920191506105dc9050565b5060008084121561069d57836106a0565b60005b90506106b46106af82856118f9565b61195e565b9450505050505b919050565b6106c8611987565b6001600160a01b039283166000908152609f602090815260408083209490951682529290925291902060020155565b600080610702611987565b61070e868686866119c3565b9150915094509492505050565b6000806107288484610a71565b905080610739576000915050610757565b600061074484611704565b905061075261064882611807565b925050505b92915050565b610765611700565b6001600160a01b0316610776610fa6565b6001600160a01b0316146107ba576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b606780546001600160a01b0319166001600160a01b0383169081179091556040517fd0654f5900f9e7e4e605a19334306e6a2786bbf960ac0484a4c12feb6428fe2f90600090a250565b600054610100900460ff168061081d575061081d611a1f565b8061082b575060005460ff16155b6108665760405162461bcd60e51b815260040180806020018281038252602e815260200180612943602e913960400191505060405180910390fd5b600054610100900460ff16158015610891576000805460ff1961ff0019909116610100171660011790555b6108a3836001600160a01b0316611a30565b6108c85760405162461bcd60e51b81526004016108bf906127d3565b60405180910390fd5b6108da826001600160a01b0316611a30565b6108f65760405162461bcd60e51b81526004016108bf9061286d565b6108fe611a36565b609a80546001600160a01b038086166001600160a01b031992831617909255609b8054928516929091169190911790558015610940576000805461ff00191690555b505050565b61094d6123b2565b506001600160a01b039182166000908152609f60209081526040808320939094168252918252829020825160608101845281548152600182015492810192909252600201549181019190915290565b6109a4611700565b6001600160a01b03166109b5610fa6565b6001600160a01b0316146109f9576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b610a0b816001600160a01b0316611a30565b610a275760405162461bcd60e51b81526004016108bf906128ad565b609c80546001600160a01b0319166001600160a01b0383169081179091556040517fa49691f0dd6477ccef49962612a236d252e3a31c3be8b61fa6abeff3e74a757290600090a250565b609b54604051635d8a541d60e01b815260009182916001600160a01b0390911690635d8a541d90610aab90879087906001906004016126ce565b604080518083038186803b158015610ac257600080fd5b505afa158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906125fd565b50609b54604051637c2b7c5360e01b81529192506000916001600160a01b0390911690637c2b7c5390610b3690889088906001906004016126ce565b60206040518083038186803b158015610b4e57600080fd5b505afa158015610b62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b869190612643565b90506000610ba5610b9683611807565b610b9f85611807565b90611ae0565b6001600160a01b038088166000908152609f60209081526040808320938a16835292905290812054919250610bda83836118f9565b9050600a610be78261195e565b10610bf25780610bf5565b60005b98975050505050505050565b6034546001600160a01b031690565b6001600160a01b0381166000908152609e6020908152604080832080548251818502810185019093528083528493830182828015610c7757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610c59575b505050505090506000808251905060005b81811015610ccf576000848281518110610c9e57fe5b602002602001015190506000610cb76106af898461071b565b9050610cc38582611b45565b94505050600101610c88565b5090949350505050565b610ce1611700565b6001600160a01b0316610cf2610fa6565b6001600160a01b031614610d36576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6033546040516000916001600160a01b031690600080516020612971833981519152908390a3603380546001600160a01b0319908116909155603480549091169055565b609b54604051637c2b7c5360e01b815260009182916001600160a01b0390911690637c2b7c5390610db3908790879086906004016126ce565b60206040518083038186803b158015610dcb57600080fd5b505afa158015610ddf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e039190612643565b9050610e40610e1182611807565b6001600160a01b038087166000908152609f602090815260408083209389168352929052206001015490611ae0565b949350505050565b610e50611987565b610e5a8282611b9f565b5050565b610e66611987565b610e72868686866119c3565b5050610e7e8682611b9f565b610e888686611049565b158015610f195750609b546040516321b499f560e11b81526001600160a01b039091169063436933ea90610ec290899089906004016126b4565b60006040518083038186803b158015610eda57600080fd5b505afa158015610eee573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f16919081019061252f565b51155b15610f7a576001600160a01b038087166000908152609f6020908152604080832093891683529290522060010154610f508161195e565b610f598461195e565b1115610f775760405162461bcd60e51b81526004016108bf906128cd565b91505b610f85868684611c21565b610f8f8686611c6a565b505050505050565b609c546001600160a01b031690565b6033546001600160a01b031690565b609a546001600160a01b031690565b6001600160a01b0381166000908152609e602090815260409182902080548351818402810184019094528084526060939283018282801561102e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611010575b50505050509050919050565b609b546001600160a01b031690565b6001600160a01b038083166000908152609f60209081526040808320938516835292905290812054600a61107c8261195e565b106110875780610e40565b5060009392505050565b609b54604051635d8a541d60e01b815260009182916001600160a01b0390911690635d8a541d906110ca908790879086906004016126ce565b604080518083038186803b1580156110e157600080fd5b505afa1580156110f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061111991906125fd565b50905060006111288585610d7a565b90506107528161113784611807565b906118f9565b609b54604051637c2b7c5360e01b815260009182916001600160a01b0390911690637c2b7c539061117790879087906001906004016126ce565b60206040518083038186803b15801561118f57600080fd5b505afa1580156111a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c79190612643565b9050610e406111d582611807565b6001600160a01b038087166000908152609f602090815260408083209389168352929052205490611ae0565b6001600160a01b0381166000908152609e6020526040812054819081908190815b81811015611284576001600160a01b0387166000908152609e6020526040812080548390811061124e57fe5b6000918252602090912001546001600160a01b03169050611279611272898361071b565b85906118f9565b935050600101611222565b5060008061129188611ea8565b909250905060006112a285846118f9565b6001600160a01b03999099166000908152609d6020526040902054999197509095505050505050565b6034546001600160a01b0316611310576040805162461bcd60e51b81526020600482015260056024820152640534f5f43360dc1b604482015290519081900360640190fd5b611318611700565b6034546001600160a01b03908116911614611363576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4360d01b604482015290519081900360640190fd5b6034546033546040516001600160a01b03928316929091169060008051602061297183398151915290600090a360348054603380546001600160a01b03199081166001600160a01b03841617909155169055565b6067546001600160a01b031690565b609b546001600160a01b038281166000908152609e60205260408082209051634dffaee560e01b815291939290921691634dffaee59161140a9186916004016126f2565b60206040518083038186803b15801561142257600080fd5b505afa158015611436573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075791906125dd565b6001600160a01b039182166000908152609f6020908152604080832093909416825291909152206001015490565b611490611987565b610940838383611c21565b6000610757610643609a60009054906101000a90046001600160a01b03166001600160a01b031663a85494026040518163ffffffff1660e01b815260040160206040518083038186803b1580156114f157600080fd5b505afa158015611505573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115299190612620565b61153285610c10565b90611fec565b611540611987565b610e5a8282611c6a565b611552611987565b6001600160a01b0382166000908152609e6020908152604091829020805483518184028101840190945280845290926115cd92909184918301828280156115c257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116115a4575b505050505083612001565b156115d85750610e5a565b8054600181018255600082815260209081902090910180546001600160a01b0319166001600160a01b0385811691909117909155609a5460408051631623e65d60e11b815290519190921692632c47ccba9260048082019391829003018186803b15801561164557600080fd5b505afa158015611659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167d919061267f565b60ff16818054905011156109405760405162461bcd60e51b81526004016108bf90612816565b609c546000906001600160a01b03166116ba611700565b6001600160a01b0316146116e05760405162461bcd60e51b81526004016108bf9061288e565b506001600160a01b03166000908152609d60205260408120805491905590565b3390565b6000816001600160a01b03166312080647609a60009054906101000a90046001600160a01b03166001600160a01b0316633e742e3b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561176357600080fd5b505afa158015611777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179b919061265b565b6040518263ffffffff1660e01b81526004016117b79190612910565b60206040518083038186803b1580156117cf57600080fd5b505afa1580156117e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107579190612643565b60006001600160ff1b0382111561184f5760405162461bcd60e51b81526004018080602001828103825260288152602001806129916028913960400191505060405180910390fd5b5090565b60008060008512611864578461186d565b61186d8561204d565b9050600080851261187e5784611887565b6118878561204d565b90506000808712801561189a5750600086135b806118b057506000871380156118b05750600086125b6118bb5760006118be565b60015b905060006118cd848488612079565b9050816118e2576118dd81611807565b6118eb565b6118eb81612128565b9450505050505b9392505050565b600082820181831280159061190e5750838112155b80611923575060008312801561192357508381125b6118f25760405162461bcd60e51b81526004018080602001828103825260218152602001806129226021913960400191505060405180910390fd5b60008082121561197e576119796119748361204d565b61213c565b610757565b6107578261213c565b6067546001600160a01b031661199b611700565b6001600160a01b0316146119c15760405162461bcd60e51b81526004016108bf906127f5565b565b6001600160a01b038085166000908152609f60209081526040808320938716835292905290812080548291906119f990866118f9565b81556001810154611a0a90856118f9565b60018201819055905497909650945050505050565b6000611a2a30611a30565b15905090565b3b151590565b600054610100900460ff1680611a4f5750611a4f611a1f565b80611a5d575060005460ff16155b611a985760405162461bcd60e51b815260040180806020018281038252602e815260200180612943602e913960400191505060405180910390fd5b600054610100900460ff16158015611ac3576000805460ff1961ff0019909116610100171660011790555b611acb612193565b8015611add576000805461ff00191690555b50565b6000818303818312801590611af55750838113155b80611b0a5750600083128015611b0a57508381135b6118f25760405162461bcd60e51b81526004018080602001828103825260248152602001806129b96024913960400191505060405180910390fd5b6000828201838110156118f2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b8015610e5a576001600160a01b0382166000908152609d6020526040902054611bc890826118f9565b6001600160a01b0383166000818152609d6020526040908190209290925590517febf4e69d81451d269fc4d9551b06d58bea2ed426d2c528919ce45f6070946efb90611c159084906127a6565b60405180910390a25050565b6001600160a01b038084166000908152609f602090815260408083209386168352929052206001810154611c559083611ae0565b6001820155611c648483611b9f565b50505050565b6001600160a01b038083166000908152609f602090815260408083209385168352928152908290208251606081018452815480825260018301549382019390935260029091015492810192909252600a90611cc49061195e565b101580611cde5750600a611cdb826020015161195e565b10155b15611ce95750610e5a565b609b546040516321b499f560e11b81526000916001600160a01b03169063436933ea90611d1c90879087906004016126b4565b60006040518083038186803b158015611d3457600080fd5b505afa158015611d48573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d70919081019061252f565b511115611d7d5750610e5a565b6001600160a01b038084166000818152609f60209081526040808320948716835293815283822082815560018101839055600201829055918152609e909152908120805490915b81811015610f8f57846001600160a01b0316838281548110611de257fe5b6000918252602090912001546001600160a01b03161415611ea057600182038114611e6f57826001830381548110611e1657fe5b9060005260206000200160009054906101000a90046001600160a01b0316838281548110611e4057fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b82805480611e7957fe5b600082815260209020810160001990810180546001600160a01b0319169055019055610f8f565b600101611dc4565b6001600160a01b0381166000908152609e602052604081205481908190815b81811015611f40576001600160a01b0386166000908152609e60205260408120805483908110611ef357fe5b60009182526020808320909101546001600160a01b038a81168452609f8352604080852091909216808552925290912060010154909150611f359085906118f9565b935050600101611ec7565b50609b546001600160a01b038681166000908152609e6020526040808220905163d0581a9360e01b81529193929092169163d0581a9391611f85918a916004016126f2565b604080518083038186803b158015611f9c57600080fd5b505afa158015611fb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fd491906125fd565b94509050611fe283826118f9565b9450505050915091565b60006118f2838362ffffff16620f4240612079565b6000805b835181101561108757826001600160a01b031684828151811061202457fe5b60200260200101516001600160a01b03161415612045576001915050610757565b600101612005565b6000600160ff1b82136120725760405162461bcd60e51b81526004016108bf90612836565b5060000390565b60008080600019858709868602925082811090839003039050806120af57600084116120a457600080fd5b5082900490506118f2565b8084116120bb57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b600061213382611807565b60000392915050565b60008082121561184f576040805162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f736974697665604482015290519081900360640190fd5b600054610100900460ff16806121ac57506121ac611a1f565b806121ba575060005460ff16155b6121f55760405162461bcd60e51b815260040180806020018281038252602e815260200180612943602e913960400191505060405180910390fd5b600054610100900460ff16158015612220576000805460ff1961ff0019909116610100171660011790555b612228612282565b6000612232611700565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020612971833981519152908290a3508015611add576000805461ff001916905550565b600054610100900460ff168061229b575061229b611a1f565b806122a9575060005460ff16155b6122e45760405162461bcd60e51b815260040180806020018281038252602e815260200180612943602e913960400191505060405180910390fd5b600054610100900460ff1615801561230f576000805460ff1961ff0019909116610100171660011790555b611acb600054610100900460ff168061232b575061232b611a1f565b80612339575060005460ff16155b6123745760405162461bcd60e51b815260040180806020018281038252602e815260200180612943602e913960400191505060405180910390fd5b600054610100900460ff16158015611acb576000805460ff1961ff0019909116610100171660011790558015611add576000805461ff001916905550565b60405180606001604052806000815260200160008152602001600081525090565b80356001600160a01b03811681146106bb57600080fd5b6000602082840312156123fb578081fd5b6118f2826123d3565b60008060408385031215612416578081fd5b61241f836123d3565b915061242d602084016123d3565b90509250929050565b60008060006060848603121561244a578081fd5b612453846123d3565b9250612461602085016123d3565b9150604084013590509250925092565b60008060008060808587031215612486578081fd5b61248f856123d3565b935061249d602086016123d3565b93969395505050506040820135916060013590565b60008060008060008060c087890312156124ca578182fd5b6124d3876123d3565b95506124e1602088016123d3565b95989597505050506040840135936060810135936080820135935060a0909101359150565b60008060408385031215612518578182fd5b612521836123d3565b946020939093013593505050565b60006020808385031215612541578182fd5b825167ffffffffffffffff80821115612558578384fd5b818501915085601f83011261256b578384fd5b81518181111561257757fe5b8381026040518582820101818110858211171561259057fe5b604052828152858101935084860182860187018a10156125ae578788fd5b8795505b838610156125d05780518552600195909501949386019386016125b2565b5098975050505050505050565b6000602082840312156125ee578081fd5b815180151581146118f2578182fd5b6000806040838503121561260f578182fd5b505080516020909101519092909150565b600060208284031215612631578081fd5b815162ffffff811681146118f2578182fd5b600060208284031215612654578081fd5b5051919050565b60006020828403121561266c578081fd5b815163ffffffff811681146118f2578182fd5b600060208284031215612690578081fd5b815160ff811681146118f2578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152901515604082015260600190565b60006040820160018060a01b03808616845260206040818601528286548085526060870191508786528286209450855b81811015612740578554851683526001958601959284019201612722565b509098975050505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561278f5783516001600160a01b03168352928401929184019160010161276a565b50909695505050505050565b901515815260200190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b60208082526008908201526741425f4348434e4360c01b604082015260600190565b6020808252600790820152660869088be9e86960cb1b604082015260600190565b60208082526006908201526541425f4d4e4560d01b604082015260600190565b6020808252601c908201527f506572704d6174683a20696e76657273696f6e206f766572666c6f7700000000604082015260600190565b60208082526007908201526641425f4f424e4360c81b604082015260600190565b60208082526005908201526420a12fa7ab60d91b604082015260600190565b60208082526006908201526541425f564e4360d01b604082015260600190565b60208082526008908201526720a12fa4a8a120a960c11b604082015260600190565b81518152602080830151908201526040918201519181019190915260600190565b63ffffffff9190911681526020019056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65648be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e053616665436173743a2076616c756520646f65736e27742066697420696e20616e20696e743235365369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a2646970667358221220f770c9b2f28068c3257987621c4034e859d228547aafb84a507e6520a304063e64736f6c63430007060033";

type PerpV2AccountBalanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerpV2AccountBalanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PerpV2AccountBalance__factory extends ContractFactory {
  constructor(...args: PerpV2AccountBalanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PerpV2AccountBalance> {
    return super.deploy(overrides || {}) as Promise<PerpV2AccountBalance>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PerpV2AccountBalance {
    return super.attach(address) as PerpV2AccountBalance;
  }
  connect(signer: Signer): PerpV2AccountBalance__factory {
    return super.connect(signer) as PerpV2AccountBalance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerpV2AccountBalanceInterface {
    return new utils.Interface(_abi) as PerpV2AccountBalanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PerpV2AccountBalance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PerpV2AccountBalance;
  }
}
