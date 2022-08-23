/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC4907, ERC4907Interface } from "../ERC4907";

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
  "0x60806040523480156200001157600080fd5b5060405162002b1338038062002b138339818101604052810190620000379190620001a3565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b8280546200008390620002bd565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000251565b62000228565b9050828152602081018484840111156200015b576200015a6200038c565b5b6200016884828562000287565b509392505050565b600082601f83011262000188576200018762000387565b5b81516200019a84826020860162000125565b91505092915050565b60008060408385031215620001bd57620001bc62000396565b5b600083015167ffffffffffffffff811115620001de57620001dd62000391565b5b620001ec8582860162000170565b925050602083015167ffffffffffffffff81111562000210576200020f62000391565b5b6200021e8582860162000170565b9150509250929050565b60006200023462000247565b9050620002428282620002f3565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026f576200026e62000358565b5b6200027a826200039b565b9050602081019050919050565b60005b83811015620002a75780820151818401526020810190506200028a565b83811115620002b7576000848401525b50505050565b60006002820490506001821680620002d657607f821691505b60208210811415620002ed57620002ec62000329565b5b50919050565b620002fe826200039b565b810181811067ffffffffffffffff8211171562000320576200031f62000358565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b61275780620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638fc88c4811610097578063c2f1f14a11610066578063c2f1f14a146102bd578063c87b56dd146102ed578063e030565e1461031d578063e985e9c51461033957610100565b80638fc88c481461023757806395d89b4114610267578063a22cb46514610285578063b88d4fde146102a157610100565b806323b872dd116100d357806323b872dd1461019f57806342842e0e146101bb5780636352211e146101d757806370a082311461020757610100565b806301ffc9a71461010557806306fdde0314610135578063081812fc14610153578063095ea7b314610183575b600080fd5b61011f600480360381019061011a9190611a48565b610369565b60405161012c9190611df9565b60405180910390f35b61013d6103e3565b60405161014a9190611e2f565b60405180910390f35b61016d60048036038101906101689190611aa2565b610475565b60405161017a9190611d92565b60405180910390f35b61019d60048036038101906101989190611a08565b6104bb565b005b6101b960048036038101906101b491906118f2565b6105d3565b005b6101d560048036038101906101d091906118f2565b610633565b005b6101f160048036038101906101ec9190611aa2565b610653565b6040516101fe9190611d92565b60405180910390f35b610221600480360381019061021c9190611885565b610705565b60405161022e9190611f91565b60405180910390f35b610251600480360381019061024c9190611aa2565b6107bd565b60405161025e9190611f91565b60405180910390f35b61026f6107fb565b60405161027c9190611e2f565b60405180910390f35b61029f600480360381019061029a91906119c8565b61088d565b005b6102bb60048036038101906102b69190611945565b6108a3565b005b6102d760048036038101906102d29190611aa2565b610905565b6040516102e49190611d92565b60405180910390f35b61030760048036038101906103029190611aa2565b61098a565b6040516103149190611e2f565b60405180910390f35b61033760048036038101906103329190611acf565b6109f2565b005b610353600480360381019061034e91906118b2565b610b15565b6040516103609190611df9565b60405180910390f35b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103dc57506103db82610ba9565b5b9050919050565b6060600080546103f2906121f7565b80601f016020809104026020016040519081016040528092919081815260200182805461041e906121f7565b801561046b5780601f106104405761010080835404028352916020019161046b565b820191906000526020600020905b81548152906001019060200180831161044e57829003601f168201915b5050505050905090565b600061048082610c8b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104c682610653565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610537576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052e90611f31565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610556610cd6565b73ffffffffffffffffffffffffffffffffffffffff16148061058557506105848161057f610cd6565b610b15565b5b6105c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bb90611ef1565b60405180910390fd5b6105ce8383610cde565b505050565b6105e46105de610cd6565b82610d97565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061a90611f71565b60405180910390fd5b61062e838383610e2c565b505050565b61064e838383604051806020016040528060008152506108a3565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390611f11565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076d90611ed1565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b60606001805461080a906121f7565b80601f0160208091040260200160405190810160405280929190818152602001828054610836906121f7565b80156108835780601f1061085857610100808354040283529160200191610883565b820191906000526020600020905b81548152906001019060200180831161086657829003601f168201915b5050505050905090565b61089f610898610cd6565b8383611093565b5050565b6108b46108ae610cd6565b83610d97565b6108f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ea90611f71565b60405180910390fd5b6108ff84848484611200565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610980576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610985565b600090505b919050565b606061099582610c8b565b600061099f61125c565b905060008151116109bf57604051806020016040528060008152506109ea565b806109c984611273565b6040516020016109da929190611d6e565b6040516020818303038152906040525b915050919050565b6109fc3384610d97565b610a3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3290611f51565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610b079190611fac565b60405180910390a350505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c7457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610c845750610c83826113d4565b5b9050919050565b610c948161143e565b610cd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cca90611f11565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d5183610653565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610da383610653565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610de55750610de48185610b15565b5b80610e2357508373ffffffffffffffffffffffffffffffffffffffff16610e0b84610475565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e4c82610653565b73ffffffffffffffffffffffffffffffffffffffff1614610ea2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9990611e71565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0990611e91565b60405180910390fd5b610f1d8383836114aa565b610f28600082610cde565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7891906120e7565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fcf9190612060565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461108e8383836115d3565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f990611eb1565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111f39190611df9565b60405180910390a3505050565b61120b848484610e2c565b611217848484846115d8565b611256576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124d90611e51565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156112bb576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506113cf565b600082905060005b600082146112ed5780806112d69061225a565b915050600a826112e691906120b6565b91506112c3565b60008167ffffffffffffffff81111561130957611308612390565b5b6040519080825280601f01601f19166020018201604052801561133b5781602001600182028036833780820191505090505b5090505b600085146113c85760018261135491906120e7565b9150600a8561136391906122a3565b603061136f9190612060565b60f81b81838151811061138557611384612361565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113c191906120b6565b945061133f565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6114b583838361176f565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146115ce5760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe60006040516115c59190611e14565b60405180910390a35b505050565b505050565b60006115f98473ffffffffffffffffffffffffffffffffffffffff16611774565b15611762578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611622610cd6565b8786866040518563ffffffff1660e01b81526004016116449493929190611dad565b602060405180830381600087803b15801561165e57600080fd5b505af192505050801561168f57506040513d601f19601f8201168201806040525081019061168c9190611a75565b60015b611712573d80600081146116bf576040519150601f19603f3d011682016040523d82523d6000602084013e6116c4565b606091505b5060008151141561170a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170190611e51565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611767565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006117aa6117a584611fec565b611fc7565b9050828152602081018484840111156117c6576117c56123c4565b5b6117d18482856121b5565b509392505050565b6000813590506117e8816126ae565b92915050565b6000813590506117fd816126c5565b92915050565b600081359050611812816126dc565b92915050565b600081519050611827816126dc565b92915050565b600082601f830112611842576118416123bf565b5b8135611852848260208601611797565b91505092915050565b60008135905061186a816126f3565b92915050565b60008135905061187f8161270a565b92915050565b60006020828403121561189b5761189a6123ce565b5b60006118a9848285016117d9565b91505092915050565b600080604083850312156118c9576118c86123ce565b5b60006118d7858286016117d9565b92505060206118e8858286016117d9565b9150509250929050565b60008060006060848603121561190b5761190a6123ce565b5b6000611919868287016117d9565b935050602061192a868287016117d9565b925050604061193b8682870161185b565b9150509250925092565b6000806000806080858703121561195f5761195e6123ce565b5b600061196d878288016117d9565b945050602061197e878288016117d9565b935050604061198f8782880161185b565b925050606085013567ffffffffffffffff8111156119b0576119af6123c9565b5b6119bc8782880161182d565b91505092959194509250565b600080604083850312156119df576119de6123ce565b5b60006119ed858286016117d9565b92505060206119fe858286016117ee565b9150509250929050565b60008060408385031215611a1f57611a1e6123ce565b5b6000611a2d858286016117d9565b9250506020611a3e8582860161185b565b9150509250929050565b600060208284031215611a5e57611a5d6123ce565b5b6000611a6c84828501611803565b91505092915050565b600060208284031215611a8b57611a8a6123ce565b5b6000611a9984828501611818565b91505092915050565b600060208284031215611ab857611ab76123ce565b5b6000611ac68482850161185b565b91505092915050565b600080600060608486031215611ae857611ae76123ce565b5b6000611af68682870161185b565b9350506020611b07868287016117d9565b9250506040611b1886828701611870565b9150509250925092565b611b2b8161211b565b82525050565b611b3a8161212d565b82525050565b6000611b4b8261201d565b611b558185612033565b9350611b658185602086016121c4565b611b6e816123d3565b840191505092915050565b611b82816121a3565b82525050565b6000611b9382612028565b611b9d8185612044565b9350611bad8185602086016121c4565b611bb6816123d3565b840191505092915050565b6000611bcc82612028565b611bd68185612055565b9350611be68185602086016121c4565b80840191505092915050565b6000611bff603283612044565b9150611c0a826123e4565b604082019050919050565b6000611c22602583612044565b9150611c2d82612433565b604082019050919050565b6000611c45602483612044565b9150611c5082612482565b604082019050919050565b6000611c68601983612044565b9150611c73826124d1565b602082019050919050565b6000611c8b602983612044565b9150611c96826124fa565b604082019050919050565b6000611cae603e83612044565b9150611cb982612549565b604082019050919050565b6000611cd1601883612044565b9150611cdc82612598565b602082019050919050565b6000611cf4602183612044565b9150611cff826125c1565b604082019050919050565b6000611d17603183612044565b9150611d2282612610565b604082019050919050565b6000611d3a602e83612044565b9150611d458261265f565b604082019050919050565b611d5981612185565b82525050565b611d688161218f565b82525050565b6000611d7a8285611bc1565b9150611d868284611bc1565b91508190509392505050565b6000602082019050611da76000830184611b22565b92915050565b6000608082019050611dc26000830187611b22565b611dcf6020830186611b22565b611ddc6040830185611d50565b8181036060830152611dee8184611b40565b905095945050505050565b6000602082019050611e0e6000830184611b31565b92915050565b6000602082019050611e296000830184611b79565b92915050565b60006020820190508181036000830152611e498184611b88565b905092915050565b60006020820190508181036000830152611e6a81611bf2565b9050919050565b60006020820190508181036000830152611e8a81611c15565b9050919050565b60006020820190508181036000830152611eaa81611c38565b9050919050565b60006020820190508181036000830152611eca81611c5b565b9050919050565b60006020820190508181036000830152611eea81611c7e565b9050919050565b60006020820190508181036000830152611f0a81611ca1565b9050919050565b60006020820190508181036000830152611f2a81611cc4565b9050919050565b60006020820190508181036000830152611f4a81611ce7565b9050919050565b60006020820190508181036000830152611f6a81611d0a565b9050919050565b60006020820190508181036000830152611f8a81611d2d565b9050919050565b6000602082019050611fa66000830184611d50565b92915050565b6000602082019050611fc16000830184611d5f565b92915050565b6000611fd1611fe2565b9050611fdd8282612229565b919050565b6000604051905090565b600067ffffffffffffffff82111561200757612006612390565b5b612010826123d3565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061206b82612185565b915061207683612185565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120ab576120aa6122d4565b5b828201905092915050565b60006120c182612185565b91506120cc83612185565b9250826120dc576120db612303565b5b828204905092915050565b60006120f282612185565b91506120fd83612185565b9250828210156121105761210f6122d4565b5b828203905092915050565b600061212682612165565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006121ae8261218f565b9050919050565b82818337600083830152505050565b60005b838110156121e25780820151818401526020810190506121c7565b838111156121f1576000848401525b50505050565b6000600282049050600182168061220f57607f821691505b6020821081141561222357612222612332565b5b50919050565b612232826123d3565b810181811067ffffffffffffffff8211171561225157612250612390565b5b80604052505050565b600061226582612185565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612298576122976122d4565b5b600182019050919050565b60006122ae82612185565b91506122b983612185565b9250826122c9576122c8612303565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6126b78161211b565b81146126c257600080fd5b50565b6126ce8161212d565b81146126d957600080fd5b50565b6126e581612139565b81146126f057600080fd5b50565b6126fc81612185565b811461270757600080fd5b50565b6127138161218f565b811461271e57600080fd5b5056fea264697066735822122051301f0e5b434c3d65ce6c9c4499cc120319fb1348a5281fe223277bb4226e2464736f6c63430008070033";

type ERC4907ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC4907ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC4907__factory extends ContractFactory {
  constructor(...args: ERC4907ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC4907";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC4907> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC4907>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC4907 {
    return super.attach(address) as ERC4907;
  }
  connect(signer: Signer): ERC4907__factory {
    return super.connect(signer) as ERC4907__factory;
  }
  static readonly contractName: "ERC4907";
  public readonly contractName: "ERC4907";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC4907Interface {
    return new utils.Interface(_abi) as ERC4907Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC4907 {
    return new Contract(address, _abi, signerOrProvider) as ERC4907;
  }
}