import { Request, Response } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../services/taskService";
import { Task } from "../models/task";

export function healthCheck(_req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    message: "Server is healthy"
  });
}

export function getTasks(_req: Request, res: Response): void {
  res.status(200).json({
    success: true,
    data: getAllTasks()
  });
}

export function getTask(req: Request, res: Response): void {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const task = getTaskById(id);

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

export function postTask(req: Request, res: Response): void {
  const { title, status, priority, assignee } = req.body;

  if (!title || !status || !priority || !assignee) {
    res.status(400).json({
      success: false,
      message: "title, status, priority and assignee are required"
    });
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title,
    status,
    priority,
    assignee,
    description: req.body.description,
    createdAt: new Date()
  };

  const result = createTask(newTask);

  res.status(201).json(result);
}

export function patchTask(req: Request, res: Response): void {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const result = updateTask(id, req.body);

  if (!result) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  res.status(200).json(result);
}

export function removeTask(req: Request, res: Response): void {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID"
    });
    return;
  }

  const deleted = deleteTask(id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  res.status(204).send();
}