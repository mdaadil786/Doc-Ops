# Doc-Ops – Patient Appointment Booking System

Doc-Ops is a full-stack healthcare appointment platform built with the MERN stack.

It allows patients to discover doctors, check available slots, book and manage appointments, while doctors and administrators can manage appointments, availability, profiles, and platform activity through dedicated dashboards.

## Key Features

### Patient
- Register and log in securely
- Browse doctors by speciality
- View doctor profiles and consultation fees
- Check available appointment slots
- Book and cancel appointments
- Manage profile information and profile picture
- View appointment history
- Appointment payment flow

### Doctor
- Secure doctor login
- View and manage appointments
- Manage availability
- Update profile information
- Mark appointments as completed
- View dashboard statistics

### Admin
- Secure admin login
- Add and manage doctors
- Manage doctor availability
- View and manage appointments
- View platform statistics
- Manage platform activity from a dedicated dashboard

## Tech Stack

**Frontend**
- React.js
- Vite
- React Router
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

**Services**
- Cloudinary
- Razorpay
- Stripe

## Project Structure

```text
doc-ops/
├── frontend/     # Patient-facing application
├── admin/        # Admin and Doctor dashboards
└── backend/      # REST API and database logic
```

## Architecture

```text
Patient / Doctor / Admin
          │
          ▼
    React Applications
          │
          ▼
    Express.js REST API
          │
     ┌────┴────┐
     ▼         ▼
 MongoDB   Cloudinary
```

## Authentication

The application uses JWT-based authentication and protected routes.

It supports separate access flows for:

- Patients
- Doctors
- Administrators

Passwords are hashed using bcrypt, and role-based access control is used to separate user permissions.

## Appointment Management

The system manages doctor availability and appointment slots.

When a patient books an appointment, the backend checks the doctor's availability and the selected slot before creating the appointment.

Patients can view or cancel appointments, while doctors can manage appointment status and availability.

## Screenshots

Add screenshots here to showcase the main application screens.

```text
screenshots/
├── home.png
├── doctors.png
├── booking.png
├── patient-dashboard.png
├── doctor-dashboard.png
└── admin-dashboard.png
```

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB / MongoDB Atlas
- Cloudinary account

### Clone the Repository

```bash
git clone <your-repository-url>
cd doc-ops
```

### Install Dependencies

```bash
cd frontend
npm install

cd ../admin
npm install

cd ../backend
npm install
```

### Environment Variables

Create the required `.env` files for the frontend, admin dashboard, and backend.

Example backend configuration:

```env
PORT=8000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

CURRENCY=INR
```

Never commit real credentials or API keys to the repository.

## Run the Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin / Doctor Dashboard

```bash
cd admin
npm run dev
```

## What I Learned

Building Doc-Ops gave me hands-on experience with:

- Full-stack MERN application development
- JWT authentication and protected routes
- Role-based access control
- REST API development with Node.js and Express
- MongoDB data modeling with Mongoose
- Appointment and availability management
- Cloudinary image uploads
- Connecting multiple React applications to one backend

## Payment Integration

The project includes integration structure for Razorpay and Stripe. Payment gateway configuration needs to be enabled and completed with the required credentials before production use.

## Future Improvements

- Appointment reminders and notifications
- Appointment rescheduling
- Payment verification and refunds
- Doctor reviews and ratings
- Medical records and prescription management
- Automated testing
- Production deployment and monitoring

## Project Goal

The goal of Doc-Ops is to make doctor appointment management simple for patients, doctors, and administrators through one connected platform.
