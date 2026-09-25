# Doc-Ops – Patient Appointment Booking System

Doc-Ops is a full-stack healthcare appointment platform built with the MERN stack.

It provides a simple way for patients to discover doctors, check availability, book and manage appointments, while doctors and administrators can manage appointments, schedules, profiles, and platform activity through dedicated dashboards.

## Features

### Patient

- Create an account and log in securely
- Browse doctors by speciality
- View doctor profiles and consultation fees
- Check available appointment slots
- Book appointments
- View upcoming and previous appointments
- Cancel appointments
- Manage personal profile information
- Upload and update profile picture
- Support for appointment payment flow

### Doctor

- Secure doctor login
- View and manage appointments
- Check appointment details
- Mark appointments as completed
- Cancel appointments
- Manage availability
- Update profile information
- View dashboard statistics
- Track patients and earnings

### Admin

- Secure admin login
- View overall platform statistics
- Add and manage doctors
- Update doctor availability
- View and manage appointments
- Upload doctor profile images
- Manage doctors and platform activity from one dashboard

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Tailwind CSS
- Axios
- React Toastify
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- Validator
- CORS

### Services & Integrations

- Cloudinary for image uploads
- Razorpay payment integration structure
- Stripe payment integration structure

## Project Structure

```text
doc-ops/
│
├── frontend/        # Patient-facing React application
│
├── admin/           # Admin and Doctor dashboard
│
└── backend/         # Node.js, Express.js and MongoDB API
