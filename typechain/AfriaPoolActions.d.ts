/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AfriaPoolActionsInterface extends ethers.utils.Interface {
  functions: {
    "burn(int24,int24,uint128)": FunctionFragment;
    "collect(address,int24,int24,uint128,uint128)": FunctionFragment;
    "flash(address,uint256,uint256,bytes)": FunctionFragment;
    "increaseObservationCardinalityNext(uint16)": FunctionFragment;
    "initialize(uint160)": FunctionFragment;
    "mint(address,int24,int24,uint128,bytes)": FunctionFragment;
    "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "flash",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseObservationCardinalityNext",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, boolean, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseObservationCardinalityNext",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class AfriaPoolActions extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AfriaPoolActionsInterface;

  functions: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(int24,int24,uint128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "collect(address,int24,int24,uint128,uint128)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "flash(address,uint256,uint256,bytes)"(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseObservationCardinalityNext(uint16)"(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,int24,int24,uint128,bytes)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(address,bool,int256,uint160,bytes)"(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  burn(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(int24,int24,uint128)"(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collect(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "collect(address,int24,int24,uint128,uint128)"(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  flash(
    recipient: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "flash(address,uint256,uint256,bytes)"(
    recipient: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseObservationCardinalityNext(
    observationCardinalityNext: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseObservationCardinalityNext(uint16)"(
    observationCardinalityNext: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    sqrtPriceX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint160)"(
    sqrtPriceX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,int24,int24,uint128,bytes)"(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swap(
    recipient: string,
    zeroForOne: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(address,bool,int256,uint160,bytes)"(
    recipient: string,
    zeroForOne: boolean,
    amountSpecified: BigNumberish,
    sqrtPriceLimitX96: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "burn(int24,int24,uint128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "collect(address,int24,int24,uint128,uint128)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "flash(address,uint256,uint256,bytes)"(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseObservationCardinalityNext(uint16)"(
      observationCardinalityNext: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "mint(address,int24,int24,uint128,bytes)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "swap(address,bool,int256,uint160,bytes)"(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(int24,int24,uint128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "collect(address,int24,int24,uint128,uint128)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "flash(address,uint256,uint256,bytes)"(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseObservationCardinalityNext(uint16)"(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,int24,int24,uint128,bytes)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(address,bool,int256,uint160,bytes)"(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(int24,int24,uint128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    collect(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "collect(address,int24,int24,uint128,uint128)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    flash(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "flash(address,uint256,uint256,bytes)"(
      recipient: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    increaseObservationCardinalityNext(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseObservationCardinalityNext(uint16)"(
      observationCardinalityNext: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,int24,int24,uint128,bytes)"(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swap(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(address,bool,int256,uint160,bytes)"(
      recipient: string,
      zeroForOne: boolean,
      amountSpecified: BigNumberish,
      sqrtPriceLimitX96: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
