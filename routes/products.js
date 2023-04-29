const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getAllProductsStatic
} = require('../controllers/products');

router.route('/products/static').get(getAllProductsStatic);
router.route('/products').get(getAllProducts);

module.exports = router