"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    addUser(name: String!, email: String!, age: Int): User!
  }
`;
//# sourceMappingURL=typeDefs.graphql.js.map