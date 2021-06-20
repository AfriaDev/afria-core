/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestAfriaRouter } from "../TestAfriaRouter";

export class TestAfriaRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestAfriaRouter> {
    return super.deploy(overrides || {}) as Promise<TestAfriaRouter>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestAfriaRouter {
    return super.attach(address) as TestAfriaRouter;
  }
  connect(signer: Signer): TestAfriaRouter__factory {
    return super.connect(signer) as TestAfriaRouter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAfriaRouter {
    return new Contract(address, _abi, signerOrProvider) as TestAfriaRouter;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
    ],
    name: "SwapCallback",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "afriaSwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolInput",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOutput",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
    ],
    name: "swapForExact0Multi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolInput",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOutput",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
    ],
    name: "swapForExact1Multi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a0e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063295bd10014610046578063c35a2b68146100c4578063c96aa6c714610100575b600080fd5b6100c26004803603606081101561005c57600080fd5b81359160208101359181019060608101604082013564010000000081111561008357600080fd5b82018360208201111561009557600080fd5b803590602001918460018302840111640100000000831117156100b757600080fd5b50909250905061013c565b005b6100c2600480360360808110156100da57600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610756565b6100c26004803603608081101561011657600080fd5b506001600160a01b03813581169160208101358216916040820135169060600135610924565b604080518581526020810185905281517fd48241df4a75e663b29e55f9506b31f77ed0f48cfe7e7612d1163144995dc1ca929181900390910190a16000808383604081101561018a57600080fd5b8101906020810181356401000000008111156101a557600080fd5b8201836020820111156101b757600080fd5b803590602001918460208302840111640100000000831117156101d957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250508251929750505090356001600160a01b0316935060011415915061056a905057600080871361029d57336001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561026c57600080fd5b505afa158015610280573d6000803e3d6000fd5b505050506040513d602081101561029657600080fd5b5051610303565b336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156102d657600080fd5b505afa1580156102ea573d6000803e3d6000fd5b505050506040513d602081101561030057600080fd5b50515b905060008088136103145786610316565b875b905060008460008151811061032757fe5b60200260200101516001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561036757600080fd5b505afa15801561037b573d6000803e3d6000fd5b505050506040513d602081101561039157600080fd5b505185516001600160a01b03858116921691909114915085906000906103b357fe5b60200260200101516001600160a01b031663128acb08338385600003856103ee5773fffd8963efd1fc6a506488495d951d5263988d256103f5565b6401000276a45b60408051600080825260208083018085526001600160a01b038f16606085015283850194855283516080850181905293948f949093849360a08801939202908190849084905b8381101561045357818101518382015260200161043b565b5050505090500193505050506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156104e65781810151838201526020016104ce565b50505050905090810190601f1680156105135780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561053557600080fd5b505af1158015610549573d6000803e3d6000fd5b505050506040513d604081101561055f57600080fd5b5061074e9350505050565b600086131561066357336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ac57600080fd5b505afa1580156105c0573d6000803e3d6000fd5b505050506040513d60208110156105d657600080fd5b5051604080516323b872dd60e01b81526001600160a01b038481166004830152336024830152604482018a9052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561063157600080fd5b505af1158015610645573d6000803e3d6000fd5b505050506040513d602081101561065b57600080fd5b5061074e9050565b336001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561069c57600080fd5b505afa1580156106b0573d6000803e3d6000fd5b505050506040513d60208110156106c657600080fd5b5051604080516323b872dd60e01b81526001600160a01b03848116600483015233602483015260448201899052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561072157600080fd5b505af1158015610735573d6000803e3d6000fd5b505050506040513d602081101561074b57600080fd5b50505b505050505050565b60408051600180825281830190925260009160208083019080368337019050509050838160008151811061078657fe5b6001600160a01b039283166020918202929092010152831663128acb088660016107af866109eb565b6000036401000276a360010186336040516020018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019060200280838360005b8381101561080f5781810151838201526020016107f7565b5050505090500193505050506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108a257818101518382015260200161088a565b50505050905090810190601f1680156108cf5780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b1580156108f157600080fd5b505af1158015610905573d6000803e3d6000fd5b505050506040513d604081101561091b57600080fd5b50505050505050565b60408051600180825281830190925260009160208083019080368337019050509050838160008151811061095457fe5b6001600160a01b039283166020918202929092010152831663128acb0886600061097d866109eb565b600003600173fffd8963efd1fc6a506488495d951d5263988d260386336040516020018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019060200280838360008381101561080f5781810151838201526020016107f7565b6000600160ff1b82106109fd57600080fd5b509056fea164736f6c6343000706000a";
