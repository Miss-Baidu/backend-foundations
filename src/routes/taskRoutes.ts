import { Router } from "express";

import {
  getTasks,
  getTask,
  postTask,
  patchTask,
  removeTask
} from "../controllers/taskController";

import { authenticateToken } from "../middleware/authMiddleware";

import {
  requireTaskProjectOwner,
  requireTaskProjectOwnerForCreation
} from "../middleware/authorizationMiddleware";

import { validate } from "../middleware/validate";

import {
  taskSchema,
  updateTaskSchema
} from "../validation/schemas";

const router = Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post(
  "/",
  authenticateToken,
  validate(taskSchema),
  requireTaskProjectOwnerForCreation,
  postTask
);

router.patch(
  "/:id",
  authenticateToken,
  requireTaskProjectOwner,
  validate(updateTaskSchema),
  patchTask
);

router.delete(
  "/:id",
  authenticateToken,
  requireTaskProjectOwner,
  removeTask
);

export default router;