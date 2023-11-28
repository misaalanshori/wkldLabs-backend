const db = require("../models");
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser  = async (req, res) => {
    try{
        const {name, username, password} = req.body;
        const userExist = await User.findOne({
            where: {username}
        });
        if (userExist){
            return res.status(400).send('Username already exist');
        }

        await User.create({
            name,
            username,
            password: await bcrypt.hash(password, 15),
        });
        return res.status(200).send('Registration success');
    } catch (err){
        return res.status(500).send('Registration error');
    }
};

exports.signInUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            where: {username}
        });
        if (!user) {
            return res.status(404).json('Email not found');
        }


        // Verify password
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json('Incorrect email and password combination');
        }


        // Authenticate user with jwt
        const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION
        });

        res.status(200).send({
            id: user.id,
            name: user.name,
            username: user.username,
            accessToken: token,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Sign in error');
    }
}