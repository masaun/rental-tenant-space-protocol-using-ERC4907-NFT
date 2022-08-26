// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import { TenantSpaceNFT } from "./TenantSpaceNFT.sol";

//@dev - Interfaces
import { ITenantSpaceNFTFactory } from "./interfaces/ITenantSpaceNFTFactory.sol";

//@dev - RNG (Random Number Generated) via Chainlink VRF
import { IRandomNumberGeneratorV2 } from "./interfaces/IRandomNumberGeneratorV2.sol";
import { VRFCoordinatorV2Mock } from "./chainlink-examples/test/VRFCoordinatorV2Mock.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";
import { Events } from "./libraries/Events.sol";


/**
 * @title - The Tenant Space NFT Factory contract
 * @notice - This is the Factory contract of Tenant Space NFT (ERC4907-based NFT)
 */ 
contract TenantSpaceNFTFactory is ITenantSpaceNFTFactory {

    address[] private tenantSpaceNFTs;

    IRandomNumberGeneratorV2 public rngV2;
    VRFCoordinatorV2Mock public vrfCoordinatorV2;

    constructor(IRandomNumberGeneratorV2 _rngV2, VRFCoordinatorV2Mock _vrfCoordinatorV2) {
        rngV2 = _rngV2;
        vrfCoordinatorV2 = _vrfCoordinatorV2;
    }

    /**
     * @notice - Create a new TenantSpaceNFT
     * @dev - Only tenant owner of shopping mall can execute this method
     */ 
    function createTenantSpaceNFT(string memory name, string memory symbol) public override {
        TenantSpaceNFT tenantSpaceNFT = new TenantSpaceNFT(name, symbol, rngV2, vrfCoordinatorV2);
        //TenantSpaceNFT tenantSpaceNFT = new TenantSpaceNFT(name, symbol);
        tenantSpaceNFTs.push(address(tenantSpaceNFT));

        //[TODO]: Transfer ownership of NFT into a tenant owner's wallet address
        address tenantOwner = msg.sender;
        emit Events.TenantSpaceNFTCreated(tenantOwner, tenantSpaceNFT);
    }

}
