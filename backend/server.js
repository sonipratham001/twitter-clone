import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from "cloudinary";

// Load environment variables from .env file
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


// Start the server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});