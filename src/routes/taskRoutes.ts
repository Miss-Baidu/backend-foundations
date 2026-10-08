import { Router } from "express";

import {
  getTasks,
  getTask,
  postTask,
  patchTask,
  removeTask
} from "../controllers/taskController";

import { authenticateToken } from "../middleware/authMiddleware";
import { requireTaskProjectOwner } from "../middleware/authorizationMiddleware";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);

router.post(
  "/",
  authenticateToken,
  postTask
);

router.patch(
  "/:id",
  authenticateToken,
  requireTaskProjectOwner,
  patchTask
);

router.delete(
  "/:id",
  authenticateToken,
  requireTaskProjectOwner,
  removeTask
);

export default router;