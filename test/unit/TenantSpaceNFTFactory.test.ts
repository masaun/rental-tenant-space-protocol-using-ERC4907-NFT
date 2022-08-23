import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { developmentChains } from "../../helper-hardhat-config"
import { TenantSpaceNFTFactory } from "../../typechain"

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
    : describe("Unit Test - TenantSpaceNFTFactory.sol", async function () {
          //@dev - Signer of wallet addresses
          let deployer: SignerWithAddress
          let user1: SignerWithAddress
          let user2: SignerWithAddress
          let addrs: SignerWithAddress[]

          //@dev - wallet addresses
          let DEPLOYER: string

          //@dev - Variables for assigning contract instances          
          let tenantSpaceNFTFactory: TenantSpaceNFTFactory

          //@dev - Variables for assigning deployed-addresses
          let TENANT_SPACE_NFT_FACTORY: string


          before(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, user1, user2, ...addrs] = await ethers.getSigners()
              DEPLOYER = deployer.address
              console.log(`\n deployer: ${ DEPLOYER }`)

              //@dev - Using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              tenantSpaceNFTFactory = await ethers.getContract("TenantSpaceNFTFactory")
              TENANT_SPACE_NFT_FACTORY = tenantSpaceNFTFactory.address
              console.log(`\n##### Deployed-contract address of the TenantSpaceNFTFactory.sol: ${ TENANT_SPACE_NFT_FACTORY } ######`)
          })

          it(`Should be successful to ~~`, async () => {
              //[TODO]: 
          })

      })
