// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import "./ERC4907/ERC4907.sol";

/**
 * @title - ERC4907-based NFT contract
 * @notice - This is same with ERC4907Demo.sol
 */ 
contract ERC4907BasedNFT is ERC4907 {

    constructor(string memory name_, string memory symbol_) ERC4907(name_,symbol_) {
        //[TODO]: 
    }

    function mint(uint256 tokenId, address to) public {
        _mint(to, tokenId);
    }


    /**
     * @notice - Set a price of a tenant NFT
     */
    function setPrice(uint256 price) public {
        //[TODO]: Set a price of NFT and save it into the struct
    }


    ///-----------------------------
    /// Getter methods
    ///-----------------------------
    /**
     * @notice - Get a price of a tenant NFT
     */
    function getPrice(uint256 tokenId) public view returns (uint256 _price) {
        //[TODO]: Get a price of NFT from the struct
    }

} 

