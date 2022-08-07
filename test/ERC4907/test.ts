import { ethers } from "hardhat"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { toWei, fromWei, getEventLog } from "../ethersjs-helper/ethersjsHelper"
import { assert } from "chai"


/**
 * @notice - This is a test of ERC4907 with Typechain
 */ 
describe("test of ERC4907", async function () {
    
    //@dev - Signers
    let owner: any
    let alice: any 
    let bob: any

    //@dev - Smart contract instances
    let instance: any

    before(async () => {
        //@dev - Get signers of each accounts
        [owner, alice, bob] = await ethers.getSigners()

        //@dev - Create contrac
        const ERC4907Demo = await ethers.getContractFactory("ERC4907Demo")
        instance = await ERC4907Demo.deploy("T", "T")
    })

    it("should set user to Bob", async () => {
        //@dev - Get initial balances of first and second account.

        const Alice = alice.address
        const Bob = bob.address

        const demo = instance;

        //@dev - Mint a ERC4907-based NFT
        await demo.connect(owner).mint(1, Alice)
        
        //@dev - Calculate expiration period
        let expires = Math.floor(new Date().getTime()/1000) + 1000

        //@dev - Set user in the ERC4907-based NFT
        await demo.connect(alice).setApprovalForAll(Bob, true)
        await demo.connect(alice).setUser(1, Bob, BigInt(expires))

        //@dev - Get a user who is set in the ERC4907-based NFT
        let user_1 = await demo.userOf(1)

        assert.equal(
            user_1,
            Bob,
            "User of NFT 1 should be Bob"
        )

        let owner_1 = await demo.ownerOf(1)
        assert.equal(
            owner_1,
            Alice ,
            "Owner of NFT 1 should be Alice"
        )
    })
})
