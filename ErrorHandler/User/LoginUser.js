const { check }  = require('express-validator')

const LoginUser = [

    check('email', 'Please include a valid email')
        .isEmail(),

    check('password','Enter a valid password with 6 or more characters')
        .isLength({min:6})
]

module.exports = LoginUser;