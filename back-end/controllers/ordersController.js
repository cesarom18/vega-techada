const Orders = require('../models/Orders.js');

const getAllOrders = async (req, res, next) => {
    try {
        const query = await Orders.find();
        if (query.length === 0) {
            res.status(404).json({ message: 'No hay pedidos registrados' });
            return next();
        };
        res.status(200).json({ data: query, message: 'Pedidos obtenidos con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createOrder = async (req, res, next) => {
    const order = new Orders(req.body);
    try {
        await order.save();
        res.status(201).json({ message: 'Pedido registrado con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateOrder = async (req, res, next) => {
    try {
        const query = await Orders.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Pedido no encontrado' });
            return next();
        };
        res.status(200).json({ message: 'Pedido actualizado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const deleteOrder = async (req, res, next) => {
    try {
        const query = await Orders.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Pedido no encontrado' });
            return next();
        };
        res.status(200).json({ message: 'Pedido eliminado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
};