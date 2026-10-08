import { Router } from "express";

import {
  getProjects,
  getProject,
  postProject,
  patchProject,
  removeProject
} from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", postProject);
router.patch("/:id", patchProject);
router.delete("/:id", removeProject);

export default router;