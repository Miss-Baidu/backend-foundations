import { Router } from "express";

import { getAllUsers } from "../controllers/adminController";
import { authenticateToken } from "../middleware/authMiddleware";
import { requireRole } from "../middleware/authorizationMiddleware";

const router = Router();

router.get(
  "/users",
  authenticateToken,
  requireRole("admin"),
  getAllUsers
);

export default router;
