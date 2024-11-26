"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
    type Query {
        getCount: Int
    }

    type Mutation {
        increment: String
        update(newValue: Int!): String
    }
`;
//# sourceMappingURL=typeDefs.graphql.js.map