"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_models_1 = require("../models/user.models ");
exports.resolvers = {
    Query: {
        users: async () => {
            try {
                return await user_models_1.User.find();
            }
            catch (error) {
                console.error('Error fetching users:', error);
                throw new Error('Failed to fetch users');
            }
        },
    },
    Mutation: {
        addUser: async (_, { name, email, age }) => {
            try {
                const newUser = new user_models_1.User({ name, email, age });
                return await newUser.save();
            }
            catch (error) {
                console.error('Error adding user:', error);
                throw new Error('Failed to add user');
            }
        },
    },
};
//# sourceMappingURL=resolvers.graphql.js.map