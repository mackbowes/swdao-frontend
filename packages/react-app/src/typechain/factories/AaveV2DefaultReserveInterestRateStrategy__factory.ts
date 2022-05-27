/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AaveV2DefaultReserveInterestRateStrategy,
  AaveV2DefaultReserveInterestRateStrategyInterface,
} from "../AaveV2DefaultReserveInterestRateStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "optimalUtilizationRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseVariableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableRateSlope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableRateSlope2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableRateSlope1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableRateSlope2",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EXCESS_UTILIZATION_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPTIMAL_UTILIZATION_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "aToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidityAdded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityTaken",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
    ],
    name: "calculateInterestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
    ],
    name: "calculateInterestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxVariableBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableRateSlope1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableRateSlope2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "variableRateSlope1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "variableRateSlope2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61018060405234801561001157600080fd5b50604051610fbb380380610fbb833981810160405260e081101561003457600080fd5b5080516020808301516040840151606085015160808087015160a088015160c0909801519185905295969395929491939161008e90879061007c906108526100c3821b17901c565b6100d360201b6108621790919060201c565b60a05260609690961b6001600160601b03191660c05260e09390935261010091909152610120526101405250610160526101b9565b6b033b2e3c9fd0803ce800000090565b600061011b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061012260201b60201c565b9392505050565b600081848411156101b15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561017657818101518382015260200161015e565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60805160a05160c05160601c60e05161010051610120516101405161016051610d4d61026e6000398061059752806108305250806101dd52806105c752806106b15250806102df528061032c52806105f852508061030352806103715280610643528061071b5250806103505280610622528061074152806107e8525080610400528061080c52508061020152806105315250806105055280610555528061067d52806106f552806107c45250610d4d6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806380031e371161007157806380031e37146101535780639584df281461015b578063a15f30ac1461019f578063b2589544146101a7578063c72c4d10146101af578063ccab01a3146101d3576100a9565b80630bdf953f146100ae57806317319873146100c857806329db497d146100d057806365614f81146101435780637b832f581461014b575b600080fd5b6100b66101db565b60408051918252519081900360200190f35b6100b66101ff565b61012560048036036101008110156100e757600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060c08101359060e00135610223565b60408051938452602084019290925282820152519081900360600190f35b6100b66102dd565b6100b6610301565b6100b6610325565b610125600480360360c081101561017157600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a001356103a0565b6100b66107c2565b6100b66107e6565b6101b761080a565b604080516001600160a01b039092168252519081900360200190f35b6100b661082e565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000808b6001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561027657600080fd5b505afa15801561028a573d6000803e3d6000fd5b505050506040513d60208110156102a057600080fd5b505190506102b8896102b2838d6108ad565b90610862565b90506102c88c828a8a8a8a6103a0565b93509350935050985098509895505050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b600061039b7f00000000000000000000000000000000000000000000000000000000000000006103957f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006108ad565b906108ad565b905090565b60008060006103ad610ce8565b6103b788886108ad565b808252600060208301819052604083018190526060830152156103f25780516103ed906103e5908b906108ad565b825190610907565b6103f5565b60005b8160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633618abba6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045757600080fd5b505afa15801561046b573d6000803e3d6000fd5b505050506040513d602081101561048157600080fd5b50516040805163bb85c0bb60e01b81526001600160a01b038d811660048301529151919092169163bb85c0bb916024808301926020929190829003018186803b1580156104cd57600080fd5b505afa1580156104e1573d6000803e3d6000fd5b505050506040513d60208110156104f757600080fd5b5051604082015260808101517f0000000000000000000000000000000000000000000000000000000000000000101561067257600061058d7f00000000000000000000000000000000000000000000000000000000000000006105877f0000000000000000000000000000000000000000000000000000000000000000856080015161086290919063ffffffff16565b90610907565b90506105eb6105bc7f000000000000000000000000000000000000000000000000000000000000000083610a4b565b6040840151610395907f00000000000000000000000000000000000000000000000000000000000000006108ad565b604083015261066761061d7f000000000000000000000000000000000000000000000000000000000000000083610a4b565b6103957f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006108ad565b60208301525061076c565b6106e16106d66106af7f0000000000000000000000000000000000000000000000000000000000000000846080015161090790919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000090610a4b565b6040830151906108ad565b604082015260808101516107669061073f907f000000000000000000000000000000000000000000000000000000000000000090610587907f0000000000000000000000000000000000000000000000000000000000000000610a4b565b7f0000000000000000000000000000000000000000000000000000000000000000906108ad565b60208201525b61079f61077b61271087610862565b61079983608001516107938c8c87602001518d610b0c565b90610a4b565b90610b73565b606082018190526040820151602090920151909b919a5098509650505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b6b033b2e3c9fd0803ce800000090565b60006108a483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610c10565b90505b92915050565b6000828201838110156108a4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080518082019091526002815261035360f41b6020820152600090826109ac5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610971578181015183820152602001610959565b50505050905090810190601f16801561099e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115610a285760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b5082816b033b2e3c9fd0803ce800000086020181610a4257fe5b04949350505050565b6000821580610a58575081155b15610a65575060006108a7565b816b019d971e4fe8401e740000001981610a7b57fe5b0483111560405180604001604052806002815260200161068760f31b81525090610ae65760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b506b033b2e3c9fd0803ce80000006002815b048385020181610b0457fe5b049392505050565b600080610b1986866108ad565b905080610b2a576000915050610b6b565b6000610b398561079388610c6a565b90506000610b4a856107938a610c6a565b90506000610b64610b5a85610c6a565b61058785856108ad565b9450505050505b949350505050565b6000821580610b80575081155b15610b8d575060006108a7565b816113881981610b9957fe5b0483111560405180604001604052806002815260200161068760f31b81525090610c045760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b50612710600281610af8565b60008184841115610c625760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b505050900390565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b81525090610ce15760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b5092915050565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160008152509056fea26469706673582212202de93b4e5bd8eff563a6594cebe41ba1046984974b817cc22176094a2c3682bf64736f6c634300060c0033";

type AaveV2DefaultReserveInterestRateStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveV2DefaultReserveInterestRateStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveV2DefaultReserveInterestRateStrategy__factory extends ContractFactory {
  constructor(
    ...args: AaveV2DefaultReserveInterestRateStrategyConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    provider: string,
    optimalUtilizationRate: BigNumberish,
    baseVariableBorrowRate: BigNumberish,
    variableRateSlope1: BigNumberish,
    variableRateSlope2: BigNumberish,
    stableRateSlope1: BigNumberish,
    stableRateSlope2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveV2DefaultReserveInterestRateStrategy> {
    return super.deploy(
      provider,
      optimalUtilizationRate,
      baseVariableBorrowRate,
      variableRateSlope1,
      variableRateSlope2,
      stableRateSlope1,
      stableRateSlope2,
      overrides || {}
    ) as Promise<AaveV2DefaultReserveInterestRateStrategy>;
  }
  getDeployTransaction(
    provider: string,
    optimalUtilizationRate: BigNumberish,
    baseVariableBorrowRate: BigNumberish,
    variableRateSlope1: BigNumberish,
    variableRateSlope2: BigNumberish,
    stableRateSlope1: BigNumberish,
    stableRateSlope2: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      provider,
      optimalUtilizationRate,
      baseVariableBorrowRate,
      variableRateSlope1,
      variableRateSlope2,
      stableRateSlope1,
      stableRateSlope2,
      overrides || {}
    );
  }
  attach(address: string): AaveV2DefaultReserveInterestRateStrategy {
    return super.attach(address) as AaveV2DefaultReserveInterestRateStrategy;
  }
  connect(signer: Signer): AaveV2DefaultReserveInterestRateStrategy__factory {
    return super.connect(
      signer
    ) as AaveV2DefaultReserveInterestRateStrategy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveV2DefaultReserveInterestRateStrategyInterface {
    return new utils.Interface(
      _abi
    ) as AaveV2DefaultReserveInterestRateStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveV2DefaultReserveInterestRateStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveV2DefaultReserveInterestRateStrategy;
  }
}
