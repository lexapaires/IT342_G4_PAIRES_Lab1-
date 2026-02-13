# MINI APP - User Registration & Authentication System

## Project Description
This is a full-stack application featuring a secure User Registration and Authentication system. It includes a Spring Boot backend connected to a MySQL database and a React-based web frontend. This project implements secure password hashing, session management, and protected data retrieval.

## Technologies Used
- **Backend:** Spring Boot 4.0.2, Spring Data JPA, Spring Security (BCrypt)
- **Frontend:** ReactJS, Axios, React Router
- **Database:** MySQL
- **Build Tools:** Maven Wrapper and Vite

## List of API Endpoints
All backend endpoints are prefixed with `/api`.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Registers a new user with encrypted passwords |
| POST | `/api/auth/login` | Authenticates user credentials |
| GET | `/api/user/me` | Fetches the profile of the currently logged-in user |

## Steps to Run

### 1. Database Setup
1. Ensure your MySQL server is running (XAMPP, MAMP, or standalone).
2. Create a database named `miniapp_db` or allow the application to create it automatically via the `createDatabaseIfNotExist=true` flag.
3. Verify connection settings in `backend/src/main/resources/application.properties`.

### 2. Run the Backend (Spring Boot)
1. Open a terminal in the `backend` folder.
2. Run the following command:
   ```bash
   ./mvnw spring-boot:run