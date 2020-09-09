const express = require('express');
const router = express.Router();
const categoryErrorHandler = require('../ErrorHandler/Category/Category');
const {auth, isAdmin} = require('../middleware/Auth');
const { createCategory, getAllCategory, deleteCategory, updateCategory, categoryById, read } = require('../controller/Category');


//@Routes

//@router   api/category
//@desc     create category
//@access   Admin
//@method   POST
router.post('/category/',auth, isAdmin, categoryErrorHandler, createCategory);

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

//@router   api/category/:id
//@desc     read category
//@access   public
//@method   get
router.get('/category/:categoryId', read);

//Middleware    
router.param('categoryId', categoryById);



module.exports = router;