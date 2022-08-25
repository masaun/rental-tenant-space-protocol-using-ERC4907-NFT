import { DeployFunction } from "hardhat-deploy/types"
import { getNamedAccounts, deployments, network, ethers } from "hardhat"

import { ShoppingMall } from "../typechain"
//import { TenantSpaceNFTFactory, ShoppingMall } from "../typechain"


const deployFunction: DeployFunction = async () => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId

    // If we are on a local development network, we need to deploy the ShoppingMall contract!
    if (chainId === 31337) {
      log(`Local network detected! Deploying the ShoppingMall contract ...`)

      //let tenantSpaceNFTFactory: TenantSpaceNFTFactory = await ethers.getContract("TenantSpaceNFTFactory")

      await deploy(`ShoppingMall`, {
        from: deployer,
        log: true,
        args: [],
        //args: [tenantSpaceNFTFactory.address],
      })

      log(`ShoppingMall contract has been deployed!`)
    }
}

export default deployFunction
deployFunction.tags = [`all`, `mocks`, `main`]
