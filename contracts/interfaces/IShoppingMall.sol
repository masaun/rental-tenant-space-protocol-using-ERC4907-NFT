// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { DataTypes } from '../libraries/DataTypes.sol';


interface IShoppingMall {

    /**
     * @notice - A owner create a tenant space NFT for rent in a Shopping Mall
     */
    function createTenantSpaceNFT(string memory name_, string memory symbol_) external returns (uint);

    /*
     * @notice - A user rent a tenant space in a Shopping Mall.
     */
    function rentTenantSpace() external returns (uint);

}
