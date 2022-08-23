/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC4907BasedNFT,
  ERC4907BasedNFTInterface,
} from "../ERC4907BasedNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "UpdateUser",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "tenantDatas",
    outputs: [
      {
        internalType: "address",
        name: "tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userExpires",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "userOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003013380380620030138339818101604052810190620000379190620001a7565b8181818181600090805190602001906200005392919062000079565b5080600190805190602001906200006c92919062000079565b50505050505050620003b0565b8280546200008790620002c1565b90600052602060002090601f016020900481019282620000ab5760008555620000f7565b82601f10620000c657805160ff1916838001178555620000f7565b82800160010185558215620000f7579182015b82811115620000f6578251825591602001919060010190620000d9565b5b5090506200010691906200010a565b5090565b5b80821115620001255760008160009055506001016200010b565b5090565b6000620001406200013a8462000255565b6200022c565b9050828152602081018484840111156200015f576200015e62000390565b5b6200016c8482856200028b565b509392505050565b600082601f8301126200018c576200018b6200038b565b5b81516200019e84826020860162000129565b91505092915050565b60008060408385031215620001c157620001c06200039a565b5b600083015167ffffffffffffffff811115620001e257620001e162000395565b5b620001f08582860162000174565b925050602083015167ffffffffffffffff81111562000214576200021362000395565b5b620002228582860162000174565b9150509250929050565b6000620002386200024b565b9050620002468282620002f7565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027357620002726200035c565b5b6200027e826200039f565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b60006002820490506001821680620002da57607f821691505b60208210811415620002f157620002f06200032d565b5b50919050565b62000302826200039f565b810181811067ffffffffffffffff821117156200032457620003236200035c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612c5380620003c06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638fc88c48116100ad578063c2f1f14a11610071578063c2f1f14a14610352578063c87b56dd14610382578063e030565e146103b2578063e7572230146103ce578063e985e9c5146103fe5761012c565b80638fc88c48146102b057806394bf804d146102e057806395d89b41146102fc578063a22cb4651461031a578063b88d4fde146103365761012c565b80633011e16a116100f45780633011e16a146101e757806342842e0e146102035780636352211e1461021f57806370a082311461024f57806388e73fc01461027f5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b60048036038101906101469190611e03565b61042e565b6040516101589190612263565b60405180910390f35b6101696104a8565b6040516101769190612299565b60405180910390f35b61019960048036038101906101949190611e5d565b61053a565b6040516101a691906121d3565b60405180910390f35b6101c960048036038101906101c49190611d70565b610580565b005b6101e560048036038101906101e09190611c5a565b610698565b005b61020160048036038101906101fc9190611db0565b6106f8565b005b61021d60048036038101906102189190611c5a565b61075b565b005b61023960048036038101906102349190611e5d565b61077b565b60405161024691906121d3565b60405180910390f35b61026960048036038101906102649190611bed565b61082d565b604051610276919061243b565b60405180910390f35b61029960048036038101906102949190611d70565b6108e5565b6040516102a792919061223a565b60405180910390f35b6102ca60048036038101906102c59190611e5d565b610936565b6040516102d7919061243b565b60405180910390f35b6102fa60048036038101906102f59190611e8a565b610974565b005b610304610982565b6040516103119190612299565b60405180910390f35b610334600480360381019061032f9190611d30565b610a14565b005b610350600480360381019061034b9190611cad565b610a2a565b005b61036c60048036038101906103679190611e5d565b610a8c565b60405161037991906121d3565b60405180910390f35b61039c60048036038101906103979190611e5d565b610b11565b6040516103a99190612299565b60405180910390f35b6103cc60048036038101906103c79190611eca565b610b79565b005b6103e860048036038101906103e39190611e5d565b610c9c565b6040516103f5919061243b565b60405180910390f35b61041860048036038101906104139190611c1a565b610ca3565b6040516104259190612263565b60405180910390f35b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104a157506104a082610d37565b5b9050919050565b6060600080546104b7906126a1565b80601f01602080910402602001604051908101604052809291908181526020018280546104e3906126a1565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600061054582610e19565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058b8261077b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f3906123db565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661061b610e64565b73ffffffffffffffffffffffffffffffffffffffff16148061064a575061064981610644610e64565b610ca3565b5b610689576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106809061237b565b60405180910390fd5b6106938383610e6c565b505050565b6106a96106a3610e64565b82610f25565b6106e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106df9061241b565b60405180910390fd5b6106f3838383610fba565b505050565b6000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020905081816001018190555050505050565b61077683838360405180602001604052806000815250610a2a565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610824576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081b906123bb565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561089e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108959061235b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6007602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b61097e8183611221565b5050565b606060018054610991906126a1565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd906126a1565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b5050505050905090565b610a26610a1f610e64565b83836113fb565b5050565b610a3b610a35610e64565b83610f25565b610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a719061241b565b60405180910390fd5b610a8684848484611568565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610b07576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b0c565b600090505b919050565b6060610b1c82610e19565b6000610b266115c4565b90506000815111610b465760405180602001604052806000815250610b71565b80610b50846115db565b604051602001610b619291906121af565b6040516020818303038152906040525b915050919050565b610b833384610f25565b610bc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb9906123fb565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610c8e9190612456565b60405180910390a350505050565b6000919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610e0257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610e125750610e118261173c565b5b9050919050565b610e22816117a6565b610e61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e58906123bb565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610edf8361077b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f318361077b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f735750610f728185610ca3565b5b80610fb157508373ffffffffffffffffffffffffffffffffffffffff16610f998461053a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fda8261077b565b73ffffffffffffffffffffffffffffffffffffffff1614611030576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611027906122db565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110979061231b565b60405180910390fd5b6110ab838383611812565b6110b6600082610e6c565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111069190612591565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461115d919061250a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461121c83838361193b565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611291576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112889061239b565b60405180910390fd5b61129a816117a6565b156112da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d1906122fb565b60405180910390fd5b6112e660008383611812565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611336919061250a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46113f76000838361193b565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561146a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114619061233b565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161155b9190612263565b60405180910390a3505050565b611573848484610fba565b61157f84848484611940565b6115be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115b5906122bb565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611623576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611737565b600082905060005b6000821461165557808061163e90612704565b915050600a8261164e9190612560565b915061162b565b60008167ffffffffffffffff8111156116715761167061283a565b5b6040519080825280601f01601f1916602001820160405280156116a35781602001600182028036833780820191505090505b5090505b60008514611730576001826116bc9190612591565b9150600a856116cb919061274d565b60306116d7919061250a565b60f81b8183815181106116ed576116ec61280b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117299190612560565b94506116a7565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61181d838383611ad7565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146119365760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe600060405161192d919061227e565b60405180910390a35b505050565b505050565b60006119618473ffffffffffffffffffffffffffffffffffffffff16611adc565b15611aca578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261198a610e64565b8786866040518563ffffffff1660e01b81526004016119ac94939291906121ee565b602060405180830381600087803b1580156119c657600080fd5b505af19250505080156119f757506040513d601f19601f820116820180604052508101906119f49190611e30565b60015b611a7a573d8060008114611a27576040519150601f19603f3d011682016040523d82523d6000602084013e611a2c565b606091505b50600081511415611a72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a69906122bb565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611acf565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611b12611b0d84612496565b612471565b905082815260208101848484011115611b2e57611b2d61286e565b5b611b3984828561265f565b509392505050565b600081359050611b5081612baa565b92915050565b600081359050611b6581612bc1565b92915050565b600081359050611b7a81612bd8565b92915050565b600081519050611b8f81612bd8565b92915050565b600082601f830112611baa57611ba9612869565b5b8135611bba848260208601611aff565b91505092915050565b600081359050611bd281612bef565b92915050565b600081359050611be781612c06565b92915050565b600060208284031215611c0357611c02612878565b5b6000611c1184828501611b41565b91505092915050565b60008060408385031215611c3157611c30612878565b5b6000611c3f85828601611b41565b9250506020611c5085828601611b41565b9150509250929050565b600080600060608486031215611c7357611c72612878565b5b6000611c8186828701611b41565b9350506020611c9286828701611b41565b9250506040611ca386828701611bc3565b9150509250925092565b60008060008060808587031215611cc757611cc6612878565b5b6000611cd587828801611b41565b9450506020611ce687828801611b41565b9350506040611cf787828801611bc3565b925050606085013567ffffffffffffffff811115611d1857611d17612873565b5b611d2487828801611b95565b91505092959194509250565b60008060408385031215611d4757611d46612878565b5b6000611d5585828601611b41565b9250506020611d6685828601611b56565b9150509250929050565b60008060408385031215611d8757611d86612878565b5b6000611d9585828601611b41565b9250506020611da685828601611bc3565b9150509250929050565b600080600060608486031215611dc957611dc8612878565b5b6000611dd786828701611b41565b9350506020611de886828701611bc3565b9250506040611df986828701611bc3565b9150509250925092565b600060208284031215611e1957611e18612878565b5b6000611e2784828501611b6b565b91505092915050565b600060208284031215611e4657611e45612878565b5b6000611e5484828501611b80565b91505092915050565b600060208284031215611e7357611e72612878565b5b6000611e8184828501611bc3565b91505092915050565b60008060408385031215611ea157611ea0612878565b5b6000611eaf85828601611bc3565b9250506020611ec085828601611b41565b9150509250929050565b600080600060608486031215611ee357611ee2612878565b5b6000611ef186828701611bc3565b9350506020611f0286828701611b41565b9250506040611f1386828701611bd8565b9150509250925092565b611f26816125c5565b82525050565b611f35816125d7565b82525050565b6000611f46826124c7565b611f5081856124dd565b9350611f6081856020860161266e565b611f698161287d565b840191505092915050565b611f7d8161264d565b82525050565b6000611f8e826124d2565b611f9881856124ee565b9350611fa881856020860161266e565b611fb18161287d565b840191505092915050565b6000611fc7826124d2565b611fd181856124ff565b9350611fe181856020860161266e565b80840191505092915050565b6000611ffa6032836124ee565b91506120058261288e565b604082019050919050565b600061201d6025836124ee565b9150612028826128dd565b604082019050919050565b6000612040601c836124ee565b915061204b8261292c565b602082019050919050565b60006120636024836124ee565b915061206e82612955565b604082019050919050565b60006120866019836124ee565b9150612091826129a4565b602082019050919050565b60006120a96029836124ee565b91506120b4826129cd565b604082019050919050565b60006120cc603e836124ee565b91506120d782612a1c565b604082019050919050565b60006120ef6020836124ee565b91506120fa82612a6b565b602082019050919050565b60006121126018836124ee565b915061211d82612a94565b602082019050919050565b60006121356021836124ee565b915061214082612abd565b604082019050919050565b60006121586031836124ee565b915061216382612b0c565b604082019050919050565b600061217b602e836124ee565b915061218682612b5b565b604082019050919050565b61219a8161262f565b82525050565b6121a981612639565b82525050565b60006121bb8285611fbc565b91506121c78284611fbc565b91508190509392505050565b60006020820190506121e86000830184611f1d565b92915050565b60006080820190506122036000830187611f1d565b6122106020830186611f1d565b61221d6040830185612191565b818103606083015261222f8184611f3b565b905095945050505050565b600060408201905061224f6000830185611f1d565b61225c6020830184612191565b9392505050565b60006020820190506122786000830184611f2c565b92915050565b60006020820190506122936000830184611f74565b92915050565b600060208201905081810360008301526122b38184611f83565b905092915050565b600060208201905081810360008301526122d481611fed565b9050919050565b600060208201905081810360008301526122f481612010565b9050919050565b6000602082019050818103600083015261231481612033565b9050919050565b6000602082019050818103600083015261233481612056565b9050919050565b6000602082019050818103600083015261235481612079565b9050919050565b600060208201905081810360008301526123748161209c565b9050919050565b60006020820190508181036000830152612394816120bf565b9050919050565b600060208201905081810360008301526123b4816120e2565b9050919050565b600060208201905081810360008301526123d481612105565b9050919050565b600060208201905081810360008301526123f481612128565b9050919050565b600060208201905081810360008301526124148161214b565b9050919050565b600060208201905081810360008301526124348161216e565b9050919050565b60006020820190506124506000830184612191565b92915050565b600060208201905061246b60008301846121a0565b92915050565b600061247b61248c565b905061248782826126d3565b919050565b6000604051905090565b600067ffffffffffffffff8211156124b1576124b061283a565b5b6124ba8261287d565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125158261262f565b91506125208361262f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125555761255461277e565b5b828201905092915050565b600061256b8261262f565b91506125768361262f565b925082612586576125856127ad565b5b828204905092915050565b600061259c8261262f565b91506125a78361262f565b9250828210156125ba576125b961277e565b5b828203905092915050565b60006125d08261260f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061265882612639565b9050919050565b82818337600083830152505050565b60005b8381101561268c578082015181840152602081019050612671565b8381111561269b576000848401525b50505050565b600060028204905060018216806126b957607f821691505b602082108114156126cd576126cc6127dc565b5b50919050565b6126dc8261287d565b810181811067ffffffffffffffff821117156126fb576126fa61283a565b5b80604052505050565b600061270f8261262f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127425761274161277e565b5b600182019050919050565b60006127588261262f565b91506127638361262f565b925082612773576127726127ad565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b612bb3816125c5565b8114612bbe57600080fd5b50565b612bca816125d7565b8114612bd557600080fd5b50565b612be1816125e3565b8114612bec57600080fd5b50565b612bf88161262f565b8114612c0357600080fd5b50565b612c0f81612639565b8114612c1a57600080fd5b5056fea2646970667358221220405f90d87c80b5058f3f856c154668cc323995d3b4c03749a9e64357f18edb6a64736f6c63430008070033";

type ERC4907BasedNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC4907BasedNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC4907BasedNFT__factory extends ContractFactory {
  constructor(...args: ERC4907BasedNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC4907BasedNFT";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC4907BasedNFT> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC4907BasedNFT>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC4907BasedNFT {
    return super.attach(address) as ERC4907BasedNFT;
  }
  connect(signer: Signer): ERC4907BasedNFT__factory {
    return super.connect(signer) as ERC4907BasedNFT__factory;
  }
  static readonly contractName: "ERC4907BasedNFT";
  public readonly contractName: "ERC4907BasedNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC4907BasedNFTInterface {
    return new utils.Interface(_abi) as ERC4907BasedNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC4907BasedNFT {
    return new Contract(address, _abi, signerOrProvider) as ERC4907BasedNFT;
  }
}
