import { validationResult } from "express-validator";
import { authRepository } from "../service/index.js";

const login = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, password } = req.body
    try {
        const loginUser = await authRepository.login({ username, password }, res)
        res.status(200).json({
            message: 'Login successfully.',
            data: loginUser
        })
    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}

const register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const {
        username,
        password,
    } = req.body
    try {
        const newUser = await authRepository.register({ username, password })
        res.status(201).json({
            message: 'Register successfully.',
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            errors: error.toString()
        })
    }
}

const listAllUsers = async (req, res) => {
    try {
        const viewUser = await authRepository.listAllUsers()
        res.status(201).json({
            message: 'View successfully.',
            data: viewUser
        })
    } catch (error) {
        res.status(500).json({
            errors: error.toString()
        })
    }
}

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies['refreshToken']
        const refresh_token = await authRepository.processNewToken(refreshToken, res)
        res.status(200).json(
            {
                message: "Get refresh token",
                data: refresh_token
            }
        );
    } catch (error) {
        res.status(400).json({ message: 'Can not find refreshToken.' });
    }
}

export default {
    login, register, listAllUsers, refreshToken
}