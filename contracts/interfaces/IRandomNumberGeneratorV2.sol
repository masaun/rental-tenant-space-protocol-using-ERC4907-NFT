// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import { DataTypes } from '../libraries/DataTypes.sol';


interface IRandomNumberGeneratorV2 {

    function requestRandomWords() external;

    function getSRandomWords() external view returns (uint256[] memory _s_randomWords);

    function getSRandomWord() external view returns (uint256 _s_randomWord);

    function getSRequestId() external view returns (uint256 _s_requestId);

}