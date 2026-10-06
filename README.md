# Backend Foundations

## Day 4 - PostgreSQL & SQL Foundations

### PostgreSQL Setup

The Day 4 project uses PostgreSQL for persistent storage.

Database name: backend_internship

Connect to the database:
psql -d backend_internship

### Database Schema

The database contains three tables:

- users - stores user information
- projects - stores projects owned by users
- tasks - stores tasks belonging to projects

### Relationships

- users.id is the primary key for users.
- projects.id is the primary key for projects.
- tasks.id is the primary key for tasks.
- projects.owner_id references users.id.
- tasks.project_id references projects.id.
- tasks.assigned_to references users.id.

Foreign keys create relationships between the tables.

### SQL Operations Practiced

- Creating database tables
- Inserting sample data
- Selecting records
- Filtering with WHERE
- Updating records
- Deleting records
- Joining tables with JOIN
- Sorting with ORDER BY
- Pagination with LIMIT and OFFSET

### JOIN Examples

Tasks can be joined with projects to display the project name.

Projects can be joined with users to display the project owner.

### Index

An index was created on tasks.project_id:

CREATE INDEX idx_tasks_project_id ON tasks(project_id);

The index helps PostgreSQL find tasks belonging to a particular project more efficiently.

### Database Files

The database directory contains:

- database/schema.sql - creates the database tables and relationships
- database/seed.sql - inserts sample users, projects, and tasks
- database/queries.sql - contains SQL queries for CRUD operations, JOINs, pagination, and indexing

### Running the Database Setup

Create the database:

createdb backend_internship

Run the schema:

psql -d backend_internship -f database/schema.sql

Load the sample data:

psql -d backend_internship -f database/seed.sql

Run the practice queries:

psql -d backend_internship -f database/queries.sql

Database passwords and other secrets should never be committed to Git.