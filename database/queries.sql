-- 1. Select all users
SELECT * FROM users;

-- 2. Select all projects
SELECT * FROM projects;

-- 3. Select all tasks
SELECT * FROM tasks;

-- 4. Find tasks belonging to project 1
SELECT *
FROM tasks
WHERE project_id = 1;

-- 5. Join tasks with projects to show the project name
SELECT
    tasks.id,
    tasks.title,
    tasks.status,
    projects.name AS project_name
FROM tasks
JOIN projects
    ON tasks.project_id = projects.id;

-- 6. Join projects with users to show the project owner
SELECT
    projects.id,
    projects.name AS project_name,
    users.name AS owner_name,
    users.email AS owner_email
FROM projects
JOIN users
    ON projects.owner_id = users.id;

-- 7. Update a task's status
UPDATE tasks
SET status = 'done'
WHERE id = 2;

-- 8. Delete a test task
DELETE FROM tasks
WHERE id = 12;

-- 9. Get the first page of tasks (5 tasks)
SELECT *
FROM tasks
ORDER BY id
LIMIT 5;

-- 10. Get the second page of tasks (next 5 tasks)
SELECT *
FROM tasks
ORDER BY id
LIMIT 5 OFFSET 5;

-- 11. Index for faster project task lookups
CREATE INDEX idx_tasks_project_id
ON tasks(project_id);