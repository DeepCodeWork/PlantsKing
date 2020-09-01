const userModel = require('../models/user')

exports.registerUser = (req, res)=> {

   try {
        const user = new userModel(req.body);
        user.save();
   } catch (error) {
        console.log(error);
   }

}