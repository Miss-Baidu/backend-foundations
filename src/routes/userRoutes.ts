import { Router } from "express";

import { getCurrentUser } from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/me", authenticateToken, getCurrentUser);

export default router;
