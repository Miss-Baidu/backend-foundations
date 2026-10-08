import {
  getAllProjects as getAllProjectsFromRepository,
  getProjectById as getProjectByIdFromRepository,
  createProject as createProjectFromRepository,
  updateProject as updateProjectFromRepository,
  deleteProject as deleteProjectFromRepository,
  Project
} from "../repositories/projectRepository";

export async function getAllProjects(): Promise<Project[]> {
  return getAllProjectsFromRepository();
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  return getProjectByIdFromRepository(id);
}

export async function createProject(
  name: string,
  description: string | null,
  ownerId: number
): Promise<Project> {
  return createProjectFromRepository(
    name,
    description,
    ownerId
  );
}

export async function updateProject(
  id: number,
  name: string,
  description: string | null,
  ownerId: number
): Promise<Project | null> {
  return updateProjectFromRepository(
    id,
    name,
    description,
    ownerId
  );
}

export async function deleteProject(id: number): Promise<boolean> {
  return deleteProjectFromRepository(id);
}