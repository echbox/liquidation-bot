/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IYVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYVault__factory>;
    getContractFactory(
      name: "IAppAddressProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppAddressProvider__factory>;
    getContractFactory(
      name: "IAppCreditManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppCreditManager__factory>;
    getContractFactory(
      name: "IAppERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppERC20__factory>;
    getContractFactory(
      name: "IAppPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAppPoolService__factory>;
    getContractFactory(
      name: "IDataCompressor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDataCompressor__factory>;
    getContractFactory(
      name: "IAddressProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAddressProvider__factory>;
    getContractFactory(
      name: "ICreditAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditAccount__factory>;
    getContractFactory(
      name: "ICreditFilter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditFilter__factory>;
    getContractFactory(
      name: "ICreditManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICreditManager__factory>;
    getContractFactory(
      name: "IDataCompressor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDataCompressor__factory>;
    getContractFactory(
      name: "IPoolService",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolService__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "IWETHGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETHGateway__factory>;
    getContractFactory(
      name: "Terminator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Terminator__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IYVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYVault>;
    getContractAt(
      name: "IAppAddressProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAppAddressProvider>;
    getContractAt(
      name: "IAppCreditManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAppCreditManager>;
    getContractAt(
      name: "IAppERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAppERC20>;
    getContractAt(
      name: "IAppPoolService",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAppPoolService>;
    getContractAt(
      name: "IDataCompressor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDataCompressor>;
    getContractAt(
      name: "IAddressProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAddressProvider>;
    getContractAt(
      name: "ICreditAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreditAccount>;
    getContractAt(
      name: "ICreditFilter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreditFilter>;
    getContractAt(
      name: "ICreditManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICreditManager>;
    getContractAt(
      name: "IDataCompressor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDataCompressor>;
    getContractAt(
      name: "IPoolService",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolService>;
    getContractAt(
      name: "IPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracle>;
    getContractAt(
      name: "IWETHGateway",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETHGateway>;
    getContractAt(
      name: "Terminator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Terminator>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
