/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShoppingMall, ShoppingMallInterface } from "../ShoppingMall";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract PriceConsumerV3",
        name: "_priceConsumerV3",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "convertPriceFromUSDToETH",
    outputs: [
      {
        internalType: "int256",
        name: "_ethPricePerUsd",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceConsumerV3",
    outputs: [
      {
        internalType: "contract PriceConsumerV3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITenantSpaceNFT",
        name: "tenantSpaceNFT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tenantSpaceId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "tenantOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "tenantUser",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "rentTenantSpaceNFT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITenantSpaceNFT",
        name: "tenantSpaceNFT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tenantSpaceId",
        type: "uint256",
      },
    ],
    name: "storeTenantSpaceNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108fb3803806108fb8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061011a565b60008151905061008781610103565b92915050565b6000602082840312156100a3576100a26100fe565b5b60006100b184828501610078565b91505092915050565b60006100c5826100de565b9050919050565b60006100d7826100ba565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b61010c816100cc565b811461011757600080fd5b50565b6107d2806101296000396000f3fe6080604052600436106100435760003560e01c806360729c7c1461004c5780638f9cd41d14610089578063a249e8d1146100b4578063de3419dd146100e45761004a565b3661004a57005b005b34801561005857600080fd5b50610073600480360381019061006e9190610408565b61010f565b60405161008091906105fb565b60405180910390f35b34801561009557600080fd5b5061009e61018b565b6040516100ab91906105c5565b60405180910390f35b6100ce60048036038101906100c99190610448565b6101af565b6040516100db91906105aa565b60405180910390f35b3480156100f057600080fd5b506100f96102e4565b60405161010691906105e0565b60405180910390f35b6000803390508373ffffffffffffffffffffffffffffffffffffffff166323b872dd8230866040518463ffffffff1660e01b81526004016101529392919061054a565b600060405180830381600087803b15801561016c57600080fd5b505af1158015610180573d6000803e3d6000fd5b505050505092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008573ffffffffffffffffffffffffffffffffffffffff1663a22cb4658460016040518363ffffffff1660e01b81526004016101ed929190610581565b600060405180830381600087803b15801561020757600080fd5b505af115801561021b573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff1663e030565e8685856040518463ffffffff1660e01b815260040161025c93929190610616565b600060405180830381600087803b15801561027657600080fd5b505af115801561028a573d6000803e3d6000fd5b5050505060003490508473ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156102d9573d6000803e3d6000fd5b505095945050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638e15f4736040518163ffffffff1660e01b815260040160206040518083038186803b15801561034d57600080fd5b505afa158015610361573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038591906104c3565b905090565b60008135905061039981610712565b92915050565b6000813590506103ae81610729565b92915050565b6000813590506103c381610740565b92915050565b6000815190506103d881610757565b92915050565b6000813590506103ed8161076e565b92915050565b60008135905061040281610785565b92915050565b6000806040838503121561041f5761041e61070d565b5b600061042d858286016103b4565b925050602061043e858286016103de565b9150509250929050565b600080600080600060a086880312156104645761046361070d565b5b6000610472888289016103b4565b9550506020610483888289016103de565b94505060406104948882890161039f565b93505060606104a58882890161038a565b92505060806104b6888289016103f3565b9150509295509295909350565b6000602082840312156104d9576104d861070d565b5b60006104e7848285016103c9565b91505092915050565b6104f98161064d565b82525050565b61050881610671565b82525050565b610517816106d7565b82525050565b6105268161068f565b82525050565b610535816106b9565b82525050565b610544816106c3565b82525050565b600060608201905061055f60008301866104f0565b61056c60208301856104f0565b610579604083018461052c565b949350505050565b600060408201905061059660008301856104f0565b6105a360208301846104ff565b9392505050565b60006020820190506105bf60008301846104ff565b92915050565b60006020820190506105da600083018461050e565b92915050565b60006020820190506105f5600083018461051d565b92915050565b6000602082019050610610600083018461052c565b92915050565b600060608201905061062b600083018661052c565b61063860208301856104f0565b610645604083018461053b565b949350505050565b600061065882610699565b9050919050565b600061066a82610699565b9050919050565b60008115159050919050565b60006106888261064d565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006106e2826106e9565b9050919050565b60006106f4826106fb565b9050919050565b600061070682610699565b9050919050565b600080fd5b61071b8161064d565b811461072657600080fd5b50565b6107328161065f565b811461073d57600080fd5b50565b6107498161067d565b811461075457600080fd5b50565b6107608161068f565b811461076b57600080fd5b50565b610777816106b9565b811461078257600080fd5b50565b61078e816106c3565b811461079957600080fd5b5056fea26469706673582212208914d06aecfabcd0110375db3640567ba4ed3f91c44deb5560daadcd9634409664736f6c63430008070033";

type ShoppingMallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShoppingMallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShoppingMall__factory extends ContractFactory {
  constructor(...args: ShoppingMallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ShoppingMall";
  }

  deploy(
    _priceConsumerV3: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShoppingMall> {
    return super.deploy(
      _priceConsumerV3,
      overrides || {}
    ) as Promise<ShoppingMall>;
  }
  getDeployTransaction(
    _priceConsumerV3: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_priceConsumerV3, overrides || {});
  }
  attach(address: string): ShoppingMall {
    return super.attach(address) as ShoppingMall;
  }
  connect(signer: Signer): ShoppingMall__factory {
    return super.connect(signer) as ShoppingMall__factory;
  }
  static readonly contractName: "ShoppingMall";
  public readonly contractName: "ShoppingMall";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShoppingMallInterface {
    return new utils.Interface(_abi) as ShoppingMallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShoppingMall {
    return new Contract(address, _abi, signerOrProvider) as ShoppingMall;
  }
}
