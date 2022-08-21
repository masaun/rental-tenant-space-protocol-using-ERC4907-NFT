// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Staking } from "./Staking.sol";
import { TenantNFT } from "./TenantNFT.sol";


/**
 * @title - The vault contract
 */ 
contract Vault {

    IERC20 public immutable underlyingToken;
    Staking public immutable staking;
    TenantNFT public immutable tenantNFT;

    uint public totalSupply;
    mapping(address => uint) public balanceOf;

    constructor(IERC20 _underlyingToken, Staking _staking, TenantNFT _tenantNFT) {
        underlyingToken = _underlyingToken;
        staking = _staking;
        tenantNFT = _tenantNFT;
    }

    /**
     * @notice - Deposit underlyingToken and a ERC4907-based NFT
     * @param _amount - underlyingToken amount to be deposited
     */ 
    function deposit(uint _amount, uint _tokenId) external {
        //@dev - Deposit a ERC4907-based NFT
        //uint256 _tokenId = 0;
        tenantNFT.transferFrom(msg.sender, address(this), _tokenId);

        //@dev - Stake underlying tokens into the Staking contract
        staking.stake(_amount);

        /*
        a = amount
        B = balance of underlyingToken before deposit
        T = total supply
        s = shares to mint

        (T + s) / T = (a + B) / B 

        s = aT / B
        */
        uint shares;
        if (totalSupply == 0) {
            shares = _amount;
        } else {
            shares = (_amount * totalSupply) / underlyingToken.balanceOf(address(this));
        }

        _mint(msg.sender, shares);
        underlyingToken.transferFrom(msg.sender, address(this), _amount);
    }

    function withdraw(uint _shares) external {
        /*
        a = amount
        B = balance of underlyingToken before withdraw
        T = total supply
        s = shares to burn

        (T - s) / T = (B - a) / B 

        a = sB / T
        */
        uint amount = (_shares * underlyingToken.balanceOf(address(this))) / totalSupply;
        _burn(msg.sender, _shares);
        underlyingToken.transfer(msg.sender, amount);
    }


    ///----------------------
    /// Internal methods
    ///----------------------
    function _mint(address _to, uint _shares) private {
        totalSupply += _shares;
        balanceOf[_to] += _shares;
    }

    function _burn(address _from, uint _shares) private {
        totalSupply -= _shares;
        balanceOf[_from] -= _shares;
    }

}





interface IERC20 {
    function totalSupply() external view returns (uint);

    function balanceOf(address account) external view returns (uint);

    function transfer(address recipient, uint amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint amount);
    event Approval(address indexed owner, address indexed spender, uint amount);
}
