import { Request, Response } from "express";

import {
  loginUser,
  registerUser
} from "../services/authService";

import { AppError } from "../middleware/errorHandler";

export async function register(
  req: Request,
  res: Response
): Promise<void> {
  const { name, email, password } = req.body;

  try {
    const user = await registerUser(name, email, password);

    const { password_hash, ...safeUser } = user;

    res.status(201).json({
      success: true,
      data: safeUser
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Email already registered"
    ) {
      throw new AppError(409, error.message);
    }

    throw error;
  }
}

export async function login(
  req: Request,
  res: Response
): Promise<void> {
  const { email, password } = req.body;

  try {
    const token = await loginUser(email, password);

    res.status(200).json({
      success: true,
      data: {
        token
      }
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Invalid email or password"
    ) {
      throw new AppError(401, error.message);
    }

    throw error;
  }
}