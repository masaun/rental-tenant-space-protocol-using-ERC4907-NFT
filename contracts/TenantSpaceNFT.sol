// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

//@dev - ERC4907 related modules
import "./ERC4907/ERC4907.sol";

//@dev - OpenZeppelin
import "@openzeppelin/contracts/utils/Counters.sol";

//@dev - Interfaces
import { ITenantSpaceNFT } from "./interfaces/ITenantSpaceNFT.sol";

//@dev - Struct, Enum, etc
import { DataTypes } from "./libraries/DataTypes.sol";

//@dev - Debugging
import "hardhat/console.sol";

/**
 * @title - The tenant space NFT contract
 * @notice - This contract is a ERC4907-based NFT contract
 */
contract TenantSpaceNFT is ERC4907, ITenantSpaceNFT {

    using Counters for Counters.Counter;
    Counters.Counter private _tenantSpaceIds;

    // IRandomNumberGeneratorV2 public rngV2;
    // VRFCoordinatorV2Mock public vrfCoordinatorV2;

    mapping (address => mapping (uint256 => DataTypes.TenantSpaceData)) public tenantSpaceDatas;  // [Key]: TenantSpaceNFT contract address -> tenantSpaceId -> the TenantSpaceData struct
    mapping (uint => mapping(address => mapping (uint64 => uint256))) public tenantSpaceNFTAssociatedRandomNumbers;   // [Key]: tenantSpaceId -> tenantUser -> expires

    constructor(string memory name_, string memory symbol_) ERC4907(name_, symbol_) {
    //constructor(string memory name_, string memory symbol_, IRandomNumberGeneratorV2 _rngV2, VRFCoordinatorV2Mock _vrfCoordinatorV2) ERC4907(name_, symbol_) {
        // rngV2 = _rngV2;
        // vrfCoordinatorV2 = _vrfCoordinatorV2;
    }

    /**
     * @notice - Mint a new tokenId of this TenantSpaceNFT
     */
    function mint(address to) public override {
        uint newTenantSpaceId = _tenantSpaceIds.current();  // tenantSpaceId is counted from 0 
        _mint(to, newTenantSpaceId);

        _tenantSpaceIds.increment();
    }

    /**
     * @notice - Set the user and expires of this TenantSpaceNFT
     */
    // function setUserWithRandomNumber(uint256 tenantSpaceId, address tenantUser, uint64 expires) public {
    //     //@dev - [TODO]: Retrieve a random number via Chainlink-VRF
    //     uint256[] memory randomNumbers = _getRandomNumbers();
    //     uint256 randomNumber = randomNumbers[0];

    //     //@dev - [TODO / TO BE CONSIDERED]: Store a random number into mapping
    //     tenantSpaceNFTAssociatedRandomNumbers[tenantSpaceId][tenantUser][expires] = randomNumber;

    //     //@dev - [NOTE]: A caller of setUser() method become this contract
    //     setUser(tenantSpaceId, tenantUser, expires);
    // }

    /**
     * @notice - Get random numbers via Chainlink-VRF
     */
    // function _getRandomNumbers() internal returns (uint256[] memory _randomNumbers) {
    //     //@dev - Generate Random Number via Chainlink VRF
    //     rngV2.requestRandomWords();

    //     //@dev - Get requestId
    //     uint256 requestId = rngV2.getSRequestId();
    //     console.log("-------------- requestId: %d --------------", requestId);

    //     //@dev - Execute fulfillRandomWords() method to get callback
    //     vrfCoordinatorV2.fulfillRandomWords(requestId, address(rngV2));

    //     //@dev - Get value of RNs (random nubmers) that is stored in s_randomWords by above
    //     uint256 randomNumber = rngV2.getSRandomWord();
    //     console.log("-------------- randomNumber: %s --------------", randomNumber);
    //     uint256[] memory randomNumbers = rngV2.getSRandomWords();

    //     return randomNumbers;
    // }


    /**
     * @notice - Set a price of a tenant space NFT in USD
     * @dev - Only a tenant space owner can set price
     */
    function setPrice(uint256 _tenantSpaceId, uint256 _price) public override {
        require(msg.sender == ownerOf(_tenantSpaceId), "Only a tenant space owner can set price");
        DataTypes.TenantSpaceData storage tenantSpaceData = tenantSpaceDatas[address(this)][_tenantSpaceId];
        tenantSpaceData.price = _price;
    }


    ///-----------------------------
    /// Getter methods
    ///-----------------------------
    
    /**
     * @notice - Get a price of a tenant NFT in USD
     */
    function getPrice(uint256 _tenantSpaceId) public override view returns (uint256 _price) {
        DataTypes.TenantSpaceData memory tenantSpaceData = tenantSpaceDatas[address(this)][_tenantSpaceId];
        return tenantSpaceData.price;
    }

} 

