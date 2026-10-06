import tasks from "../day1/data";
import {
  ApiResponse,
  Task,
  TaskStatus
} from "../models/task";

export function getAllTasks(): Task[] {
  return tasks;
}

export function getTaskById(id: number): Task | undefined {
  return tasks.find(task => task.id === id);
}

export function createTask(task: Task): ApiResponse<Task> {
  tasks.push(task);

  return {
    success: true,
    data: task,
    message: "Task created successfully"
  };
}

export function updateTask(
  id: number,
  updates: Partial<Task>
): ApiResponse<Task> | null {
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return null;
  }

  Object.assign(task, updates);

  return {
    success: true,
    data: task,
    message: "Task updated successfully"
  };
}

export function deleteTask(id: number): boolean {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

export function filterTasksByStatus(status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}