import tasks from "./data";

interface Task {
  id: number;
  title: string;
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee: string;
}

type TaskStatus = "pending" | "in-progress" | "completed";

function addTask(task: Task): Task {
  tasks.push(task);
  return task;
}

function findTaskById(id: number): Task | undefined {
  return tasks.find(task => task.id === id);
}

function filterByStatus(status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}

function updateTask(id: number, updates: Partial<Task>): Task | null {
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return null;
  }

  Object.assign(task, updates);

  return task;
}

function deleteTask(id: number): Task | null {
  const index = tasks.findIndex(task => task.id === id);

  if (index === -1) {
    return null;
  }

  return tasks.splice(index, 1)[0];
}

function getTaskSummary(): {
  total: number;
  pending: number;
  "in-progress": number;
  completed: number;
} {
  const summary = {
    total: tasks.length,
    pending: 0,
    "in-progress": 0,
    completed: 0
  };

  tasks.forEach(task => {
    summary[task.status]++;
  });

  return summary;
}

export {
  addTask,
  findTaskById,
  filterByStatus,
  updateTask,
  deleteTask,
  getTaskSummary
};