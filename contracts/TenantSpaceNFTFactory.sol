// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import { TenantSpaceNFT } from "./TenantSpaceNFT.sol";

//@dev - Interfaces
import { ITenantSpaceNFTFactory } from "./interfaces/ITenantSpaceNFTFactory.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";
import { Events } from "./libraries/Events.sol";


/**
 * @title - The Tenant Space NFT Factory contract
 * @notice - This is the Factory contract of Tenant Space NFT (ERC4907-based NFT)
 */ 
contract TenantSpaceNFTFactory is ITenantSpaceNFTFactory {

    address[] private tenantSpaceNFTs;

    constructor() {}

    /**
     * @notice - Create a new TenantSpaceNFT
     * @dev - Only owner of shopping mall can execute this method
     */ 
    function createTenantSpaceNFT(string memory name, string memory symbol) public override {
        TenantSpaceNFT tenantSpaceNFT = new TenantSpaceNFT(name, symbol);
        tenantSpaceNFTs.push(address(tenantSpaceNFT));

        //[TODO]: Transfer ownership of NFT into owner's wallet address
        address owner = msg.sender;
        emit Events.TenantSpaceNFTCreated(owner, tenantSpaceNFT);
    }

}
