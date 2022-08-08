import { ethers } from "hardhat"
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { assert } from "chai"

//@dev - Helper of ethers.js
import { toWei, fromWei, getEventLog } from "../ethersjs-helper/ethersjsHelper"

//@dev - Contract instances in Typechain
import { ERC4907Demo } from "../../typechain"


/**
 * @notice - This is a test of ERC4907 with Typechain
 */ 
describe("test of ERC4907", async function () {
    
    //@dev - Signers
    let owner: SignerWithAddress
    let alice: SignerWithAddress
    let bob: SignerWithAddress

    //@dev - Smart contract instances
    let instance: any
    //let instance: ERC4907Demo

    before(async () => {
        //@dev - Get signers of each accounts
        [owner, alice, bob] = await ethers.getSigners()

        //@dev - Create contrac
        const ERC4907Demo = await ethers.getContractFactory("ERC4907Demo")
        instance = await ERC4907Demo.deploy("T", "T")
    })

    it("should set user to Bob", async () => {
        //@dev - Get initial balances of first and second account.

        const Alice: string = alice.address
        const Bob: string = bob.address
        console.log(`Alice: ${ Alice }`)
        console.log(`Bob: ${ Bob }`)

        const demo: any = instance

        //@dev - Mint a ERC4907-based NFT
        await demo.connect(owner).mint(1, Alice)
        
        //@dev - Calculate expiration period
        let expires = Math.floor(new Date().getTime()/1000) + 1000

        //@dev - Set user in the ERC4907-based NFT
        await demo.connect(alice).setApprovalForAll(Bob, true)
        await demo.connect(alice).setUser(1, Bob, BigInt(expires))

        //@dev - Get a user who is set in the ERC4907-based NFT
        let user_1 = await demo.userOf(1)
        console.log(`User of NFT 1: ${ user_1 }`)
        assert.equal(
            user_1,
            Bob,
            "User of NFT 1 should be Bob"
        )

        //@dev - Get a owner who is set in the ERC4907-based NFT
        let owner_1 = await demo.ownerOf(1)
        console.log(`Owner of NFT 1: ${ owner_1 }`)
        assert.equal(
            owner_1,
            Alice ,
            "Owner of NFT 1 should be Alice"
        )
    })
})
