import { pool } from "../config/database";

export interface Task {
  id: number;
  title: string;
  description: string | null;
  status: string;
  project_id: number;
  assigned_to: number | null;
  created_at: Date;
}

export async function getAllTasks(): Promise<Task[]> {
  const result = await pool.query(
    "SELECT * FROM tasks ORDER BY id"
  );

  return result.rows;
}

export async function getTaskById(
  id: number
): Promise<Task | null> {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE id = $1",
    [id]
  );

  return result.rows[0] ?? null;
}

export async function createTask(
  title: string,
  description: string | null,
  status: string,
  projectId: number,
  assignedTo: number | null
): Promise<Task> {
  const result = await pool.query(
    `INSERT INTO tasks
      (title, description, status, project_id, assigned_to)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [title, description, status, projectId, assignedTo]
  );

  return result.rows[0];
}
