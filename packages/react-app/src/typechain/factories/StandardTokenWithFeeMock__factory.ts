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
  StandardTokenWithFeeMock,
  StandardTokenWithFeeMockInterface,
} from "../StandardTokenWithFeeMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialBalance",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_allowed",
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
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
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
    inputs: [],
    name: "_totalSupply",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "fee",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setFee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ddb38038062000ddb833981810160405260a08110156200003757600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006357600080fd5b9083019060208201858111156200007957600080fd5b82516401000000008111828201881017156200009457600080fd5b82525081516020918201929091019080838360005b83811015620000c3578181015183820152602001620000a9565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b9083019060208201858111156200012b57600080fd5b82516401000000008111828201881017156200014657600080fd5b82525081516020918201929091019080838360005b83811015620001755781810151838201526020016200015b565b50505050905090810190601f168015620001a35780820380516001836020036101000a031916815260200191505b5060409081526020918201516001600160a01b03891660009081526003845291822088905560058890558651909450620001e39350909186019062000208565b508151620001f990600190602085019062000208565b5060025550620002ad92505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200024b57805160ff19168380011785556200027b565b828001600101855582156200027b579182015b828111156200027b5782518255916020019190600101906200025e565b50620002899291506200028d565b5090565b620002aa91905b8082111562000289576000815560010162000294565b90565b610b1e80620002bd6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636ebcf60711610097578063a9059cbb11610066578063a9059cbb146102eb578063ba0fb86114610317578063dd62ed3e14610345578063ddca3f431461037357610100565b80636ebcf6071461026b57806370a082311461029157806395d89b41146102b7578063a457c2d7146102bf57610100565b8063313ce567116100d3578063313ce56714610212578063395093511461021a5780633eaaf86b1461024657806369fe0e2d1461024e57610100565b806306fdde0314610105578063095ea7b31461018257806318160ddd146101c257806323b872dd146101dc575b600080fd5b61010d61037b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561014757818101518382015260200161012f565b50505050905090810190601f1680156101745780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101ae6004803603604081101561019857600080fd5b506001600160a01b038135169060200135610409565b604080519115158252519081900360200190f35b6101ca610485565b60408051918252519081900360200190f35b6101ae600480360360608110156101f257600080fd5b506001600160a01b0381358116916020810135909116906040013561048b565b6101ca6106d3565b6101ae6004803603604081101561023057600080fd5b506001600160a01b0381351690602001356106d8565b6101ca610786565b6101ae6004803603602081101561026457600080fd5b503561078c565b6101ca6004803603602081101561028157600080fd5b50356001600160a01b0316610794565b6101ca600480360360208110156102a757600080fd5b50356001600160a01b03166107a6565b61010d6107c1565b6101ae600480360360408110156102d557600080fd5b506001600160a01b03813516906020013561081b565b6101ae6004803603604081101561030157600080fd5b506001600160a01b038135169060200135610864565b6101ca6004803603604081101561032d57600080fd5b506001600160a01b0381358116916020013516610960565b6101ca6004803603604081101561035b57600080fd5b506001600160a01b038135811691602001351661097d565b6101ca6109a8565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104015780601f106103d657610100808354040283529160200191610401565b820191906000526020600020905b8154815290600101906020018083116103e457829003601f168201915b505050505081565b60006001600160a01b03831661041e57600080fd5b3360008181526004602090815260408083206001600160a01b03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60055490565b60006001600160a01b0383166104d5576040805162461bcd60e51b815260206004820152600a6024820152691d1bc81b9bdb9b9d5b1b60b21b604482015290519081900360640190fd5b6001600160a01b038416600090815260036020526040902054821115610533576040805162461bcd60e51b815260206004820152600e60248201526d6c657373207468616e2066726f6d60901b604482015290519081900360640190fd5b6001600160a01b03841660009081526004602090815260408083203384529091529020548211156105ab576040805162461bcd60e51b815260206004820152601760248201527f76616c7565206c657373207468616e20616c6c6f776564000000000000000000604482015290519081900360640190fd5b60006105c2600254846109ae90919063ffffffff16565b6001600160a01b0386166000908152600360205260409020549091506105ee908463ffffffff6109ae16565b6001600160a01b038087166000908152600360205260408082209390935590861681522054610623908263ffffffff6109f716565b6001600160a01b038086166000908152600360209081526040808320949094559188168152600482528281203382529091522054610667908463ffffffff6109ae16565b6001600160a01b03808716600081815260046020908152604080832033845282529182902094909455805187815290519288169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3506001949350505050565b601281565b60006001600160a01b0383166106ed57600080fd5b3360009081526004602090815260408083206001600160a01b0387168452909152902054610721908363ffffffff6109f716565b3360008181526004602090815260408083206001600160a01b0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b60055481565b600255600190565b60036020526000908152604090205481565b6001600160a01b031660009081526003602052604090205490565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104015780601f106103d657610100808354040283529160200191610401565b60006001600160a01b03831661083057600080fd5b3360009081526004602090815260408083206001600160a01b0387168452909152902054610721908363ffffffff6109ae16565b60006001600160a01b03831661087957600080fd5b3360009081526003602052604090205482111561089557600080fd5b60006108ac600254846109f790919063ffffffff16565b336000908152600360205260409020549091506108cf908263ffffffff6109ae16565b33600090815260036020526040808220929092556001600160a01b03861681522054610901908463ffffffff6109f716565b6001600160a01b0385166000818152600360209081526040918290209390935580518681529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35060019392505050565b600460209081526000928352604080842090915290825290205481565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b60025481565b60006109f083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a51565b9392505050565b6000828201838110156109f0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008184841115610ae05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610aa5578181015183820152602001610a8d565b50505050905090810190601f168015610ad25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fea264697066735822122018757202b3a7009ce08542e34628b49917751eca634bbafe248771f35925b65964736f6c634300060a0033";

type StandardTokenWithFeeMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StandardTokenWithFeeMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StandardTokenWithFeeMock__factory extends ContractFactory {
  constructor(...args: StandardTokenWithFeeMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _initialAccount: string,
    _initialBalance: BigNumberish,
    _name: string,
    _symbol: string,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StandardTokenWithFeeMock> {
    return super.deploy(
      _initialAccount,
      _initialBalance,
      _name,
      _symbol,
      _fee,
      overrides || {}
    ) as Promise<StandardTokenWithFeeMock>;
  }
  getDeployTransaction(
    _initialAccount: string,
    _initialBalance: BigNumberish,
    _name: string,
    _symbol: string,
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialAccount,
      _initialBalance,
      _name,
      _symbol,
      _fee,
      overrides || {}
    );
  }
  attach(address: string): StandardTokenWithFeeMock {
    return super.attach(address) as StandardTokenWithFeeMock;
  }
  connect(signer: Signer): StandardTokenWithFeeMock__factory {
    return super.connect(signer) as StandardTokenWithFeeMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StandardTokenWithFeeMockInterface {
    return new utils.Interface(_abi) as StandardTokenWithFeeMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StandardTokenWithFeeMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StandardTokenWithFeeMock;
  }
}
