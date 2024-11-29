import { Schema, model, Document } from 'mongoose';

/**
 * ==========================================================================
 * ------------------------------ USER INTERFACE ----------------------------
 * ==========================================================================
 */
export interface IUser extends Document {
  name: string;
  email: string;
  age?: number;
}

/**
 * ==========================================================================
 * ------------------------------ USER SCHEMA -------------------------------
 * ==========================================================================
 */
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number },
});

export const User = model<IUser>('User', userSchema);
