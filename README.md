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
## Day 1 - JavaScript Backend Foundations

### Setup and Run

1. Make sure Node.js is installed.
2. Clone the repository.
3. Open the project folder.
4. Run the Day 1 program:

node src/day1/index.js

### What I Learnt

- JavaScript variables using const and let
- Arrays and objects
- Array methods such as map(), filter(), and find()
- Functions and arrow functions
- Modules and require()
- Synchronous and asynchronous execution
- Promises and async/await
- Error handling using try/catch
- Working with in-memory task data

### Challenges I Faced

One challenge was understanding how to organize the Day 1 code into separate modules and how the different files communicate with each other. I also had to understand the difference between synchronous and asynchronous operations and how errors are handled.

Another challenge was understanding the Git commit checkpoints and making sure the Day 1 work was organized into meaningful commits.

### Evidence

The Day 1 program was successfully run using:

node src/day1/index.js

The terminal output showed the task operations and asynchronous task lookup running successfully.



The Day 1 program was tested successfully with Node.js. The program demonstrated task creation, task lookup, filtering, updating, deletion, task summaries, asynchronous task lookup, and error handling.


## Day 2 - TypeScript Backend Foundations

### TypeScript Setup

TypeScript was added to the project using:

npm install -D typescript tsx @types/node

### What I Learnt
Basic TypeScript types such as string, number, and boolean
Typed arrays and objects
Type aliases
Interfaces
Union types
Optional properties
Typed function parameters and return values
The Partial<T> utility type
Generics using ApiResponse<T>
Why avoiding any improves type safety
Compiling TypeScript into JavaScript
Running compiled JavaScript with Node.js

### TypeScript vs JavaScript

JavaScript checks many errors while the program is running.

TypeScript adds static type checking before the program runs. This helps catch mistakes during development.


### Type-Safety Challenge

I tested the TypeScript compiler by removing the required `createdAt` property from a task. TypeScript reported an error because the property was required by the `Task` type.

After adding `createdAt`, the project compiled successfully.



## Day 3 - Node.js, HTTP & Express REST API

### Overview

Day 3 converted the typed in-memory task management project into a REST API using Node.js, Express and TypeScript.

The API follows this request flow:

Client → Express Route → Controller → Service → Response

### Technologies

- Node.js
- TypeScript
- Express
- In-memory task data

### Installation

Install dependencies:
npm install