// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { TenantNFT } from "./TenantNFT.sol";


/**
 * @title - The Renting Marketplace contract
 * @notice - Lend / Rent a Tenant NFT on this marketplace contract
 */ 
contract RentingMarketplace {

    IERC20 public immutable underlyingToken;
    TenantNFT public immutable tenantNFT;

    constructor(IERC20 _underlyingToken, TenantNFT _tenantNFT) {
        underlyingToken = _underlyingToken;
        tenantNFT = _tenantNFT;
    }

    /**
     * @notice - Lend a Tenant NFT on this market contract
     */ 
    function lendTenantNFT() public returns (uint) {
        //[TODO]:
    }

    /**
     * @notice - Rent a Tenant NFT on this market contract
     */ 
    function rentTenantNFT() public returns (uint) {
        //[TODO]:
    }


}
