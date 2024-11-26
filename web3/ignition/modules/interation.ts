const { buildSchema } = require("graphql");
const contract = require("./blockchain");

// GraphQL schema
const schema = buildSchema(`
    type Query {
        getCount: Int
    }
    type Mutation {
        increment: String
        update(newValue: Int!): String
    }
`);

// Resolvers
const root = {
    getCount: async () => {
        return await contract.getCount();
    },
    increment: async () => {
        const tx = await contract.increment();
        await tx.wait();
        return "Counter incremented successfully!";
    },
    update: async ({ newValue }: { newValue: number }) => {
        const tx = await contract.update(newValue);
        await tx.wait();
        return `Counter updated to ${newValue} successfully!`;
    },
};

module.exports = { schema, root };
