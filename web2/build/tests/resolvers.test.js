"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers_graphql_1 = require("../graphqls/resolvers.graphql");
const user_models_1 = require("../models/user.models ");
const mongoose_1 = __importDefault(require("mongoose"));
afterAll(async () => {
    await mongoose_1.default.connection.dropDatabase();
    await mongoose_1.default.disconnect();
    console.log('In-memory MongoDB stopped');
});
describe('GraphQL Resolvers', () => {
    afterEach(async () => {
        await user_models_1.User.deleteMany({});
    });
    it('should fetch an empty list of users initially', async () => {
        const users = await resolvers_graphql_1.resolvers.Query.users();
        expect(users).toEqual([]);
    });
    it('should add a new user and fetch it', async () => {
        const newUser = await resolvers_graphql_1.resolvers.Mutation.addUser(null, {
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            age: 25,
        });
        expect(newUser.name).toBe('Jane Doe');
        expect(newUser.email).toBe('jane.doe@example.com');
        expect(newUser.age).toBe(25);
        const users = await resolvers_graphql_1.resolvers.Query.users();
        expect(users.length).toBe(1);
        expect(users[0].name).toBe('Jane Doe');
    });
    it('should handle errors when adding a user with invalid data', async () => {
        await expect(resolvers_graphql_1.resolvers.Mutation.addUser(null, { name: '', email: '', age: -5 })).rejects.toThrow();
    });
});
//# sourceMappingURL=resolvers.test.js.map