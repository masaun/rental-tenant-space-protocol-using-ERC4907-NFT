import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractTransaction, ContractReceipt } from "ethers"
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
          let owner1: SignerWithAddress
          let owner2: SignerWithAddress
          let tenant1: SignerWithAddress
          let tenant2: SignerWithAddress
          let addrs: SignerWithAddress[]

          //@dev - wallet addresses
          let DEPLOYER: string
          let OWNER_1: string
          let OWNER_2: string
          let TENANT_1: string
          let TENANT_2: string

          //@dev - Variables for assigning contract instances          
          let tenantSpaceNFTFactory: TenantSpaceNFTFactory

          //@dev - Variables for assigning deployed-addresses
          let TENANT_SPACE_NFT_FACTORY: string


          before(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, owner1, owner2, tenant1, tenant2, ...addrs] = await ethers.getSigners()
              DEPLOYER = deployer.address
              OWNER_1 = owner1.address
              OWNER_2 = owner2.address
              TENANT_1 = tenant1.address
              TENANT_2 = tenant2.address
              console.log(`\n deployer: ${ DEPLOYER }`)

              //@dev - Using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              tenantSpaceNFTFactory = await ethers.getContract("TenantSpaceNFTFactory")
              TENANT_SPACE_NFT_FACTORY = tenantSpaceNFTFactory.address
              console.log(`\n##### Deployed-contract address of the TenantSpaceNFTFactory.sol: ${ TENANT_SPACE_NFT_FACTORY } ######`)
          })

          it(`createTenantSpaceNFT() - Should be successful to create a new TenantSpaceNFT`, async () => {
              const name = "Test Tenant Space NFT"
              const symbol = "TTS_NFT"
              let tx: ContractTransaction = await tenantSpaceNFTFactory.connect(owner1).createTenantSpaceNFT(name, symbol)
              let txReceipt: ContractReceipt = await tx.wait()
              //console.log(`txReceipt of tenantSpaceNFTFactory.createTenantSpaceNFT(): ${ JSON.stringify(txReceipt, null, 2) }`)

              let eventLog: any = await getEventLog(txReceipt, "TenantSpaceNFTCreated")
              console.log(`eventLog of "TenantSpaceNFTCreated": ${ JSON.stringify(eventLog, null, 2) }`)

              let ownerOfTenantSpaceNFT: string = eventLog[0]
              let TENANT_SPACE_NFT: string = eventLog[1]
              console.log(`Owner of TenantSpaceNFT: ${ ownerOfTenantSpaceNFT }`)
              console.log(`TenantSpaceNFT: ${ TENANT_SPACE_NFT }`)
          })

      })
