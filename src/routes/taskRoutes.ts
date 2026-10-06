import { Router } from "express";
import {
  getTasks,
  getTask,
  postTask,
  patchTask,
  removeTask
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", postTask);
router.patch("/:id", patchTask);
router.delete("/:id", removeTask);

export default router;