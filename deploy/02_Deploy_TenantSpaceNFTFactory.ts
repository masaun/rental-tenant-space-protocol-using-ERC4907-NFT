import { DeployFunction } from "hardhat-deploy/types"
import { getNamedAccounts, deployments, network, ethers } from "hardhat"

import { TenantSpaceNFTFactory } from "../typechain"


const deployFunction: DeployFunction = async () => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId

    // If we are on a local development network, we need to deploy the TenantSpaceNFTFactory contract!
    if (chainId === 31337) {
      log(`Local network detected! Deploying the TenantSpaceNFTFactory contract ...`)

      await deploy(`TenantSpaceNFTFactory`, {
        from: deployer,
        log: true,
        args: [],
      })

      log(`TenantSpaceNFTFactory contract has been deployed!`)
    }
}

export default deployFunction
deployFunction.tags = [`all`, `mocks`, `main`]
