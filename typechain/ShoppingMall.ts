/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ShoppingMallInterface extends utils.Interface {
  contractName: "ShoppingMall";
  functions: {
    "getPriceFeedETHPerUSD()": FunctionFragment;
    "priceConsumerV3()": FunctionFragment;
    "rentTenantSpaceNFT(address,uint256,address,address,uint64)": FunctionFragment;
    "storeTenantSpaceNFT(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPriceFeedETHPerUSD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "priceConsumerV3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rentTenantSpaceNFT",
    values: [string, BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "storeTenantSpaceNFT",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceFeedETHPerUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceConsumerV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rentTenantSpaceNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeTenantSpaceNFT",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ShoppingMall extends BaseContract {
  contractName: "ShoppingMall";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShoppingMallInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getPriceFeedETHPerUSD(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _ethPricePerUsd: BigNumber }>;

    priceConsumerV3(overrides?: CallOverrides): Promise<[string]>;

    rentTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      tenantOwner: string,
      tenantUser: string,
      expires: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storeTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPriceFeedETHPerUSD(overrides?: CallOverrides): Promise<BigNumber>;

  priceConsumerV3(overrides?: CallOverrides): Promise<string>;

  rentTenantSpaceNFT(
    tenantSpaceNFT: string,
    tenantSpaceId: BigNumberish,
    tenantOwner: string,
    tenantUser: string,
    expires: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storeTenantSpaceNFT(
    tenantSpaceNFT: string,
    tenantSpaceId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPriceFeedETHPerUSD(overrides?: CallOverrides): Promise<BigNumber>;

    priceConsumerV3(overrides?: CallOverrides): Promise<string>;

    rentTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      tenantOwner: string,
      tenantUser: string,
      expires: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    storeTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPriceFeedETHPerUSD(overrides?: CallOverrides): Promise<BigNumber>;

    priceConsumerV3(overrides?: CallOverrides): Promise<BigNumber>;

    rentTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      tenantOwner: string,
      tenantUser: string,
      expires: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storeTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPriceFeedETHPerUSD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceConsumerV3(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rentTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      tenantOwner: string,
      tenantUser: string,
      expires: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storeTenantSpaceNFT(
      tenantSpaceNFT: string,
      tenantSpaceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
