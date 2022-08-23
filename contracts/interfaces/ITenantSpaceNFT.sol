// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITenantSpaceNFT {

    function mint(address to) external;

    function setPrice(address _tenant, uint256 _tokenId, uint256 _price) external;

    function getPrice(address _tenant, uint256 _tokenId) external view returns (uint256 _price);

}
