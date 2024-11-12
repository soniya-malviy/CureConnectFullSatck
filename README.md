# Doctor Appointment Booking Website

This is a RESTful API for managing user accounts, doctor appointments, and profiles, built with Express.js and MongoDB. It includes secure endpoints for user authentication, appointment scheduling, profile management, and more.

## Features

- **User Authentication**: Register and login with JWT-based authentication for secure access.
- **Profile Management**: Update or delete user profiles.
- **Doctor Appointment Booking**: Book, view, and cancel appointments with doctors.
- **Department Management**: Retrieve and add departments for various specialties.
- **Secure Access Control**: All protected routes require JWT tokens to ensure secure access to user and appointment information.

---

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: MongoDB for storing user and appointment data.
- **Environment Variables**:
  - `MONGODB_URI`: MongoDB connection URI.
  - `JWT_SECRET`: Secret key for JWT token generation and verification.

---

## Dependencies

Install the following dependencies:
- `express`: Minimalist web framework for Node.js.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `bcrypt`: Library for hashing passwords.
- `axios`: HTTP client for Node.js.
- `jsonwebtoken`: JWT implementation for secure token-based authentication.
- `cloudinary`: Media management and cloud storage solution.
- `mongoose`: Elegant MongoDB object modeling for Node.js.

---

## Project Structure

```plaintext
Config/
controllers/
middleware/
models/
routes/
server.js
