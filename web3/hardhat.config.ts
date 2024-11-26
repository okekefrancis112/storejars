// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";

// const config: HardhatUserConfig = {
//   solidity: "0.8.27",
// };

// export default config;

require("dotenv").config({ path: ".env" });
import "@nomicfoundation/hardhat-ignition";

require("@nomicfoundation/hardhat-ethers")
require("@nomicfoundation/hardhat-verify")
// require("hardhat-contract-sizer")

const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY ? PRIVATE_KEY : ""],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  customChains: [
    {
      network: 'scrollSepolia',
      chainId: 534351,
      urls: {
        apiURL: 'https://api-sepolia.scrollscan.com/api',
        browserURL: 'https://sepolia.scrollscan.com/',
      },
    },
  ],
  solidity: {
    compilers: [{ version: "0.8.27" }, { version: "0.8.20" }, { version: "0.8.9" }, { version: "0.6.6" }],
  },
};

