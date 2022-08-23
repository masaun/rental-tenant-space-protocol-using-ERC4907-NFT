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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITenantSpaceNFTFactoryInterface extends utils.Interface {
  contractName: "ITenantSpaceNFTFactory";
  functions: {
    "createTenantSpaceNFT(string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createTenantSpaceNFT",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTenantSpaceNFT",
    data: BytesLike
  ): Result;

  events: {
    "TenantSpaceNFTCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TenantSpaceNFTCreated"): EventFragment;
}

export type TenantSpaceNFTCreatedEvent = TypedEvent<
  [string, string],
  { owner: string; tenantSpaceNFT: string }
>;

export type TenantSpaceNFTCreatedEventFilter =
  TypedEventFilter<TenantSpaceNFTCreatedEvent>;

export interface ITenantSpaceNFTFactory extends BaseContract {
  contractName: "ITenantSpaceNFTFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITenantSpaceNFTFactoryInterface;

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
    createTenantSpaceNFT(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createTenantSpaceNFT(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createTenantSpaceNFT(
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "TenantSpaceNFTCreated(address,address)"(
      owner?: null,
      tenantSpaceNFT?: null
    ): TenantSpaceNFTCreatedEventFilter;
    TenantSpaceNFTCreated(
      owner?: null,
      tenantSpaceNFT?: null
    ): TenantSpaceNFTCreatedEventFilter;
  };

  estimateGas: {
    createTenantSpaceNFT(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTenantSpaceNFT(
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
