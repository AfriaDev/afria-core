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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UnsafeMathEchidnaTestInterface extends ethers.utils.Interface {
  functions: {
    "checkDivRoundingUp(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkDivRoundingUp",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkDivRoundingUp",
    data: BytesLike
  ): Result;

  events: {};
}

export class UnsafeMathEchidnaTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UnsafeMathEchidnaTestInterface;

  functions: {
    checkDivRoundingUp(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "checkDivRoundingUp(uint256,uint256)"(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;
  };

  checkDivRoundingUp(
    x: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkDivRoundingUp(uint256,uint256)"(
    x: BigNumberish,
    d: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    checkDivRoundingUp(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkDivRoundingUp(uint256,uint256)"(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    checkDivRoundingUp(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkDivRoundingUp(uint256,uint256)"(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkDivRoundingUp(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkDivRoundingUp(uint256,uint256)"(
      x: BigNumberish,
      d: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}