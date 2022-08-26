import { DeployFunction } from "hardhat-deploy/types"
import { getNamedAccounts, deployments, network, ethers } from "hardhat"

import { TenantSpaceNFTFactory, VRFCoordinatorV2Mock, RandomNumberGeneratorV2 } from "../typechain"


const deployFunction: DeployFunction = async () => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId

    //@dev - Variables for assigning contract instances
    let vrfCoordinatorV2Mock: VRFCoordinatorV2Mock
    let randomNumberGeneratorV2: RandomNumberGeneratorV2

    //@dev - Variables for assigning deployed-addresses
    let VRF_COORDINATOR_V2_MOCK: string
    let RANDOM_NUMBER_GENERATOR_V2: string

    // If we are on a local development network, we need to deploy the TenantSpaceNFTFactory contract!
    if (chainId === 31337) {
      randomNumberGeneratorV2 = await ethers.getContract("RandomNumberGeneratorV2")
      RANDOM_NUMBER_GENERATOR_V2 = randomNumberGeneratorV2.address
      //console.log(`\n##### Deployed-contract address of the RandomNumberGeneratorV2.sol: ${ RANDOM_NUMBER_GENERATOR_V2 } ######`)

      vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
      VRF_COORDINATOR_V2_MOCK = vrfCoordinatorV2Mock.address
      //console.log(`\n##### Deployed-contract address of the VRFCoordinatorV2Mock.sol: ${ VRF_COORDINATOR_V2_MOCK } ######`)

      log(`Local network detected! Deploying the TenantSpaceNFTFactory contract ...`)

      await deploy(`TenantSpaceNFTFactory`, {
        from: deployer,
        log: true,
        args: [RANDOM_NUMBER_GENERATOR_V2, VRF_COORDINATOR_V2_MOCK],
        //args: [],
      })

      log(`TenantSpaceNFTFactory contract has been deployed!`)
    }
}

export default deployFunction
deployFunction.tags = [`all`, `mocks`, `main`]
