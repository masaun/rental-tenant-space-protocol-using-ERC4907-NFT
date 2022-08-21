// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

/**
 * @title DataTypes
 */
library DataTypes {

    /**
     * @notice - Data of Somothing Metadata
     */ 
    struct SomothingMetadata {
        address creator;
        uint256 number;
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
