import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { developmentChains } from "../../helper-hardhat-config"
import { TenantSpaceNFT, TenantSpaceNFTFactory, LinkToken, MockOracle, VRFCoordinatorV2Mock } from "../../typechain"

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
          let tenantSpaceNFT: TenantSpaceNFT
          let tenantSpaceNFTFactory: TenantSpaceNFTFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle
          let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock

          //@dev - Variables for assigning deployed-addresses
          let TENANT_SPACE_NFT: string
          let TENANT_SPACE_NFT_FACTORY: string
          let VRF_COORDINATOR_V2_MOCK: string


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

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address

              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
              VRF_COORDINATOR_V2_MOCK = vrfCoordinatorV2Mock.address
              console.log(`\n##### Deployed-contract address of the VRFCoordinatorV2Mock.sol: ${ VRF_COORDINATOR_V2_MOCK } ######`)
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
              TENANT_SPACE_NFT = eventLog[1]
              console.log(`Owner of TenantSpaceNFT: ${ ownerOfTenantSpaceNFT }`)
              console.log(`TenantSpaceNFT: ${ TENANT_SPACE_NFT }`)
          })

          it(`Should create a TenantSpaceNFT contract instance`, async () => {
              tenantSpaceNFT = await ethers.getContractAt("TenantSpaceNFT", TENANT_SPACE_NFT)
          })

          it(`mint() - Should be successful to mint a TenantSpaceNFT (that is based on ERC4907) to owner1's wallet address`, async () => {
              let tx: ContractTransaction = await tenantSpaceNFT.connect(owner1).mint(OWNER_1)
              let txReceipt: ContractReceipt = await tx.wait()
          })

          it(`balanceOf() and ownerOf() - A owner1's wallet should has a TenantSpaceNFT of tenantSpaceId=0`, async () => {
              let TenantSpaceNFTBalanceOfOwner1  = await tenantSpaceNFT.balanceOf(OWNER_1)
              console.log(`TenantSpaceNFT balance of owner1: ${ TenantSpaceNFTBalanceOfOwner1 }`)

              const tenantSpaceId = 0
              let ownerOfTenantSpaceNFT = await tenantSpaceNFT.ownerOf(tenantSpaceId)
              console.log(`Owner of TenantSpaceNFT of tenantSpaceId=0: ${ ownerOfTenantSpaceNFT }`)
          })

          ///------------------------
          /// ERC4907 related method
          ///------------------------
          it(`setApprovalForAll() and setUser() - Owner1 should approve tenant1. Then, owner1 set tenant1 as a user role with an expiration period`, async () => {
              //@dev - Assign an expiration period
              let expires = Math.floor(new Date().getTime()/1000) + 1000

              //@dev - Owner1 approve tenant1 for the TenantSpaceNFT (ERC4907-based NFT)
              let tx1: ContractTransaction = await tenantSpaceNFT.connect(owner1).setApprovalForAll(TENANT_1, true)

              //@dev - Owner1 set tenant1 as a user role in the TenantSpaceNFT (ERC4907-based NFT) with an expiration period
              const tenantSpaceId = 0
              let tx2: ContractTransaction = await tenantSpaceNFT.connect(owner1).setUser(tenantSpaceId, TENANT_1, BigInt(expires))
          })

          it(`userOf() - tenant1 should has a user role of TenantSpaceNFT`, async () => {
              const tenantSpaceId = 0
              let walletAddressThatHasUserRole = await tenantSpaceNFT.userOf(tenantSpaceId)
              console.log(`Wallet address that has a user role of TenantSpaceNFT: ${ walletAddressThatHasUserRole }`)

              assert.equal(
                  walletAddressThatHasUserRole,
                  TENANT_1,
                  "tenant1 should has a user role of TenantSpaceNFT"
              )
          })

          it(`ownerOf() - owner1 should has a owner role of TenantSpaceNFT`, async () => {
              //[TODO]: 
              const tenantSpaceId = 0
              let walletAddressThatHasOwnerRole = await tenantSpaceNFT.ownerOf(tenantSpaceId)
              console.log(`Wallet address that has a owner role of TenantSpaceNFT: ${ walletAddressThatHasOwnerRole }`)
              assert.equal(
                  walletAddressThatHasOwnerRole,
                  OWNER_1,
                  "owner1 should has a owner role of TenantSpaceNFT"
              )
          })

      })
