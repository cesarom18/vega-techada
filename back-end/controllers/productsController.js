const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const Products = require('../models/Products.js');

const multerConfiguration = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: function (req, file, cb) {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${uuidv4()}.${extension}`);
        }
    }),
    fileFilter: function (req, file, cb) {
        if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato de imagen no valido'));
        };
    }
};

const upload = multer(multerConfiguration).single('image');

const uploadProductImage = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ message: 'Ocurrio un error al subir la imagen del producto' });
        };
        return next();
    });
};

const deletePrevImage = async (prevImage) => {
    try {
        const filePath = path.join(__dirname, '../uploads', prevImage);
        await fs.promises.unlink(filePath);
    } catch (error) {
        console.log(error);
    };
};

const getAllProducts = async (req, res, next) => {
    try {
        const query = await Products.find();
        if (query.length === 0) {
            res.status(404).json({ message: 'No hay productos registrados' });
            return next();
        };
        res.status(200).json({ data: query, message: 'Productos obtenidos con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createProduct = async (req, res, next) => {
    const product = new Products(req.body);
    try {
        if (req.file.filename) {
            product.image = req.file.filename;
        };
        await product.save();
        res.status(201).json({ message: 'Producto registrado con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateProduct = async (req, res, next) => {
    try {
        let prevProduct = await Products.findById(req.params.id);
        let newProduct = req.body;
        if (req.file) {
            deletePrevImage(prevProduct.image);
            newProduct.image = req.file.filename;
        } else {
            newProduct.image = prevProduct.image;
        };
        let query = await Products.findOneAndUpdate({ _id: req.params.Id }, newProduct, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return next();
        };
        res.status(404).json({ message: 'Producto actualizado correctamente' })
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const deleteProduct = async (req, res, next) => {
    try {
        const query = await Products.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Producto no encontrado' });
            return next();
        };
        res.status(200).json({ message: 'Producto eliminado con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    uploadProductImage,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};