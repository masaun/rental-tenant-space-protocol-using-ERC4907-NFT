/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
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
    inputs: [],
    name: "duration",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "finishAt",
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
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
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
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
    name: "rewardsToken",
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
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "setRewardsDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
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
    name: "updatedAt",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200195a3803806200195a833981810160405281019062000037919062000104565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050506200019e565b600081519050620000fe8162000184565b92915050565b600080604083850312156200011e576200011d6200017f565b5b60006200012e85828601620000ed565b92505060206200014185828601620000ed565b9150509250929050565b600062000158826200015f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200018f816200014b565b81146200019b57600080fd5b50565b60805160601c60a05160601c611774620001e66000396000818161093e01528181610bcd01526110ae01526000818161067201528181610c9e0152610e4401526117746000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c80637519ab50116100ad578063a694fc3a11610071578063a694fc3a14610322578063cc1a378f1461033e578063cd3daf9d1461035a578063d1af0c7d14610378578063df136d65146103965761012b565b80637519ab501461027a5780637b0a47ee1461029857806380faa57d146102b65780638b876347146102d45780638da5cb5b146103045761012b565b80633c6b16ab116100f45780633c6b16ab146101e85780633d18b9121461020457806367d3b4881461020e57806370a082311461022c57806372f702f31461025c5761012b565b80628cc262146101305780630700037d146101605780630fb5a6b41461019057806318160ddd146101ae5780632e1a7d4d146101cc575b600080fd5b61014a60048036038101906101459190611144565b6103b4565b604051610157919061140a565b60405180910390f35b61017a60048036038101906101759190611144565b6104b6565b604051610187919061140a565b60405180910390f35b6101986104ce565b6040516101a5919061140a565b60405180910390f35b6101b66104d4565b6040516101c3919061140a565b60405180910390f35b6101e660048036038101906101e1919061119e565b6104da565b005b61020260048036038101906101fd919061119e565b610722565b005b61020c610a55565b005b610216610c7e565b604051610223919061140a565b60405180910390f35b61024660048036038101906102419190611144565b610c84565b604051610253919061140a565b60405180910390f35b610264610c9c565b604051610271919061134f565b60405180910390f35b610282610cc0565b60405161028f919061140a565b60405180910390f35b6102a0610cc6565b6040516102ad919061140a565b60405180910390f35b6102be610ccc565b6040516102cb919061140a565b60405180910390f35b6102ee60048036038101906102e99190611144565b610cdf565b6040516102fb919061140a565b60405180910390f35b61030c610cf7565b60405161031991906112d4565b60405180910390f35b61033c6004803603810190610337919061119e565b610d1b565b005b6103586004803603810190610353919061119e565b610f65565b005b610362611041565b60405161036f919061140a565b60405180910390f35b6103806110ac565b60405161038d919061134f565b60405180910390f35b61039e6110d0565b6040516103ab919061140a565b60405180910390f35b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054670de0b6b3a7640000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610447611041565b6104519190611517565b600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461049b91906114bd565b6104a5919061148c565b6104af9190611436565b9050919050565b60076020528060005260406000206000915090505481565b60015481565b60085481565b336104e3611041565b6005819055506104f1610ccc565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105be57610534816103b4565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600554600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610601576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f8906113ca565b60405180910390fd5b81600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106509190611517565b9250508190555081600860008282546106699190611517565b925050819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b81526004016106cb929190611326565b602060405180830381600087803b1580156106e557600080fd5b505af11580156106f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071d9190611171565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a79061138a565b60405180910390fd5b60006107ba611041565b6005819055506107c8610ccc565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108955761080b816103b4565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600554600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60025442106108b757600154826108ac919061148c565b6004819055506108f7565b6000600454426002546108ca9190611517565b6108d491906114bd565b905060015481846108e59190611436565b6108ef919061148c565b600481905550505b60006004541161093c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610933906113ea565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161099591906112d4565b60206040518083038186803b1580156109ad57600080fd5b505afa1580156109c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e591906111cb565b6001546004546109f591906114bd565b1115610a36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2d906113aa565b60405180910390fd5b60015442610a449190611436565b600281905550426003819055505050565b33610a5e611041565b600581905550610a6c610ccc565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b3957610aaf816103b4565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600554600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811115610c7a576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610c26929190611326565b602060405180830381600087803b158015610c4057600080fd5b505af1158015610c54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c789190611171565b505b5050565b60025481565b60096020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035481565b60045481565b6000610cda600254426110d6565b905090565b60066020528060005260406000206000915090505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b33610d24611041565b600581905550610d32610ccc565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610dff57610d75816103b4565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600554600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b60008211610e42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e39906113ca565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610e9f939291906112ef565b602060405180830381600087803b158015610eb957600080fd5b505af1158015610ecd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef19190611171565b5081600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f419190611436565b925050819055508160086000828254610f5a9190611436565b925050819055505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ff3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fea9061138a565b60405180910390fd5b4260025410611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102e9061136a565b60405180910390fd5b8060018190555050565b60008060085414156110575760055490506110a9565b600854670de0b6b3a764000060035461106e610ccc565b6110789190611517565b60045461108591906114bd565b61108f91906114bd565b611099919061148c565b6005546110a69190611436565b90505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b60055481565b6000818311156110e657816110e8565b825b905092915050565b6000813590506110ff816116f9565b92915050565b60008151905061111481611710565b92915050565b60008135905061112981611727565b92915050565b60008151905061113e81611727565b92915050565b60006020828403121561115a57611159611627565b5b6000611168848285016110f0565b91505092915050565b60006020828403121561118757611186611627565b5b600061119584828501611105565b91505092915050565b6000602082840312156111b4576111b3611627565b5b60006111c28482850161111a565b91505092915050565b6000602082840312156111e1576111e0611627565b5b60006111ef8482850161112f565b91505092915050565b6112018161154b565b82525050565b61121081611593565b82525050565b6000611223601c83611425565b915061122e8261162c565b602082019050919050565b6000611246600e83611425565b915061125182611655565b602082019050919050565b6000611269601783611425565b91506112748261167e565b602082019050919050565b600061128c600a83611425565b9150611297826116a7565b602082019050919050565b60006112af600f83611425565b91506112ba826116d0565b602082019050919050565b6112ce81611589565b82525050565b60006020820190506112e960008301846111f8565b92915050565b600060608201905061130460008301866111f8565b61131160208301856111f8565b61131e60408301846112c5565b949350505050565b600060408201905061133b60008301856111f8565b61134860208301846112c5565b9392505050565b60006020820190506113646000830184611207565b92915050565b6000602082019050818103600083015261138381611216565b9050919050565b600060208201905081810360008301526113a381611239565b9050919050565b600060208201905081810360008301526113c38161125c565b9050919050565b600060208201905081810360008301526113e38161127f565b9050919050565b60006020820190508181036000830152611403816112a2565b9050919050565b600060208201905061141f60008301846112c5565b92915050565b600082825260208201905092915050565b600061144182611589565b915061144c83611589565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611481576114806115c9565b5b828201905092915050565b600061149782611589565b91506114a283611589565b9250826114b2576114b16115f8565b5b828204905092915050565b60006114c882611589565b91506114d383611589565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561150c5761150b6115c9565b5b828202905092915050565b600061152282611589565b915061152d83611589565b9250828210156115405761153f6115c9565b5b828203905092915050565b600061155682611569565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061159e826115a5565b9050919050565b60006115b0826115b7565b9050919050565b60006115c282611569565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600080fd5b7f726577617264206475726174696f6e206e6f742066696e697368656400000000600082015250565b7f6e6f7420617574686f72697a6564000000000000000000000000000000000000600082015250565b7f72657761726420616d6f756e74203e2062616c616e6365000000000000000000600082015250565b7f616d6f756e74203d203000000000000000000000000000000000000000000000600082015250565b7f7265776172642072617465203d20300000000000000000000000000000000000600082015250565b6117028161154b565b811461170d57600080fd5b50565b6117198161155d565b811461172457600080fd5b50565b61173081611589565b811461173b57600080fd5b5056fea26469706673582212200227527f680a1f6fc8dda71f29dfa0f1ba50d2e6e189404cbd53594eddf1ab2864736f6c63430008070033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Staking";
  }

  deploy(
    _stakingToken: string,
    _rewardToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      _stakingToken,
      _rewardToken,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    _stakingToken: string,
    _rewardToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardToken,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly contractName: "Staking";
  public readonly contractName: "Staking";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}