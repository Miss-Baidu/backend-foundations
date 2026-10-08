import { Response, NextFunction } from "express";

import {
  AuthenticatedRequest
} from "./authMiddleware";

import { getProjectById } from "../repositories/projectRepository";
import { getTaskById } from "../repositories/taskRepository";

export async function requireProjectOwner(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const projectId = Number(req.params.id);

  if (Number.isNaN(projectId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid project ID"
    });
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found"
    });
  }

  if (req.user.role === "admin") {
    return next();
  }

  if (project.owner_id !== req.user.userId) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to modify this project"
    });
  }

  next();
}

export async function requireTaskProjectOwner(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const taskId = Number(req.params.id);

  if (Number.isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
  }

  const task = await getTaskById(taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found"
    });
  }

  const project = await getProjectById(task.project_id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found"
    });
  }

  if (req.user.role === "admin") {
    return next();
  }

  if (project.owner_id !== req.user.userId) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to manage tasks in this project"
    });
  }

  next();
}
export async function requireTaskProjectOwnerForCreation(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Authentication required"
    });
  }

  const projectId = Number(req.body.projectId);

  if (Number.isNaN(projectId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid project ID"
    });
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found"
    });
  }

  if (req.user.role === "admin") {
    return next();
  }

  if (project.owner_id !== req.user.userId) {
    return res.status(403).json({
      success: false,
      message: "You are not authorized to create tasks in this project"
    });
  }

  next();
}
export function requireRole(...allowedRoles: string[]) {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to access this resource"
      });
    }

    next();
  };
}