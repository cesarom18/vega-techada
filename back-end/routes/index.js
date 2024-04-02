const express = require('express');

const router = express.Router();

const { getAllProductCategories, createProductCategory, updateProductCategory, deleteProductCategory } = require('../controllers/productCategoriesController.js');
const { uploadProductImage, getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController.js');
const { getAllPaymentMethods, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } = require('../controllers/paymentMethodsController.js');
const { getAllOrderStates, createOrderState, updateOrderState, deleteOrderState } = require('../controllers/orderStatesController.js');
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/usersController.js');

// Product Categories Endpoints
router.get('/product-categories', getAllProductCategories);
router.post('/product-categories', createProductCategory);
router.put('/product-categories/:id', updateProductCategory);
router.delete('/product-categories/:id', deleteProductCategory);

// Products Endpoints
router.get('/products', getAllProducts);
router.post('/products', uploadProductImage, createProduct);
router.put('/products/:id', uploadProductImage, updateProduct);
router.delete('/products/:id', deleteProduct);

// Order States Endpoints
router.get('/order-states', getAllOrderStates);
router.post('/order-states', createOrderState);
router.put('/order-states/:id', updateOrderState);
router.delete('/order-states/:id', deleteOrderState);

// Payment Methods Endpoints
router.get('/payment-methods', getAllPaymentMethods);
router.post('/payment-methods', createPaymentMethod);
router.put('/payment-methods/:id', updatePaymentMethod);
router.delete('/payment-methods/:id', deletePaymentMethod);

// Users Endpoints
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;