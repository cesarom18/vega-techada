const mongoose = require('mongoose');

const ProductCategories = require('../models/ProductCategories.js');

const getAllProductCategories = async (req, res, next) => {
    try {
        const productCategories = await ProductCategories.find();
        if (productCategories.length === 0) {
            res.status(404).json({ message: 'No hay categorias de productos registradas' });
            return next();
        };
        res.status(200).json(productCategories);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createProductCategory = async (req, res, next) => {
    const productCategory = new ProductCategories(req.body);
    try {
        await productCategory.save();
        res.status(201).json({ message: 'Categoria de producto registrada con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateProductCategory = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await ProductCategories.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Categoria de producto no encontrada' });
            return next();
        };

        res.status(200).json({ message: 'Categoria de producto actualizada con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const deleteProductCategory = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await ProductCategories.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Categoria de producto no encontrada' });
            return next();
        };

        res.status(200).json({ message: 'Categoria de producto eliminada con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    getAllProductCategories,
    createProductCategory,
    updateProductCategory,
    deleteProductCategory
};