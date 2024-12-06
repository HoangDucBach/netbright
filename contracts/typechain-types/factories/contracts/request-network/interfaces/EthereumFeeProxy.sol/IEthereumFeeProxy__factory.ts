/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IEthereumFeeProxy,
  IEthereumFeeProxyInterface,
} from "../../../../../contracts/request-network/interfaces/EthereumFeeProxy.sol/IEthereumFeeProxy";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "paymentReference",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeAddress",
        type: "address",
      },
    ],
    name: "TransferWithReferenceAndFee",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_paymentReference",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_feeAddress",
        type: "address",
      },
    ],
    name: "transferWithReferenceAndFee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IEthereumFeeProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IEthereumFeeProxyInterface {
    return new Interface(_abi) as IEthereumFeeProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IEthereumFeeProxy {
    return new Contract(address, _abi, runner) as unknown as IEthereumFeeProxy;
  }
}
