import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const loginSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().min(1, "Password is required")
});

export const projectSchema = z.object({
  name: z.string().trim().min(1, "Project name is required"),
  description: z.string().trim().optional()
});

export const updateProjectSchema = projectSchema.partial();

export const taskSchema = z.object({
  title: z.string().trim().min(1, "Task title is required"),
  description: z.string().trim().optional(),
  status: z.string().trim().min(1, "Task status is required").optional(),
  projectId: z.number().int().positive("Invalid project ID"),
  assignedTo: z.number().int().positive().nullable().optional()
});

export const updateTaskSchema = taskSchema.partial().omit({
  projectId: true
});