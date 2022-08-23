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

export interface KeepersCounterEchidnaTestInterface extends utils.Interface {
  contractName: "KeepersCounterEchidnaTest";
  functions: {
    "checkUpkeep(bytes)": FunctionFragment;
    "counter()": FunctionFragment;
    "echidna_test_perform_upkeep_gate()": FunctionFragment;
    "interval()": FunctionFragment;
    "lastTimeStamp()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "echidna_test_perform_upkeep_gate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "interval", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastTimeStamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "echidna_test_perform_upkeep_gate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "interval", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeStamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KeepersCounterEchidnaTest extends BaseContract {
  contractName: "KeepersCounterEchidnaTest";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeepersCounterEchidnaTestInterface;

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
    checkUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    echidna_test_perform_upkeep_gate(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    interval(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  checkUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  counter(overrides?: CallOverrides): Promise<BigNumber>;

  echidna_test_perform_upkeep_gate(overrides?: CallOverrides): Promise<boolean>;

  interval(overrides?: CallOverrides): Promise<BigNumber>;

  lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

  performUpkeep(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    echidna_test_perform_upkeep_gate(
      overrides?: CallOverrides
    ): Promise<boolean>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    counter(overrides?: CallOverrides): Promise<BigNumber>;

    echidna_test_perform_upkeep_gate(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interval(overrides?: CallOverrides): Promise<BigNumber>;

    lastTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    echidna_test_perform_upkeep_gate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastTimeStamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
