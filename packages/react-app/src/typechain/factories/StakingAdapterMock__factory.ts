/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakingAdapterMock,
  StakingAdapterMockInterface,
} from "../StakingAdapterMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingAsset",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "PRECISE_UNIT",
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
    name: "getSpenderAddress",
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
        name: "_stakingContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_notionalAmount",
        type: "uint256",
      },
    ],
    name: "getStakeCallData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_notionalAmount",
        type: "uint256",
      },
    ],
    name: "getUnstakeCallData",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
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
    name: "setUnstakeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "stakes",
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
    name: "stakingAsset",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [],
    name: "unstakeFee",
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
];

const _bytecode =
  "0x6080604052670de0b6b3a764000060005534801561001c57600080fd5b506040516107e33803806107e38339818101604052602081101561003f57600080fd5b5051600380546001600160a01b0319166001600160a01b039092169190911790556107748061006f6000396000f3fe608060405234801561001057600080fd5b506004361061009d5760003560e01c80637776768f116100665780637776768f1461021c578063864029e7146102245780638ea97d261461022c5780639971c16514610234578063a694fc3a146102605761009d565b806218a116146100a25780630d697603146100c15780630e8edd861461018557806316934fc4146101c75780632e17de78146101ff575b600080fd5b6100bf600480360360208110156100b857600080fd5b503561027d565b005b6100ed600480360360408110156100d757600080fd5b506001600160a01b038135169060200135610282565b60405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610148578181015183820152602001610130565b50505050905090810190601f1680156101755780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101ab6004803603602081101561019b57600080fd5b50356001600160a01b03166102c0565b604080516001600160a01b039092168252519081900360200190f35b6101ed600480360360208110156101dd57600080fd5b50356001600160a01b03166102c5565b60408051918252519081900360200190f35b6100bf6004803603602081101561021557600080fd5b50356102d7565b6101ab6103cf565b6101ed6103de565b6101ed6103e4565b6100ed6004803603604081101561024a57600080fd5b506001600160a01b0381351690602001356103ea565b6100bf6004803603602081101561027657600080fd5b5035610428565b600255565b604080516024808201939093528151808203909301835260440190526020810180516001600160e01b031663534a7e1d60e11b179052909160009190565b503090565b60016020526000908152604090205481565b336000908152600160205260409020546102f7908263ffffffff6104e116565b3360008181526001602052604081209290925560035491546002546001600160a01b039093169263a9059cbb929161035191610345906103389083906104e1565b879063ffffffff61052c16565b9063ffffffff61058516565b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156103a057600080fd5b505af11580156103b4573d6000803e3d6000fd5b505050506040513d60208110156103ca57600080fd5b505050565b6003546001600160a01b031681565b60005481565b60025481565b604080516024808201939093528151808203909301835260440190526020810180516001600160e01b03166305c2fbcf60e31b179052909160009190565b600354604080516323b872dd60e01b81523360048201523060248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561048257600080fd5b505af1158015610496573d6000803e3d6000fd5b505050506040513d60208110156104ac57600080fd5b5050336000908152600160205260409020546104ce908263ffffffff6105c716565b3360009081526001602052604090205550565b600061052383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610621565b90505b92915050565b60008261053b57506000610526565b8282028284828161054857fe5b04146105235760405162461bcd60e51b815260040180806020018281038252602181526020018061071e6021913960400191505060405180910390fd5b600061052383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506106b8565b600082820183811015610523576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081848411156106b05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561067557818101518382015260200161065d565b50505050905090810190601f1680156106a25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836107075760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561067557818101518382015260200161065d565b50600083858161071357fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122010da6190e5f054104d9df3c5599563c8fe102610bddeb0c235ccedad3af12ae064736f6c634300060a0033";

type StakingAdapterMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingAdapterMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingAdapterMock__factory extends ContractFactory {
  constructor(...args: StakingAdapterMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _stakingAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingAdapterMock> {
    return super.deploy(
      _stakingAsset,
      overrides || {}
    ) as Promise<StakingAdapterMock>;
  }
  getDeployTransaction(
    _stakingAsset: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stakingAsset, overrides || {});
  }
  attach(address: string): StakingAdapterMock {
    return super.attach(address) as StakingAdapterMock;
  }
  connect(signer: Signer): StakingAdapterMock__factory {
    return super.connect(signer) as StakingAdapterMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingAdapterMockInterface {
    return new utils.Interface(_abi) as StakingAdapterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingAdapterMock {
    return new Contract(address, _abi, signerOrProvider) as StakingAdapterMock;
  }
}
