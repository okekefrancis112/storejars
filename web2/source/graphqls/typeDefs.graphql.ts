import { gql } from 'apollo-server';

/**
 * =====================================================================================
 * --------------------------------- CREATE TYPE-DEFINITION ----------------------------
 * =====================================================================================
 */
export const typeDefs = gql`
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
