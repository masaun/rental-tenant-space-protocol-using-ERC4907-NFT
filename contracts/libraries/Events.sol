// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

import { ITenantSpaceNFT } from "../interfaces/ITenantSpaceNFT.sol";

import { DataTypes } from './DataTypes.sol';


library Events {

    event TenantSpaceNFTCreated(
        address owner, 
        ITenantSpaceNFT tenantSpaceNFT
    );

}
