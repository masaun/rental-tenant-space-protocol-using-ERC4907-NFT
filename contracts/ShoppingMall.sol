// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//@dev - Chainlink modules
import { PriceConsumerV3 } from "./chainlink-examples/PriceConsumerV3.sol";

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

    PriceConsumerV3 public priceConsumerV3;

    constructor(PriceConsumerV3 _priceConsumerV3) {
        priceConsumerV3 = _priceConsumerV3;
    }

    /**
     * @notice - A owner create a tenant space NFT for rent in a Shopping Mall
     */
    // function createTenantSpaceNFT(string memory name_, string memory symbol_) public override returns (uint) {
    //     //[TODO]:
    //     tenantSpaceNFTFactory.createTenantSpaceNFT(name_, symbol_);
    // }

    /**
     * @notice - A tenant owner store a tenant space NFT for rent on the Shopping Mall contract
     * @dev - Caller is a owner who has a owner role of tenant space NFT
     */
    function storeTenantSpaceNFT(ITenantSpaceNFT tenantSpaceNFT, uint tenantSpaceId) public override returns (uint) {
        //@dev - NOTE: A owner of TenantSpaceNFT must approve this contract before transferring its TenantSpaceNFT
        address tenantOwner = msg.sender;
        tenantSpaceNFT.transferFrom(tenantOwner, address(this), tenantSpaceId);
    }

    /**
     * @notice - A tenant user rent a tenant space (NFT) from its tenant owner in a Shopping Mall.
     * @dev - Caller is a user who has user role of tenant space NFT
     * @param expires - Uint64 is required as an expiration period of TenantSpaceNFT (ERC4907-based NFT)
     */
    function rentTenantSpaceNFT(ITenantSpaceNFT tenantSpaceNFT, uint tenantSpaceId, address payable tenantOwner, address tenantUser, uint64 expires) public payable override returns (bool) {
        //@dev - Owner approve a tenant for the TenantSpaceNFT (ERC4907-based NFT)
        tenantSpaceNFT.setApprovalForAll(tenantUser, true);

        //@dev - Owner set a tenant as a user role in the TenantSpaceNFT (ERC4907-based NFT) with an expiration period
        tenantSpaceNFT.setUser(tenantSpaceId, tenantUser, expires);

        //@dev - NOTE: Before executin this method, a tenant user must get USD/ETH price (by using Chainlink Price Feed)
        //@dev - A tenant user pay a tenant fee for rent in ETH
        //int256 tenantSpaceNFTPriceInEth = getPriceFeedETHPerUSD()
        uint feeForRentInEth = msg.value;
        //address payable tenantOwner = tenantSpaceNFT.ownerOf(tenantSpaceId);
        tenantOwner.transfer(feeForRentInEth);
    }

    /**
     * @notice - Get a price feed of ETH price (per USD) by using Chainlink Price Feed
     */ 
    function getPriceFeedETHPerUSD() public view returns (int256 _ethPricePerUsd) {
        return priceConsumerV3.getLatestPrice();
    }


    ///--------------------------
    /// Methods to receive ETH
    ///--------------------------

    //@dev - Function to receive Ether. msg.data must be empty
    receive() external payable {}

    //@dev - Fallback function is called when msg.data is not empty
    fallback() external payable {}

}
