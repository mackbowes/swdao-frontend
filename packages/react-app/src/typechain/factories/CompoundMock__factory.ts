/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CompoundMock, CompoundMockInterface } from "../CompoundMock";

const _abi = [
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
    inputs: [
      {
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_notionalBorrowQuantity",
        type: "uint256",
      },
    ],
    name: "testGetBorrowCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "contract IComptroller",
        name: "_comptroller",
        type: "address",
      },
    ],
    name: "testGetEnterMarketsCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "contract IComptroller",
        name: "_comptroller",
        type: "address",
      },
    ],
    name: "testGetExitMarketCalldata",
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
        internalType: "contract ICErc20",
        name: "_cEther",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintNotional",
        type: "uint256",
      },
    ],
    name: "testGetMintCEtherCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintNotional",
        type: "uint256",
      },
    ],
    name: "testGetMintCTokenCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_redeemNotional",
        type: "uint256",
      },
    ],
    name: "testGetRedeemCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_redeemNotional",
        type: "uint256",
      },
    ],
    name: "testGetRedeemUnderlyingCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_repayNotional",
        type: "uint256",
      },
    ],
    name: "testGetRepayBorrowCEtherCalldata",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_repayNotional",
        type: "uint256",
      },
    ],
    name: "testGetRepayBorrowCTokenCalldata",
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_notionalBorrowQuantity",
        type: "uint256",
      },
    ],
    name: "testInvokeBorrow",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "contract IComptroller",
        name: "_comptroller",
        type: "address",
      },
    ],
    name: "testInvokeEnterMarkets",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "contract IComptroller",
        name: "_comptroller",
        type: "address",
      },
    ],
    name: "testInvokeExitMarket",
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
        internalType: "contract ICErc20",
        name: "_cEther",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeMintCEther",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mintNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeMintCToken",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_redeemNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeRedeem",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_redeemNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeRedeemUnderlying",
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
        internalType: "contract ICErc20",
        name: "_cEther",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_repayNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeRepayBorrowCEther",
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
        internalType: "contract ICErc20",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_repayNotional",
        type: "uint256",
      },
    ],
    name: "testInvokeRepayBorrowCToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e96806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806375368e54116100ad578063a4351aa011610071578063a4351aa014610468578063abc36ec1146104a0578063cf8f941d146104d6578063d6409d9414610502578063df6aff0f1461052857610121565b806375368e541461036e57806386bd84861461039a5780638b5d6d2d146103d0578063908bbdf61461040657806394610a731461043257610121565b806330f61a96116100f457806330f61a961461027e57806343ec7971146102aa5780634fee9d17146102e0578063685c1bac1461030c5780636934e52f1461033857610121565b80630753bd1c146101265780631b9d9924146101ec57806321e467c51461021a5780632800e48714610252575b600080fd5b6101546004803603604081101561013c57600080fd5b506001600160a01b0381358116916020013516610560565b60405180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101af578181015183820152602001610197565b50505050905090810190601f1680156101dc5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b6101546004803603604081101561020257600080fd5b506001600160a01b03813581169160200135166106cf565b6102506004803603606081101561023057600080fd5b506001600160a01b03813581169160208101359091169060400135610739565b005b6101546004803603604081101561026857600080fd5b506001600160a01b0381351690602001356107bf565b6101546004803603604081101561029457600080fd5b506001600160a01b03813516906020013561082d565b610250600480360360608110156102c057600080fd5b506001600160a01b0381358116916020810135909116906040013561089b565b610154600480360360408110156102f657600080fd5b506001600160a01b038135169060200135610904565b6101546004803603604081101561032257600080fd5b506001600160a01b038135169060200135610972565b6102506004803603606081101561034e57600080fd5b506001600160a01b038135811691602081013590911690604001356109e0565b6101546004803603604081101561038457600080fd5b506001600160a01b038135169060200135610a49565b610250600480360360608110156103b057600080fd5b506001600160a01b03813581169160208101359091169060400135610ab7565b610250600480360360608110156103e657600080fd5b506001600160a01b03813581169160208101359091169060400135610b20565b6101546004803603604081101561041c57600080fd5b506001600160a01b038135169060200135610b89565b6102506004803603606081101561044857600080fd5b506001600160a01b03813581169160208101359091169060400135610bf7565b6102506004803603606081101561047e57600080fd5b506001600160a01b038135811691602081013582169160409091013516610c60565b610250600480360360608110156104b657600080fd5b506001600160a01b03813581169160208101359091169060400135610cc9565b610154600480360360408110156104ec57600080fd5b506001600160a01b038135169060200135610d32565b6102506004803603602081101561051857600080fd5b50356001600160a01b0316610da0565b6102506004803603606081101561053e57600080fd5b506001600160a01b038135811691602081013582169160409091013516610df6565b604080516316335abf60e11b81526001600160a01b038085166004830152831660248201529051600091829160609173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__91632c66b57e916044808201928792909190829003018186803b1580156105ca57600080fd5b505af41580156105de573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052606081101561060757600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561063257600080fd5b90830190602082018581111561064757600080fd5b825164010000000081118282018810171561066157600080fd5b82525081516020918201929091019080838360005b8381101561068e578181015183820152602001610676565b50505050905090810190601f1680156106bb5780820380516001836020036101000a031916815260200191505b506040525050509250925092509250925092565b60408051630f1dd0e760e21b81526001600160a01b038085166004830152831660248201529051600091829160609173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__91633c77439c916044808201928792909190829003018186803b1580156105ca57600080fd5b60408051635d20259160e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__91635d202591916064808301926000929190829003018186803b1580156107a257600080fd5b505af41580156107b6573d6000803e3d6000fd5b50505050505050565b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__639653f87986866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__63a2f9765886866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b6040805163aed2dfc960e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163aed2dfc9916064808301926000929190829003018186803b1580156107a257600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__634347213286866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__63a2ca57e086866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b60408051637d43967d60e11b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163fa872cfa916064808301926000929190829003018186803b1580156107a257600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__63a753734e86866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b6040805163beee4b4b60e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163beee4b4b916064808301926000929190829003018186803b1580156107a257600080fd5b6040805163944d008d60e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163944d008d916064808301926000929190829003018186803b1580156107a257600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__6301fd16b286866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b6040805163690f656160e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163690f6561916064808301926000929190829003018186803b1580156107a257600080fd5b60408051629c09c960e41b81526001600160a01b038086166004830152808516602483015283166044820152905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__916309c09c90916064808301926000929190829003018186803b1580156107a257600080fd5b604080516309c8202b60e01b81526001600160a01b0380861660048301528416602482015260448101839052905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__916309c8202b916064808301926000929190829003018186803b1580156107a257600080fd5b600080606073__$059b1e3c35e6526bf44b3e0b6a2a76e329$__636d4aada586866040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060006040518083038186803b1580156105ca57600080fd5b806001600160a01b0316630ffe0f1e6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610ddb57600080fd5b505af1158015610def573d6000803e3d6000fd5b5050505050565b60408051632c5febc760e21b81526001600160a01b038086166004830152808516602483015283166044820152905173__$059b1e3c35e6526bf44b3e0b6a2a76e329$__9163b17faf1c916064808301926000929190829003018186803b1580156107a257600080fdfea2646970667358221220e4d6d709a3d0489758341a3d9f2a1bd468151f0118a1ed4b6e7c57c9cee1b1f964736f6c634300060a0033";

type CompoundMockConstructorParams =
  | [linkLibraryAddresses: CompoundMockLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompoundMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class CompoundMock__factory extends ContractFactory {
  constructor(...args: CompoundMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        CompoundMock__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: CompoundMockLibraryAddresses
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
  ): Promise<CompoundMock> {
    return super.deploy(overrides || {}) as Promise<CompoundMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CompoundMock {
    return super.attach(address) as CompoundMock;
  }
  connect(signer: Signer): CompoundMock__factory {
    return super.connect(signer) as CompoundMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundMockInterface {
    return new utils.Interface(_abi) as CompoundMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundMock {
    return new Contract(address, _abi, signerOrProvider) as CompoundMock;
  }
}

export interface CompoundMockLibraryAddresses {
  ["contracts/protocol/integration/lib/Compound.sol:Compound"]: string;
}