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

export interface IRandomNumberGeneratorV2Interface extends utils.Interface {
  contractName: "IRandomNumberGeneratorV2";
  functions: {
    "getSRandomWord()": FunctionFragment;
    "getSRandomWords()": FunctionFragment;
    "getSRequestId()": FunctionFragment;
    "requestRandomWords()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSRandomWord",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSRandomWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getSRandomWord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRandomNumberGeneratorV2 extends BaseContract {
  contractName: "IRandomNumberGeneratorV2";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRandomNumberGeneratorV2Interface;

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
    getSRandomWord(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _s_randomWord: BigNumber }>;

    getSRandomWords(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _s_randomWords: BigNumber[] }>;

    getSRequestId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _s_requestId: BigNumber }>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getSRandomWord(overrides?: CallOverrides): Promise<BigNumber>;

  getSRandomWords(overrides?: CallOverrides): Promise<BigNumber[]>;

  getSRequestId(overrides?: CallOverrides): Promise<BigNumber>;

  requestRandomWords(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSRandomWord(overrides?: CallOverrides): Promise<BigNumber>;

    getSRandomWords(overrides?: CallOverrides): Promise<BigNumber[]>;

    getSRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    requestRandomWords(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getSRandomWord(overrides?: CallOverrides): Promise<BigNumber>;

    getSRandomWords(overrides?: CallOverrides): Promise<BigNumber>;

    getSRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSRandomWord(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSRandomWords(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestRandomWords(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
