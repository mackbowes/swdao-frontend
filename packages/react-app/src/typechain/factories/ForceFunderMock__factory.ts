/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ForceFunderMock,
  ForceFunderMockInterface,
} from "../ForceFunderMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060888061001e6000396000f3fe608060405260043610601c5760003560e01c806323024408146021575b600080fd5b604460048036036020811015603557600080fd5b50356001600160a01b03166046565b005b806001600160a01b0316fffea2646970667358221220cdb7aeb56523c5394cc8ee1cb71debcf2f13a6f4e82000ae13994a0dc32908d164736f6c634300060a0033";

type ForceFunderMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ForceFunderMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ForceFunderMock__factory extends ContractFactory {
  constructor(...args: ForceFunderMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ForceFunderMock> {
    return super.deploy(overrides || {}) as Promise<ForceFunderMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ForceFunderMock {
    return super.attach(address) as ForceFunderMock;
  }
  connect(signer: Signer): ForceFunderMock__factory {
    return super.connect(signer) as ForceFunderMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ForceFunderMockInterface {
    return new utils.Interface(_abi) as ForceFunderMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ForceFunderMock {
    return new Contract(address, _abi, signerOrProvider) as ForceFunderMock;
  }
}
