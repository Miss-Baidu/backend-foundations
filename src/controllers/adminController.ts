import { Response } from "express";

import { AuthenticatedRequest } from "../middleware/authMiddleware";
import { pool } from "../config/database";

export async function getAllUsers(
  _req: AuthenticatedRequest,
  res: Response
): Promise<void> {
  const result = await pool.query(
    `SELECT id, name, email, role, created_at
     FROM users
     ORDER BY id`
  );

  res.status(200).json({
    success: true,
    data: result.rows
  });
}
