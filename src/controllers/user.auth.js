require("dotenv").config();
const jwt = require("jsonwebtoken");

const newToken = (user) => { 
    return jwt.sign({ user: user }, process.env.SECRET_KEY, {
        expiresIn: 60 * 15,
    });
}
const User = require("../models/user.model");

const register = async (req, res) =>
{
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (user)
            return res.status(400).send({ message: "User with that email exist" });
    
        user = await User.create(req.body);

        const token = newToken(user);

        return res.ststus(201).send({ user, token });
    } catch (err) { 
        return res.ststus(500).send({ message: err.message });

    }
}

const login = async (req, res) =>
{
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send({ message: "Either email or password is incorrect" });
    
        const match = user.checkPassword(req.body.password);

        if (!match) 
            return res.status(400).send({ message: "Either email or password is incorrect" });


       // user = await User.create(req.body);

        const token = newToken(user);

        return res.ststus(201).send({ user, token });
    } catch (err) { 
        return res.ststus(500).send({ message: err.message });

    }
}

module.exports = { register, login };