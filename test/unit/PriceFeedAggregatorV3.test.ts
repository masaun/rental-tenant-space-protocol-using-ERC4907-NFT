import { assert } from "chai"
import { BigNumber } from "ethers"
import { deployments, network, ethers } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { MockV3Aggregator, PriceFeedAggregatorV3 } from "../../typechain"

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("PriceFeedAggregatorV3 Unit Tests", async function () {
      // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
      let priceFeedAggregatorV3: PriceFeedAggregatorV3
      let mockV3Aggregator: MockV3Aggregator

      beforeEach(async () => {
        await deployments.fixture(["mocks", "feed"])
        priceFeedAggregatorV3 = await ethers.getContract("PriceFeedAggregatorV3")
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator")
      })

      describe("constructor", () => {
        it("sets the aggregator addresses correctly", async () => {
          const response: string = await priceFeedAggregatorV3.getPriceFeed()
          console.log(`Response of priceFeedAggregatorV3.getPriceFeed(): ${ response }`)
          assert.equal(response, mockV3Aggregator.address)
        })
      })

      describe("getLatestPrice", () => {
        it("should return the same value as the mock", async () => {
          const priceFeedAggregatorV3Result: BigNumber = await priceFeedAggregatorV3.getLatestPrice()
          const priceFeedResult: BigNumber = (await mockV3Aggregator.latestRoundData()).answer
          console.log(`Response of priceFeedAggregatorV3.getLatestPrice() and @priceFeedAggregatorV3.latestRoundData(): ${ priceFeedAggregatorV3Result }`)
          console.log(`Response of priceFeedAggregatorV3.priceFeedResult() and mockV3Aggregator.latestRoundData(): ${ priceFeedResult }`)
          assert.equal(priceFeedAggregatorV3Result.toString(), priceFeedResult.toString())
        })
      })
    })
