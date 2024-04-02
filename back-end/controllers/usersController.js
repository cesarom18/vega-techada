const mongoose = require('mongoose');

const Users = require('../models/Users.js');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.find();
        if (users.length === 0) {
            res.status(404).json({ message: 'No hay usuarios registrados' });
            return next();
        };
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createUser = async (req, res, next) => {
    const user = new Users(req.body);
    try {
        await user.save();
        res.status(200).json({ message: 'Usuario registrado con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateUser = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await Users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return next();
        };

        res.status(200).json({ message: 'Usuario actualizado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const deleteUser = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await Users.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Usuario no encontrado' });
            return next();
        };

        res.status(200).json({ message: 'Usuario eliminado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
};