import { contract } from "../controllers/blockchain.controllers";

// Resolvers
export const resolvers = {
    Query: {
        getCount: async () => {
            return await contract.getCount();
        },
    },
    Mutation: {
        increment: async () => {
            const tx = await contract.increment();
            await tx.wait();
            return "Counter incremented successfully!";
        },
        update: async (_: any, { newValue }: { newValue : number }) => {
            const tx = await contract.update(newValue);
            await tx.wait();
            return `Counter updated to ${newValue} successfully!`;
        },
    },
};
