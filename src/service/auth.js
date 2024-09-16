import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../model/User.js'

const login = async ({ username, password }, res) => {
    const userExisting = await User.findOne({ username }).exec()
    if (userExisting) {
        const isMatch = await bcrypt.compare(password, userExisting.password)
        if (isMatch == true) {
            const accessToken = jwt.sign({ data: userExisting.username }, process.env.SECRET_KEY_JWT, {
                expiresIn: "30s"
            })

            const refreshToken = jwt.sign({ data: userExisting.username }, process.env.SECRET_KEY_JWT, {
                expiresIn: "30d",
            });

            res.setHeader('Authorization', `Bearer ${accessToken}`);
            const cookieValue = `refreshToken=${refreshToken}; HttpOnly; Max-Age=${30 * 24 * 60 * 60}; Path=/`; // 30 days
            res.setHeader('Set-Cookie', cookieValue);

            return {
                ...userExisting.toObject(),
                password: "Not show",
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        } else {
            throw new Error("Wrong username and password")
        }
    } else {
        throw new Error('User not exist.')
    }
}

const register = async ({ username, password }) => {
    const userExisting = await User.findOne({ username }).exec()
    if (userExisting != null) {
        throw new Error("User existing.")
    }

    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SECRET_KEY))

    const newUser = await User.create({
        username,
        password: hashPassword,
    })
    return {
        ...newUser._doc,
        password: 'Not show'
    }
}

const listAllUsers = async () => {
    try {
        const users = await User.find({}).select('-password');
        return users;
    } catch (error) {
        throw new Error('Failed to retrieve users');
    }
};

const processNewToken = async (refreshToken, res) => {
    let result = jwt.verify(refreshToken, process.env.SECRET_KEY_JWT)
    const { username } = result.data
    const payload = {
        username: username,
    };
    const access_token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {
        expiresIn: "30s",
    });
    const refresh_token = jwt.sign(payload, process.env.SECRET_KEY_JWT, {
        expiresIn: "30d",
    });
    res.cookie('refreshToken', '', { expires: new Date(0) });
    const cookieValue = `refreshToken=${refresh_token}; HttpOnly; Max-Age=${30 * 24 * 60 * 60}; Path=/`; 
    res.setHeader('Set-Cookie', cookieValue);
    return {
        infor: payload,
        access_token,
        refresh_token
    }
}

export default {
    login, register, listAllUsers, processNewToken
}