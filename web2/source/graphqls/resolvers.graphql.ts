import { User, IUser } from '../models/user.models ';

export const resolvers = {
  Query: {
    users: async (): Promise<IUser[]> => {
      try {
        return await User.find();
      } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    addUser: async (
      _: unknown,
      { name, email, age }: { name: string; email: string; age?: number }
    ): Promise<IUser> => {
      try {
        const newUser = new User({ name, email, age });
        return await newUser.save();
      } catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to add user');
      }
    },
  },
};
