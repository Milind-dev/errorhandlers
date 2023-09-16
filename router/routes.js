
const express = require('express');
const { dashboard, homepage } = require('../controller/products');
const router = express.Router();

router.get('/dashboard',dashboard)
router.get('/homepage',homepage)

module.exports = {
    dashboardRoute:router,
    productsRoute:router
}