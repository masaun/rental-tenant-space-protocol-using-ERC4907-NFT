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
  KeepersCounter,
  KeepersCounterInterface,
} from "../KeepersCounter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "updateInterval",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161078738038061078783398181016040528101906100329190610063565b80608081815250504260018190555060008081905550506100b6565b60008151905061005d8161009f565b92915050565b6000602082840312156100795761007861009a565b5b60006100878482850161004e565b91505092915050565b6000819050919050565b600080fd5b6100a881610090565b81146100b357600080fd5b50565b6080516106af6100d86000396000818161019301526101ca01526106af6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633f3b3b271461005c5780634585e33b1461007a57806361bc221a146100965780636e04ff0d146100b4578063947a36fb146100e5575b600080fd5b610064610103565b6040516100719190610412565b60405180910390f35b610094600480360381019061008f91906102b2565b610109565b005b61009e610187565b6040516100ab9190610412565b60405180910390f35b6100ce60048036038101906100c991906102ff565b61018d565b6040516100dc9291906103c2565b60405180910390f35b6100ed6101c8565b6040516100fa9190610412565b60405180910390f35b60015481565b60006101236040518060200160405280600081525061018d565b50905080610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d906103f2565b60405180910390fd5b42600181905550600160005461017c91906104b0565b600081905550505050565b60005481565b600060607f0000000000000000000000000000000000000000000000000000000000000000600154426101c09190610506565b119150915091565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006101ff6101fa84610452565b61042d565b90508281526020810184848401111561021b5761021a610630565b5b610226848285610550565b509392505050565b60008083601f84011261024457610243610626565b5b8235905067ffffffffffffffff81111561026157610260610621565b5b60208301915083600182028301111561027d5761027c61062b565b5b9250929050565b600082601f83011261029957610298610626565b5b81356102a98482602086016101ec565b91505092915050565b600080602083850312156102c9576102c861063a565b5b600083013567ffffffffffffffff8111156102e7576102e6610635565b5b6102f38582860161022e565b92509250509250929050565b6000602082840312156103155761031461063a565b5b600082013567ffffffffffffffff81111561033357610332610635565b5b61033f84828501610284565b91505092915050565b6103518161053a565b82525050565b600061036282610483565b61036c818561048e565b935061037c81856020860161055f565b6103858161063f565b840191505092915050565b600061039d60158361049f565b91506103a882610650565b602082019050919050565b6103bc81610546565b82525050565b60006040820190506103d76000830185610348565b81810360208301526103e98184610357565b90509392505050565b6000602082019050818103600083015261040b81610390565b9050919050565b600060208201905061042760008301846103b3565b92915050565b6000610437610448565b90506104438282610592565b919050565b6000604051905090565b600067ffffffffffffffff82111561046d5761046c6105f2565b5b6104768261063f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006104bb82610546565b91506104c683610546565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156104fb576104fa6105c3565b5b828201905092915050565b600061051182610546565b915061051c83610546565b92508282101561052f5761052e6105c3565b5b828203905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561057d578082015181840152602081019050610562565b8381111561058c576000848401525b50505050565b61059b8261063f565b810181811067ffffffffffffffff821117156105ba576105b96105f2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f54696d6520696e74657276616c206e6f74206d6574000000000000000000000060008201525056fea26469706673582212200803b16ba35497ca4def16b53bd43450b970ef4989dc5701c1a1374dac013bde64736f6c63430008070033";

type KeepersCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeepersCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeepersCounter__factory extends ContractFactory {
  constructor(...args: KeepersCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KeepersCounter";
  }

  deploy(
    updateInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KeepersCounter> {
    return super.deploy(
      updateInterval,
      overrides || {}
    ) as Promise<KeepersCounter>;
  }
  getDeployTransaction(
    updateInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(updateInterval, overrides || {});
  }
  attach(address: string): KeepersCounter {
    return super.attach(address) as KeepersCounter;
  }
  connect(signer: Signer): KeepersCounter__factory {
    return super.connect(signer) as KeepersCounter__factory;
  }
  static readonly contractName: "KeepersCounter";
  public readonly contractName: "KeepersCounter";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeepersCounterInterface {
    return new utils.Interface(_abi) as KeepersCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeepersCounter {
    return new Contract(address, _abi, signerOrProvider) as KeepersCounter;
  }
}
