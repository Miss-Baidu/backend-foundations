import {
  getAllTasks as getAllTasksFromRepository,
  getTaskById as getTaskByIdFromRepository,
  createTask as createTaskFromRepository,
  updateTask as updateTaskFromRepository,
  deleteTask as deleteTaskFromRepository,
  Task
} from "../repositories/taskRepository";

export async function getAllTasks(): Promise<Task[]> {
  return getAllTasksFromRepository();
}

export async function getTaskById(
  id: number
): Promise<Task | null> {
  return getTaskByIdFromRepository(id);
}

export async function createTask(
  title: string,
  description: string | null,
  status: string,
  projectId: number,
  assignedTo: number | null
): Promise<Task> {
  return createTaskFromRepository(
    title,
    description,
    status,
    projectId,
    assignedTo
  );
}

export async function updateTask(
  id: number,
  title: string,
  description: string | null,
  status: string,
  projectId: number,
  assignedTo: number | null
): Promise<Task | null> {
  return updateTaskFromRepository(
    id,
    title,
    description,
    status,
    projectId,
    assignedTo
  );
}

export async function deleteTask(id: number): Promise<boolean> {
  return deleteTaskFromRepository(id);
}