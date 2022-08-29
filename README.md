# Rental Tenant Space Protocol using ERC4907-based Rentable NFT

## Overview
- This is a smart contract protocol that allow tenant owners to rent users who want to use tenant spaces in shopping malls by using ERC4907-based rentable NFT.

- Tenant space NFTs is tokenized-tenant spaces that represent tenant spaces. 
  - That makes renting tenant spaces more efficient.

- ERC4907 (Rentable NFT Standard) is used for Tenant space NFTs.
  - By utilzing ERC4907, tenant space owners can rent users tenant spaces without transferring its tenant space NFTs by giving `"user rights"` to users who rent tenant spaces. This workflow is more gas-efficient and simple.


<br>

## Demo Video
- https://youtu.be/S9VmTiBmRb0

<br>

## Specifications
- ERC4907 (Rentable NFT Standard) is used for a tenant space NFT.
- Chainlink Price Feed is used in the ShoppingMall.sol for retrieving ETH/USD price. This price retrieved is used for payment when a tenant space NFT is rent.
  - When a user rent a tenant space NFT

<br>

## Test (Rinkeby testnet-forking test)
- Unit test of the ShoppingMall.sol
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
    - Demo SC & Test：https://eips.ethereum.org/EIPS/eip-4907  
      - Code / EIP-4907 Demo：https://github.com/emojidao/EIP4907  
        - (double-contract： https://github.com/emojidao/double-contract )  
      - Workflow：https://ethereum-magicians.org/t/eip4907-erc-721-user-and-expires-extension/8572/2  
