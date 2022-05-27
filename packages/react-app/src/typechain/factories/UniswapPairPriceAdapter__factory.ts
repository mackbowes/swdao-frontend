/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapPairPriceAdapter,
  UniswapPairPriceAdapterInterface,
} from "../UniswapPairPriceAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IController",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswapFactory",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Pair[]",
        name: "_uniswapPools",
        type: "address[]",
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
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allowedUniswapPools",
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
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
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
    name: "getAllowedUniswapPools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
        name: "_assetOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "_assetTwo",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "removePool",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "uniswapFactory",
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
    ],
    name: "uniswapPoolsToSettings",
    outputs: [
      {
        internalType: "address",
        name: "tokenOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTwo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenOneBaseUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTwoBaseUnit",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d3638038062001d36833981810160405260608110156200003757600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006357600080fd5b9083019060208201858111156200007957600080fd5b82518660208202830111640100000000821117156200009757600080fd5b82525081516020918201928201910280838360005b83811015620000c6578181015183820152602001620000ac565b505050509050016040525050506000620000e5620004a760201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b038086166001600160a01b031992831617909255600480549285169290911691909117905560005b81518110156200049d5760008282815181106200017b57fe5b6020908102919091018101516001600160a01b0381166000908152600290925260409091206004015490915060ff1615620001e85760405162461bcd60e51b815260040180806020018281038252602481526020018062001d126024913960400191505060405180910390fd5b620001f2620004ab565b816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156200022c57600080fd5b505afa15801562000241573d6000803e3d6000fd5b505050506040513d60208110156200025857600080fd5b50516001600160a01b0390811682526040805163d21220a760e01b815290519184169163d21220a791600480820192602092909190829003018186803b158015620002a257600080fd5b505afa158015620002b7573d6000803e3d6000fd5b505050506040513d6020811015620002ce57600080fd5b50516001600160a01b0390811660208381019190915282516040805163313ce56760e01b81529051600094929092169263313ce56792600480840193829003018186803b1580156200031f57600080fd5b505afa15801562000334573d6000803e3d6000fd5b505050506040513d60208110156200034b57600080fd5b505160ff16600a81900a604080850191909152602084810151825163313ce56760e01b815292519394506000936001600160a01b039091169263313ce567926004808301939192829003018186803b158015620003a757600080fd5b505afa158015620003bc573d6000803e3d6000fd5b505050506040513d6020811015620003d357600080fd5b505160ff16600a0a606084019081526001608085018181526003805480840182557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b03998a166001600160a01b031991821681179092556000918252600260208181526040938490208b518154908e16908516178155908b0151818801805491909d16931692909217909a5597015197870197909755915195850195909555516004909301805493151560ff199094169390931790925550500162000162565b50505050620004d9565b3390565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b61182980620004e96000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610177578063ac41865a1461017f578063c921a4ec146101c8578063d914cd4b14610227578063f2fde38b1461024d578063f77c479114610273576100a9565b8063069ee5a4146100ae5780633b7d094614610106578063715018a61461012e5780637b57affc146101365780638bdb2afa1461016f575b600080fd5b6100b661027b565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100f25781810151838201526020016100da565b505050509050019250505060405180910390f35b61012c6004803603602081101561011c57600080fd5b50356001600160a01b03166102de565b005b61012c610461565b6101536004803603602081101561014c57600080fd5b5035610503565b604080516001600160a01b039092168252519081900360200190f35b61015361052a565b610153610539565b6101ad6004803603604081101561019557600080fd5b506001600160a01b0381358116916020013516610548565b60408051921515835260208301919091528051918290030190f35b6101ee600480360360208110156101de57600080fd5b50356001600160a01b0316610842565b604080516001600160a01b0396871681529490951660208501528385019290925260608301521515608082015290519081900360a00190f35b61012c6004803603602081101561023d57600080fd5b50356001600160a01b0316610881565b61012c6004803603602081101561026357600080fd5b50356001600160a01b0316610be1565b610153610cd9565b606060038054806020026020016040519081016040528092919081815260200182805480156102d357602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102b5575b505050505090505b90565b6102e6610ce8565b6000546001600160a01b03908116911614610336576040805162461bcd60e51b815260206004820181905260248201526000805160206117b1833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526002602052604090206004015460ff166103905760405162461bcd60e51b81526004018080602001828103825260238152602001806117d16023913960400191505060405180910390fd5b6103fd8160038054806020026020016040519081016040528092919081815260200182805480156103ea57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103cc575b5050505050610cec90919063ffffffff16565b80516104119160039160209091019061166b565b506001600160a01b03166000908152600260208190526040822080546001600160a01b0319908116825560018201805490911690559081018290556003810191909155600401805460ff19169055565b610469610ce8565b6000546001600160a01b039081169116146104b9576040805162461bcd60e51b815260206004820181905260248201526000805160206117b1833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6003818154811061051057fe5b6000918252602090912001546001600160a01b0316905081565b6004546001600160a01b031681565b6000546001600160a01b031690565b600154604080516313bc6d4b60e01b8152336004820152905160009283926001600160a01b03909116916313bc6d4b91602480820192602092909190829003018186803b15801561059857600080fd5b505afa1580156105ac573d6000803e3d6000fd5b505050506040513d60208110156105c257600080fd5b5051610615576040805162461bcd60e51b815260206004820152601760248201527f4d7573742062652073797374656d20636f6e7472616374000000000000000000604482015290519081900360640190fd5b6001600160a01b0380851660009081526002602052604080822060049081015493871683529120015460ff918216911681158015610651575080155b1561066557506000925082915061083b9050565b60015460009061067d906001600160a01b0316610d67565b90506000816001600160a01b031663342833546040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ba57600080fd5b505afa1580156106ce573d6000803e3d6000fd5b505050506040513d60208110156106e457600080fd5b5051905060008415610702576106fb838a84610de0565b9050610783565b60408051635620c32d60e11b81526001600160a01b038b81166004830152848116602483015291519185169163ac41865a91604480820192602092909190829003018186803b15801561075457600080fd5b505afa158015610768573d6000803e3d6000fd5b505050506040513d602081101561077e57600080fd5b505190505b6000841561079d57610796848a85610de0565b905061081e565b60408051635620c32d60e11b81526001600160a01b038b81166004830152858116602483015291519186169163ac41865a91604480820192602092909190829003018186803b1580156107ef57600080fd5b505afa158015610803573d6000803e3d6000fd5b505050506040513d602081101561081957600080fd5b505190505b6001610830838363ffffffff61105916565b975097505050505050505b9250929050565b6002602081905260009182526040909120805460018201549282015460038301546004909301546001600160a01b039283169490921692909160ff1685565b610889610ce8565b6000546001600160a01b039081169116146108d9576040805162461bcd60e51b815260206004820181905260248201526000805160206117b1833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526002602052604090206004015460ff16156109345760405162461bcd60e51b815260040180806020018281038252602281526020018061176e6022913960400191505060405180910390fd5b6000819050806001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561097257600080fd5b505afa158015610986573d6000803e3d6000fd5b505050506040513d602081101561099c57600080fd5b50516001600160a01b0383811660009081526002602090815260409182902080546001600160a01b03191694841694909417909355805163d21220a760e01b815290519184169263d21220a792600480840193829003018186803b158015610a0357600080fd5b505afa158015610a17573d6000803e3d6000fd5b505050506040513d6020811015610a2d57600080fd5b50516001600160a01b0383811660009081526002602090815260408083206001810180546001600160a01b031916968616969096179095559354845163313ce56760e01b81529451929493169263313ce5679260048083019392829003018186803b158015610a9b57600080fd5b505afa158015610aaf573d6000803e3d6000fd5b505050506040513d6020811015610ac557600080fd5b50516001600160a01b03808516600090815260026020818152604080842060ff909616600a81900a93870193909355600190950154855163313ce56760e01b815295519296509294929093169263313ce5679260048082019391829003018186803b158015610b3357600080fd5b505afa158015610b47573d6000803e3d6000fd5b505050506040513d6020811015610b5d57600080fd5b50516001600160a01b03909416600081815260026020526040812060ff909616600a0a6003808801919091556004909601805460ff19166001908117909155865490810187559590527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90940180546001600160a01b031916909417909355505050565b610be9610ce8565b6000546001600160a01b03908116911614610c39576040805162461bcd60e51b815260206004820181905260248201526000805160206117b1833981519152604482015290519081900360640190fd5b6001600160a01b038116610c7e5760405162461bcd60e51b81526004018080602001828103825260268152602001806117236026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b3390565b6060600080610cfb858561108a565b9150915080610d49576040805162461bcd60e51b815260206004820152601560248201527420b2323932b9b9903737ba1034b71030b93930bc9760591b604482015290519081900360640190fd5b6060610d5586846110ed565b509350610d6192505050565b92915050565b6000816001600160a01b031663e765ced660016040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610dae57600080fd5b505afa158015610dc2573d6000803e3d6000fd5b505050506040513d6020811015610dd857600080fd5b505192915050565b6000610dea6116d0565b506001600160a01b038084166000908152600260208181526040808420815160a08101835281548716808252600183015488168286015294820154818401526003820154606082015260049182015460ff16151560808201528251635620c32d60e11b815291820194909452878616602482015290519294889493908a169263ac41865a9260448082019391829003018186803b158015610e8a57600080fd5b505afa158015610e9e573d6000803e3d6000fd5b505050506040513d6020811015610eb457600080fd5b505160208481015160408051635620c32d60e11b81526001600160a01b03928316600482015289831660248201529051939450600093918b169263ac41865a92604480840193829003018186803b158015610f0e57600080fd5b505afa158015610f22573d6000803e3d6000fd5b505050506040513d6020811015610f3857600080fd5b5051600454855160208701519293506000928392610f61926001600160a01b0390911691611251565b915091506000610f7e87604001518461105990919063ffffffff16565b90506000610f9988606001518461105990919063ffffffff16565b90506000610fcc610fb0838863ffffffff61131f16565b610fc0858a63ffffffff61131f16565b9063ffffffff61133d16565b90506000886001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561100957600080fd5b505afa15801561101d573d6000803e3d6000fd5b505050506040513d602081101561103357600080fd5b50519050611047828263ffffffff61105916565b9e9d5050505050505050505050505050565b60006110838261107785670de0b6b3a764000063ffffffff61139716565b9063ffffffff6113f016565b9392505050565b81516000908190815b818110156110dd57846001600160a01b03168682815181106110b157fe5b60200260200101516001600160a01b031614156110d55792506001915061083b9050565b600101611093565b5060001995600095509350505050565b8151606090600090808410611149576040805162461bcd60e51b815260206004820152601860248201527f496e646578206d757374206265203c2041206c656e6774680000000000000000604482015290519081900360640190fd5b60606001820367ffffffffffffffff8111801561116557600080fd5b5060405190808252806020026020018201604052801561118f578160200160208202803683370190505b50905060005b858110156111dd578681815181106111a957fe5b60200260200101518282815181106111bd57fe5b6001600160a01b0390921660209283029190910190910152600101611195565b50600185015b8281101561122e578681815181106111f757fe5b602002602001015182600183038151811061120e57fe5b6001600160a01b03909216602092830291909101909101526001016111e3565b508086868151811061123c57fe5b60200260200101519350935050509250929050565b60008060006112608585611432565b509050600080611271888888611509565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156112a957600080fd5b505afa1580156112bd573d6000803e3d6000fd5b505050506040513d60608110156112d357600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506001600160a01b038781169084161461130d578082611310565b81815b90999098509650505050505050565b6000611083670de0b6b3a7640000611077858563ffffffff61139716565b600082820183811015611083576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000826113a657506000610d61565b828202828482816113b357fe5b04146110835760405162461bcd60e51b81526004018080602001828103825260218152602001806117906021913960400191505060405180910390fd5b600061108383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506115c9565b600080826001600160a01b0316846001600160a01b031614156114865760405162461bcd60e51b81526004018080602001828103825260258152602001806117496025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b0316106114a65782846114a9565b83835b90925090506001600160a01b03821661083b576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b60008060006115188585611432565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b600081836116555760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561161a578181015183820152602001611602565b50505050905090810190601f1680156116475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161166157fe5b0495945050505050565b8280548282559060005260206000209081019282156116c0579160200282015b828111156116c057825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061168b565b506116cc9291506116fe565b5090565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b6102db91905b808211156116cc5780546001600160a01b031916815560010161170456fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e697377617020706f6f6c206164647265737320616c7265616479206164646564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572556e697377617020706f6f6c206164647265737320646f6573206e6f74206578697374a264697066735822122017fb36108e82a0544ccc17f1e5152baea35dca0df088820f44c012407f6fd73b64736f6c634300060a0033556e697377617020706f6f6c2061646472657373206d75737420626520756e697175652e";

type UniswapPairPriceAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapPairPriceAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapPairPriceAdapter__factory extends ContractFactory {
  constructor(...args: UniswapPairPriceAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _controller: string,
    _uniswapFactory: string,
    _uniswapPools: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapPairPriceAdapter> {
    return super.deploy(
      _controller,
      _uniswapFactory,
      _uniswapPools,
      overrides || {}
    ) as Promise<UniswapPairPriceAdapter>;
  }
  getDeployTransaction(
    _controller: string,
    _uniswapFactory: string,
    _uniswapPools: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _controller,
      _uniswapFactory,
      _uniswapPools,
      overrides || {}
    );
  }
  attach(address: string): UniswapPairPriceAdapter {
    return super.attach(address) as UniswapPairPriceAdapter;
  }
  connect(signer: Signer): UniswapPairPriceAdapter__factory {
    return super.connect(signer) as UniswapPairPriceAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapPairPriceAdapterInterface {
    return new utils.Interface(_abi) as UniswapPairPriceAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapPairPriceAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapPairPriceAdapter;
  }
}
