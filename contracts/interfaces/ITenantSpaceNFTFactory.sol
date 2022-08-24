// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ITenantSpaceNFT } from "./ITenantSpaceNFT.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITenantSpaceNFTFactory {

    /**
     * @notice - Create a new TenantSpaceNFT
     * @dev - Only owner of shopping mall can execute this method
     */ 
    function createTenantSpaceNFT(string memory name, string memory symbol) external;

    event TenantSpaceNFTCreated(
        address owner, 
        ITenantSpaceNFT tenantSpaceNFT
    );

}
