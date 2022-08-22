// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import "./TenantSpaceNFT.sol";

/**
 * @title - The Tenant Space NFT Factory contract
 * @notice - This is the Factory contract of Tenant Space NFT (ERC4907-based NFT)
 */ 
contract TenantSpaceNFTFactory {

    address[] private tenantSpaceNFTs;

    constructor() {}

    function createTenantSpaceNFT(string memory name_, string memory symbol_) public {
        TenantSpaceNFT tenantSpaceNFT = new TenantSpaceNFT(name_, symbol_);
        tenantSpaceNFTs.push(address(tenantSpaceNFT));
    }

}
