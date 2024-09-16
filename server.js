import dotenv from 'dotenv';
import express from 'express';
import { authRouter } from './src/routes/index.js';
import connectDB from "./src/database/database.js"
import checkToken from './src/auth/authentication.js';
import cookieParser from "cookie-parser"

const app = express()
app.use(checkToken)
dotenv.config();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/auth', authRouter);

const PORT = process.env.PORT ||3000;

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})