const OrderStates = require('../models/OrderStates.js');

const getAllOrderStates = async (req, res, next) => {
    try {
        const query = await OrderStates.find();
        if (query.length === 0) {
            res.status(404).json({ message: 'No hay estados de orden registrados' });
            return next();
        };
        res.status(200).json({ data: query, message: 'Estados de orden obtenidos con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createOrderState = async (req, res, next) => {
    const orderState = new OrderStates(req.body);
    try {
        await orderState.save();
        res.status(201).json({ message: 'Estado de orden registrado con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateOrderState = async (req, res, next) => {
    try {
        const query = await OrderStates.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Estado de orden no encontrado' });
            return next();
        };
        res.status(200).json({ message: 'Estado de orden actualizado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const deleteOrderState = async (req, res, next) => {
    try {
        const query = await OrderStates.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Estado de orden no encontrado' });
            return next();
        };
        res.status(200).json({ message: 'Estado de orden eliminado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    getAllOrderStates,
    createOrderState,
    updateOrderState,
    deleteOrderState
};