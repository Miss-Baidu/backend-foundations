import { Request, Response } from "express";

import {
  getAllProjects,
  getProjectById,
  createProject
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
  req: Request,
  res: Response
): Promise<void> {
  const {
    name,
    description,
    ownerId
  } = req.body;

  if (!name || !ownerId) {
    res.status(400).json({
      success: false,
      message: "name and ownerId are required"
    });
    return;
  }

  const project = await createProject(
    name,
    description ?? null,
    Number(ownerId)
  );

  res.status(201).json({
    success: true,
    data: project,
    message: "Project created successfully"
  });
}
