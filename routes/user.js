const express = require('express');
const router = express.Router();

//@Controller 
const {RegisterUser, LoginUser, LogoutUser, LogoutUserFromAllDevice} = require('../controller/User');
const {auth} = require('../middleware/Auth');


//@Routes

//@router   api/user
//@desc     Register a user
//@access   public
//@method   POST
router.post('/user', RegisterUser);

//@router   api/user/login
//@desc     Login a user
//@access   public
//@method   POST
router.post('/user/login', LoginUser);

//@router   api/user/login
//@desc     Login a user
//@access   public
//@method   GET
router.get('/user/logout',auth ,LogoutUser);

//@router   api/user/login
//@desc     Login a user
//@access   public
//@method   GET
router.get('/user/logoutAll',auth ,LogoutUserFromAllDevice);



module.exports = router;