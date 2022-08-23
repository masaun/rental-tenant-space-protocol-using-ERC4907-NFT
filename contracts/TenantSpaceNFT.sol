// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

//@dev - ERC4907 related modules
import "./ERC4907/ERC4907.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";

//@dev - Debugging
import "hardhat/console.sol";

/**
 * @title - The tenant space NFT contract
 * @notice - This contract is a ERC4907-based NFT contract
 */
contract TenantSpaceNFT is ERC4907 {

    mapping (address => mapping (uint256 => DataTypes.TenantSpaceData)) public tenantSpaceDatas;  // [Key]: Tenant address -> TokenID -> the TenantData struct

    constructor(string memory name_, string memory symbol_) ERC4907(name_,symbol_) {
        //[TODO]: 
    }

    function mint(uint256 tokenId, address to) public {
        _mint(to, tokenId);
    }


    /**
     * @notice - Set a price of a tenant NFT
     */
    function setPrice(address _tenant, uint256 _tokenId, uint256 _price) public {
        DataTypes.TenantSpaceData storage tenantSpaceData = tenantSpaceDatas[_tenant][_tokenId];
        tenantSpaceData.price = _price;
    }


    ///-----------------------------
    /// Getter methods
    ///-----------------------------
    
    /**
     * @notice - Get a price of a tenant NFT
     */
    function getPrice(address _tenant, uint256 _tokenId) public view returns (uint256 _price) {
        DataTypes.TenantSpaceData memory tenantSpaceData = tenantSpaceDatas[_tenant][_tokenId];
        return tenantSpaceData.price;
    }

} 
