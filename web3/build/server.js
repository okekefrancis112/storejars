"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs_graphql_1 = require("./graphqls/typeDefs.graphql");
const resolvers_graphql_1 = require("./graphqls/resolvers.graphql");
const startServer = async () => {
    const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_graphql_1.typeDefs, resolvers: resolvers_graphql_1.resolvers });
    server.listen({ port: 6000 }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
};
startServer().catch((error) => {
    console.error('Failed to start the server:', error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map