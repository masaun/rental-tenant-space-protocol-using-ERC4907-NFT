import { DeployFunction } from "hardhat-deploy/types"
import { getNamedAccounts, deployments, network, ethers } from "hardhat"

import {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"

//import { ShoppingMall } from "../typechain"
import { TenantSpaceNFTFactory, ShoppingMall, PriceConsumerV3 } from "../typechain"


const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const chainId: number | undefined = network.config.chainId
    if (!chainId) return

    let ethUsdPriceFeedAddress: string | undefined


    ///-------------------------------------------
    /// Deploy the PriceConsumerV3.sol in advance
    ///-------------------------------------------
    if (chainId === 31337) {
        const EthUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = EthUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed
    }

    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one below is ETH/USD contract on Rinkeby
    const waitBlockConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log(`----------------------------------------------------`)
    const priceConsumerV3 = await deploy("PriceConsumerV3", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(priceConsumerV3.address, [ethUsdPriceFeedAddress])
    }

    log("Run Price Feed contract with command:")
    const networkName = network.name == "hardhat" ? "localhost" : network.name
    log(`yarn hardhat read-price-feed --contract ${priceConsumerV3.address} --network ${networkName}`)
    log("----------------------------------------------------")


    ///-------------------------------------------
    /// Deploy the ShoppingMall.sol
    ///-------------------------------------------

    //If we are on a local development network, we need to deploy the ShoppingMall contract!
    if (chainId === 31337) {
        let tenantSpaceNFTFactory: TenantSpaceNFTFactory = await ethers.getContract("TenantSpaceNFTFactory")

        log(`Local network detected! Deploying the ShoppingMall contract ...`)

        await deploy(`ShoppingMall`, {
            from: deployer,
            log: true,
            args: [priceConsumerV3.address],
            //args: [tenantSpaceNFTFactory.address],
        })

        log(`ShoppingMall contract has been deployed!`)
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed
    }

}

export default deployFunction
deployFunction.tags = [`all`, `mocks`, `main`]
