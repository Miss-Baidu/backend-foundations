import { Router } from "express";

import {
  getProjects,
  getProject,
  postProject
} from "../controllers/projectController";

const router = Router();

router.get("/", getProjects);

router.get("/:id", getProject);

router.post("/", postProject);

export default router;
