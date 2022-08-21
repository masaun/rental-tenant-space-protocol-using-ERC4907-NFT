// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import "./TenantNFT.sol";

/**
 * @title - The Tenant NFT Factory contract
 * @notice - This is the Factory contract of Tenant NFT (ERC4907-based NFT)
 */ 
contract TenantNFTFactory {

    address[] private tenantNFTs;

    constructor() {}

    function createTenantNFT(string memory name_, string memory symbol_) public {
        TenantNFT tenantNFT = new TenantNFT(name_, symbol_);
        tenantNFTs.push(address(tenantNFT));
    }

}
