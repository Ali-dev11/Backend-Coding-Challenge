# Backend Coding Challenge

This is a simple REST API built with Node.js using the Express web framework and TypeScript. The API includes user authentication, task creation, and task listing functionalities.

## Requirements

- Node.js v18 and npm v9 installed
- MongoDB installed and running
- Git installed (for cloning the repository)

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Ali-dev11/Backend-Coding-Challenge.git
cd Backend-Coding-Challenge
```
## Getting Started

First, install all the required dependencies:

```bash
npm install
```

Create a `.env` file in the project root and define your environment variables:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=yourjwtsecretkey
```

Build and start the server:
```bash
npm run start
npm run server
```

The API should now be running `http://localhost:3000`

## Structure
- src/server.ts: Have the server intialization and configure the server
- src/config/db.ts: Contains the database connection
- src/controllers/authController.ts: Contains Auth controller responsible for login and register
- src/controllers/taskController.ts: Contains Task controller, listTasks and createTask
- src/controllers/userController.ts: Contains User controller to get user information
- src/middlewares/authentication.ts: Contains Passport local and jwt strategy
- src/models/taskModel.ts: Contains the task model
- src/models/userModel.ts: Contains the user model
- src/routes/authRoutes.ts: Contains the authentication routes
- src/routes/taskRoutes.ts: Contains the task routes
- src/routes/userRoutes.ts: Contains the user routes
- src/schemaValidations/userValidation.ts: Contains the schema validation for the user

## Postman Documentation
Here's the Postman Documentation:
```bash
https://documenter.getpostman.com/view/24107203/2s9YeK3VXe
```
