// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { IShoppingMall } from "./interfaces/IShoppingMall.sol";
import { ITenantSpaceNFT } from "./interfaces/ITenantSpaceNFT.sol";
//import { ITenantSpaceNFTFactory } from "./interfaces/ITenantSpaceNFTFactory.sol";

import { TenantSpaceNFT } from "./TenantSpaceNFT.sol";


/**
 * @title - The Shopping Mall contract
 * @notice - Owners can lend tenants and Renters can rent a tentants in this contract
 */ 
contract ShoppingMall is IShoppingMall {

    constructor() {
        //[TODO]:
    }

    /**
     * @notice - A owner create a tenant space NFT for rent in a Shopping Mall
     */
    // function createTenantSpaceNFT(string memory name_, string memory symbol_) public override returns (uint) {
    //     //[TODO]:
    //     tenantSpaceNFTFactory.createTenantSpaceNFT(name_, symbol_);
    // }

    /**
     * @notice - A owner store a tenant space NFT for rent in a Shopping Mall
     * @dev - Caller is a owner who has a owner role of tenant space NFT
     * @dev - [TODO]: Parameter of "tokenID" is better to rename as "tenantSpaceId"
     */
    function storeTenantSpaceNFT(TenantSpaceNFT tenantSpaceNFT, uint tokenId) public override returns (uint) {
        //@dev - NOTE: A owner of TenantSpaceNFT must approve this contract before transferring its TenantSpaceNFT
        address owner = msg.sender;
        tenantSpaceNFT.transferFrom(owner, address(this), tokenId);
    }

    /**
     * @notice - A user rent a tenant space (NFT) from its owner in a Shopping Mall.
     * @dev - Caller is a user who has user role of tenant space NFT
     */
    function rentTenantSpaceNFT() public override returns (uint) {
        //[TODO]:
    }


}
