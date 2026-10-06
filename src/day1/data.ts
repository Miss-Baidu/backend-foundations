import { Task } from "../types/task";

const tasks: Task[] = [
  {
    id: 1,
    title: "Complete JavaScript exercises",
    description: "Finish the Day 1 JavaScript backend exercises",
    status: "pending",
    priority: "high",
    assignee: "Sarah",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 2,
    title: "Learn array methods",
    description: "Practice map, filter, find and other array methods",
    status: "in-progress",
    priority: "medium",
    assignee: "Sarah",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 3,
    title: "Build task API",
    description: "Build the basic task management functionality",
    status: "pending",
    priority: "high",
    assignee: "John",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 4,
    title: "Practice Git Commands",
    description: "Practice Git branching, commits and pull requests",
    status: "completed",
    priority: "medium",
    assignee: "Joseph",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 5,
    title: "Study Node.js",
    description: "Learn Node.js backend fundamentals",
    status: "in-progress",
    priority: "high",
    assignee: "Peter",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 6,
    title: "Practice what you have learnt",
    description: "Review and practice the concepts learned so far",
    status: "pending",
    priority: "medium",
    assignee: "Emma",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 7,
    title: "Review Javascript Notes",
    description: "Review previous JavaScript notes",
    status: "completed",
    priority: "low",
    assignee: "Sarah",
    createdAt: new Date("2026-09-30")
  },
  {
    id: 8,
    title: "Commit your work to git",
    description: "Commit and push the completed work",
    status: "in-progress",
    priority: "medium",
    assignee: "James",
    createdAt: new Date("2026-09-30")
  }
];

export default tasks;