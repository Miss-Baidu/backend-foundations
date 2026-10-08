import {
  addTask,
  findTaskById,
  filterByStatus,
  updateTask,
  deleteTask,
  getTaskSummary
} from "./taskService";

import { getTaskAsync } from "./asyncDemo";
import { Task } from "../types/task";

console.log("===== ALL TASK OPERATIONS =====");

// 1. Add a task
const newTask: Task = {
  id: 9,
  title: "Learn Node.js",
  description: "Continue learning Node.js backend development",
  status: "pending",
  priority: "high",
  assignee: "Sarah",
  createdAt: new Date()
};

console.log("\n1. Adding a task:");
console.log(addTask(newTask));

// 2. Find a task
console.log("\n2. Finding task with ID 3:");
console.log(findTaskById(3));

// 3. Filter tasks by status
console.log("\n3. Pending tasks:");
console.log(filterByStatus("pending"));

// 4. Update a task
console.log("\n4. Updating task with ID 2:");
console.log(
  updateTask(2, {
    status: "completed"
  })
);

// 5. Delete a task
console.log("\n5. Deleting task with ID 7:");
console.log(deleteTask(7));

// 6. Get task summary
console.log("\n6. Task summary:");
console.log(getTaskSummary());

// 7. Async task lookup
async function runAsyncDemo(): Promise<void> {
  console.log("\n===== ASYNC TASK LOOKUP =====");

  try {
    const task = await getTaskAsync(4);
    console.log("Task found:");
    console.log(task);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error:", error.message);
    }
  }

  // 8. Intentionally look for a missing task
  console.log("\n===== ERROR HANDLING =====");

  try {
    const task = await getTaskAsync(100);
    console.log(task);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error:", error.message);
    }
  }
}

runAsyncDemo();