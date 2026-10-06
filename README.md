# Backend Foundations

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