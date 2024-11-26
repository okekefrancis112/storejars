import { ApolloServer } from 'apollo-server';
import { initDatabase } from './util/mongo';
import { typeDefs } from './graphqls/typeDefs.graphql';
import { resolvers } from './graphqls/resolvers.graphql';

/***
 *
 *
 * Create Server
 */
const startServer = async (): Promise<void> => {
  // Connect to the database
  await initDatabase();

  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the server
  server.listen({ port: 4000 }).then(({ url }: { url: string }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

// Start the application
startServer().catch((error) => {
  console.error('Failed to start the server:', error);
  process.exit(1);
});
