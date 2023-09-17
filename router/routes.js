
const express = require('express');
const { dashboard, homepage, recipeApis } = require('../controller/products');
const { recipeRegister, recipeLogin } = require('../controller/register');
const { isAuthenticate } = require('../middleware/auth');
const router = express.Router();

router.route('/dashboard').get(dashboard)
router.route('/homepage').get(homepage)
router.route('/recipeApis').get(recipeApis)
router.route('/recipeRegister').post(recipeRegister)
router.route('/recipeLogin').post(isAuthenticate,recipeLogin)




module.exports = {
    dashboardRoute:router,
    productsRoute:router,
    recipeApisRoute:router,
    recipeRegisterRoute:router,
    recipeLoginRoute:router
}