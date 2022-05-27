/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PerpV2PositionsMock,
  PerpV2PositionsMockInterface,
} from "../PerpV2PositionsMock";

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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_adjustmentComponent",
        type: "address",
      },
      {
        internalType: "int256",
        name: "_currentExternalPositionUnit",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_newExternalPositionUnit",
        type: "int256",
      },
    ],
    name: "testFormatAdjustments",
    outputs: [
      {
        internalType: "int256[]",
        name: "",
        type: "int256[]",
      },
      {
        internalType: "int256[]",
        name: "",
        type: "int256[]",
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
      {
        internalType: "address[]",
        name: "_baseTokens",
        type: "address[]",
      },
      {
        internalType: "contract IAccountBalance",
        name: "_perpAccountBalance",
        type: "address",
      },
    ],
    name: "testGetNetQuoteBalance",
    outputs: [
      {
        internalType: "int256",
        name: "netQuoteBalance",
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
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_baseTokens",
        type: "address[]",
      },
      {
        internalType: "contract IAccountBalance",
        name: "_perpAccountBalance",
        type: "address",
      },
    ],
    name: "testGetPositionNotionalInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "int256",
            name: "baseBalance",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "quoteBalance",
            type: "int256",
          },
        ],
        internalType: "struct PerpV2Positions.PositionNotionalInfo[]",
        name: "",
        type: "tuple[]",
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
      {
        internalType: "address[]",
        name: "_baseTokens",
        type: "address[]",
      },
      {
        internalType: "contract IAccountBalance",
        name: "_perpAccountBalance",
        type: "address",
      },
    ],
    name: "testGetPositionUnitInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "int256",
            name: "baseUnit",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "quoteUnit",
            type: "int256",
          },
        ],
        internalType: "struct PerpV2Positions.PositionUnitInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610897806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631e24a3fc1461005c57806324ebbaf1146100855780632fa4e244146100a5578063d6409d94146100c5578063e08789dc146100da575b600080fd5b61006f61006a366004610575565b6100fb565b60405161007c91906107f9565b60405180910390f35b610098610093366004610575565b610191565b60405161007c91906106d9565b6100b86100b3366004610575565b610223565b60405161007c9190610727565b6100d86100d336600461050d565b610261565b005b6100ed6100e8366004610530565b6102b7565b60405161007c9291906106ab565b60405163ef9f4b9f60e01b815260009073__$2aa9f85261a450f4a764d4c5a0e33a5378$__9063ef9f4b9f9061013990879087908790600401610792565b60206040518083038186803b15801561015157600080fd5b505af4158015610165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101899190610637565b949350505050565b604051634e1910b360e01b815260609073__$2aa9f85261a450f4a764d4c5a0e33a5378$__90634e1910b3906101cf90879087908790600401610792565b60006040518083038186803b1580156101e757600080fd5b505af41580156101fb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261018991908101906104da565b6040516322f1c36560e21b815260609073__$2aa9f85261a450f4a764d4c5a0e33a5378$__90638bc70d94906101cf90879087908790600401610792565b806001600160a01b0316630ffe0f1e6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029c57600080fd5b505af11580156102b0573d6000803e3d6000fd5b5050505050565b60608073__$2aa9f85261a450f4a764d4c5a0e33a5378$__63271c0fa8878787876040518563ffffffff1660e01b81526004016102f79493929190610769565b60006040518083038186803b15801561030f57600080fd5b505af4158015610323573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261034b9190810190610479565b9150915094509492505050565b600082601f830112610368578081fd5b815161037b61037682610829565b610802565b81815291506020808301908481018184028601820187101561039c57600080fd5b60005b848110156103bb5781518452928201929082019060010161039f565b505050505092915050565b600082601f8301126103d6578081fd5b81516103e461037682610829565b818152915060208083019084810160608085028701830188101561040757600080fd5b6000805b8681101561045b5782848b031215610421578182fd5b61042a83610802565b845161043581610849565b81528486015186820152604080860151908201528652948401949282019260010161040b565b5050505050505092915050565b803561047381610849565b92915050565b6000806040838503121561048b578182fd5b825167ffffffffffffffff808211156104a2578384fd5b6104ae86838701610358565b935060208501519150808211156104c3578283fd5b506104d085828601610358565b9150509250929050565b6000602082840312156104eb578081fd5b815167ffffffffffffffff811115610501578182fd5b610189848285016103c6565b60006020828403121561051e578081fd5b813561052981610849565b9392505050565b60008060008060808587031215610545578182fd5b843561055081610849565b9350602085013561056081610849565b93969395505050506040820135916060013590565b600080600060608486031215610589578283fd5b833561059481610849565b925060208481013567ffffffffffffffff8111156105b0578384fd5b80860187601f8201126105c1578485fd5b803591506105d161037683610829565b82815283810190828501858502840186018b10156105ed578788fd5b8793505b8484101561061857803561060481610849565b8352600193909301929185019185016105f1565b50809650505050505061062e8560408601610468565b90509250925092565b600060208284031215610648578081fd5b5051919050565b6000815180845260208085019450808401835b8381101561067e57815187529582019590820190600101610662565b509495945050505050565b80516001600160a01b0316825260208082015190830152604090810151910152565b6000604082526106be604083018561064f565b82810360208401526106d0818561064f565b95945050505050565b6020808252825182820181905260009190848201906040850190845b8181101561071b57610708838551610689565b92840192606092909201916001016106f5565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561071b57610756838551610689565b9284019260609290920191600101610743565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b038481168252606060208084018290528551918401829052600092868201929091906080860190855b818110156107e05785518516835294830194918301916001016107c2565b5050809450505080851660408501525050949350505050565b90815260200190565b60405181810167ffffffffffffffff8111828210171561082157600080fd5b604052919050565b600067ffffffffffffffff82111561083f578081fd5b5060209081020190565b6001600160a01b038116811461085e57600080fd5b5056fea2646970667358221220588f77e368c7377054fa9cb8a803aca9ed9235a251cdcc700cb7bbc98979707e64736f6c634300060a0033";

type PerpV2PositionsMockConstructorParams =
  | [linkLibraryAddresses: PerpV2PositionsMockLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PerpV2PositionsMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PerpV2PositionsMock__factory extends ContractFactory {
  constructor(...args: PerpV2PositionsMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PerpV2PositionsMock__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PerpV2PositionsMockLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2aa9f85261a450f4a764d4c5a0e33a5378\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/integration/lib/PerpV2Positions.sol:PerpV2Positions"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PerpV2PositionsMock> {
    return super.deploy(overrides || {}) as Promise<PerpV2PositionsMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PerpV2PositionsMock {
    return super.attach(address) as PerpV2PositionsMock;
  }
  connect(signer: Signer): PerpV2PositionsMock__factory {
    return super.connect(signer) as PerpV2PositionsMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PerpV2PositionsMockInterface {
    return new utils.Interface(_abi) as PerpV2PositionsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PerpV2PositionsMock {
    return new Contract(address, _abi, signerOrProvider) as PerpV2PositionsMock;
  }
}

export interface PerpV2PositionsMockLibraryAddresses {
  ["contracts/protocol/integration/lib/PerpV2Positions.sol:PerpV2Positions"]: string;
}
