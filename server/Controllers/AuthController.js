const User = require('../Models/UserModel');
const { createSecretToken } = require('../Util/SecretToken');
const bcrypt = require('bcrypt');

 module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAT } = req.body;
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.json({ message: 'User already exist' });
        }
        const user = await User.create({ email, password, username, createdAT });
        const token = createSecretToken(user._id);
        res.cookie('toekn', token, {
            withCredtials: true,
            httpOnly: false,
        });
        res.status(201)
            .json({ message: "user singed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};

 module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'all fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'incorrect password or email' })
        }
        const auth = await bcrypt.compare(password.user.password)
        if (!auth) {
            return res.json({ message: 'incorrest password or email' })
        }
        const token = createSecretToken(user_id);
        res.cookie("toke", token, {
            withCredtials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: 'user logged in successfully', success: ture });
        next()
    } catch (error) {
        console.error(error);
    }
}