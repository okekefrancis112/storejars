"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = void 0;
require("dotenv").config();
const { ethers, Wallet, providers } = require("ethers");
const CONTRACT_ABI = [
    "function getCount() public view returns (uint256)",
    "function increment() public",
    "function update(uint256 newValue) public"
];
const CONTRACT_ADDRESS = process.env.DEPLOYED_CONTRACT_ADDRESS;
const ethProvider = new providers.JsonRpcProvider(process.env.ETH_URL || "");
const ethSigner = new Wallet(process.env.PRIVATE_KEY || "", ethProvider);
exports.contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, ethProvider);
//# sourceMappingURL=blockchain.controllers.js.map