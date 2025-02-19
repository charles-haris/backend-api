const Role = require('../models/Role');

exports.createRole = async (req, res) => {
    try {
        const { title, description } = req.body;
        const role = await Role.create({ title, description });
        res.status(201).json(
            {
                message: "role created successfully",
                data: role
            });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            message: "Roles retrieved successfully",
            data: roles
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};