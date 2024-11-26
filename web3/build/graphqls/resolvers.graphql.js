"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const blockchain_controllers_1 = require("../controllers/blockchain.controllers");
exports.resolvers = {
    Query: {
        getCount: async () => {
            return await blockchain_controllers_1.contract.getCount();
        },
    },
    Mutation: {
        increment: async () => {
            const tx = await blockchain_controllers_1.contract.increment();
            await tx.wait();
            return "Counter incremented successfully!";
        },
        update: async (_, { newValue }) => {
            const tx = await blockchain_controllers_1.contract.update(newValue);
            await tx.wait();
            return `Counter updated to ${newValue} successfully!`;
        },
    },
};
//# sourceMappingURL=resolvers.graphql.js.map