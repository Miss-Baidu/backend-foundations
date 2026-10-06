-- Seed users
INSERT INTO users (name, email, password_hash, role)
VALUES
    ('Sarah Appiah', 'sarah@example.com', 'demo_hash_1', 'admin'),
    ('Kofi Mensah', 'john@example.com', 'demo_hash_2', 'user'),
    ('Joseph Johnson', 'joseph@example.com', 'demo_hash_3', 'user'),
    ('Peter Owusu', 'peter@example.com', 'demo_hash_4', 'user'),
    ('Emma Edu', 'emma@example.com', 'demo_hash_5', 'user');

-- Seed projects
INSERT INTO projects (name, description, owner_id)
VALUES
    ('Backend API', 'Build the backend REST API', 1),
    ('Mobile App', 'Develop the mobile application', 2),
    ('Website Redesign', 'Redesign the company website', 3);

-- Seed tasks
INSERT INTO tasks (title, description, status, project_id, assigned_to)
VALUES
    ('Set up project', 'Initialize the backend project', 'done', 1, 1),
    ('Create API routes', 'Create REST API routes', 'in_progress', 1, 2),
    ('Add authentication', 'Implement user authentication', 'todo', 1, 3),
    ('Write API tests', 'Test the backend endpoints', 'todo', 1, 4),

    ('Create wireframes', 'Design the mobile app wireframes', 'done', 2, 2),
    ('Build login screen', 'Create the mobile login screen', 'in_progress', 2, 3),
    ('Build dashboard', 'Create the mobile dashboard', 'todo', 2, 4),
    ('Test mobile app', 'Run mobile application tests', 'todo', 2, 5),

    ('Design homepage', 'Create the new homepage design', 'done', 3, 3),
    ('Update navigation', 'Improve website navigation', 'in_progress', 3, 4),
    ('Update styles', 'Apply the new website styles', 'todo', 3, 5),
    ('Test responsive design', 'Test the website on different screens', 'todo', 3, 1);