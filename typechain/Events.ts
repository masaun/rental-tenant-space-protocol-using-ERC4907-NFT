/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface EventsInterface extends utils.Interface {
  contractName: "Events";
  functions: {};

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

export interface Events extends BaseContract {
  contractName: "Events";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

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

  functions: {};

  callStatic: {};

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

  estimateGas: {};

  populateTransaction: {};
}
