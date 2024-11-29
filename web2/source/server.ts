import { ApolloServer } from 'apollo-server';
import { initDatabase } from './util/mongo';
import { typeDefs } from './graphqls/typeDefs.graphql';
import { resolvers } from './graphqls/resolvers.graphql';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';


/**
 * ==========================================================================
 * ---------------------------- CREATE SERVER -------------------------------
 * ==========================================================================
 */
const startServer = async (): Promise<void> => {

  // Connect to the database
  await initDatabase();

  // Initialize Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    persistedQueries: {
        cache: new InMemoryLRUCache({ maxSize: 1000 }), // Use bounded cache
      },
    });

  // Start the server
  const PORT = process.env.PORT || 4000; // Fallback to 6000 for local development

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/`);
  });
};

// Start the application
startServer().catch((error) => {
  console.error('Failed to start the server:', error);
  process.exit(1);
});