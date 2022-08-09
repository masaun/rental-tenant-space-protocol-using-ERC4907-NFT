// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import "./ERC4907BasedNFT.sol";

/**
 * @title - ERC4907-based NFT Factory contract
 * @notice - This is the Factory contract of ERC4907-based NFT
 */ 
contract ERC4907BasedNFTFactory {

    address[] private erc4907BasedNFTs;

    constructor() {}

    function createERC4907BasedNFT(string memory name_, string memory symbol_) public {
        ERC4907BasedNFT erc4907BasedNFT = new ERC4907BasedNFT(name_, symbol_);
        erc4907BasedNFTs.push(address(erc4907BasedNFT));
    }

}
