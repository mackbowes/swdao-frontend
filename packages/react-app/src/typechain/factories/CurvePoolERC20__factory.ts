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
  CurvePoolERC20,
  CurvePoolERC20Interface,
} from "../CurvePoolERC20";

const _abi = [
  {
    name: "Transfer",
    inputs: [
      {
        type: "address",
        name: "_from",
        indexed: true,
      },
      {
        type: "address",
        name: "_to",
        indexed: true,
      },
      {
        type: "uint256",
        name: "_value",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "_owner",
        indexed: true,
      },
      {
        type: "address",
        name: "_spender",
        indexed: true,
      },
      {
        type: "uint256",
        name: "_value",
        indexed: false,
      },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [
      {
        type: "string",
        name: "_name",
      },
      {
        type: "string",
        name: "_symbol",
      },
      {
        type: "uint256",
        name: "_decimals",
      },
      {
        type: "uint256",
        name: "_supply",
      },
    ],
    constant: false,
    payable: false,
    type: "constructor",
  },
  {
    name: "set_minter",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_minter",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "36247",
  },
  {
    name: "totalSupply",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: "1181",
  },
  {
    name: "allowance",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_owner",
      },
      {
        type: "address",
        name: "_spender",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
    gas: "1519",
  },
  {
    name: "transfer",
    outputs: [
      {
        type: "bool",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_to",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "74802",
  },
  {
    name: "transferFrom",
    outputs: [
      {
        type: "bool",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_from",
      },
      {
        type: "address",
        name: "_to",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "111953",
  },
  {
    name: "approve",
    outputs: [
      {
        type: "bool",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "_spender",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "39012",
  },
  {
    name: "mint",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_to",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "75733",
  },
  {
    name: "burn",
    outputs: [],
    inputs: [
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "76623",
  },
  {
    name: "burnFrom",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "_to",
      },
      {
        type: "uint256",
        name: "_value",
      },
    ],
    constant: false,
    payable: false,
    type: "function",
    gas: "76696",
  },
  {
    name: "name",
    outputs: [
      {
        type: "string",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: "7853",
  },
  {
    name: "symbol",
    outputs: [
      {
        type: "string",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: "6906",
  },
  {
    name: "decimals",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [],
    constant: true,
    payable: false,
    type: "function",
    gas: "1511",
  },
  {
    name: "balanceOf",
    outputs: [
      {
        type: "uint256",
        name: "out",
      },
    ],
    inputs: [
      {
        type: "address",
        name: "arg0",
      },
    ],
    constant: true,
    payable: false,
    type: "function",
    gas: "1695",
  },
];

const _bytecode =
  "0x740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a0526080610b566101403934156100a157600080fd5b60606020610b5660c03960c051610b56016101c03960406020610b5660c03960c0516004013511156100d257600080fd5b604060206020610b560160c03960c051610b560161024039602060206020610b560160c03960c05160040135111561010957600080fd5b6101a051600a6101805180820a8210811560018314171761012957600080fd5b80820a90509050808202821582848304141761014457600080fd5b809050905090506102a0526101c080600060c052602060c020602082510161012060006003818352015b82610120516020021115610181576101a3565b61012051602002850151610120518501555b815160010180835281141561016e575b50505050505061024080600160c052602060c020602082510161012060006002818352015b826101205160200211156101db576101fd565b61012051602002850151610120518501555b81516001018083528114156101c8575b505050505050610180516002556102a05160033360e05260c052604060c020556102a051600555336006556102a0516102c0523360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206102c0a3610b3e56600436101561000d576108d9565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a052631652e9fc60005114156100e25734156100ba57600080fd5b60043560205181106100cb57600080fd5b5060065433146100da57600080fd5b600435600655005b6318160ddd60005114156101095734156100fb57600080fd5b60055460005260206000f350005b63dd62ed3e600051141561017057341561012257600080fd5b600435602051811061013357600080fd5b50602435602051811061014557600080fd5b50600460043560e05260c052604060c02060243560e05260c052604060c0205460005260206000f350005b63a9059cbb600051141561023257341561018957600080fd5b600435602051811061019a57600080fd5b5060033360e05260c052604060c0208054602435808210156101bb57600080fd5b80820390509050815550600360043560e05260c052604060c02080546024358181830110156101e957600080fd5b8082019050905081555060243561014052600435337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b6323b872dd600051141561034d57341561024b57600080fd5b600435602051811061025c57600080fd5b50602435602051811061026e57600080fd5b50600360043560e05260c052604060c02080546044358082101561029157600080fd5b80820390509050815550600360243560e05260c052604060c02080546044358181830110156102bf57600080fd5b8082019050905081555060065433181561030c57600460043560e05260c052604060c0203360e05260c052604060c02080546044358082101561030157600080fd5b808203905090508155505b604435610140526024356004357fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3600160005260206000f350005b63095ea7b3600051141561040357341561036657600080fd5b600435602051811061037757600080fd5b5060043360e05260c052604060c02060043560e05260c052604060c020541560243515176103a457600080fd5b60243560043360e05260c052604060c02060043560e05260c052604060c0205560243561014052600435337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610140a3600160005260206000f350005b6340c10f1960005114156104ce57341561041c57600080fd5b600435602051811061042d57600080fd5b50600654331461043c57600080fd5b60006004351861044b57600080fd5b6005805460243581818301101561046157600080fd5b80820190509050815550600360043560e05260c052604060c020805460243581818301101561048f57600080fd5b808201905090508155506024356101405260043560007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610140a3005b60001561057a575b610180526101405261016052600061014051186104f257600080fd5b60058054610160518082101561050757600080fd5b8082039050905081555060036101405160e05260c052604060c0208054610160518082101561053557600080fd5b80820390509050815550610160516101a0526000610140517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206101a0a361018051565b6342966c68600051141561063457341561059357600080fd5b6308c379a061014052602061016052601e610180527f4f6e6c79206d696e74657220697320616c6c6f77656420746f206275726e00006101a0526101805060065433146105e157608461015cfd5b6101405161016051610180516101a0516101c051636161eb18610200523361022052600435610240526102405161022051600658016104d6565b6101c0526101a052610180526101605261014052600050005b6379cc6790600051141561070257341561064d57600080fd5b600435602051811061065e57600080fd5b506308c379a061014052602061016052601e610180527f4f6e6c79206d696e74657220697320616c6c6f77656420746f206275726e00006101a0526101805060065433146106ad57608461015cfd5b6101405161016051610180516101a0516101c051636161eb186102005260043561022052602435610240526102405161022051600658016104d6565b6101c0526101a052610180526101605261014052600050005b6306fdde0360005114156107b657341561071b57600080fd5b60008060c052602060c020610180602082540161012060006003818352015b8261012051602002111561074d5761076f565b61012051850154610120516020028501525b815160010180835281141561073a575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6395d89b41600051141561086a5734156107cf57600080fd5b60018060c052602060c020610180602082540161012060006002818352015b8261012051602002111561080157610823565b61012051850154610120516020028501525b81516001018083528114156107ee575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63313ce567600051141561089157341561088357600080fd5b60025460005260206000f350005b6370a0823160005114156108d85734156108aa57600080fd5b60043560205181106108bb57600080fd5b50600360043560e05260c052604060c0205460005260206000f350005b5b60006000fd5b61025f610b3e0361025f60003961025f610b3e036000f3";

type CurvePoolERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurvePoolERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurvePoolERC20__factory extends ContractFactory {
  constructor(...args: CurvePoolERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurvePoolERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _supply,
      overrides || {}
    ) as Promise<CurvePoolERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _supply,
      overrides || {}
    );
  }
  attach(address: string): CurvePoolERC20 {
    return super.attach(address) as CurvePoolERC20;
  }
  connect(signer: Signer): CurvePoolERC20__factory {
    return super.connect(signer) as CurvePoolERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurvePoolERC20Interface {
    return new utils.Interface(_abi) as CurvePoolERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurvePoolERC20 {
    return new Contract(address, _abi, signerOrProvider) as CurvePoolERC20;
  }
}
