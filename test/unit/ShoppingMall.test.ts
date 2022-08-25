import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { developmentChains } from "../../helper-hardhat-config"
import { ShoppingMall, TenantSpaceNFT, TenantSpaceNFTFactory, LinkToken, MockOracle, VRFCoordinatorV2Mock, PriceConsumerV3 } from "../../typechain"

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
    : describe("Unit Test - ShoppingMall.sol", async function () {
          //@dev - Signer of wallet addresses
          let deployer: SignerWithAddress
          let tenantOwner1: SignerWithAddress
          let tenantOwner2: SignerWithAddress
          let tenantUser1: SignerWithAddress
          let tenantUser2: SignerWithAddress
          let addrs: SignerWithAddress[]

          //@dev - wallet addresses
          let DEPLOYER: string
          let TENANT_OWNER_1: string
          let TENANT_OWNER_2: string
          let TENANT_USER_1: string
          let TENANT_USER_2: string

          //@dev - Variables for assigning contract instances
          let shoppingMall: ShoppingMall
          let tenantSpaceNFT: TenantSpaceNFT
          let tenantSpaceNFTFactory: TenantSpaceNFTFactory
          let linkToken: LinkToken
          let mockOracle: MockOracle
          let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock
          let priceConsumerV3: PriceConsumerV3

          //@dev - Variables for assigning deployed-addresses
          let SHOPPING_MALL: string
          let TENANT_SPACE_NFT: string
          let TENANT_SPACE_NFT_FACTORY: string
          let VRF_COORDINATOR_V2_MOCK: string
          let PRICE_CONSUMER_V3: string


          before(async () => {
              //@dev - Get signers and wallet addresses for this tests 
              [deployer, tenantOwner1, tenantOwner2, tenantUser1, tenantUser2, ...addrs] = await ethers.getSigners()
              DEPLOYER = deployer.address
              TENANT_OWNER_1 = tenantOwner1.address
              TENANT_OWNER_2 = tenantOwner2.address
              TENANT_USER_1 = tenantUser1.address
              TENANT_USER_2 = tenantUser2.address
              console.log(`\n deployer: ${ DEPLOYER }`)

              //@dev - Using "hardhat-deploy" module
              await deployments.fixture(["mocks", "api"])

              tenantSpaceNFTFactory = await ethers.getContract("TenantSpaceNFTFactory")
              TENANT_SPACE_NFT_FACTORY = tenantSpaceNFTFactory.address
              console.log(`\n##### Deployed-contract address of the TenantSpaceNFTFactory.sol: ${ TENANT_SPACE_NFT_FACTORY } ######`)

              shoppingMall = await ethers.getContract("ShoppingMall")
              SHOPPING_MALL = shoppingMall.address
              console.log(`\n##### Deployed-contract address of the ShoppingMall.sol: ${ SHOPPING_MALL } ######`)

              linkToken = await ethers.getContract("LinkToken")
              const linkTokenAddress: string = linkToken.address
              console.log(`\n##### Deployed-contract address of LINK Token: ${ linkTokenAddress } ######`)

              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
              VRF_COORDINATOR_V2_MOCK = vrfCoordinatorV2Mock.address
              console.log(`\n##### Deployed-contract address of the VRFCoordinatorV2Mock.sol: ${ VRF_COORDINATOR_V2_MOCK } ######`)

              priceConsumerV3 = await ethers.getContract("PriceConsumerV3")
              PRICE_CONSUMER_V3 = priceConsumerV3.address
              console.log(`\n##### Deployed-contract address of the PriceConsumerV3.sol: ${ PRICE_CONSUMER_V3 } ######`)
          })

          it(`createTenantSpaceNFT() - Should be successful to create a new TenantSpaceNFT`, async () => {
              const name = "Test Tenant Space NFT"
              const symbol = "TTS_NFT"
              let tx: ContractTransaction = await tenantSpaceNFTFactory.connect(tenantOwner1).createTenantSpaceNFT(name, symbol)
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

          it(`mint() - Should be successful to mint a TenantSpaceNFT (that is based on ERC4907) to tenantOwner1's wallet address`, async () => {
              let tx: ContractTransaction = await tenantSpaceNFT.connect(tenantOwner1).mint(TENANT_OWNER_1)
              let txReceipt: ContractReceipt = await tx.wait()
          })

          it(`balanceOf() and ownerOf() - A tenantOwner1's wallet should has a TenantSpaceNFT of tenantSpaceId=0`, async () => {
              let TenantSpaceNFTBalanceOftenantOwner1  = await tenantSpaceNFT.balanceOf(TENANT_OWNER_1)
              console.log(`TenantSpaceNFT balance of tenantOwner1: ${ TenantSpaceNFTBalanceOftenantOwner1 }`)

              const tenantSpaceId = 0
              let ownerOfTenantSpaceNFT = await tenantSpaceNFT.ownerOf(tenantSpaceId)
              console.log(`Owner of TenantSpaceNFT of tenantSpaceId=0: ${ ownerOfTenantSpaceNFT }`)
          })

          it(`setPrice() - Should be successful that a tenant owner set price of TenantSpaceNFT at 100 USD`, async () => {
              const tenantSpaceId = 0
              const price: BigNumber = toWei(100) // 100 USD
              let tx: ContractTransaction = await tenantSpaceNFT.connect(tenantOwner1).setPrice(tenantSpaceId, price)
              let txReceipt: ContractReceipt = await tx.wait()
          })

          it(`getPrice() - the price of TenantSpaceNFT should be at 100 USD`, async () => {
              const tenantSpaceId = 0
              let price: BigNumber = await tenantSpaceNFT.getPrice(tenantSpaceId)
              console.log(`price of TenantSpaceNFT of tenantSpaceId=0: ${ fromWei(price) } USD`)
          })


          ///------------------------
          /// ERC4907 related method
          ///------------------------
          it(`setApprovalForAll() and setUser() - tenantOwner1 should approve tenantUser1. Then, tenantOwner1 set tenantUser1 as a user role with an expiration period`, async () => {
              //@dev - Assign an expiration period
              let expires = Math.floor(new Date().getTime()/1000) + 1000

              //@dev - tenantOwner1 approve tenantUser1 for the TenantSpaceNFT (ERC4907-based NFT)
              let tx1: ContractTransaction = await tenantSpaceNFT.connect(tenantOwner1).setApprovalForAll(TENANT_USER_1, true)

              //@dev - tenantOwner1 set tenantUser1 as a user role in the TenantSpaceNFT (ERC4907-based NFT) with an expiration period
              const tenantSpaceId = 0
              let tx2: ContractTransaction = await tenantSpaceNFT.connect(tenantOwner1).setUser(tenantSpaceId, TENANT_USER_1, BigInt(expires))
          })

          it(`userOf() - tenantUser1 should has a user role of TenantSpaceNFT`, async () => {
              const tenantSpaceId = 0
              let walletAddressThatHasUserRole = await tenantSpaceNFT.userOf(tenantSpaceId)
              console.log(`Wallet address that has a user role of TenantSpaceNFT: ${ walletAddressThatHasUserRole }`)

              assert.equal(
                  walletAddressThatHasUserRole,
                  TENANT_USER_1,
                  "tenantUser1 should has a user role of TenantSpaceNFT"
              )
          })

          it(`ownerOf() - tenantOwner1 should has a owner role of TenantSpaceNFT`, async () => {
              const tenantSpaceId = 0
              let walletAddressThatHasOwnerRole = await tenantSpaceNFT.ownerOf(tenantSpaceId)
              console.log(`Wallet address that has a owner role of TenantSpaceNFT: ${ walletAddressThatHasOwnerRole }`)
              assert.equal(
                  walletAddressThatHasOwnerRole,
                  TENANT_OWNER_1,
                  "tenantOwner1 should has a owner role of TenantSpaceNFT"
              )
          })


          ///-----------------------------------------
          /// Methods of ShoppingMall.sol
          ///-----------------------------------------
          it(`storeTenantSpaceNFT() - A tenant owner should store a tenant space NFT for rent onto the Shopping Mall contract (ShoppingMall.sol)`, async () => {
              //[TODO]: 
              const tenantSpaceId = 0
              let tx1: ContractTransaction = await tenantSpaceNFT.connect(tenantOwner1).approve(SHOPPING_MALL, tenantSpaceId)
              let tx2: ContractTransaction = await shoppingMall.connect(tenantOwner1).storeTenantSpaceNFT(TENANT_SPACE_NFT, tenantSpaceId)
          })

          it(`rentTenantSpaceNFT() - A tenant user should rent a tenant space (NFT) from its tenant owner in the Shopping Mall contract (ShoppingMall.sol)`, async () => {
              const tenantSpaceId = 0

              //@dev - Retrieve ETH/USD price via Chainlink's price feed
              let priceInETHPerUSD = priceConsumerV3.getLatestPrice()
              console.log(`Price in ETH per USD (via Chainlink PriceFeed): ${ priceInETHPerUSD }`)

              //@dev - Calculate expiration period
              const expires = Math.floor(new Date().getTime()/1000) + 1000
              const _tenantOwner: string = await tenantSpaceNFT.ownerOf(tenantSpaceId);
              const _tenantUser: string = await tenantSpaceNFT.userOf(tenantSpaceId);
              let tx: ContractTransaction = await shoppingMall.connect(tenantUser1).rentTenantSpaceNFT(TENANT_SPACE_NFT, tenantSpaceId, _tenantOwner, _tenantUser, expires)
          })

      })
