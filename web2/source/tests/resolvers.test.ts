import { resolvers } from '../graphqls/resolvers.graphql';
import { User } from '../models/user.models ';
// import { connectDB } from '../db/connection';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // Start an in-memory MongoDB instance
  mongoServer = await MongoMemoryServer.create();

  // Get the URI of the in-memory server and connect to it
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  console.log(`In-memory MongoDB started at ${uri}`);
});

afterAll(async () => {
  // Cleanup database and stop the in-memory MongoDB instance
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
  await mongoServer.stop();
  console.log('In-memory MongoDB stopped');
});


describe('GraphQL Resolvers', () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should fetch an empty list of users initially', async () => {
    const users = await resolvers.Query.users();
    expect(users).toEqual([]);
  });

  it('should add a new user and fetch it', async () => {
    const newUser = await resolvers.Mutation.addUser(null, {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      age: 25,
    });

    expect(newUser.name).toBe('Jane Doe');
    expect(newUser.email).toBe('jane.doe@example.com');
    expect(newUser.age).toBe(25);

    const users = await resolvers.Query.users();
    expect(users.length).toBe(1);
    expect(users[0].name).toBe('Jane Doe');
  });

  it('should handle errors when adding a user with invalid data', async () => {
    await expect(
      resolvers.Mutation.addUser(null, { name: '', email: '', age: -5 })
    ).rejects.toThrow();
  });
});
