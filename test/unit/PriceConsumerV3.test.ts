import { assert } from "chai"
import { BigNumber } from "ethers"
import { deployments, network, ethers } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { MockV3Aggregator, PriceConsumerV3 } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
import { toWei } from "../ethersjs-helper/ethersjsHelper"
import { fromWei } from "../ethersjs-helper/ethersjsHelper"


!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Unit Tests - PriceConsumerV3.sol", async function () {
      // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
      let priceConsumerV3: PriceConsumerV3
      let mockV3Aggregator: MockV3Aggregator

      beforeEach(async () => {
        await deployments.fixture(["mocks", "feed"])
        priceConsumerV3 = await ethers.getContract("PriceConsumerV3")
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator")
      })

      describe("constructor", () => {
        it("sets the aggregator addresses correctly", async () => {
          const response: string = await priceConsumerV3.getPriceFeed()
          console.log(`Response of priceConsumerV3.getPriceFeed(): ${ response }`)
          assert.equal(response, mockV3Aggregator.address)
        })
      })

      describe("getLatestPrice", () => {
        it("should return the same value as the mock", async () => {
          const priceConsumerResult: BigNumber = await priceConsumerV3.getLatestPrice()
          const priceFeedResult: BigNumber = (await mockV3Aggregator.latestRoundData()).answer
          console.log(`Response of priceConsumerV3.getLatestPrice() and priceConsumerV3.latestRoundData(): ${ fromWei(priceConsumerResult) } ETH`)
          console.log(`Response of priceConsumerV3.priceFeedResult() and mockV3Aggregator.latestRoundData(): ${ fromWei(priceFeedResult) } ETH`)
          assert.equal(priceConsumerResult.toString(), priceFeedResult.toString())
        })
      })
    })
