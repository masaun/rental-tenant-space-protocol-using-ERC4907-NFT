// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import { IERC4907 } from "../ERC4907/IERC4907.sol";

import { DataTypes } from '../libraries/DataTypes.sol';


interface ITenantSpaceNFT is IERC721, IERC4907 {

    function mint(address to) external;

    function setPrice(address _tenant, uint256 _tenantSpaceId, uint256 _price) external;

    function getPrice(address _tenant, uint256 _tenantSpaceId) external view returns (uint256 _price);

}
