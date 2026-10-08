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

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);

router.post("/", authenticateToken, postProject);

router.patch(
  "/:id",
  authenticateToken,
  requireProjectOwner,
  patchProject
);

router.delete(
  "/:id",
  authenticateToken,
  requireProjectOwner,
  removeProject
);

export default router;