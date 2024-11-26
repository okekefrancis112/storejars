import { gql } from 'apollo-server';

// GraphQL schema
export const typeDefs = gql`
    type Query {
        getCount: Int
    }

    type Mutation {
        increment: String
        update(newValue: Int!): String
    }
`;
