import express from 'express';
const router = express.Router();

import { getAllProductCategories, createProductCategory, updateProductCategory, deleteProductCategory } from '../controllers/productCategoriesController.js';
import { uploadProductImage, createProduct } from '../controllers/productsController.js';
import { getAllOrderStates, createOrderState, updateOrderState, deleteOrderState } from '../controllers/orderStatesController.js';

// Product Categories Endpoints
router.get('/product-categories', getAllProductCategories);
router.post('/product-categories', createProductCategory);
router.put('/product-categories/:id', updateProductCategory);
router.delete('/product-categories/:id', deleteProductCategory);

// Products Endpoints
router.post('/products', uploadProductImage, createProduct);

// Order States Endpoints
router.get('/order-states', getAllOrderStates);
router.post('/order-states', createOrderState);
router.put('/order-states/:id', updateOrderState);
router.delete('/order-states/:id', deleteOrderState);

export default router;