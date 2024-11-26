"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mongo_1 = require("./util/mongo");
const typeDefs_graphql_1 = require("./graphqls/typeDefs.graphql");
const resolvers_graphql_1 = require("./graphqls/resolvers.graphql");
const startServer = async () => {
    await (0, mongo_1.initDatabase)();
    const server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_graphql_1.typeDefs, resolvers: resolvers_graphql_1.resolvers });
    server.listen({ port: 4000 }).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
};
startServer().catch((error) => {
    console.error('Failed to start the server:', error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map