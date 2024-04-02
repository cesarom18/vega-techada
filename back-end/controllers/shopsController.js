const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const Shops = require('../models/Shops.js');

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

const uploadShopImage = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ message: 'Ocurrio un error al subir la imagen de la tienda' });
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

const getAllShops = async (req, res, next) => {
    try {
        const shops = await Shops.find();
        if (shops.length === 0) {
            res.status(404).json({ message: 'No hay tiendas registradas' });
            return next();
        };
        res.status(200).json(shops);
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

const createShop = async (req, res, next) => {
    console.log('Entro en la funcion')
    console.log(req.body)
    const shop = new Shops(req.body);
    try {
        if (req.file.filename) {
            shop.image = req.file.filename;
        };
        await shop.save();
        res.status(201).json({ message: 'Tienda registrada con exito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const updateShop = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };
        let prevShop = await Shops.findById(req.params.id);
        let newShop = req.body;
        if (req.file) {
            deletePrevImage(prevShop.image);
            newShop.image = req.file.filename;
        } else {
            newShop.image = prevShop.image;
        };
        let query = await Shops.findOneAndUpdate({ _id: req.params.Id }, newShop, { new: true });
        if (!query) {
            res.status(404).json({ message: 'Tienda no encontrada' });
            return next();
        };
        res.status(404).json({ message: 'Tienda actualizada correctamente' })
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    };
};

const deleteShop = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ message: 'El ID otorgado no es valido' });
            return next()
        };

        const query = await Shops.findOneAndDelete({ _id: req.params.id });
        if (!query) {
            res.status(404).json({ message: 'Tienda no encontrada' });
            return next();
        };

        res.status(200).json({ message: 'Tienda eliminada con exito' });
    } catch (error) {
        res.status(404).json({ message: error.message });
        next();
    };
};

module.exports = {
    uploadShopImage,
    getAllShops,
    createShop,
    updateShop,
    deleteShop
};