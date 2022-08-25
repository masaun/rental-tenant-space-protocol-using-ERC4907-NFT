/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TenantSpaceNFTFactory,
  TenantSpaceNFTFactoryInterface,
} from "../TenantSpaceNFTFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IRandomNumberGeneratorV2",
        name: "_rngV2",
        type: "address",
      },
      {
        internalType: "contract VRFCoordinatorV2Mock",
        name: "_vrfCoordinatorV2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tenantOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract ITenantSpaceNFT",
        name: "tenantSpaceNFT",
        type: "address",
      },
    ],
    name: "TenantSpaceNFTCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "createTenantSpaceNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rngV2",
    outputs: [
      {
        internalType: "contract IRandomNumberGeneratorV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vrfCoordinatorV2",
    outputs: [
      {
        internalType: "contract VRFCoordinatorV2Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516143fb3803806143fb833981810160405281019061003291906100e5565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101ae565b6000815190506100ca81610180565b92915050565b6000815190506100df81610197565b92915050565b600080604083850312156100fc576100fb61017b565b5b600061010a858286016100bb565b925050602061011b858286016100d0565b9150509250929050565b60006101308261015b565b9050919050565b600061014282610125565b9050919050565b600061015482610125565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b61018981610137565b811461019457600080fd5b50565b6101a081610149565b81146101ab57600080fd5b50565b61423e806101bd6000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c80633d35c4f5146200004b5780638e57a8fd146200006d578063c8eb9acd146200008d575b600080fd5b62000055620000af565b6040516200006491906200040b565b60405180910390f35b6200008b6004803603810190620000859190620002b7565b620000d5565b005b6200009762000205565b604051620000a69190620003ee565b60405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516200012d906200022b565b6200013c949392919062000428565b604051809103906000f08015801562000159573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060003390507f94ab933774a2264129458b4bfec445fe9a6d333d4ac97e43665ba65a4be5af1c8183604051620001f7929190620003c1565b60405180910390a150505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b613ba3806200066683390190565b6000620002506200024a84620004ac565b62000483565b9050828152602081018484840111156200026f576200026e62000645565b5b6200027c84828562000596565b509392505050565b600082601f8301126200029c576200029b62000640565b5b8135620002ae84826020860162000239565b91505092915050565b60008060408385031215620002d157620002d06200064f565b5b600083013567ffffffffffffffff811115620002f257620002f16200064a565b5b620003008582860162000284565b925050602083013567ffffffffffffffff8111156200032457620003236200064a565b5b620003328582860162000284565b9150509250929050565b6200034781620004fe565b82525050565b620003588162000532565b82525050565b620003698162000546565b82525050565b6200037a816200055a565b82525050565b60006200038d82620004e2565b620003998185620004ed565b9350620003ab818560208601620005a5565b620003b68162000654565b840191505092915050565b6000604082019050620003d860008301856200033c565b620003e760208301846200035e565b9392505050565b60006020820190506200040560008301846200034d565b92915050565b60006020820190506200042260008301846200036f565b92915050565b6000608082019050818103600083015262000444818762000380565b905081810360208301526200045a818662000380565b90506200046b60408301856200034d565b6200047a60608301846200036f565b95945050505050565b60006200048f620004a2565b90506200049d8282620005db565b919050565b6000604051905090565b600067ffffffffffffffff821115620004ca57620004c962000611565b5b620004d58262000654565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006200050b8262000512565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200053f826200056e565b9050919050565b600062000553826200056e565b9050919050565b600062000567826200056e565b9050919050565b60006200057b8262000582565b9050919050565b60006200058f8262000512565b9050919050565b82818337600083830152505050565b60005b83811015620005c5578082015181840152602081019050620005a8565b83811115620005d5576000848401525b50505050565b620005e68262000654565b810181811067ffffffffffffffff8211171562000608576200060762000611565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f830116905091905056fe60806040523480156200001157600080fd5b5060405162003ba338038062003ba3833981810160405281019062000037919062000259565b83838181816000908051906020019062000053929190620000fd565b5080600190805190602001906200006c929190620000fd565b505050505081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200051d565b8280546200010b90620003fa565b90600052602060002090601f0160209004810192826200012f57600085556200017b565b82601f106200014a57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017a5782518255916020019190600101906200015d565b5b5090506200018a91906200018e565b5090565b5b80821115620001a95760008160009055506001016200018f565b5090565b6000620001c4620001be8462000332565b62000309565b905082815260208101848484011115620001e357620001e2620004c9565b5b620001f0848285620003c4565b509392505050565b6000815190506200020981620004e9565b92915050565b600081519050620002208162000503565b92915050565b600082601f8301126200023e576200023d620004c4565b5b815162000250848260208601620001ad565b91505092915050565b60008060008060808587031215620002765762000275620004d3565b5b600085015167ffffffffffffffff811115620002975762000296620004ce565b5b620002a58782880162000226565b945050602085015167ffffffffffffffff811115620002c957620002c8620004ce565b5b620002d78782880162000226565b9350506040620002ea87828801620001f8565b9250506060620002fd878288016200020f565b91505092959194509250565b60006200031562000328565b905062000323828262000430565b919050565b6000604051905090565b600067ffffffffffffffff82111562000350576200034f62000495565b5b6200035b82620004d8565b9050602081019050919050565b60006200037582620003a4565b9050919050565b6000620003898262000368565b9050919050565b60006200039d8262000368565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003e4578082015181840152602081019050620003c7565b83811115620003f4576000848401525b50505050565b600060028204905060018216806200041357607f821691505b602082108114156200042a576200042962000466565b5b50919050565b6200043b82620004d8565b810181811067ffffffffffffffff821117156200045d576200045c62000495565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b620004f4816200037c565b81146200050057600080fd5b50565b6200050e8162000390565b81146200051a57600080fd5b50565b613676806200052d6000396000f3fe608060405234801561001057600080fd5b506004361061014c5760003560e01c80638fc88c48116100c3578063c87b56dd1161007c578063c87b56dd146103c1578063c8eb9acd146103f1578063e030565e1461040f578063e75722301461042b578063e985e9c51461045b578063f7d975771461048b5761014c565b80638fc88c48146102d957806395d89b4114610309578063a22cb46514610327578063a369e33014610343578063b88d4fde14610375578063c2f1f14a146103915761014c565b806323b872dd1161011557806323b872dd146102075780633d35c4f51461022357806342842e0e146102415780636352211e1461025d5780636a6278421461028d57806370a08231146102a95761014c565b806232c4e71461015157806301ffc9a71461016d57806306fdde031461019d578063081812fc146101bb578063095ea7b3146101eb575b600080fd5b61016b6004803603810190610166919061268e565b6104a7565b005b610187600480360381019061018291906125da565b6104e5565b6040516101949190612ab6565b60405180910390f35b6101a561055f565b6040516101b29190612b22565b60405180910390f35b6101d560048036038101906101d09190612634565b6105f1565b6040516101e29190612a18565b60405180910390f35b61020560048036038101906102009190612551565b610637565b005b610221600480360381019061021c919061243b565b61074f565b005b61022b6107af565b6040516102389190612aec565b60405180910390f35b61025b6004803603810190610256919061243b565b6107d5565b005b61027760048036038101906102729190612634565b6107f5565b6040516102849190612a18565b60405180910390f35b6102a760048036038101906102a291906123ce565b6108a7565b005b6102c360048036038101906102be91906123ce565b6108cd565b6040516102d09190612d14565b60405180910390f35b6102f360048036038101906102ee9190612634565b610985565b6040516103009190612d14565b60405180910390f35b6103116109c3565b60405161031e9190612b22565b60405180910390f35b610341600480360381019061033c9190612511565b610a55565b005b61035d60048036038101906103589190612551565b610a6b565b60405161036c93929190612a33565b60405180910390f35b61038f600480360381019061038a919061248e565b610ae2565b005b6103ab60048036038101906103a69190612634565b610b44565b6040516103b89190612a18565b60405180910390f35b6103db60048036038101906103d69190612634565b610bc9565b6040516103e89190612b22565b60405180910390f35b6103f9610c31565b6040516104069190612ad1565b60405180910390f35b6104296004803603810190610424919061268e565b610c57565b005b61044560048036038101906104409190612634565b610d7a565b6040516104529190612d14565b60405180910390f35b610475600480360381019061047091906123fb565b610e9d565b6040516104829190612ab6565b60405180910390f35b6104a560048036038101906104a091906126e1565b610f31565b005b60006104b1611009565b90506000816000815181106104c9576104c8613181565b5b602002602001015190506104de858585610c57565b5050505050565b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061055857506105578261137c565b5b9050919050565b60606000805461056e90613017565b80601f016020809104026020016040519081016040528092919081815260200182805461059a90613017565b80156105e75780601f106105bc576101008083540402835291602001916105e7565b820191906000526020600020905b8154815290600101906020018083116105ca57829003601f168201915b5050505050905090565b60006105fc8261145e565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610642826107f5565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106aa90612cb4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106d26114a9565b73ffffffffffffffffffffffffffffffffffffffff1614806107015750610700816106fb6114a9565b610e9d565b5b610740576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073790612c54565b60405180910390fd5b61074a83836114b1565b505050565b61076061075a6114a9565b8261156a565b61079f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079690612cf4565b60405180910390fd5b6107aa8383836115ff565b505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107f083838360405180602001604052806000815250610ae2565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089590612c94565b60405180910390fd5b80915050919050565b60006108b36007611866565b90506108bf8282611874565b6108c96007611a4e565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093590612c34565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b6060600180546109d290613017565b80601f01602080910402602001604051908101604052809291908181526020018280546109fe90613017565b8015610a4b5780601f10610a2057610100808354040283529160200191610a4b565b820191906000526020600020905b815481529060010190602001808311610a2e57829003601f168201915b5050505050905090565b610a67610a606114a9565b8383611a64565b5050565b600a602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b610af3610aed6114a9565b8361156a565b610b32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2990612cf4565b60405180910390fd5b610b3e84848484611bd1565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610bbf576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610bc4565b600090505b919050565b6060610bd48261145e565b6000610bde611c2d565b90506000815111610bfe5760405180602001604052806000815250610c29565b80610c0884611c44565b604051602001610c199291906129f4565b6040516020818303038152906040525b915050919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c61338461156a565b610ca0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9790612cd4565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610d6c9190612d58565b60405180910390a350505050565b600080600a60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152505090508060400151915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f3a826107f5565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fa7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9e90612c14565b60405180910390fd5b6000600a60003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000209050818160020181905550505050565b6060600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e0c862896040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561107557600080fd5b505af1158015611089573d6000803e3d6000fd5b505050506000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630671c9d36040518163ffffffff1660e01b815260040160206040518083038186803b1580156110f757600080fd5b505afa15801561110b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061112f9190612661565b90506111536040518060600160405280602b8152602001613616602b913982611da5565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663808974ff82600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b81526004016111d2929190612d2f565b600060405180830381600087803b1580156111ec57600080fd5b505af1158015611200573d6000803e3d6000fd5b505050506000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166301d034406040518163ffffffff1660e01b815260040160206040518083038186803b15801561126e57600080fd5b505afa158015611282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a69190612661565b90506112ca6040518060600160405280602e81526020016135e8602e913982611da5565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633e1098086040518163ffffffff1660e01b815260040160006040518083038186803b15801561133457600080fd5b505afa158015611348573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906113719190612591565b905080935050505090565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061144757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611457575061145682611e41565b5b9050919050565b61146781611eab565b6114a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149d90612c94565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611524836107f5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611576836107f5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806115b857506115b78185610e9d565b5b806115f657508373ffffffffffffffffffffffffffffffffffffffff166115de846105f1565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661161f826107f5565b73ffffffffffffffffffffffffffffffffffffffff1614611675576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166c90612b94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116dc90612bd4565b60405180910390fd5b6116f0838383611f17565b6116fb6000826114b1565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461174b9190612ebf565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117a29190612e38565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611861838383612040565b505050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118db90612c74565b60405180910390fd5b6118ed81611eab565b1561192d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192490612bb4565b60405180910390fd5b61193960008383611f17565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119899190612e38565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a4a60008383612040565b5050565b6001816000016000828254019250508190555050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611ad3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aca90612bf4565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611bc49190612ab6565b60405180910390a3505050565b611bdc8484846115ff565b611be884848484612045565b611c27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c1e90612b74565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611c8c576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611da0565b600082905060005b60008214611cbe578080611ca79061307a565b915050600a82611cb79190612e8e565b9150611c94565b60008167ffffffffffffffff811115611cda57611cd96131b0565b5b6040519080825280601f01601f191660200182016040528015611d0c5781602001600182028036833780820191505090505b5090505b60008514611d9957600182611d259190612ebf565b9150600a85611d3491906130c3565b6030611d409190612e38565b60f81b818381518110611d5657611d55613181565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d929190612e8e565b9450611d10565b8093505050505b919050565b611e3d8282604051602401611dbb929190612b44565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506121dc565b5050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611f22838383612205565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461203b5760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe60006040516120329190612b07565b60405180910390a35b505050565b505050565b60006120668473ffffffffffffffffffffffffffffffffffffffff1661220a565b156121cf578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261208f6114a9565b8786866040518563ffffffff1660e01b81526004016120b19493929190612a6a565b602060405180830381600087803b1580156120cb57600080fd5b505af19250505080156120fc57506040513d601f19601f820116820180604052508101906120f99190612607565b60015b61217f573d806000811461212c576040519150601f19603f3d011682016040523d82523d6000602084013e612131565b606091505b50600081511415612177576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161216e90612b74565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506121d4565b600190505b949350505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061224061223b84612d98565b612d73565b90508083825260208201905082856020860282011115612263576122626131e4565b5b60005b85811015612293578161227988826123a4565b845260208401935060208301925050600181019050612266565b5050509392505050565b60006122b06122ab84612dc4565b612d73565b9050828152602081018484840111156122cc576122cb6131e9565b5b6122d7848285612fd5565b509392505050565b6000813590506122ee81613574565b92915050565b600082601f830112612309576123086131df565b5b815161231984826020860161222d565b91505092915050565b6000813590506123318161358b565b92915050565b600081359050612346816135a2565b92915050565b60008151905061235b816135a2565b92915050565b600082601f830112612376576123756131df565b5b813561238684826020860161229d565b91505092915050565b60008135905061239e816135b9565b92915050565b6000815190506123b3816135b9565b92915050565b6000813590506123c8816135d0565b92915050565b6000602082840312156123e4576123e36131f3565b5b60006123f2848285016122df565b91505092915050565b60008060408385031215612412576124116131f3565b5b6000612420858286016122df565b9250506020612431858286016122df565b9150509250929050565b600080600060608486031215612454576124536131f3565b5b6000612462868287016122df565b9350506020612473868287016122df565b92505060406124848682870161238f565b9150509250925092565b600080600080608085870312156124a8576124a76131f3565b5b60006124b6878288016122df565b94505060206124c7878288016122df565b93505060406124d88782880161238f565b925050606085013567ffffffffffffffff8111156124f9576124f86131ee565b5b61250587828801612361565b91505092959194509250565b60008060408385031215612528576125276131f3565b5b6000612536858286016122df565b925050602061254785828601612322565b9150509250929050565b60008060408385031215612568576125676131f3565b5b6000612576858286016122df565b92505060206125878582860161238f565b9150509250929050565b6000602082840312156125a7576125a66131f3565b5b600082015167ffffffffffffffff8111156125c5576125c46131ee565b5b6125d1848285016122f4565b91505092915050565b6000602082840312156125f0576125ef6131f3565b5b60006125fe84828501612337565b91505092915050565b60006020828403121561261d5761261c6131f3565b5b600061262b8482850161234c565b91505092915050565b60006020828403121561264a576126496131f3565b5b60006126588482850161238f565b91505092915050565b600060208284031215612677576126766131f3565b5b6000612685848285016123a4565b91505092915050565b6000806000606084860312156126a7576126a66131f3565b5b60006126b58682870161238f565b93505060206126c6868287016122df565b92505060406126d7868287016123b9565b9150509250925092565b600080604083850312156126f8576126f76131f3565b5b60006127068582860161238f565b92505060206127178582860161238f565b9150509250929050565b61272a81612ef3565b82525050565b61273981612f05565b82525050565b600061274a82612df5565b6127548185612e0b565b9350612764818560208601612fe4565b61276d816131f8565b840191505092915050565b61278181612f7b565b82525050565b61279081612f8d565b82525050565b61279f81612f9f565b82525050565b60006127b082612e00565b6127ba8185612e1c565b93506127ca818560208601612fe4565b6127d3816131f8565b840191505092915050565b60006127e982612e00565b6127f38185612e2d565b9350612803818560208601612fe4565b80840191505092915050565b600061281c603283612e1c565b915061282782613209565b604082019050919050565b600061283f602583612e1c565b915061284a82613258565b604082019050919050565b6000612862601c83612e1c565b915061286d826132a7565b602082019050919050565b6000612885602483612e1c565b9150612890826132d0565b604082019050919050565b60006128a8601983612e1c565b91506128b38261331f565b602082019050919050565b60006128cb602783612e1c565b91506128d682613348565b604082019050919050565b60006128ee602983612e1c565b91506128f982613397565b604082019050919050565b6000612911603e83612e1c565b915061291c826133e6565b604082019050919050565b6000612934602083612e1c565b915061293f82613435565b602082019050919050565b6000612957601883612e1c565b91506129628261345e565b602082019050919050565b600061297a602183612e1c565b915061298582613487565b604082019050919050565b600061299d603183612e1c565b91506129a8826134d6565b604082019050919050565b60006129c0602e83612e1c565b91506129cb82613525565b604082019050919050565b6129df81612f5d565b82525050565b6129ee81612f67565b82525050565b6000612a0082856127de565b9150612a0c82846127de565b91508190509392505050565b6000602082019050612a2d6000830184612721565b92915050565b6000606082019050612a486000830186612721565b612a556020830185612721565b612a6260408301846129d6565b949350505050565b6000608082019050612a7f6000830187612721565b612a8c6020830186612721565b612a9960408301856129d6565b8181036060830152612aab818461273f565b905095945050505050565b6000602082019050612acb6000830184612730565b92915050565b6000602082019050612ae66000830184612778565b92915050565b6000602082019050612b016000830184612787565b92915050565b6000602082019050612b1c6000830184612796565b92915050565b60006020820190508181036000830152612b3c81846127a5565b905092915050565b60006040820190508181036000830152612b5e81856127a5565b9050612b6d60208301846129d6565b9392505050565b60006020820190508181036000830152612b8d8161280f565b9050919050565b60006020820190508181036000830152612bad81612832565b9050919050565b60006020820190508181036000830152612bcd81612855565b9050919050565b60006020820190508181036000830152612bed81612878565b9050919050565b60006020820190508181036000830152612c0d8161289b565b9050919050565b60006020820190508181036000830152612c2d816128be565b9050919050565b60006020820190508181036000830152612c4d816128e1565b9050919050565b60006020820190508181036000830152612c6d81612904565b9050919050565b60006020820190508181036000830152612c8d81612927565b9050919050565b60006020820190508181036000830152612cad8161294a565b9050919050565b60006020820190508181036000830152612ccd8161296d565b9050919050565b60006020820190508181036000830152612ced81612990565b9050919050565b60006020820190508181036000830152612d0d816129b3565b9050919050565b6000602082019050612d2960008301846129d6565b92915050565b6000604082019050612d4460008301856129d6565b612d516020830184612721565b9392505050565b6000602082019050612d6d60008301846129e5565b92915050565b6000612d7d612d8e565b9050612d898282613049565b919050565b6000604051905090565b600067ffffffffffffffff821115612db357612db26131b0565b5b602082029050602081019050919050565b600067ffffffffffffffff821115612ddf57612dde6131b0565b5b612de8826131f8565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612e4382612f5d565b9150612e4e83612f5d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e8357612e826130f4565b5b828201905092915050565b6000612e9982612f5d565b9150612ea483612f5d565b925082612eb457612eb3613123565b5b828204905092915050565b6000612eca82612f5d565b9150612ed583612f5d565b925082821015612ee857612ee76130f4565b5b828203905092915050565b6000612efe82612f3d565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000612f8682612fb1565b9050919050565b6000612f9882612fb1565b9050919050565b6000612faa82612f67565b9050919050565b6000612fbc82612fc3565b9050919050565b6000612fce82612f3d565b9050919050565b82818337600083830152505050565b60005b83811015613002578082015181840152602081019050612fe7565b83811115613011576000848401525b50505050565b6000600282049050600182168061302f57607f821691505b6020821081141561304357613042613152565b5b50919050565b613052826131f8565b810181811067ffffffffffffffff82111715613071576130706131b0565b5b80604052505050565b600061308582612f5d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156130b8576130b76130f4565b5b600182019050919050565b60006130ce82612f5d565b91506130d983612f5d565b9250826130e9576130e8613123565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4f6e6c7920612074656e616e74207370616365206f776e65722063616e20736560008201527f7420707269636500000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b61357d81612ef3565b811461358857600080fd5b50565b61359481612f05565b811461359f57600080fd5b50565b6135ab81612f11565b81146135b657600080fd5b50565b6135c281612f5d565b81146135cd57600080fd5b50565b6135d981612f67565b81146135e457600080fd5b5056fe2d2d2d2d2d2d2d2d2d2d2d2d2d2d2072616e646f6d4e756d6265723a202573202d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d207265717565737449643a202564202d2d2d2d2d2d2d2d2d2d2d2d2d2da26469706673582212204005f4e79feb89f369efcdcef0b8980b6481d2f5372e097325513eb37383107064736f6c63430008070033a2646970667358221220e61e6dc80dbc60328f0046cb879894299f967baf9f1bac5faac391ebadd9896764736f6c63430008070033";

type TenantSpaceNFTFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TenantSpaceNFTFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TenantSpaceNFTFactory__factory extends ContractFactory {
  constructor(...args: TenantSpaceNFTFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TenantSpaceNFTFactory";
  }

  deploy(
    _rngV2: string,
    _vrfCoordinatorV2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TenantSpaceNFTFactory> {
    return super.deploy(
      _rngV2,
      _vrfCoordinatorV2,
      overrides || {}
    ) as Promise<TenantSpaceNFTFactory>;
  }
  getDeployTransaction(
    _rngV2: string,
    _vrfCoordinatorV2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rngV2,
      _vrfCoordinatorV2,
      overrides || {}
    );
  }
  attach(address: string): TenantSpaceNFTFactory {
    return super.attach(address) as TenantSpaceNFTFactory;
  }
  connect(signer: Signer): TenantSpaceNFTFactory__factory {
    return super.connect(signer) as TenantSpaceNFTFactory__factory;
  }
  static readonly contractName: "TenantSpaceNFTFactory";
  public readonly contractName: "TenantSpaceNFTFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TenantSpaceNFTFactoryInterface {
    return new utils.Interface(_abi) as TenantSpaceNFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TenantSpaceNFTFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TenantSpaceNFTFactory;
  }
}
