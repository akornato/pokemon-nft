import { ethers } from "ethers";
import { abi as marketplaceAbi } from "sol/artifacts/contracts/Marketplace.sol/Marketplace.json";
import { abi as pokemonAbi } from "sol/artifacts/contracts/Pokemon.sol/Pokemon.json";
import type { Marketplace, Pokemon } from "sol/typechain-types";

const isDevelopment = process.env.NODE_ENV === "development";

const jsonRpcProvider = new ethers.providers.JsonRpcProvider(
  isDevelopment ? "http://127.0.0.1:8545" : process.env.ALCHEMY_URL
);

export const marketplaceContract = new ethers.Contract(
  isDevelopment
    ? "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    : "0x6661231833749D4649eFb00EAbDa81F0c223da74",
  marketplaceAbi,
  jsonRpcProvider
) as Marketplace;

export const pokemonContract = new ethers.Contract(
  isDevelopment
    ? "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    : "0xFA22cF375609Cb1897237a88FdfAF05cDA271F5B",
  pokemonAbi,
  jsonRpcProvider
) as Pokemon;
