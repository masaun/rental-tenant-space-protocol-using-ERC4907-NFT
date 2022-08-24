/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vault, VaultInterface } from "../Vault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_underlyingToken",
        type: "address",
      },
      {
        internalType: "contract Staking",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "contract TenantSpaceNFT",
        name: "_tenantSpaceNFT",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "contract Staking",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tenantSpaceNFT",
    outputs: [
      {
        internalType: "contract TenantSpaceNFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    name: "underlyingToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000ebc38038062000ebc83398181016040528101906200003791906200012a565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505062000249565b600081519050620000f681620001fb565b92915050565b6000815190506200010d8162000215565b92915050565b60008151905062000124816200022f565b92915050565b600080600060608486031215620001465762000145620001f6565b5b60006200015686828701620000e5565b93505060206200016986828701620000fc565b92505060406200017c8682870162000113565b9150509250925092565b60006200019382620001d6565b9050919050565b6000620001a78262000186565b9050919050565b6000620001bb8262000186565b9050919050565b6000620001cf8262000186565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b62000206816200019a565b81146200021257600080fd5b50565b6200022081620001ae565b81146200022c57600080fd5b50565b6200023a81620001c2565b81146200024657600080fd5b50565b60805160601c60a05160601c60c05160601c610c10620002ac6000396000818161034a015261036e01526000818161030e01526103fd01526000818161016a015281816101920152818161025c0152818161049c015261056a0152610c106000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80634cf088d91161005b5780634cf088d9146100da57806370a08231146100f857806386873a4a14610128578063e2bbb158146101465761007d565b806318160ddd146100825780632495a599146100a05780632e1a7d4d146100be575b600080fd5b61008a610162565b6040516100979190610960565b60405180910390f35b6100a8610168565b6040516100b5919061090f565b60405180910390f35b6100d860048036038101906100d391906107af565b61018c565b005b6100e261030c565b6040516100ef919061092a565b60405180910390f35b610112600480360381019061010d9190610755565b610330565b60405161011f9190610960565b60405180910390f35b610130610348565b60405161013d9190610945565b60405180910390f35b610160600480360381019061015b9190610809565b61036c565b005b60005481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080547f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101e99190610894565b60206040518083038186803b15801561020157600080fd5b505afa158015610215573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023991906107dc565b836102449190610a02565b61024e91906109d1565b905061025a338361061d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016102b59291906108e6565b602060405180830381600087803b1580156102cf57600080fd5b505af11580156102e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103079190610782565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016103c9939291906108af565b600060405180830381600087803b1580156103e357600080fd5b505af11580156103f7573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a694fc3a836040518263ffffffff1660e01b81526004016104549190610960565b600060405180830381600087803b15801561046e57600080fd5b505af1158015610482573d6000803e3d6000fd5b50505050600080600054141561049a5782905061055e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016104f39190610894565b60206040518083038186803b15801561050b57600080fd5b505afa15801561051f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054391906107dc565b600054846105519190610a02565b61055b91906109d1565b90505b610568338261068f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b81526004016105c5939291906108af565b602060405180830381600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106179190610782565b50505050565b8060008082825461062e9190610a5c565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106849190610a5c565b925050819055505050565b806000808282546106a0919061097b565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106f6919061097b565b925050819055505050565b60008135905061071081610b95565b92915050565b60008151905061072581610bac565b92915050565b60008135905061073a81610bc3565b92915050565b60008151905061074f81610bc3565b92915050565b60006020828403121561076b5761076a610b90565b5b600061077984828501610701565b91505092915050565b60006020828403121561079857610797610b90565b5b60006107a684828501610716565b91505092915050565b6000602082840312156107c5576107c4610b90565b5b60006107d38482850161072b565b91505092915050565b6000602082840312156107f2576107f1610b90565b5b600061080084828501610740565b91505092915050565b600080604083850312156108205761081f610b90565b5b600061082e8582860161072b565b925050602061083f8582860161072b565b9150509250929050565b61085281610a90565b82525050565b61086181610ad8565b82525050565b61087081610aea565b82525050565b61087f81610afc565b82525050565b61088e81610ace565b82525050565b60006020820190506108a96000830184610849565b92915050565b60006060820190506108c46000830186610849565b6108d16020830185610849565b6108de6040830184610885565b949350505050565b60006040820190506108fb6000830185610849565b6109086020830184610885565b9392505050565b60006020820190506109246000830184610858565b92915050565b600060208201905061093f6000830184610867565b92915050565b600060208201905061095a6000830184610876565b92915050565b60006020820190506109756000830184610885565b92915050565b600061098682610ace565b915061099183610ace565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109c6576109c5610b32565b5b828201905092915050565b60006109dc82610ace565b91506109e783610ace565b9250826109f7576109f6610b61565b5b828204905092915050565b6000610a0d82610ace565b9150610a1883610ace565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610a5157610a50610b32565b5b828202905092915050565b6000610a6782610ace565b9150610a7283610ace565b925082821015610a8557610a84610b32565b5b828203905092915050565b6000610a9b82610aae565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610ae382610b0e565b9050919050565b6000610af582610b0e565b9050919050565b6000610b0782610b0e565b9050919050565b6000610b1982610b20565b9050919050565b6000610b2b82610aae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600080fd5b610b9e81610a90565b8114610ba957600080fd5b50565b610bb581610aa2565b8114610bc057600080fd5b50565b610bcc81610ace565b8114610bd757600080fd5b5056fea2646970667358221220b7b37107d6c5fbd03082d952c051d16334273d19fc2fa71ef7026cb8bb03209b64736f6c63430008070033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vault";
  }

  deploy(
    _underlyingToken: string,
    _staking: string,
    _tenantSpaceNFT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vault> {
    return super.deploy(
      _underlyingToken,
      _staking,
      _tenantSpaceNFT,
      overrides || {}
    ) as Promise<Vault>;
  }
  getDeployTransaction(
    _underlyingToken: string,
    _staking: string,
    _tenantSpaceNFT: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _underlyingToken,
      _staking,
      _tenantSpaceNFT,
      overrides || {}
    );
  }
  attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }
  static readonly contractName: "Vault";
  public readonly contractName: "Vault";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
