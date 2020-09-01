const express = require('express');
const router = express.Router();

//@Controller 
const {sayHi, registerUser} = require('../controller/user');


//@Routes
router.get('/user', sayHi);

router.post('/user', registerUser);

router.post('/c', (req, res)=>{
   console.log(req.body);
})

module.exports = router;