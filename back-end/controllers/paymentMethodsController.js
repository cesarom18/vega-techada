import mongoose from 'mongoose';

import PaymentMethods from '../models/PaymentMethods.js';

export const getAllPaymentMethods = async (req, res, next) => {
    try {
        const paymentMethods = await PaymentMethods.find();
        if (paymentMethods.length === 0) {
            res.status(404).json({ message: 'No hay metodos de pago registrados' });
            return next();
        };
        res.status(200).json(paymentMethods);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

export const createPaymentMethod = async (req, res, next) => {
    const paymentMethod = new PaymentMethods(req.body);
    try {
        await paymentMethod.save();
        res.status(201).json({ message: 'Metodo de pago registrado con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

export const updatePaymentMethod = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await PaymentMethods.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Metodo de pago no encontrado' });
            return next();
        };

        res.status(200).json({ message: 'Metodo de pago actualizado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

export const deletePaymentMethod = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await PaymentMethods.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Metodo de pago no encontrado' });
            return next();
        };

        res.status(200).json({ message: 'Metodo de pago eliminado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};