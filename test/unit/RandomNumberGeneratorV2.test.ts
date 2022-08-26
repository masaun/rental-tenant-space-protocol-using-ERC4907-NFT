import { assert, expect } from "chai"
import { BigNumber } from "ethers"
import { network, deployments, ethers } from "hardhat"
import { developmentChains, networkConfig } from "../../helper-hardhat-config"
import { RandomNumberGeneratorV2, VRFCoordinatorV2Mock } from "../../typechain"

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("\n Unit Tests - RandomNumberGeneratorV2.sol", async function () {
      let randomNumberGeneratorV2: RandomNumberGeneratorV2
      let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock

      before(async () => {
        await deployments.fixture(["mocks", "vrf"])
        randomNumberGeneratorV2 = await ethers.getContract("RandomNumberGeneratorV2")
        vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
      })

      it("Should successfully request a random number", async () => {
        await expect(randomNumberGeneratorV2.requestRandomWords()).to.emit(
          vrfCoordinatorV2Mock,
          "RandomWordsRequested"
        )
      })

      it("Should successfully request a random number and get a result", async () => {
        await randomNumberGeneratorV2.requestRandomWords()
        const requestId: BigNumber = await randomNumberGeneratorV2.s_requestId()

        // simulate callback from the oracle network
        await expect(
          vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomNumberGeneratorV2.address)
        ).to.emit(randomNumberGeneratorV2, "ReturnedRandomness")

        const firstRandomNumber: BigNumber = await randomNumberGeneratorV2.s_randomWords(0)
        const secondRandomNumber: BigNumber = await randomNumberGeneratorV2.s_randomWords(1)

        //@dev - Get randomNumbers
        const randomNumbers = await randomNumberGeneratorV2.getSRandomWords();
        console.log(`"randomNumbers" retrieved via getSRandomWords(): ${ randomNumbers }`)

        const randomNumber = await randomNumberGeneratorV2.getSRandomWord();        
        console.log(`"randomNumber" retrieved via getSRandomWord(): ${ randomNumber }`)

        assert(
          firstRandomNumber.gt(ethers.constants.Zero),
          "First random number is greather than zero"
        )

        assert(
          secondRandomNumber.gt(ethers.constants.Zero),
          "Second random number is greather than zero"
        )
      })

      it("Should successfully fire event on callback", async function () {
        await new Promise(async (resolve, reject) => {
          randomNumberGeneratorV2.once("ReturnedRandomness", async () => {
            console.log("ReturnedRandomness event fired!")
            
            //@dev - Retrieve random numbers
            const firstRandomNumber: BigNumber = await randomNumberGeneratorV2.s_randomWords(0)
            const secondRandomNumber: BigNumber = await randomNumberGeneratorV2.s_randomWords(1)
            console.log(`firstRandomNumber: ${ firstRandomNumber }`)    // [Example result]: 78541660797044910968829902406342334108369226379826116161446442989268089806461
            console.log(`secondRandomNumber: ${ secondRandomNumber }`)  // [Example result]: 92458281274488595289803937127152923398167637295201432141969818930235769911599

            // assert throws an error if it fails, so we need to wrap
            // it in a try/catch so that the promise returns event
            // if it fails.
            try {
              assert(firstRandomNumber.gt(ethers.constants.Zero))
              assert(secondRandomNumber.gt(ethers.constants.Zero))
              resolve(true)
            } catch (e) {
              reject(e)
            }
          })

          //@dev - Execute requestRandomWords() method
          await randomNumberGeneratorV2.requestRandomWords()

          //@dev - Retrieve a requestId that was used for execution above
          const requestId: BigNumber = await randomNumberGeneratorV2.s_requestId()
          console.log(`requestId: ${ requestId }`)  // [Example result]: 1

          vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomNumberGeneratorV2.address)
        })
      })
    })
