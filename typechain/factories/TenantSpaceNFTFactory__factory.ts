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
    inputs: [],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506137c8806100206000396000f3fe60806040523480156200001157600080fd5b50600436106200002e5760003560e01c80638e57a8fd1462000033575b600080fd5b6200005160048036038101906200004b9190620001c7565b62000053565b005b6000828260405162000065906200013b565b62000072929190620002dc565b604051809103906000f0801580156200008f573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060003390507f94ab933774a2264129458b4bfec445fe9a6d333d4ac97e43665ba65a4be5af1c81836040516200012d929190620002af565b60405180910390a150505050565b6132c180620004d283390190565b6000620001606200015a8462000340565b62000317565b9050828152602081018484840111156200017f576200017e620004b1565b5b6200018c84828562000402565b509392505050565b600082601f830112620001ac57620001ab620004ac565b5b8135620001be84826020860162000149565b91505092915050565b60008060408385031215620001e157620001e0620004bb565b5b600083013567ffffffffffffffff811115620002025762000201620004b6565b5b620002108582860162000194565b925050602083013567ffffffffffffffff811115620002345762000233620004b6565b5b620002428582860162000194565b9150509250929050565b620002578162000392565b82525050565b6200026881620003c6565b82525050565b60006200027b8262000376565b62000287818562000381565b93506200029981856020860162000411565b620002a481620004c0565b840191505092915050565b6000604082019050620002c660008301856200024c565b620002d560208301846200025d565b9392505050565b60006040820190508181036000830152620002f881856200026e565b905081810360208301526200030e81846200026e565b90509392505050565b60006200032362000336565b905062000331828262000447565b919050565b6000604051905090565b600067ffffffffffffffff8211156200035e576200035d6200047d565b5b6200036982620004c0565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006200039f82620003a6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003d382620003da565b9050919050565b6000620003e782620003ee565b9050919050565b6000620003fb82620003a6565b9050919050565b82818337600083830152505050565b60005b838110156200043157808201518184015260208101905062000414565b8381111562000441576000848401525b50505050565b6200045282620004c0565b810181811067ffffffffffffffff821117156200047457620004736200047d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f830116905091905056fe60806040523480156200001157600080fd5b50604051620032c1380380620032c18339818101604052810190620000379190620001a7565b8181818181600090805190602001906200005392919062000079565b5080600190805190602001906200006c92919062000079565b50505050505050620003b0565b8280546200008790620002c1565b90600052602060002090601f016020900481019282620000ab5760008555620000f7565b82601f10620000c657805160ff1916838001178555620000f7565b82800160010185558215620000f7579182015b82811115620000f6578251825591602001919060010190620000d9565b5b5090506200010691906200010a565b5090565b5b80821115620001255760008160009055506001016200010b565b5090565b6000620001406200013a8462000255565b6200022c565b9050828152602081018484840111156200015f576200015e62000390565b5b6200016c8482856200028b565b509392505050565b600082601f8301126200018c576200018b6200038b565b5b81516200019e84826020860162000129565b91505092915050565b60008060408385031215620001c157620001c06200039a565b5b600083015167ffffffffffffffff811115620001e257620001e162000395565b5b620001f08582860162000174565b925050602083015167ffffffffffffffff81111562000214576200021362000395565b5b620002228582860162000174565b9150509250929050565b6000620002386200024b565b9050620002468282620002f7565b919050565b6000604051905090565b600067ffffffffffffffff8211156200027357620002726200035c565b5b6200027e826200039f565b9050602081019050919050565b60005b83811015620002ab5780820151818401526020810190506200028e565b83811115620002bb576000848401525b50505050565b60006002820490506001821680620002da57607f821691505b60208210811415620002f157620002f06200032d565b5b50919050565b62000302826200039f565b810181811067ffffffffffffffff821117156200032457620003236200035c565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612f0180620003c06000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638fc88c48116100b8578063c2f1f14a1161007c578063c2f1f14a14610372578063c87b56dd146103a2578063e030565e146103d2578063e7572230146103ee578063e985e9c51461041e578063f7d975771461044e57610137565b80638fc88c48146102ba57806395d89b41146102ea578063a22cb46514610308578063a369e33014610324578063b88d4fde1461035657610137565b806342842e0e116100ff57806342842e0e146101f25780636352211e1461020e57806364e38d391461023e5780636a6278421461026e57806370a082311461028a57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806323b872dd146101d6575b600080fd5b61015660048036038101906101519190612011565b61046a565b60405161016391906124a2565b60405180910390f35b6101746104e4565b60405161018191906124d8565b60405180910390f35b6101a4600480360381019061019f919061206b565b610576565b6040516101b19190612404565b60405180910390f35b6101d460048036038101906101cf9190611fd1565b6105bc565b005b6101f060048036038101906101eb9190611ebb565b6106d4565b005b61020c60048036038101906102079190611ebb565b610734565b005b6102286004803603810190610223919061206b565b610754565b6040516102359190612404565b60405180910390f35b61025860048036038101906102539190612098565b610806565b604051610265919061269a565b60405180910390f35b61028860048036038101906102839190611e4e565b610838565b005b6102a4600480360381019061029f9190611e4e565b61085e565b6040516102b1919061269a565b60405180910390f35b6102d460048036038101906102cf919061206b565b610916565b6040516102e1919061269a565b60405180910390f35b6102f2610954565b6040516102ff91906124d8565b60405180910390f35b610322600480360381019061031d9190611f91565b6109e6565b005b61033e60048036038101906103399190611fd1565b6109fc565b60405161034d9392919061241f565b60405180910390f35b610370600480360381019061036b9190611f0e565b610a73565b005b61038c6004803603810190610387919061206b565b610ad5565b6040516103999190612404565b60405180910390f35b6103bc60048036038101906103b7919061206b565b610b5a565b6040516103c991906124d8565b60405180910390f35b6103ec60048036038101906103e79190612098565b610bc2565b005b6104086004803603810190610403919061206b565b610ce5565b604051610415919061269a565b60405180910390f35b61043860048036038101906104339190611e7b565b610e08565b60405161044591906124a2565b60405180910390f35b610468600480360381019061046391906120eb565b610e9c565b005b60007fad092b5c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104dd57506104dc82610f74565b5b9050919050565b6060600080546104f390612900565b80601f016020809104026020016040519081016040528092919081815260200182805461051f90612900565b801561056c5780601f106105415761010080835404028352916020019161056c565b820191906000526020600020905b81548152906001019060200180831161054f57829003601f168201915b5050505050905090565b600061058182611056565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105c782610754565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f9061263a565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106576110a1565b73ffffffffffffffffffffffffffffffffffffffff1614806106865750610685816106806110a1565b610e08565b5b6106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc906125da565b60405180910390fd5b6106cf83836110a9565b505050565b6106e56106df6110a1565b82611162565b610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071b9061267a565b60405180910390fd5b61072f8383836111f7565b505050565b61074f83838360405180602001604052806000815250610a73565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f49061261a565b60405180910390fd5b80915050919050565b600960205282600052604060002060205281600052604060002060205280600052604060002060009250925050505481565b6000610844600761145e565b9050610850828261146c565b61085a6007611646565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c6906125ba565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006006600083815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff169050919050565b60606001805461096390612900565b80601f016020809104026020016040519081016040528092919081815260200182805461098f90612900565b80156109dc5780601f106109b1576101008083540402835291602001916109dc565b820191906000526020600020905b8154815290600101906020018083116109bf57829003601f168201915b5050505050905090565b6109f86109f16110a1565b838361165c565b5050565b6008602052816000526040600020602052806000526040600020600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b610a84610a7e6110a1565b83611162565b610ac3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aba9061267a565b60405180910390fd5b610acf848484846117c9565b50505050565b6000426006600084815260200190815260200160002060000160149054906101000a900467ffffffffffffffff1667ffffffffffffffff1610610b50576006600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610b55565b600090505b919050565b6060610b6582611056565b6000610b6f611825565b90506000815111610b8f5760405180602001604052806000815250610bba565b80610b998461183c565b604051602001610baa9291906123e0565b6040516020818303038152906040525b915050919050565b610bcc3384611162565b610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c029061265a565b60405180910390fd5b6000600660008581526020019081526020016000209050828160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818160000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff16847f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe84604051610cd791906126b5565b60405180910390a350505050565b600080600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000206040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152505090508060400151915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610ea582610754565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f099061259a565b60405180910390fd5b6000600860003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000209050818160020181905550505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061103f57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061104f575061104e8261199d565b5b9050919050565b61105f81611a07565b61109e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110959061261a565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661111c83610754565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061116e83610754565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806111b057506111af8185610e08565b5b806111ee57508373ffffffffffffffffffffffffffffffffffffffff166111d684610576565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661121782610754565b73ffffffffffffffffffffffffffffffffffffffff161461126d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112649061251a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d49061255a565b60405180910390fd5b6112e8838383611a73565b6112f36000826110a9565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461134391906127f0565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461139a9190612769565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611459838383611b9c565b505050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d3906125fa565b60405180910390fd5b6114e581611a07565b15611525576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151c9061253a565b60405180910390fd5b61153160008383611a73565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115819190612769565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461164260008383611b9c565b5050565b6001816000016000828254019250508190555050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c29061257a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117bc91906124a2565b60405180910390a3505050565b6117d48484846111f7565b6117e084848484611ba1565b61181f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611816906124fa565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611884576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611998565b600082905060005b600082146118b657808061189f90612963565b915050600a826118af91906127bf565b915061188c565b60008167ffffffffffffffff8111156118d2576118d1612a99565b5b6040519080825280601f01601f1916602001820160405280156119045781602001600182028036833780820191505090505b5090505b600085146119915760018261191d91906127f0565b9150600a8561192c91906129ac565b60306119389190612769565b60f81b81838151811061194e5761194d612a6a565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561198a91906127bf565b9450611908565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611a7e838383611d38565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b975760006006600083815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006006600083815260200190815260200160002060000160146101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff16817f4e06b4e7000e659094299b3533b47b6aa8ad048e95e872d23d1f4ee55af89cfe6000604051611b8e91906124bd565b60405180910390a35b505050565b505050565b6000611bc28473ffffffffffffffffffffffffffffffffffffffff16611d3d565b15611d2b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611beb6110a1565b8786866040518563ffffffff1660e01b8152600401611c0d9493929190612456565b602060405180830381600087803b158015611c2757600080fd5b505af1925050508015611c5857506040513d601f19601f82011682018060405250810190611c55919061203e565b60015b611cdb573d8060008114611c88576040519150601f19603f3d011682016040523d82523d6000602084013e611c8d565b606091505b50600081511415611cd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cca906124fa565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611d30565b600190505b949350505050565b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000611d73611d6e846126f5565b6126d0565b905082815260208101848484011115611d8f57611d8e612acd565b5b611d9a8482856128be565b509392505050565b600081359050611db181612e58565b92915050565b600081359050611dc681612e6f565b92915050565b600081359050611ddb81612e86565b92915050565b600081519050611df081612e86565b92915050565b600082601f830112611e0b57611e0a612ac8565b5b8135611e1b848260208601611d60565b91505092915050565b600081359050611e3381612e9d565b92915050565b600081359050611e4881612eb4565b92915050565b600060208284031215611e6457611e63612ad7565b5b6000611e7284828501611da2565b91505092915050565b60008060408385031215611e9257611e91612ad7565b5b6000611ea085828601611da2565b9250506020611eb185828601611da2565b9150509250929050565b600080600060608486031215611ed457611ed3612ad7565b5b6000611ee286828701611da2565b9350506020611ef386828701611da2565b9250506040611f0486828701611e24565b9150509250925092565b60008060008060808587031215611f2857611f27612ad7565b5b6000611f3687828801611da2565b9450506020611f4787828801611da2565b9350506040611f5887828801611e24565b925050606085013567ffffffffffffffff811115611f7957611f78612ad2565b5b611f8587828801611df6565b91505092959194509250565b60008060408385031215611fa857611fa7612ad7565b5b6000611fb685828601611da2565b9250506020611fc785828601611db7565b9150509250929050565b60008060408385031215611fe857611fe7612ad7565b5b6000611ff685828601611da2565b925050602061200785828601611e24565b9150509250929050565b60006020828403121561202757612026612ad7565b5b600061203584828501611dcc565b91505092915050565b60006020828403121561205457612053612ad7565b5b600061206284828501611de1565b91505092915050565b60006020828403121561208157612080612ad7565b5b600061208f84828501611e24565b91505092915050565b6000806000606084860312156120b1576120b0612ad7565b5b60006120bf86828701611e24565b93505060206120d086828701611da2565b92505060406120e186828701611e39565b9150509250925092565b6000806040838503121561210257612101612ad7565b5b600061211085828601611e24565b925050602061212185828601611e24565b9150509250929050565b61213481612824565b82525050565b61214381612836565b82525050565b600061215482612726565b61215e818561273c565b935061216e8185602086016128cd565b61217781612adc565b840191505092915050565b61218b816128ac565b82525050565b600061219c82612731565b6121a6818561274d565b93506121b68185602086016128cd565b6121bf81612adc565b840191505092915050565b60006121d582612731565b6121df818561275e565b93506121ef8185602086016128cd565b80840191505092915050565b600061220860328361274d565b915061221382612aed565b604082019050919050565b600061222b60258361274d565b915061223682612b3c565b604082019050919050565b600061224e601c8361274d565b915061225982612b8b565b602082019050919050565b600061227160248361274d565b915061227c82612bb4565b604082019050919050565b600061229460198361274d565b915061229f82612c03565b602082019050919050565b60006122b760278361274d565b91506122c282612c2c565b604082019050919050565b60006122da60298361274d565b91506122e582612c7b565b604082019050919050565b60006122fd603e8361274d565b915061230882612cca565b604082019050919050565b600061232060208361274d565b915061232b82612d19565b602082019050919050565b600061234360188361274d565b915061234e82612d42565b602082019050919050565b600061236660218361274d565b915061237182612d6b565b604082019050919050565b600061238960318361274d565b915061239482612dba565b604082019050919050565b60006123ac602e8361274d565b91506123b782612e09565b604082019050919050565b6123cb8161288e565b82525050565b6123da81612898565b82525050565b60006123ec82856121ca565b91506123f882846121ca565b91508190509392505050565b6000602082019050612419600083018461212b565b92915050565b6000606082019050612434600083018661212b565b612441602083018561212b565b61244e60408301846123c2565b949350505050565b600060808201905061246b600083018761212b565b612478602083018661212b565b61248560408301856123c2565b81810360608301526124978184612149565b905095945050505050565b60006020820190506124b7600083018461213a565b92915050565b60006020820190506124d26000830184612182565b92915050565b600060208201905081810360008301526124f28184612191565b905092915050565b60006020820190508181036000830152612513816121fb565b9050919050565b600060208201905081810360008301526125338161221e565b9050919050565b6000602082019050818103600083015261255381612241565b9050919050565b6000602082019050818103600083015261257381612264565b9050919050565b6000602082019050818103600083015261259381612287565b9050919050565b600060208201905081810360008301526125b3816122aa565b9050919050565b600060208201905081810360008301526125d3816122cd565b9050919050565b600060208201905081810360008301526125f3816122f0565b9050919050565b6000602082019050818103600083015261261381612313565b9050919050565b6000602082019050818103600083015261263381612336565b9050919050565b6000602082019050818103600083015261265381612359565b9050919050565b600060208201905081810360008301526126738161237c565b9050919050565b600060208201905081810360008301526126938161239f565b9050919050565b60006020820190506126af60008301846123c2565b92915050565b60006020820190506126ca60008301846123d1565b92915050565b60006126da6126eb565b90506126e68282612932565b919050565b6000604051905090565b600067ffffffffffffffff8211156127105761270f612a99565b5b61271982612adc565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006127748261288e565b915061277f8361288e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156127b4576127b36129dd565b5b828201905092915050565b60006127ca8261288e565b91506127d58361288e565b9250826127e5576127e4612a0c565b5b828204905092915050565b60006127fb8261288e565b91506128068361288e565b925082821015612819576128186129dd565b5b828203905092915050565b600061282f8261286e565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006128b782612898565b9050919050565b82818337600083830152505050565b60005b838110156128eb5780820151818401526020810190506128d0565b838111156128fa576000848401525b50505050565b6000600282049050600182168061291857607f821691505b6020821081141561292c5761292b612a3b565b5b50919050565b61293b82612adc565b810181811067ffffffffffffffff8211171561295a57612959612a99565b5b80604052505050565b600061296e8261288e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129a1576129a06129dd565b5b600182019050919050565b60006129b78261288e565b91506129c28361288e565b9250826129d2576129d1612a0c565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4f6e6c7920612074656e616e74207370616365206f776e65722063616e20736560008201527f7420707269636500000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b612e6181612824565b8114612e6c57600080fd5b50565b612e7881612836565b8114612e8357600080fd5b50565b612e8f81612842565b8114612e9a57600080fd5b50565b612ea68161288e565b8114612eb157600080fd5b50565b612ebd81612898565b8114612ec857600080fd5b5056fea264697066735822122045170cedba4b8ab7e3c3091bd420d10c6cb7d8832df9ad39754c752377309fb464736f6c63430008070033a2646970667358221220e04403265a27920e8274e7b1a53471e30bb1f1b79f47b8c12c459deec84e674864736f6c63430008070033";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TenantSpaceNFTFactory> {
    return super.deploy(overrides || {}) as Promise<TenantSpaceNFTFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
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
