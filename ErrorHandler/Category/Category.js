const { check }  = require('express-validator')

const category = [
    check('name', 'Name is required')
        .not()
        .notEmpty()
        .isLength({min:4})
]

module.exports = category;