/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RentingMarketplaceInterface extends utils.Interface {
  contractName: "RentingMarketplace";
  functions: {
    "lendTenantNFT()": FunctionFragment;
    "rentTenantNFT()": FunctionFragment;
    "tenantNFT()": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "lendTenantNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rentTenantNFT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tenantNFT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "lendTenantNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rentTenantNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tenantNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RentingMarketplace extends BaseContract {
  contractName: "RentingMarketplace";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RentingMarketplaceInterface;

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
    lendTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rentTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tenantNFT(overrides?: CallOverrides): Promise<[string]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;
  };

  lendTenantNFT(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rentTenantNFT(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tenantNFT(overrides?: CallOverrides): Promise<string>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    lendTenantNFT(overrides?: CallOverrides): Promise<BigNumber>;

    rentTenantNFT(overrides?: CallOverrides): Promise<BigNumber>;

    tenantNFT(overrides?: CallOverrides): Promise<string>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    lendTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rentTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tenantNFT(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    lendTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rentTenantNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tenantNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
