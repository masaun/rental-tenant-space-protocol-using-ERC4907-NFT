// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Tenant data
     */ 
    struct TenantData {
        address tenant;
        uint256 price;   // price for tenant
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
