import { Request, Response } from "express";

import { AuthenticatedRequest } from "../middleware/authMiddleware";

import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from "../services/projectService";

export async function getProjects(
  _req: Request,
  res: Response
): Promise<void> {
  const projects = await getAllProjects();

  res.status(200).json({
    success: true,
    data: projects
  });
}

export async function getProject(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid project ID"
    });
    return;
  }

  const project = await getProjectById(id);

  if (!project) {
    res.status(404).json({
      success: false,
      message: "Project not found"
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: project
  });
}

export async function postProject(
  req: AuthenticatedRequest,
  res: Response
): Promise<void> {
  const { name, description } = req.body;

  if (!req.user) {
    res.status(401).json({
      success: false,
      message: "Authentication required"
    });
    return;
  }

  if (!name) {
    res.status(400).json({
      success: false,
      message: "name is required"
    });
    return;
  }

  const project = await createProject(
    name,
    description ?? null,
    req.user.userId
  );

  res.status(201).json({
    success: true,
    data: project,
    message: "Project created successfully"
  });
}

export async function patchProject(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid project ID"
    });
    return;
  }

  const project = await getProjectById(id);

  if (!project) {
    res.status(404).json({
      success: false,
      message: "Project not found"
    });
    return;
  }

  const {
    name,
    description,
  } = req.body;

  const updatedProject = await updateProject(
    id,
    name ?? project.name,
    description ?? project.description,
    project.owner_id
  );

  res.status(200).json({
    success: true,
    data: updatedProject,
    message: "Project updated successfully"
  });
}

export async function removeProject(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid project ID"
    });
    return;
  }

  const deleted = await deleteProject(id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: "Project not found"
    });
    return;
  }

  res.status(204).send();
}