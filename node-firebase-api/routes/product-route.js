const express = require('express');
const {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct

} = require('../controllers/productController');


const router = express.Router();

router.post('/products', addProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


module.exports = {
    routes: router
}