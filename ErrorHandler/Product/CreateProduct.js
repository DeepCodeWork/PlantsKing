const { check }  = require('express-validator')

const addProduct = [
    check('name', 'Name is required')
        .not()
        .notEmpty(),
    
    check('Description', 'Description is required')
        .not()
        .notEmpty(),

    check('category', 'Category is required')
        .not()
        .notEmpty()
]

module.exports = addProduct;