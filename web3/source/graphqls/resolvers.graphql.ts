import { contract } from "../controllers/blockchain.controllers";

/**
 * ================================================================================
 * --------------------------------- RESOLVERS ------------------------------------
 * ================================================================================
 */
export const resolvers = {
    Query: {
        getCount: async () => {
            const count =  await contract.getCount();
            return Number(count);
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
