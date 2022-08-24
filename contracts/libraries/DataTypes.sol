// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Tenant space data
     */ 
    struct TenantSpaceData {
        address tenantOwner;
        address tenantUser;
        uint256 price;   // a tenant price
    }

    /**
     * @notice - Enum of data type
     */ 
    enum DataType {
        DATA_TYPE_1,
        DATA_TYPE_2,
        DATA_TYPE_3
    }

}
