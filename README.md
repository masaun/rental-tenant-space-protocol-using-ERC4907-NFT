# Rental Tenant Space Protocol using ERC4907-based Rentable NFT

## Overview
- This is a smart contract protocol that allow owners to rent users who want to use tenant spaces in shopping malls by using ERC4907-based rentable NFT.

<br>

## Demo Video
- https://youtu.be/S9VmTiBmRb0

<br>

## Specifications
- Chainlink Price Feed is used in the ShoppingMall.sol for retrieving ETH/USD price. This price retrieved is used for payment when a tenant space NFT is rent.

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
- [Hardhat Documentation](https://hardhat.org/getting-started/)
