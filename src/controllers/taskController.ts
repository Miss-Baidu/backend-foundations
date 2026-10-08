import { Request, Response } from "express";

import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../services/taskService";

export function healthCheck(_req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
}

export async function getTasks(
  _req: Request,
  res: Response
): Promise<void> {
  const tasks = await getAllTasks();

  res.status(200).json({
    success: true,
    data: tasks
  });
}

export async function getTask(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const task = await getTaskById(id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: task
  });
}

export async function postTask(
  req: Request,
  res: Response
): Promise<void> {
  const {
    title,
    description,
    status = "todo",
    projectId,
    assignedTo
  } = req.body;

  if (!title || !projectId) {
    res.status(400).json({
      success: false,
      message: "title and projectId are required"
    });
    return;
  }

  const task = await createTask(
    title,
    description ?? null,
    status,
    Number(projectId),
    assignedTo ? Number(assignedTo) : null
  );

  res.status(201).json({
    success: true,
    data: task,
    message: "Task created successfully"
  });
}

export async function patchTask(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const {
    title,
    description,
    status,
    projectId,
    assignedTo
  } = req.body;

  const task = await getTaskById(id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  const updatedTask = await updateTask(
    id,
    title ?? task.title,
    description ?? task.description,
    status ?? task.status,
    projectId ?? task.project_id,
    assignedTo ?? task.assigned_to
  );

  res.status(200).json({
    success: true,
    data: updatedTask,
    message: "Task updated successfully"
  });
}

export async function removeTask(
  req: Request,
  res: Response
): Promise<void> {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const deleted = await deleteTask(id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  res.status(204).send();
}