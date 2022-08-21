// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { ERC4907BasedNFT } from "./ERC4907BasedNFT.sol";
import { RentingMarketplace } from "./RentingMarketplace.sol";


/**
 * @title - The Shopping Mall contract
 * @notice - Owners can lend tenants and Renters can rent a tentants in this contract
 */ 
contract ShoppingMall {

    IERC20 public immutable underlyingToken;
    ERC4907BasedNFT public immutable erc4907BasedNFT;
    RentingMarketplace public immutable rentingMarketplace;

    constructor(IERC20 _underlyingToken, ERC4907BasedNFT _erc4907BasedNFT, RentingMarketplace _rentingMarketplace) {
        underlyingToken = _underlyingToken;
        erc4907BasedNFT = _erc4907BasedNFT;
        rentingMarketplace = _rentingMarketplace;
    }

    /**
     * @notice - Lend a tenant in a Shopping Mall
     */
    function lendTenant() public returns (uint) {
        //[TODO]:
    }

    /*
     * @notice - Rent a tenant in a Shopping Mall
     */
    function rentTenant() public returns (uint) {
        //[TODO]:
    }


}
