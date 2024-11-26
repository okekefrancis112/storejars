require("dotenv").config();
const { ethers, Wallet, providers } = require("ethers");

// import { Wallet, providers, ethers, } from "ethers";

// Contract details
const CONTRACT_ABI = [
    "function getCount() public view returns (uint256)",
    "function increment() public",
    "function update(uint256 newValue) public"
];
const CONTRACT_ADDRESS = process.env.DEPLOYED_CONTRACT_ADDRESS;

// Provider and Wallet setup
// const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_PROJECT_ID);
// const ethProvider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_PROJECT_ID);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet);
const ethProvider = new providers.JsonRpcProvider(process.env.ETH_URL || "");
const ethSigner = new Wallet(process.env.PRIVATE_KEY || "", ethProvider);
export const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    ethProvider
  );

// module.exports = contract;
