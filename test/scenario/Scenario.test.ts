import { numToBytes32 } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { network, deployments, ethers, run } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address"
import { developmentChains } from "../../helper-hardhat-config"
import { LinkToken, MockOracle, VRFCoordinatorV2Mock } from "../../typechain"

//@dev - Helper of ethers.js for retrieving eventLogs emitted, etc.
import { getEventLog } from "../ethersjs-helper/ethersjsHelper"
import { toWei } from "../ethersjs-helper/ethersjsHelper"
import { fromWei } from "../ethersjs-helper/ethersjsHelper"
//import { convertHexToString, convertStringToHex, toWei, fromWei, getEventLog, getCurrentBlock, getCurrentTimestamp } from "../ethersjs-helper/ethersjsHelper"


/**
 * @title - Scenario test
 */ 
!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Scenario Tests", async function () {
          //[TODO]: 
      })
