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
        name: "_tokenId",
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
  "0x60806040523480156200001157600080fd5b50604051620030da380380620030da8339818101604052810190620000379190620001a7565b8181818181600090805190602001906200005392919062000079565b5080600190805190602001906200006c92919062000079565b50505050505050620003b0565b8280546200008790620002c1565b90600052602060002090601f016020900481019282620000ab5760008555620000f7565b82601f10620000c657805160ff1916838001178555620000f7565b82800160010185558215620000f7579182015b82811115620000f6578251825591602001919060010190620000d9565b5b5090506200010691906200010a565b5090565b5b80821115620001255760008160009055506001016200010b565b5090565b6000620001406200013a8462000255565b6200022c565b9050828152602081018484840111156200015f576200015e62000390565b5b6200016c8482856200028b565b509392505050565b600082601f8301126200018c576200018b6200038b565b5b81516200019e84826020860162000129565b91505092915050565b60008060408385031215620001c157620001c06200039a565b5b600083015167ffffffffffffffff811115620001e257620001e162000395565b5b620001f08582860162000174565b925050602083015167ffffffffffffffff81111562000214576200021362000395565b5b620002228582860162000174565b9150509250929050565b6000620002386200024b565b9050620002468282620002f7565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027357620002726200035c565b5b6200027e826200039f565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b60006002820490506001821680620002da57607f821691505b60208210811415620002f157620002f06200032d565b5b50919050565b62000302826200039f565b810181811067ffffffffffffffff821117156200032457620003236200035c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612d1a80620003c06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638fc88c48116100ad578063b88d4fde11610071578063b88d4fde14610366578063c2f1f14a14610382578063c87b56dd146103b2578063e030565e146103e2578063e985e9c5146103fe5761012c565b80638fc88c48146102af57806394bf804d146102df57806395d89b41146102fb578063a22cb46514610319578063a369e330146103355761012c565b80633011e16a116100f45780633011e16a146101e757806342842e0e14610203578063449e815d1461021f5780636352211e1461024f57806370a082311461027f5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b60048036038101906101469190611eca565b61042e565b604051610158919061232a565b60405180910390f35b6101696104a8565b6040516101769190612360565b60405180910390f35b61019960048036038101906101949190611f24565b61053a565b6040516101a6919061229a565b60405180910390f35b6101c960048036038101906101c49190611e37565b610580565b005b6101e560048036038101906101e09190611d21565b610698565b005b61020160048036038101906101fc9190611e77565b6106f8565b005b61021d60048036038101906102189190611d21565b61075b565b005b61023960048036038101906102349190611e37565b61077b565b6040516102469190612502565b60405180910390f35b61026960048036038101906102649190611f24565b610849565b604051610276919061229a565b60405180910390f35b61029960048036038101906102949190611cb4565b6108fb565b6040516102a69190612502565b60405180910390f35b6102c960048036038101906102c49190611f24565b6109b3565b6040516102d69190612502565b60405180910390f35b6102f960048036038101906102f49190611f51565b6109f1565b005b6103036109ff565b6040516103109190612360565b60405180910390f35b610333600480360381019061032e9190611df7565b610a91565b005b61034f600480360381019061034a9190611e37565b610aa7565b60405161035d929190612301565b60405180910390f35b610380600480360381019061037b9190611d74565b610af8565b005b61039c60048036038101906103979190611f24565b610b5a565b6040516103a9919061229a565b60405180910390f35b6103cc60048036038101906103c79190611f24565b610bdf565b6040516103d99190612360565b60405180910390f35b6103fc60048036038101906103f79190611f91565b610c47565b005b61041860048036038101906104139190611ce1565b610d6a565b604051610425919061232a565b60405180910390f35b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104a157506104a082610dfe565b5b9050919050565b6060600080546104b790612768565b80601f01602080910402602001604051908101604052809291908181526020018280546104e390612768565b80156105305780601f1061050557610100808354040283529160200191610530565b820191906000526020600020905b81548152906001019060200180831161051357829003601f168201915b5050505050905090565b600061054582610ee0565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061058b82610849565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f3906124a2565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661061b610f2b565b73ffffffffffffffffffffffffffffffffffffffff16148061064a575061064981610644610f2b565b610d6a565b5b610689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068090612442565b60405180910390fd5b6106938383610f33565b505050565b6106a96106a3610f2b565b82610fec565b6106e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106df906124e2565b60405180910390fd5b6106f3838383611081565b505050565b6000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020905081816001018190555050505050565b61077683838360405180602001604052806000815250610af8565b505050565b600080600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250509050806020015191505092915050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e990612482565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561096c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096390612422565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b6109fb81836112e8565b5050565b606060018054610a0e90612768565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3a90612768565b8015610a875780601f10610a5c57610100808354040283529160200191610a87565b820191906000526020600020905b815481529060010190602001808311610a6a57829003601f168201915b5050505050905090565b610aa3610a9c610f2b565b83836114c2565b5050565b6007602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b610b09610b03610f2b565b83610fec565b610b48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3f906124e2565b60405180910390fd5b610b548484848461162f565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610bd5576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610bda565b600090505b919050565b6060610bea82610ee0565b6000610bf461168b565b90506000815111610c145760405180602001604052806000815250610c3f565b80610c1e846116a2565b604051602001610c2f929190612276565b6040516020818303038152906040525b915050919050565b610c513384610fec565b610c90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c87906124c2565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610d5c919061251d565b60405180910390a350505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610ec957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610ed95750610ed882611803565b5b9050919050565b610ee98161186d565b610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f90612482565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fa683610849565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610ff883610849565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061103a57506110398185610d6a565b5b8061107857508373ffffffffffffffffffffffffffffffffffffffff166110608461053a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110a182610849565b73ffffffffffffffffffffffffffffffffffffffff16146110f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ee906123a2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115e906123e2565b60405180910390fd5b6111728383836118d9565b61117d600082610f33565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111cd9190612658565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461122491906125d1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112e3838383611a02565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611358576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134f90612462565b60405180910390fd5b6113618161186d565b156113a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611398906123c2565b60405180910390fd5b6113ad600083836118d9565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113fd91906125d1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114be60008383611a02565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611531576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152890612402565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611622919061232a565b60405180910390a3505050565b61163a848484611081565b61164684848484611a07565b611685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167c90612382565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156116ea576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506117fe565b600082905060005b6000821461171c578080611705906127cb565b915050600a826117159190612627565b91506116f2565b60008167ffffffffffffffff81111561173857611737612901565b5b6040519080825280601f01601f19166020018201604052801561176a5781602001600182028036833780820191505090505b5090505b600085146117f7576001826117839190612658565b9150600a856117929190612814565b603061179e91906125d1565b60f81b8183815181106117b4576117b36128d2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117f09190612627565b945061176e565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6118e4838383611b9e565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146119fd5760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe60006040516119f49190612345565b60405180910390a35b505050565b505050565b6000611a288473ffffffffffffffffffffffffffffffffffffffff16611ba3565b15611b91578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611a51610f2b565b8786866040518563ffffffff1660e01b8152600401611a7394939291906122b5565b602060405180830381600087803b158015611a8d57600080fd5b505af1925050508015611abe57506040513d601f19601f82011682018060405250810190611abb9190611ef7565b60015b611b41573d8060008114611aee576040519150601f19603f3d011682016040523d82523d6000602084013e611af3565b606091505b50600081511415611b39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3090612382565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611b96565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611bd9611bd48461255d565b612538565b905082815260208101848484011115611bf557611bf4612935565b5b611c00848285612726565b509392505050565b600081359050611c1781612c71565b92915050565b600081359050611c2c81612c88565b92915050565b600081359050611c4181612c9f565b92915050565b600081519050611c5681612c9f565b92915050565b600082601f830112611c7157611c70612930565b5b8135611c81848260208601611bc6565b91505092915050565b600081359050611c9981612cb6565b92915050565b600081359050611cae81612ccd565b92915050565b600060208284031215611cca57611cc961293f565b5b6000611cd884828501611c08565b91505092915050565b60008060408385031215611cf857611cf761293f565b5b6000611d0685828601611c08565b9250506020611d1785828601611c08565b9150509250929050565b600080600060608486031215611d3a57611d3961293f565b5b6000611d4886828701611c08565b9350506020611d5986828701611c08565b9250506040611d6a86828701611c8a565b9150509250925092565b60008060008060808587031215611d8e57611d8d61293f565b5b6000611d9c87828801611c08565b9450506020611dad87828801611c08565b9350506040611dbe87828801611c8a565b925050606085013567ffffffffffffffff811115611ddf57611dde61293a565b5b611deb87828801611c5c565b91505092959194509250565b60008060408385031215611e0e57611e0d61293f565b5b6000611e1c85828601611c08565b9250506020611e2d85828601611c1d565b9150509250929050565b60008060408385031215611e4e57611e4d61293f565b5b6000611e5c85828601611c08565b9250506020611e6d85828601611c8a565b9150509250929050565b600080600060608486031215611e9057611e8f61293f565b5b6000611e9e86828701611c08565b9350506020611eaf86828701611c8a565b9250506040611ec086828701611c8a565b9150509250925092565b600060208284031215611ee057611edf61293f565b5b6000611eee84828501611c32565b91505092915050565b600060208284031215611f0d57611f0c61293f565b5b6000611f1b84828501611c47565b91505092915050565b600060208284031215611f3a57611f3961293f565b5b6000611f4884828501611c8a565b91505092915050565b60008060408385031215611f6857611f6761293f565b5b6000611f7685828601611c8a565b9250506020611f8785828601611c08565b9150509250929050565b600080600060608486031215611faa57611fa961293f565b5b6000611fb886828701611c8a565b9350506020611fc986828701611c08565b9250506040611fda86828701611c9f565b9150509250925092565b611fed8161268c565b82525050565b611ffc8161269e565b82525050565b600061200d8261258e565b61201781856125a4565b9350612027818560208601612735565b61203081612944565b840191505092915050565b61204481612714565b82525050565b600061205582612599565b61205f81856125b5565b935061206f818560208601612735565b61207881612944565b840191505092915050565b600061208e82612599565b61209881856125c6565b93506120a8818560208601612735565b80840191505092915050565b60006120c16032836125b5565b91506120cc82612955565b604082019050919050565b60006120e46025836125b5565b91506120ef826129a4565b604082019050919050565b6000612107601c836125b5565b9150612112826129f3565b602082019050919050565b600061212a6024836125b5565b915061213582612a1c565b604082019050919050565b600061214d6019836125b5565b915061215882612a6b565b602082019050919050565b60006121706029836125b5565b915061217b82612a94565b604082019050919050565b6000612193603e836125b5565b915061219e82612ae3565b604082019050919050565b60006121b66020836125b5565b91506121c182612b32565b602082019050919050565b60006121d96018836125b5565b91506121e482612b5b565b602082019050919050565b60006121fc6021836125b5565b915061220782612b84565b604082019050919050565b600061221f6031836125b5565b915061222a82612bd3565b604082019050919050565b6000612242602e836125b5565b915061224d82612c22565b604082019050919050565b612261816126f6565b82525050565b61227081612700565b82525050565b60006122828285612083565b915061228e8284612083565b91508190509392505050565b60006020820190506122af6000830184611fe4565b92915050565b60006080820190506122ca6000830187611fe4565b6122d76020830186611fe4565b6122e46040830185612258565b81810360608301526122f68184612002565b905095945050505050565b60006040820190506123166000830185611fe4565b6123236020830184612258565b9392505050565b600060208201905061233f6000830184611ff3565b92915050565b600060208201905061235a600083018461203b565b92915050565b6000602082019050818103600083015261237a818461204a565b905092915050565b6000602082019050818103600083015261239b816120b4565b9050919050565b600060208201905081810360008301526123bb816120d7565b9050919050565b600060208201905081810360008301526123db816120fa565b9050919050565b600060208201905081810360008301526123fb8161211d565b9050919050565b6000602082019050818103600083015261241b81612140565b9050919050565b6000602082019050818103600083015261243b81612163565b9050919050565b6000602082019050818103600083015261245b81612186565b9050919050565b6000602082019050818103600083015261247b816121a9565b9050919050565b6000602082019050818103600083015261249b816121cc565b9050919050565b600060208201905081810360008301526124bb816121ef565b9050919050565b600060208201905081810360008301526124db81612212565b9050919050565b600060208201905081810360008301526124fb81612235565b9050919050565b60006020820190506125176000830184612258565b92915050565b60006020820190506125326000830184612267565b92915050565b6000612542612553565b905061254e828261279a565b919050565b6000604051905090565b600067ffffffffffffffff82111561257857612577612901565b5b61258182612944565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125dc826126f6565b91506125e7836126f6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561261c5761261b612845565b5b828201905092915050565b6000612632826126f6565b915061263d836126f6565b92508261264d5761264c612874565b5b828204905092915050565b6000612663826126f6565b915061266e836126f6565b92508282101561268157612680612845565b5b828203905092915050565b6000612697826126d6565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b600061271f82612700565b9050919050565b82818337600083830152505050565b60005b83811015612753578082015181840152602081019050612738565b83811115612762576000848401525b50505050565b6000600282049050600182168061278057607f821691505b60208210811415612794576127936128a3565b5b50919050565b6127a382612944565b810181811067ffffffffffffffff821117156127c2576127c1612901565b5b80604052505050565b60006127d6826126f6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561280957612808612845565b5b600182019050919050565b600061281f826126f6565b915061282a836126f6565b92508261283a57612839612874565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b612c7a8161268c565b8114612c8557600080fd5b50565b612c918161269e565b8114612c9c57600080fd5b50565b612ca8816126aa565b8114612cb357600080fd5b50565b612cbf816126f6565b8114612cca57600080fd5b50565b612cd681612700565b8114612ce157600080fd5b5056fea26469706673582212201f0831ccf31b10c292942e653fa89e367d41d08350bb0317bc929c25ae3af97d64736f6c63430008070033";

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
