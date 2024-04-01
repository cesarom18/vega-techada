import multer from 'multer';
import { nanoid } from 'nanoid'

import Products from '../models/Products.js';

const multerConfiguration = {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads/');
        },
        filename: function (req, file, cb) {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${nanoid()}.${extension}`);
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

export const uploadProductImage = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ message: 'Ocurrio un error al subir la imagen del producto' });
        };
        return next();
    });
};

export const createProduct = async (req, res, next) => {
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