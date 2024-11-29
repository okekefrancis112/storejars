import { gql } from 'apollo-server';

/**
 * ================================================================================
 * ------------------------------ GRAPHQL SCHEMA ----------------------------------
 * ================================================================================
 */
export const typeDefs = gql`
    type Query {
        getCount: Int
    }

    type Mutation {
        increment: String
        update(newValue: Int!): String
    }
`;
