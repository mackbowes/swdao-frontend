/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IModuleIssuanceHookV2,
  IModuleIssuanceHookV2Interface,
} from "../IModuleIssuanceHookV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISetToken",
        name: "_setToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_component",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isEquity",
        type: "bool",
      },
    ],
    name: "componentIssueHook",
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
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_component",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isEquity",
        type: "bool",
      },
    ],
    name: "componentRedeemHook",
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
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
    ],
    name: "getIssuanceAdjustments",
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
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
    ],
    name: "getRedemptionAdjustments",
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
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
    ],
    name: "moduleIssueHook",
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
        internalType: "uint256",
        name: "_setTokenQuantity",
        type: "uint256",
      },
    ],
    name: "moduleRedeemHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IModuleIssuanceHookV2__factory {
  static readonly abi = _abi;
  static createInterface(): IModuleIssuanceHookV2Interface {
    return new utils.Interface(_abi) as IModuleIssuanceHookV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IModuleIssuanceHookV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IModuleIssuanceHookV2;
  }
}