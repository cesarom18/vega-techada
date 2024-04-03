const ProductCategories = require('../models/ProductCategories.js');

const getAllProductCategories = async (req, res, next) => {
    try {
        const query = await ProductCategories.find();
        if (query.length === 0) {
            res.status(404).json({ message: 'No hay categorias de productos registradas' });
            return next();
        };
        res.status(200).json({ data: query, message: 'Categorias de productos obtenidas con exito'});
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