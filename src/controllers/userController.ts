import { Response } from "express";

import { AuthenticatedRequest } from "../middleware/authMiddleware";
import { getUserById } from "../repositories/userRepository";

export async function getCurrentUser(
  req: AuthenticatedRequest,
  res: Response
) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const user = await getUserById(req.user.userId);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const { password_hash, ...safeUser } = user;

  return res.status(200).json({
    success: true,
    data: safeUser
  });
}
