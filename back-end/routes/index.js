import express from 'express';
const router = express.Router();

import { createProductCategory, getAllProductCategories, deleteProductCategory, updateProductCategory } from '../controllers/productCategoriesController.js';
import { uploadProductImage, createProduct } from '../controllers/productsController.js';

// Product Categories Endpoints
router.get('/product-categories', getAllProductCategories);
router.post('/product-categories', createProductCategory);
router.delete('/product-categories/:id', deleteProductCategory);
router.put('/product-categories/:id', updateProductCategory);

// Products Endpoints
router.post('/products', uploadProductImage, createProduct);

export default router;