// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
import "hardhat/console.sol";

/**
 * ==========================================================================
 * ------------------------------ COUNTER -----------------------------------
 * ==========================================================================
 */
contract Counter {
    uint256 private count;

    // Increment the counter
    function increment() public {
        count += 1;
    }

    // Fetch the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Update the counter with a specific value
    function update(uint256 newValue) public {
        count = newValue;
    }
}
