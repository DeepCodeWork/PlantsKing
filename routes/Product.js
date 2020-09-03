const express = require('express');
const router = express.Router();
const productHandler = require('../ErrorHandler/Product/CreateProduct');
const { create } = require('../controller/Product');
const {auth, isAdmin} = require('../middleware/Auth');


//@Routes

//@router   api/product
//@desc     create product
//@access   Admin
//@method   POST
router.post('/product',auth, isAdmin, productHandler, create);

//@router   api/product
//@desc     fetch product
//@access   Admin
//@method   GET
router.get('/product', getAllproduct);

//@router   api/product
//@desc     edit product
//@access   Admin
//@method   PATCH
router.patch('/product',auth, isAdmin, productErrorHandler, updateproduct);

//@router   api/product
//@desc     delete product
//@access   Admin
//@method   delete
router.delete('/product',auth, isAdmin, deleteproduct);



module.exports = router;