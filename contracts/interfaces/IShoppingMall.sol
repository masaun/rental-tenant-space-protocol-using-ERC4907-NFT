// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ITenantSpaceNFT } from "./ITenantSpaceNFT.sol";
//import { TenantSpaceNFT } from "../TenantSpaceNFT.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface IShoppingMall {

    /**
     * @notice - A owner create a tenant space NFT for rent in a Shopping Mall
     */
    //function createTenantSpaceNFT(string memory name_, string memory symbol_) external returns (uint);

    /**
     * @notice - A owner store a tenant space NFT for rent in a Shopping Mall
     * @dev - Caller is a owner who has a owner role of tenant space NFT
     * @dev - [TODO]: Parameter of "tenantSpaceId" is better to rename as "tenantSpaceId"
     */
    function storeTenantSpaceNFT(ITenantSpaceNFT tenantSpaceNFT, uint tenantSpaceId) external returns (uint);
    //function storeTenantSpaceNFT(TenantSpaceNFT tenantSpaceNFT, uint tenantSpaceId) external returns (uint);

    /*
     * @notice - A user rent a tenant space in a Shopping Mall.
     * @dev - Caller is a user who has user role of tenant space NFT
     */
    function rentTenantSpaceNFT(ITenantSpaceNFT tenantSpaceNFT, uint tenantSpaceId, address tenant, uint64 expires) external returns (bool);

}
