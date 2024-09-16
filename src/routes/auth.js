import express from 'express';
import { authController } from "../controller/index.js";

const authRouter = express.Router();

authRouter.post('/login', authController.login)

authRouter.post('/register', authController.register)

authRouter.get('/refresh-token', authController.refreshToken)

authRouter.get('/view-all', authController.listAllUsers)


export default authRouter