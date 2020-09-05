const express = require('express');
const router = express.Router();
const {RegisterUser, LoginUser, LogoutUser, LogoutUserFromAllDevice, getUserById, read, update} = require('../controller/User');
const {auth, isAdmin} = require('../middleware/Auth');


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

//@router   api/secret/:userId
//@desc     Fetcing user by id
//@access   PRIVATE
//@method   GET
router.get('/secret/:userId',auth, isAdmin , async (req, res)=>{
    return res.status(200).json({ status: 1, data: {user: req.user} })
});

//@router   api/user/:userId
//@desc     read user by id
//@access   PRIVATE
//@method   GET
router.get('/user/:userId', auth, read);

//@router   api/user/:userId
//@desc     update user by id
//@access   PRIVATE
//@method   GET
router.put('/user/:userId', auth, update);

//Middleware
router.param('userId', getUserById);

module.exports = router;