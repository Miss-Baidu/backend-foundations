import { Request, Response } from "express";

import {
  loginUser,
  registerUser
} from "../services/authService";

export async function register(
  req: Request,
  res: Response
) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email and password are required"
    });
  }

  try {
    const user = await registerUser(name, email, password);

    const { password_hash, ...safeUser } = user;

    return res.status(201).json({
      success: true,
      data: safeUser
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Email already registered") {
      return res.status(409).json({
        success: false,
        message: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  try {
    const token = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      data: {
        token
      }
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid email or password") {
      return res.status(401).json({
        success: false,
        message: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
}
