const express = require('express');
const router = express.Router();
const categoryErrorHandler = require('../ErrorHandler/Category/Category');

//@Controller 
const { createCategory, getAllCategory, deleteCategory, updateCategory } = require('../controller/Category');
const {auth, isAdmin} = require('../middleware/Auth');


//@Routes

//@router   api/category
//@desc     create category
//@access   Admin
//@method   POST
router.post('/category',auth, isAdmin, categoryErrorHandler, createCategory);

//@router   api/category
//@desc     create category
//@access   Admin
//@method   GET
router.get('/category', getAllCategory);

//@router   api/category
//@desc     create category
//@access   Admin
//@method   PATCH
router.patch('/category',auth, isAdmin, categoryErrorHandler, updateCategory);

//@router   api/category
//@desc     create category
//@access   Admin
//@method   delete
router.delete('/category',auth, isAdmin, deleteCategory);



module.exports = router;