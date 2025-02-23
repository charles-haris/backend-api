const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { email, password, created_by } = req.body;
        const user = await User.create({ email, password, created_by });
        res.status(201).json(
            {
                message: "user created successfully",
                data: user
            });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//get all the users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            message: "users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

