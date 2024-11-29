require("dotenv").config();
const { ethers, Wallet, providers } = require("ethers");

/**
 * =============================================================================
 * ---------------------------- CONTRACT DETAILS -------------------------------
 * =============================================================================
 */

// Contract ABI
const CONTRACT_ABI = [
    "function getCount() public view returns (uint256)",
    "function increment() public",
    "function update(uint256 newValue) public"
];

// Deployed Contract Address
const CONTRACT_ADDRESS = process.env.DEPLOYED_CONTRACT_ADDRESS;

// Provider and Wallet setup
const ethProvider = new providers.JsonRpcProvider(process.env.ETHEREUM_SEPOLIA_RPC_URL ?? "");
(async () => {
  try {
      const network = await ethProvider.getNetwork();
      console.log(`Connected to network: ${network.name}`);
  } catch (err:any) {
      console.error("Error connecting to network:", err.message);
  }
})();

const ethSigner = new Wallet(process.env.PRIVATE_KEY ?? "", ethProvider);

// Contract Instantiation
export const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  ethSigner
);
