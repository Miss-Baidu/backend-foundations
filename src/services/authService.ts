import bcrypt from "bcrypt";


import {
  createUser,
  getUserByEmail,
  User
} from "../repositories/userRepository";


export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<User> {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  return createUser(name, email, passwordHash);
}

