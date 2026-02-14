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

CHECKLIST:
Gemini said
Here is a comprehensive checklist of the "Flavo" design and functionality we have implemented across your web and mobile platforms so far:

Web Mini App Checklist
Visual Aesthetic: Established a vibrant, retro-modern "Flavo" look using a Neo-Brutalist style.

Color Palette: Successfully integrated the primary colors: Cream (#FDF6E3), Sage Green (#A7C080), and Pink (#F8C8DC).

Core UI Elements:

Horizontal navigation bar containing links for Home, Shop, Our Story, and User Profile.

Large hero section with bold headlines and primary action buttons.

Card-based feature sections defined by thick black outlines.

Functionality: Implemented a pop-up modal for the User Profile (including a Logout button) to maintain a modern, single-page dashboard feel.

Mobile App Checklist
Project Foundation: Initialized a Kotlin-based Android project with edge-to-edge display support.

Theming & Colors:

Defined the Flavo palette (Cream, Sage, Pink) within colors.xml.

Configured themes.xml to set the window background to Cream, moving away from standard dark mode.

Dashboard Layout (activity_main.xml):

Created a high-contrast Hero Card with a pink background and a 4dp black border.

Added a signature Sage Green button with a thick black stroke for navigation.

Profile Modal Component:

Layout: Built layout_profile_modal.xml featuring a pink header card and a black "Logout" button.

Logic: Created the ProfileModal.kt class using BottomSheetDialogFragment to handle the slide-up animation.

Trigger: Wired the profileButton in MainActivity.kt to launch the modal on click.

Current Status & Environment
Version Control: Mobile project files, including project metadata, themes, and layouts, have been staged for Git tracking.

Backend Compatibility: The backend is confirmed as a Java Spring Boot project requiring Java 17.

Web Dependencies: Frontend libraries (axios, react-router-dom) are installed and audited via npm.
