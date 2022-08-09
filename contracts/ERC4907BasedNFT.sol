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

} 

