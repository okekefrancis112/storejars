import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * =============================================================================
 * --------------------------- DEPLOYMENT DETAILS ------------------------------
 * =============================================================================
 */
// Counter is deployed to 0x4f14B48E1328aCAa7549244B13fc4489d18ec1E5
// Counter verified address is https://sepolia.etherscan.io/address/0x4f14B48E1328aCAa7549244B13fc4489d18ec1E5#code

/**
 * =============================================================================
 * ------------------------------ COUNTER MODULE -------------------------------
 * =============================================================================
 */
const CounterModule = buildModule("CounterModule", (m) => {
    const counter = m.contract("Counter");

    return { counter };
  });

  export default CounterModule;
