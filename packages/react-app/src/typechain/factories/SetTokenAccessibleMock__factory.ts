/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SetTokenAccessibleMock,
  SetTokenAccessibleMockInterface,
} from "../SetTokenAccessibleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
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
        internalType: "bool",
        name: "_anySetAllowed",
        type: "bool",
      },
    ],
    name: "AnySetAllowedUpdated",
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "_added",
        type: "bool",
      },
    ],
    name: "SetTokenStatusUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "",
        type: "address",
      },
    ],
    name: "allowedSetTokens",
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
    inputs: [],
    name: "anySetAllowed",
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
    ],
    name: "initializeModuleOnSet",
    outputs: [],
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
    ],
    name: "testOnlyAllowedSet",
    outputs: [],
    stateMutability: "view",
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
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "updateAllowedSetToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_anySetAllowed",
        type: "bool",
      },
    ],
    name: "updateAnySetAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107c53803806107c58339818101604052602081101561003357600080fd5b50518060006100496001600160e01b036100b916565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b0392909216919091179055506100bd565b3390565b6106f9806100cc6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063b1dd4d9211610066578063b1dd4d921461010b578063c690a74c14610127578063d6409d9414610155578063ee78244f1461017b578063f2fde38b146101a157610093565b80635199e41814610098578063715018a6146100b95780638da5cb5b146100c1578063a5923820146100e5575b600080fd5b6100b7600480360360208110156100ae57600080fd5b503515156101c7565b005b6100b761025c565b6100c96102fe565b604080516001600160a01b039092168252519081900360200190f35b6100b7600480360360208110156100fb57600080fd5b50356001600160a01b031661030d565b610113610381565b604080519115158252519081900360200190f35b6100b76004803603604081101561013d57600080fd5b506001600160a01b038135169060200135151561038a565b6100b76004803603602081101561016b57600080fd5b50356001600160a01b0316610516565b6101136004803603602081101561019157600080fd5b50356001600160a01b031661056c565b6100b7600480360360208110156101b757600080fd5b50356001600160a01b0316610581565b6101cf610679565b6000546001600160a01b0390811691161461021f576040805162461bcd60e51b815260206004820181905260248201526000805160206106a4833981519152604482015290519081900360640190fd5b6003805460ff19168215159081179091556040517f563e1633136cdd43b8793897cb53ba2a9e31c18b3ae0b6827fbbb03b9902e6c690600090a250565b610264610679565b6000546001600160a01b039081169116146102b4576040805162461bcd60e51b815260206004820181905260248201526000805160206106a4833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600354819060ff1661037d576001600160a01b03811660009081526002602052604090205460ff1661037d576040805162461bcd60e51b81526020600482015260146024820152732737ba1030b63637bbb2b21029b2ba2a37b5b2b760611b604482015290519081900360640190fd5b5050565b60035460ff1681565b610392610679565b6000546001600160a01b039081169116146103e2576040805162461bcd60e51b815260206004820181905260248201526000805160206106a4833981519152604482015290519081900360640190fd5b60015460408051631d3af8fb60e21b81526001600160a01b038581166004830152915191909216916374ebe3ec916024808301926020929190829003018186803b15801561042f57600080fd5b505afa158015610443573d6000803e3d6000fd5b505050506040513d602081101561045957600080fd5b50518061047e57506001600160a01b03821660009081526002602052604090205460ff165b6104c2576040805162461bcd60e51b815260206004820152601060248201526f24b73b30b634b21029b2ba2a37b5b2b760811b604482015290519081900360640190fd5b6001600160a01b038216600081815260026020526040808220805460ff191685151590811790915590519092917f2035981b48691b10f6ac65174e570b4d0a8a889ae01bef3e5e7759ff9444f0c491a35050565b806001600160a01b0316630ffe0f1e6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561055157600080fd5b505af1158015610565573d6000803e3d6000fd5b5050505050565b60026020526000908152604090205460ff1681565b610589610679565b6000546001600160a01b039081169116146105d9576040805162461bcd60e51b815260206004820181905260248201526000805160206106a4833981519152604482015290519081900360640190fd5b6001600160a01b03811661061e5760405162461bcd60e51b815260040180806020018281038252602681526020018061067e6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212202bc321938ae0a804d527c1178f46ae8ddd1b4b73b62bcf666099c63be299b0cf64736f6c634300060a0033";

type SetTokenAccessibleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SetTokenAccessibleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SetTokenAccessibleMock__factory extends ContractFactory {
  constructor(...args: SetTokenAccessibleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SetTokenAccessibleMock> {
    return super.deploy(
      _controller,
      overrides || {}
    ) as Promise<SetTokenAccessibleMock>;
  }
  getDeployTransaction(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_controller, overrides || {});
  }
  attach(address: string): SetTokenAccessibleMock {
    return super.attach(address) as SetTokenAccessibleMock;
  }
  connect(signer: Signer): SetTokenAccessibleMock__factory {
    return super.connect(signer) as SetTokenAccessibleMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SetTokenAccessibleMockInterface {
    return new utils.Interface(_abi) as SetTokenAccessibleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SetTokenAccessibleMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SetTokenAccessibleMock;
  }
}