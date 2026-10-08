import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


import {
  createUser,
  getUserByEmail,
  User
} from "../repositories/userRepository";

const JWT_SECRET: string = process.env.JWT_SECRET ?? (() => {
  throw new Error("JWT_SECRET is not configured");
})();

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

export async function loginUser(
  email: string,
  password: string
): Promise<string> {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!passwordMatches) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  return token;
}