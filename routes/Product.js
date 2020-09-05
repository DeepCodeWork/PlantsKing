const express = require('express');
const router = express.Router();
const { create, getProductById, read, deleteProduct, update, list, listRelated, productCategories, listBySearch, getProductImage } = require('../controller/Product');
const { auth, isAdmin } = require('../middleware/Auth');
const { getUserById } = require('../controller/User');


//@Routes

//@router   api/product
//@desc     create product
//@access   Admin
//@method   POST
router.post('/product/create/:userId',auth, isAdmin, create);

//@router   api/product
//@desc     fetch all product
//@access   public
//@method   GET
router.get('/products', list);

//@router   api/product/:id
//@desc     read
//@access   public
//@method   GET
router.get('/product/:productId', read);

//@router   api/product/:id
//@desc     fetching related products of same category
//@access   public
//@method   GET
router.get('/products/related/:productId', listRelated);

//@router   api/product/categories
//@desc     fetching products category
//@access   public
//@method   GET
router.get('/products/category/', productCategories);

//@router   api/product
//@desc     edit product
//@access   Admin
//@method   PATCH
router.put('/product/:productId/:userId',auth, isAdmin, update);

//@router   api/product/by/search
//@desc     search product
//@access   PUBLIC
//@method   POST
router.post("/products/by/search", listBySearch);

//@router   api/product/image/:productId
//@desc     fetching products images
//@access   public
//@method   GET
router.get('/product/image/:productId', getProductImage);

//@router   api/product
//@desc     delete product
//@access   Admin
//@method   delete
router.delete('/product/:productId/:userId',auth, isAdmin, deleteProduct);



//Middleware route
router.param('productId', getProductById);

router.param('userId', getUserById);


module.exports = router;