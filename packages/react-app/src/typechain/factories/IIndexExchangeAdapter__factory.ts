/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IIndexExchangeAdapter,
  IIndexExchangeAdapterInterface,
} from "../IIndexExchangeAdapter";

const _abi = [
  {
    inputs: [],
    name: "getSpender",
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
        name: "_sourceToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_destinationToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_destinationAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isSendTokenFixed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_sourceQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_destinationQuantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "getTradeCalldata",
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
    stateMutability: "view",
    type: "function",
    gas: "0x01ba8140",
  },
];

export class IIndexExchangeAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): IIndexExchangeAdapterInterface {
    return new utils.Interface(_abi) as IIndexExchangeAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIndexExchangeAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IIndexExchangeAdapter;
  }
}
