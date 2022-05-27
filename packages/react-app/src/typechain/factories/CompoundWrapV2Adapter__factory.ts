/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CompoundWrapV2Adapter,
  CompoundWrapV2AdapterInterface,
} from "../CompoundWrapV2Adapter";

const _abi = [
  {
    inputs: [],
    name: "ETH_TOKEN_ADDRESS",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedToken",
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
    stateMutability: "pure",
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
      {
        internalType: "address",
        name: "_wrappedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wrappedTokenUnits",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getUnwrapCallData",
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
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_underlyingUnits",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getWrapCallData",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105d7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631878d1f11461005157806390f0f9381461006f578063d91462ca14610091578063de68a3da146100a4575b600080fd5b6100596100b7565b604051610066919061048c565b60405180910390f35b61008261007d366004610338565b6100cf565b604051610066939291906104a0565b61008261009f366004610338565b61017f565b6100596100b2366004610300565b6102fb565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b600080606080876001600160a01b031673__$059b1e3c35e6526bf44b3e0b6a2a76e329$__63a2f976589091896040518363ffffffff1660e01b81526004016101199291906104e9565b60006040518083038186803b15801561013157600080fd5b505af4158015610145573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261016d91908101906103f7565b999b60009b5098505050505050505050565b600080606081816001600160a01b038a1673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561024e57604051636d4aada560e01b815288925073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__90636d4aada5906101f0906001600160a01b038d169086906004016104e9565b60006040518083038186803b15801561020857600080fd5b505af415801561021c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261024491908101906103f7565b92506102ed915050565b604051639653f87960e01b81526000925073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__90639653f87990610294906001600160a01b038d16908c906004016104e9565b60006040518083038186803b1580156102ac57600080fd5b505af41580156102c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102e891908101906103f7565b925050505b979990985095505050505050565b919050565b60008060408385031215610312578182fd5b823561031d81610589565b9150602083013561032d81610589565b809150509250929050565b600080600080600060a0868803121561034f578081fd5b853561035a81610589565b9450602086013561036a81610589565b935060408601359250606086013561038181610589565b9150608086013567ffffffffffffffff81111561039c578182fd5b80870188601f8201126103ad578283fd5b803591506103c26103bd83610529565b610502565b8281528960208484010111156103d6578384fd5b6103e783602083016020850161054d565b8093505050509295509295909350565b60008060006060848603121561040b578283fd5b835161041681610589565b60208501516040860151919450925067ffffffffffffffff811115610439578182fd5b80850186601f82011261044a578283fd5b8051915061045a6103bd83610529565b82815287602084840101111561046e578384fd5b61047f836020830160208501610559565b8093505050509250925092565b6001600160a01b0391909116815260200190565b600060018060a01b03851682528360208301526060604083015282518060608401526104d3816080850160208701610559565b601f01601f191691909101608001949350505050565b6001600160a01b03929092168252602082015260400190565b60405181810167ffffffffffffffff8111828210171561052157600080fd5b604052919050565b600067ffffffffffffffff82111561053f578081fd5b50601f01601f191660200190565b82818337506000910152565b60005b8381101561057457818101518382015260200161055c565b83811115610583576000848401525b50505050565b6001600160a01b038116811461059e57600080fd5b5056fea26469706673582212207fc04713d8c8c113abffc1e2f949de44a1c33fbc4ff123a0a3d903d76784c6dc64736f6c634300060a0033";

type CompoundWrapV2AdapterConstructorParams =
  | [
      linkLibraryAddresses: CompoundWrapV2AdapterLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompoundWrapV2AdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class CompoundWrapV2Adapter__factory extends ContractFactory {
  constructor(...args: CompoundWrapV2AdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        CompoundWrapV2Adapter__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: CompoundWrapV2AdapterLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$059b1e3c35e6526bf44b3e0b6a2a76e329\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/integration/lib/Compound.sol:Compound"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CompoundWrapV2Adapter> {
    return super.deploy(overrides || {}) as Promise<CompoundWrapV2Adapter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CompoundWrapV2Adapter {
    return super.attach(address) as CompoundWrapV2Adapter;
  }
  connect(signer: Signer): CompoundWrapV2Adapter__factory {
    return super.connect(signer) as CompoundWrapV2Adapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundWrapV2AdapterInterface {
    return new utils.Interface(_abi) as CompoundWrapV2AdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundWrapV2Adapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CompoundWrapV2Adapter;
  }
}

export interface CompoundWrapV2AdapterLibraryAddresses {
  ["contracts/protocol/integration/lib/Compound.sol:Compound"]: string;
}
