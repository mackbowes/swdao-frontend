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
  YearnVaultMock,
  YearnVaultMockInterface,
} from "../YearnVaultMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pricePerShare",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "pricePerShare",
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
  "0x608060405234801561001057600080fd5b506040516100c73803806100c78339818101604052602081101561003357600080fd5b50516000556081806100466000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806399530b0614602d575b600080fd5b60336045565b60408051918252519081900360200190f35b6000548156fea26469706673582212202e01e0b0ba427a8bfbabdadda1734fc12250ae364e7ebb95a06d0ed7f94f324e64736f6c634300060a0033";

type YearnVaultMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnVaultMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnVaultMock__factory extends ContractFactory {
  constructor(...args: YearnVaultMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _pricePerShare: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YearnVaultMock> {
    return super.deploy(
      _pricePerShare,
      overrides || {}
    ) as Promise<YearnVaultMock>;
  }
  getDeployTransaction(
    _pricePerShare: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_pricePerShare, overrides || {});
  }
  attach(address: string): YearnVaultMock {
    return super.attach(address) as YearnVaultMock;
  }
  connect(signer: Signer): YearnVaultMock__factory {
    return super.connect(signer) as YearnVaultMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnVaultMockInterface {
    return new utils.Interface(_abi) as YearnVaultMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnVaultMock {
    return new Contract(address, _abi, signerOrProvider) as YearnVaultMock;
  }
}
