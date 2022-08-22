// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { TenantSpaceNFT } from "./TenantSpaceNFT.sol";
import { TenantSpaceNFTFactory } from "./TenantSpaceNFTFactory.sol";


/**
 * @title - The Shopping Mall contract
 * @notice - Owners can lend tenants and Renters can rent a tentants in this contract
 */ 
contract ShoppingMall {

    IERC20 public immutable underlyingToken;
    TenantSpaceNFTFactory public immutable tenantSpaceNFTFactory;

    constructor(IERC20 _underlyingToken, TenantSpaceNFTFactory _tenantSpaceNFTFactory) {
        underlyingToken = _underlyingToken;
        tenantSpaceNFTFactory = _tenantSpaceNFTFactory;
    }

    /**
     * @notice - A owner create a tenant space NFT for rent in a Shopping Mall
     */
    function createTenantSpaceNFT() public returns (uint) {
        //[TODO]:
    }

    /*
     * @notice - A user rent a tenant space in a Shopping Mall.
     */
    function rentTenantSpace() public returns (uint) {
        //[TODO]:
    }


}
