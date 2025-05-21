# Portfolio Website Application

## Overview

This application is a personal portfolio website built with React on the frontend and Express.js on the backend. It uses Drizzle ORM for database operations and is designed to be deployed on Replit. The site includes sections for personal information, work experience, education, skills, projects, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture with a clear separation between the frontend and backend:

1. **Frontend**: React-based SPA (Single Page Application) with components organized by features
2. **Backend**: Express.js server providing API endpoints and serving the static frontend
3. **Database**: Uses Drizzle ORM with a plan to connect to PostgreSQL database
4. **Styling**: Uses Tailwind CSS with a custom theme and shadcn/ui components

The application uses file-based routing through Wouter for client-side navigation. The frontend communicates with the backend through a RESTful API.

## Key Components

### Frontend

1. **Pages and Sections**: 
   - Home page with sections: Hero, About, Experience, Education, Skills, Projects, and Contact
   - Each section displays relevant information from the resume data

2. **UI Components**: 
   - Uses shadcn/ui component library built on Radix UI primitives
   - Custom theme with light/dark mode support
   - Responsive design for mobile and desktop

3. **State Management**:
   - React Query for server state management
   - React's built-in state hooks for UI state

### Backend

1. **Express Server**:
   - Serves the React frontend
   - Provides API endpoints
   - Handles form submissions and file downloads

2. **API Routes**:
   - `/api/download-resume`: For resume downloads
   - `/api/contact`: For contact form submissions

3. **Storage**:
   - Interface for database operations
   - Currently uses in-memory storage with plans to migrate to PostgreSQL

### Database

1. **Schema**:
   - Users table with basic authentication fields
   - Uses Drizzle ORM for database operations
   - Zod for validation

## Data Flow

1. **Frontend to Backend**:
   - React components fetch data using React Query
   - API requests use fetch with proper error handling
   - Forms submit data to API endpoints

2. **Backend Processing**:
   - Express routes handle API requests
   - Middleware validates input data
   - Storage layer handles database operations

3. **Response Flow**:
   - Backend returns JSON responses
   - Frontend processes and displays the data
   - Toast notifications for user feedback

## External Dependencies

### Frontend
- React + React DOM for UI rendering
- Wouter for client-side routing
- React Query for data fetching
- Radix UI components via shadcn/ui
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons

### Backend
- Express.js for server and API
- Drizzle ORM for database operations
- Zod for validation

## Deployment Strategy

The application is configured to be deployed on Replit with the following setup:

1. **Development**:
   - `npm run dev` starts both the frontend and backend in development mode
   - Vite handles frontend bundling and hot module replacement

2. **Production**:
   - `npm run build` builds both frontend and backend
   - `npm run start` runs the production server
   - Vite builds the frontend to static files
   - esbuild builds the backend to a single bundle

3. **Database**:
   - Configured to use PostgreSQL on Replit
   - Environment variables used for database connection
   - Drizzle handles migrations and schema updates

## Next Steps for Development

1. **Database Implementation**:
   - Set up PostgreSQL database and connect with Drizzle
   - Create migration for the users table

2. **Authentication**:
   - Implement user authentication flow
   - Add protected routes for admin features

3. **Portfolio Data**:
   - Allow updating resume data through admin interface
   - Store portfolio data in the database

4. **Contact Form**:
   - Complete the contact form submission functionality
   - Add email notification for new contacts

5. **SEO and Performance**:
   - Optimize for search engines
   - Improve loading performance