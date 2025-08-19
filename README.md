Hotel Booking Platform

A hotel booking platform built with Node.js, Express, EJS, and MongoDB.
Users can register, log in, create hotel listings with images, and leave reviews.

Features

User authentication (Register / Login / Logout)

Create and manage hotel listings with images

Add and view reviews for properties

Organized MVC structure (controllers, models, routes, views)

Installation
git clone https://github.com/Rishabh-Sharma502/Hotel-Booking-Platform.git
cd Hotel-Booking-Platform
npm install


Create a .env file in the root:

PORT=3000
DB_URL=<your-database-url>
SESSION_SECRET=<your-secret>


Run the app:

npm start


Visit: http://localhost:3000

Project Structure
controllers/   # route handlers
models/        # database schemas
routes/        # express routes
views/         # EJS templates
public/        # static files (css, js, images)
app.js         # main app entry

Usage

Register at /register

Log in at /login

Create a listing at /listings/new

Browse properties and leave reviews
