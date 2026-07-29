# CureConnect — Doctor Appointment Booking System

A full-stack platform for booking and managing doctor appointments, with separate dashboards for admins, doctors, and patients.

**Live demo:** https://cure-connect-full-satck.vercel.app/

## Features

- JWT-based authentication with role-based access (admin / doctor / patient)
- Patient-facing booking flow for scheduling appointments
- Doctor dashboard for managing availability and appointments
- Admin dashboard with analytics on appointment lifecycles, doctor availability, and patient engagement

## Tech Stack

- **Frontend:** React 18, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JWT

## Project Structure

```
├── admin/       # Admin dashboard (React)
├── frontend/    # Patient-facing app (React)
├── backend/     # Express API + MongoDB models
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB instance (local or Atlas)

### Setup

```bash
git clone https://github.com/soniya-malviy/CureConnectFullSatck.git
cd CureConnectFullSatck
```

Install dependencies in each folder that needs them (`backend`, `frontend`, `admin`):

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

Create a `.env` file in `backend/` with:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

Run each app in its own terminal:

```bash
# backend
cd backend && npm run dev

# patient frontend
cd frontend && npm run dev

# admin dashboard
cd admin && npm run dev
```

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admin/register` | Register a new user |
| POST | `/api/admin/login` | Log in and receive a JWT |
| GET | `/api/admin/get-profile` | Fetch the logged-in user's profile (requires token) |
| PUT | `/api/user/update-profile` | Update profile fields (requires token) |
| DELETE | `/api/user/delete-user` | Delete the current user's account (requires token) |

All protected routes expect a JWT in the request header.

## Notes

This was built as a learning project to practice full-stack architecture, role-based auth, and dashboard design — not currently handling production traffic.
