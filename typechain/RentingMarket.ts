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

export interface RentingMarketInterface extends utils.Interface {
  contractName: "RentingMarket";
  functions: {
    "erc4907BasedNFT()": FunctionFragment;
    "lendERC4907BasedNFT()": FunctionFragment;
    "rentERC4907BasedNFT()": FunctionFragment;
    "underlyingToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "erc4907BasedNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendERC4907BasedNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rentERC4907BasedNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "erc4907BasedNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendERC4907BasedNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rentERC4907BasedNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RentingMarket extends BaseContract {
  contractName: "RentingMarket";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RentingMarketInterface;

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
    erc4907BasedNFT(overrides?: CallOverrides): Promise<[string]>;

    lendERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rentERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;
  };

  erc4907BasedNFT(overrides?: CallOverrides): Promise<string>;

  lendERC4907BasedNFT(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rentERC4907BasedNFT(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    erc4907BasedNFT(overrides?: CallOverrides): Promise<string>;

    lendERC4907BasedNFT(overrides?: CallOverrides): Promise<BigNumber>;

    rentERC4907BasedNFT(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    erc4907BasedNFT(overrides?: CallOverrides): Promise<BigNumber>;

    lendERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rentERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    erc4907BasedNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lendERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rentERC4907BasedNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
