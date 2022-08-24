/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TenantSpaceNFT,
  TenantSpaceNFTInterface,
} from "../TenantSpaceNFT";

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
        internalType: "address",
        name: "_tenant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tenantSpaceId",
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
        name: "_tenantSpaceId",
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
    name: "tenantSpaceDatas",
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
  "0x60806040523480156200001157600080fd5b50604051620030d6380380620030d68339818101604052810190620000379190620001a7565b8181818181600090805190602001906200005392919062000079565b5080600190805190602001906200006c92919062000079565b50505050505050620003b0565b8280546200008790620002c1565b90600052602060002090601f016020900481019282620000ab5760008555620000f7565b82601f10620000c657805160ff1916838001178555620000f7565b82800160010185558215620000f7579182015b82811115620000f6578251825591602001919060010190620000d9565b5b5090506200010691906200010a565b5090565b5b80821115620001255760008160009055506001016200010b565b5090565b6000620001406200013a8462000255565b6200022c565b9050828152602081018484840111156200015f576200015e62000390565b5b6200016c8482856200028b565b509392505050565b600082601f8301126200018c576200018b6200038b565b5b81516200019e84826020860162000129565b91505092915050565b60008060408385031215620001c157620001c06200039a565b5b600083015167ffffffffffffffff811115620001e257620001e162000395565b5b620001f08582860162000174565b925050602083015167ffffffffffffffff81111562000214576200021362000395565b5b620002228582860162000174565b9150509250929050565b6000620002386200024b565b9050620002468282620002f7565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027357620002726200035c565b5b6200027e826200039f565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b60006002820490506001821680620002da57607f821691505b60208210811415620002f157620002f06200032d565b5b50919050565b62000302826200039f565b810181811067ffffffffffffffff821117156200032457620003236200035c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612d1680620003c06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610366578063c2f1f14a14610382578063c87b56dd146103b2578063e030565e146103e2578063e985e9c5146103fe5761012c565b806370a082311461029b5780638fc88c48146102cb57806395d89b41146102fb578063a22cb46514610319578063a369e330146103355761012c565b80633011e16a116100f45780633011e16a146101e757806342842e0e14610203578063449e815d1461021f5780636352211e1461024f5780636a6278421461027f5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b60048036038101906101469190611f06565b61042e565b6040516101589190612326565b60405180910390f35b6101696104a8565b604051610176919061235c565b60405180910390f35b61019960048036038101906101949190611f60565b61053a565b6040516101a69190612296565b60405180910390f35b6101c960048036038101906101c49190611e73565b610580565b005b6101e560048036038101906101e09190611d5d565b610698565b005b61020160048036038101906101fc9190611eb3565b6106f8565b005b61021d60048036038101906102189190611d5d565b61075b565b005b61023960048036038101906102349190611e73565b61077b565b60405161024691906124fe565b60405180910390f35b61026960048036038101906102649190611f60565b610849565b6040516102769190612296565b60405180910390f35b61029960048036038101906102949190611cf0565b6108fb565b005b6102b560048036038101906102b09190611cf0565b610921565b6040516102c291906124fe565b60405180910390f35b6102e560048036038101906102e09190611f60565b6109d9565b6040516102f291906124fe565b60405180910390f35b610303610a17565b604051610310919061235c565b60405180910390f35b610333600480360381019061032e9190611e33565b610aa9565b005b61034f600480360381019061034a9190611e73565b610abf565b60405161035d9291906122fd565b60405180910390f35b610380600480360381019061037b9190611db0565b610b10565b005b61039c60048036038101906103979190611f60565b610b72565b6040516103a99190612296565b60405180910390f35b6103cc60048036038101906103c79190611f60565b610bf7565b6040516103d9919061235c565b60405180910390f35b6103fc60048036038101906103f79190611f8d565b610c5f565b005b61041860048036038101906104139190611d1d565b610d82565b6040516104259190612326565b60405180910390f35b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104a157506104a082610e16565b5b9050919050565b6060600080546104b790612764565b80601f01602080910402602001604051908101604052809291908181526020018280546104e390612764565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600061054582610ef8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058b82610849565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f39061249e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661061b610f43565b73ffffffffffffffffffffffffffffffffffffffff16148061064a575061064981610644610f43565b610d82565b5b610689576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106809061243e565b60405180910390fd5b6106938383610f4b565b505050565b6106a96106a3610f43565b82611004565b6106e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106df906124de565b60405180910390fd5b6106f3838383611099565b505050565b6000600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020905081816001018190555050505050565b61077683838360405180602001604052806000815250610b10565b505050565b600080600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050806020015191505092915050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e99061247e565b60405180910390fd5b80915050919050565b60006109076007611300565b9050610913828261130e565b61091d60076114e8565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610992576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109899061241e565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b606060018054610a2690612764565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5290612764565b8015610a9f5780601f10610a7457610100808354040283529160200191610a9f565b820191906000526020600020905b815481529060010190602001808311610a8257829003601f168201915b5050505050905090565b610abb610ab4610f43565b83836114fe565b5050565b6008602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b610b21610b1b610f43565b83611004565b610b60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b57906124de565b60405180910390fd5b610b6c8484848461166b565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610bed576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610bf2565b600090505b919050565b6060610c0282610ef8565b6000610c0c6116c7565b90506000815111610c2c5760405180602001604052806000815250610c57565b80610c36846116de565b604051602001610c47929190612272565b6040516020818303038152906040525b915050919050565b610c693384611004565b610ca8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9f906124be565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610d749190612519565b60405180910390a350505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ee157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ef15750610ef08261183f565b5b9050919050565b610f01816118a9565b610f40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f379061247e565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fbe83610849565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061101083610849565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061105257506110518185610d82565b5b8061109057508373ffffffffffffffffffffffffffffffffffffffff166110788461053a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110b982610849565b73ffffffffffffffffffffffffffffffffffffffff161461110f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111069061239e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561117f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611176906123de565b60405180910390fd5b61118a838383611915565b611195600082610f4b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111e59190612654565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461123c91906125cd565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112fb838383611a3e565b505050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561137e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113759061245e565b60405180910390fd5b611387816118a9565b156113c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113be906123be565b60405180910390fd5b6113d360008383611915565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461142391906125cd565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114e460008383611a3e565b5050565b6001816000016000828254019250508190555050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561156d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611564906123fe565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161165e9190612326565b60405180910390a3505050565b611676848484611099565b61168284848484611a43565b6116c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b89061237e565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611726576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061183a565b600082905060005b60008214611758578080611741906127c7565b915050600a826117519190612623565b915061172e565b60008167ffffffffffffffff811115611774576117736128fd565b5b6040519080825280601f01601f1916602001820160405280156117a65781602001600182028036833780820191505090505b5090505b60008514611833576001826117bf9190612654565b9150600a856117ce9190612810565b60306117da91906125cd565b60f81b8183815181106117f0576117ef6128ce565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561182c9190612623565b94506117aa565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611920838383611bda565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611a395760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe6000604051611a309190612341565b60405180910390a35b505050565b505050565b6000611a648473ffffffffffffffffffffffffffffffffffffffff16611bdf565b15611bcd578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a8d610f43565b8786866040518563ffffffff1660e01b8152600401611aaf94939291906122b1565b602060405180830381600087803b158015611ac957600080fd5b505af1925050508015611afa57506040513d601f19601f82011682018060405250810190611af79190611f33565b60015b611b7d573d8060008114611b2a576040519150601f19603f3d011682016040523d82523d6000602084013e611b2f565b606091505b50600081511415611b75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b6c9061237e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611bd2565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611c15611c1084612559565b612534565b905082815260208101848484011115611c3157611c30612931565b5b611c3c848285612722565b509392505050565b600081359050611c5381612c6d565b92915050565b600081359050611c6881612c84565b92915050565b600081359050611c7d81612c9b565b92915050565b600081519050611c9281612c9b565b92915050565b600082601f830112611cad57611cac61292c565b5b8135611cbd848260208601611c02565b91505092915050565b600081359050611cd581612cb2565b92915050565b600081359050611cea81612cc9565b92915050565b600060208284031215611d0657611d0561293b565b5b6000611d1484828501611c44565b91505092915050565b60008060408385031215611d3457611d3361293b565b5b6000611d4285828601611c44565b9250506020611d5385828601611c44565b9150509250929050565b600080600060608486031215611d7657611d7561293b565b5b6000611d8486828701611c44565b9350506020611d9586828701611c44565b9250506040611da686828701611cc6565b9150509250925092565b60008060008060808587031215611dca57611dc961293b565b5b6000611dd887828801611c44565b9450506020611de987828801611c44565b9350506040611dfa87828801611cc6565b925050606085013567ffffffffffffffff811115611e1b57611e1a612936565b5b611e2787828801611c98565b91505092959194509250565b60008060408385031215611e4a57611e4961293b565b5b6000611e5885828601611c44565b9250506020611e6985828601611c59565b9150509250929050565b60008060408385031215611e8a57611e8961293b565b5b6000611e9885828601611c44565b9250506020611ea985828601611cc6565b9150509250929050565b600080600060608486031215611ecc57611ecb61293b565b5b6000611eda86828701611c44565b9350506020611eeb86828701611cc6565b9250506040611efc86828701611cc6565b9150509250925092565b600060208284031215611f1c57611f1b61293b565b5b6000611f2a84828501611c6e565b91505092915050565b600060208284031215611f4957611f4861293b565b5b6000611f5784828501611c83565b91505092915050565b600060208284031215611f7657611f7561293b565b5b6000611f8484828501611cc6565b91505092915050565b600080600060608486031215611fa657611fa561293b565b5b6000611fb486828701611cc6565b9350506020611fc586828701611c44565b9250506040611fd686828701611cdb565b9150509250925092565b611fe981612688565b82525050565b611ff88161269a565b82525050565b60006120098261258a565b61201381856125a0565b9350612023818560208601612731565b61202c81612940565b840191505092915050565b61204081612710565b82525050565b600061205182612595565b61205b81856125b1565b935061206b818560208601612731565b61207481612940565b840191505092915050565b600061208a82612595565b61209481856125c2565b93506120a4818560208601612731565b80840191505092915050565b60006120bd6032836125b1565b91506120c882612951565b604082019050919050565b60006120e06025836125b1565b91506120eb826129a0565b604082019050919050565b6000612103601c836125b1565b915061210e826129ef565b602082019050919050565b60006121266024836125b1565b915061213182612a18565b604082019050919050565b60006121496019836125b1565b915061215482612a67565b602082019050919050565b600061216c6029836125b1565b915061217782612a90565b604082019050919050565b600061218f603e836125b1565b915061219a82612adf565b604082019050919050565b60006121b26020836125b1565b91506121bd82612b2e565b602082019050919050565b60006121d56018836125b1565b91506121e082612b57565b602082019050919050565b60006121f86021836125b1565b915061220382612b80565b604082019050919050565b600061221b6031836125b1565b915061222682612bcf565b604082019050919050565b600061223e602e836125b1565b915061224982612c1e565b604082019050919050565b61225d816126f2565b82525050565b61226c816126fc565b82525050565b600061227e828561207f565b915061228a828461207f565b91508190509392505050565b60006020820190506122ab6000830184611fe0565b92915050565b60006080820190506122c66000830187611fe0565b6122d36020830186611fe0565b6122e06040830185612254565b81810360608301526122f28184611ffe565b905095945050505050565b60006040820190506123126000830185611fe0565b61231f6020830184612254565b9392505050565b600060208201905061233b6000830184611fef565b92915050565b60006020820190506123566000830184612037565b92915050565b600060208201905081810360008301526123768184612046565b905092915050565b60006020820190508181036000830152612397816120b0565b9050919050565b600060208201905081810360008301526123b7816120d3565b9050919050565b600060208201905081810360008301526123d7816120f6565b9050919050565b600060208201905081810360008301526123f781612119565b9050919050565b600060208201905081810360008301526124178161213c565b9050919050565b600060208201905081810360008301526124378161215f565b9050919050565b6000602082019050818103600083015261245781612182565b9050919050565b60006020820190508181036000830152612477816121a5565b9050919050565b60006020820190508181036000830152612497816121c8565b9050919050565b600060208201905081810360008301526124b7816121eb565b9050919050565b600060208201905081810360008301526124d78161220e565b9050919050565b600060208201905081810360008301526124f781612231565b9050919050565b60006020820190506125136000830184612254565b92915050565b600060208201905061252e6000830184612263565b92915050565b600061253e61254f565b905061254a8282612796565b919050565b6000604051905090565b600067ffffffffffffffff821115612574576125736128fd565b5b61257d82612940565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125d8826126f2565b91506125e3836126f2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561261857612617612841565b5b828201905092915050565b600061262e826126f2565b9150612639836126f2565b92508261264957612648612870565b5b828204905092915050565b600061265f826126f2565b915061266a836126f2565b92508282101561267d5761267c612841565b5b828203905092915050565b6000612693826126d2565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061271b826126fc565b9050919050565b82818337600083830152505050565b60005b8381101561274f578082015181840152602081019050612734565b8381111561275e576000848401525b50505050565b6000600282049050600182168061277c57607f821691505b602082108114156127905761278f61289f565b5b50919050565b61279f82612940565b810181811067ffffffffffffffff821117156127be576127bd6128fd565b5b80604052505050565b60006127d2826126f2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561280557612804612841565b5b600182019050919050565b600061281b826126f2565b9150612826836126f2565b92508261283657612835612870565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b612c7681612688565b8114612c8157600080fd5b50565b612c8d8161269a565b8114612c9857600080fd5b50565b612ca4816126a6565b8114612caf57600080fd5b50565b612cbb816126f2565b8114612cc657600080fd5b50565b612cd2816126fc565b8114612cdd57600080fd5b5056fea26469706673582212204797b407ba39656eef697fcf815f9253554d1d342afd7a47364f68b0ed012caf64736f6c63430008070033";

type TenantSpaceNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TenantSpaceNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TenantSpaceNFT__factory extends ContractFactory {
  constructor(...args: TenantSpaceNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TenantSpaceNFT";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TenantSpaceNFT> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<TenantSpaceNFT>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): TenantSpaceNFT {
    return super.attach(address) as TenantSpaceNFT;
  }
  connect(signer: Signer): TenantSpaceNFT__factory {
    return super.connect(signer) as TenantSpaceNFT__factory;
  }
  static readonly contractName: "TenantSpaceNFT";
  public readonly contractName: "TenantSpaceNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TenantSpaceNFTInterface {
    return new utils.Interface(_abi) as TenantSpaceNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TenantSpaceNFT {
    return new Contract(address, _abi, signerOrProvider) as TenantSpaceNFT;
  }
}
