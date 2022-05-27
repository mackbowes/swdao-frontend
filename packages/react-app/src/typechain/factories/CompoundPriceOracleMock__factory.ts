/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CompoundPriceOracleMock,
  CompoundPriceOracleMockInterface,
} from "../CompoundPriceOracleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "assetToPrices",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newPrice",
        type: "uint256",
      },
    ],
    name: "setUnderlyingPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610151806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063127ffda014610046578063b4ba21c814610074578063fc57d4df146100ac575b600080fd5b6100726004803603604081101561005c57600080fd5b506001600160a01b0381351690602001356100d2565b005b61009a6004803603602081101561008a57600080fd5b50356001600160a01b03166100ee565b60408051918252519081900360200190f35b61009a600480360360208110156100c257600080fd5b50356001600160a01b0316610100565b6001600160a01b03909116600090815260208190526040902055565b60006020819052908152604090205481565b6001600160a01b03166000908152602081905260409020549056fea2646970667358221220194848e24759330686dafe368ee34659436ba858115eb6f531cea038975f2e8b64736f6c634300060a0033";

type CompoundPriceOracleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompoundPriceOracleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompoundPriceOracleMock__factory extends ContractFactory {
  constructor(...args: CompoundPriceOracleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CompoundPriceOracleMock> {
    return super.deploy(overrides || {}) as Promise<CompoundPriceOracleMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CompoundPriceOracleMock {
    return super.attach(address) as CompoundPriceOracleMock;
  }
  connect(signer: Signer): CompoundPriceOracleMock__factory {
    return super.connect(signer) as CompoundPriceOracleMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundPriceOracleMockInterface {
    return new utils.Interface(_abi) as CompoundPriceOracleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundPriceOracleMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CompoundPriceOracleMock;
  }
}
