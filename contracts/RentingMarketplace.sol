// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ERC4907BasedNFT } from "./ERC4907BasedNFT.sol";


/**
 * @title - The Renting Marketplace contract
 * @notice - Lend / Rent a ERC4907-based NFT on this marketplace contract
 */ 
contract RentingMarketplace {

    IERC20 public immutable underlyingToken;
    ERC4907BasedNFT public immutable erc4907BasedNFT;

    constructor(IERC20 _underlyingToken, ERC4907BasedNFT _erc4907BasedNFT) {
        underlyingToken = _underlyingToken;
        erc4907BasedNFT = _erc4907BasedNFT;
    }

    /**
     * @notice - Lend a ERC4907-based NFT on this market contract
     */ 
    function lendERC4907BasedNFT() public returns (uint) {
        //[TODO]:
    }

    /**
     * @notice - Rent a ERC4907-based NFT on this market contract
     */ 
    function rentERC4907BasedNFT() public returns (uint) {
        //[TODO]:
    }


}
