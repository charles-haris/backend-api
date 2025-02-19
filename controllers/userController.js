const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { nom, prenom, cni, tel, email, password, privilege, created_by } = req.body;
        const user = await User.create({ nom, prenom, cni, tel, email, password, privilege, created_by });
        res.status(201).json(
            {
                message: "user created successfully",
                data: user
            });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

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

exports.getUsersStaff = async (req, res) => {
    try {
        const users = await User.findAll()

        /*
        const users = await User.findAll(where: {
            authorId: 2,
          },)
        */
        res.status(200).json({
            message: "users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};