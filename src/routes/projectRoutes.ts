import { Router } from "express";

import {
  getProjects,
  getProject,
  postProject,
  patchProject,
  removeProject
} from "../controllers/projectController";

import { authenticateToken } from "../middleware/authMiddleware";

import { requireProjectOwner } from "../middleware/authorizationMiddleware";

import { validate } from "../middleware/validate";

import {
  projectSchema,
  updateProjectSchema
} from "../validation/schemas";

const router = Router();

router.get("/", getProjects);

router.get("/:id", getProject);

router.post(
  "/",
  authenticateToken,
  validate(projectSchema),
  postProject
);

router.patch(
  "/:id",
  authenticateToken,
  requireProjectOwner,
  validate(updateProjectSchema),
  patchProject
);

router.delete(
  "/:id",
  authenticateToken,
  requireProjectOwner,
  removeProject
);

export default router;