const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", () => {
    let Counter, counter;

    before(async () => {
        // Deploy the contract before tests
        Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.deployed();
    });

    it("should start with a count of 0", async () => {
        const count = await counter.getCount();
        expect(count).to.equal(0);
    });

    it("should increment the count by 1", async () => {
        await counter.increment();
        const count = await counter.getCount();
        expect(count).to.equal(1);
    });

    it("should update the count to a specific value", async () => {
        await counter.update(42);
        const count = await counter.getCount();
        expect(count).to.equal(42);
    });

    it("should increment the count again after an update", async () => {
        await counter.increment();
        const count = await counter.getCount();
        expect(count).to.equal(43); // 42 + 1
    });
});
