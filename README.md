# Students API

A clean and modular Node.js + Express REST API for student data management, backed by MongoDB.

This project is organized into separate layers for routing, controller logic, and database connection, making it easy to maintain and extend.

## Features

- Full CRUD operations for students
- Modular architecture (config, controllers, routes)
- MongoDB connection with Mongoose
- JSON request parsing and CORS enabled
- Input validation for numeric route parameters

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemon

## Project Structure

	students-api/
	├── config/
	│   └── db.js
	├── controllers/
	│   └── student.controller.js
	├── routes/
	│   └── student.router.js
	├── server.js
	├── .env.example
	├── package.json
	└── README.md

## API Base URL

By default, the server runs on:

	http://localhost:3000

Student endpoints are mounted at:

	/students

## Available Endpoints

| Method | Route | Description |
|---|---|---|
| GET | /students | Get all students |
| POST | /students | Create a new student |
| PUT | /students/:rollNumber | Replace a student document |
| PATCH | /students/:rollNumber | Partially update a student |
| DELETE | /students/:rollNumber | Delete by roll number |
| DELETE | /students/delname/:name | Delete by name |
| DELETE | /students/delyear/:year | Delete by year |
| DELETE | /students/deldep/:department | Delete by department |
| DELETE | /students/delsub/:subjectsEnrolled | Delete by subject |

## Request Body Example

Use this JSON when creating or updating a student:

	{
	  "name": "Priya",
	  "rollNumber": 101,
	  "department": "Computer Science",
	  "year": 2,
	  "subjectsEnrolled": ["DBMS", "OS", "CN"]
	}

## Setup and Run

1. Clone the repository.
2. Create your environment file:

	   cp .env.example .env

3. Update `.env` with your MongoDB credentials.
4. Install dependencies:

	   npm install

5. Start in development mode:

	   npm run dev

6. Or start in production mode:

	   npm start

## Environment Variables

The application supports these variables:

- PORT: Server port (default: 3000)
- MONGO_URI: MongoDB connection string
- DB_NAME: Database name

All values should be set in `.env`.

Example `.env`:

	PORT=3000
	MONGO_URI=your_mongodb_connection_string
	DB_NAME=cg

## Scripts

- npm start: Run server with Node.js
- npm run dev: Run server with Nodemon
- npm test: Placeholder test script

## Error Responses

Typical error responses include:

- 400 for invalid numeric parameters (such as roll number or year)
- 500 for database or server errors

## Architecture Notes

- server.js handles application bootstrap and middleware.
- config/db.js handles MongoDB connection and collection access.
- routes/student.router.js defines routes only.
- controllers/student.controller.js contains business logic and DB operations.

This separation improves readability and keeps responsibilities clear.

## Future Improvements

- Add schema-level validation with a Mongoose model
- Add request validation middleware
- Add pagination and filtering for GET students
- Add test coverage with Jest and Supertest

