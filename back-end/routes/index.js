import express from 'express';
const router = express.Router();

import { uploadProductImage, createProduct } from '../controllers/productsController.js';

// Products Endpoints
router.post('/products', uploadProductImage, createProduct);

export default router;