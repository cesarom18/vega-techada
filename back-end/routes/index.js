const express = require('express');
const router = express.Router();

const { uploadProductImage, createProduct } = require('../controllers/productsController');

// Products Endpoints
router.post('/products', uploadProductImage, createProduct);

module.exports = router;