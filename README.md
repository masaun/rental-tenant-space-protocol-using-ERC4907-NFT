# Rental Tenant Space Protocol using ERC4907-based Rentable NFT

## Overview
- This is a smart contract protocol that allow tenant owners to rent users who want to use tenant spaces in shopping malls by using ERC4907-based rentable NFT.

<br>

- Tenant space NFTs is tokenized-tenant spaces that represent tenant spaces. 
  - That makes renting tenant spaces more efficient.

<br>

- ERC4907 (Rentable NFT Standard) is used for tenant space NFTs in this protocol.
  - By utilzing ERC4907 in this protocol, owners can rent users tenant spaces by giving `"user rights" instead of transferring its tenant space NFTs into users.`
  - This workflow makes procesure of renting tenant spaces more transparent who has rights of tenant spaces.
  (NOTE: In this protocol, owners store their tenant space NFTs into the ShoppingMall contract. Then, the ShoppingMall contract rent users tenant space NFTs on behalf of owners)

<br>

## Use cases
- This protocol assume use cases such as:
  - The gaming space: Build shopping malls and rent its tenant space. Decentraland like gaming protocol and dApp are potencially able to integrate with this protocol.
  - The real world: Ultimetory, physical shopping malls might be able to be integrated with this protocol for renting its tenant spaces in the future.


<br>

## Demo Video
- https://youtu.be/S9VmTiBmRb0

<br>

## Workflow
- This is a diagram that entire workflow is written.  
  ![diagram_Rental-Tenant Space-Protocol-using-ERC4907-based-Rentable-NFT](https://user-images.githubusercontent.com/19357502/187455490-2122b67e-e162-4e60-a230-36f77c4e4498.jpeg)

<br>

## Specifications (Integrations)
- ERC4907 (Rentable NFT Standard) is used for a tenant space NFT.
- Chainlink Price Feed is used as the PriceConsumerV3.sol in the ShoppingMall.sol for retrieving ETH/USD price. This price retrieved is used for payment when a tenant space NFT is rent.
  - When a user rent a tenant space NFT

<br>

## Test (Rinkeby testnet-forking test)
- Unit test of the ShoppingMall.sol (NOTE: This test is the main test that includes entire workflow of this protocol)
```
yarn test-unit:ShoppingMall
```

<br>

- Unit test of the TenantSpaceNFT.sol
```
yarn test-unit:TenantSpaceNFT
```

<br>

- Unit test of the TenantSpaceNFTFactory.sol
```
yarn test-unit:TenantSpaceNFTFactory
```

<br>

- Unit test of the PriceConsumerV3.sol
```
yarn test-unit:PriceConsumerV3
```

<br>

- Unit test (ERC4907 Demo)
```
yarn test-unit:ERC4907Demo
```

<br>

## Resources
- [Chainlink Documentation](https://docs.chain.link/)  

- ERC-4907：Rentable NFT standard   
  - Features：https://twitter.com/zetablockchain/status/1554863652104245253?s=21&t=_sJhuiNQkth5jP4QRu4oTA  
  - Workflow：https://ethereum-magicians.org/t/eip4907-erc-721-user-and-expires-extension/8572/2   
  - Demo SC & Test：https://eips.ethereum.org/EIPS/eip-4907   
   - Code / EIP-4907 Demo：https://github.com/emojidao/EIP4907   
   - double-contract： https://github.com/emojidao/double-contract  

