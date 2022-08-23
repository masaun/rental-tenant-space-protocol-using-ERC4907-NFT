import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { developmentChains } from "../../helper-hardhat-config"
import { LinkToken, MockOracle, VRFCoordinatorV2Mock } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
import { toWei } from "../ethersjs-helper/ethersjsHelper"
import { fromWei } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Unit test of the RetirementCertificateNFTAssociatedTicket.sol
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Unit Test - TenantSpaceNFT.sol", async function () {
          //@dev - Signer of wallet addresses
          let deployer: SignerWithAddress
          let user1: SignerWithAddress
          let user2: SignerWithAddress
          let addrs: SignerWithAddress[]

          //@dev - wallet addresses
          let DEPLOYER: string

          //@dev - Variables for assigning contract instances          
          let linkToken: LinkToken
          let mockOracle: MockOracle
          let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock

          //@dev - Variables for assigning deployed-addresses
          let VRF_COORDINATOR_V2_MOCK: string


          before(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, user1, user2, ...addrs] = await ethers.getSigners()
              DEPLOYER = deployer.address
              console.log(`\n deployer: ${ DEPLOYER }`)

              //@dev - Using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
              VRF_COORDINATOR_V2_MOCK = vrfCoordinatorV2Mock.address
              console.log(`\n##### Deployed-contract address of the VRFCoordinatorV2Mock.sol: ${ VRF_COORDINATOR_V2_MOCK } ######`)
          })

          it(`Should be successful to ~~`, async () => {
              //[TODO]: 
          })

      })
