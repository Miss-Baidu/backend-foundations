import { pool } from "../config/database";

export interface Project {
  id: number;
  name: string;
  description: string | null;
  owner_id: number;
  created_at: Date;
}

export async function getAllProjects(): Promise<Project[]> {
  const result = await pool.query(
    "SELECT * FROM projects ORDER BY id"
  );

  return result.rows;
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const result = await pool.query(
    "SELECT * FROM projects WHERE id = $1",
    [id]
  );

  return result.rows[0] ?? null;
}

export async function createProject(
  name: string,
  description: string | null,
  ownerId: number
): Promise<Project> {
  const result = await pool.query(
    `INSERT INTO projects (name, description, owner_id)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, description, ownerId]
  );

  return result.rows[0];
}