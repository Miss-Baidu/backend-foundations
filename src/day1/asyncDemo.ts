import { findTaskById } from "./taskService";
import { Task } from "../types/task";

function fetchTask(id: number): Promise<Task> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = findTaskById(id);

      if (task) {
        resolve(task);
      } else {
        reject(new Error(`Task with ID ${id} not found`));
      }
    }, 1000);
  });
}

async function getTaskAsync(id: number): Promise<Task> {
  try {
    const task = await fetchTask(id);
    return task;
  } catch (error) {
    throw error;
  }
}

export {
  fetchTask,
  getTaskAsync
};