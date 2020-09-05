const userModel = require('../models/User');
const {validation} = require('../ErrorHandler/Validation/Validation');
const bcryptjs = require('bcryptjs');

//Registering a user
exports.RegisterUser = async (req, res)=> {

   try {
        const { email } = req.body;

        //Validation
        validation(req);

        //Check if user already exist
        const isUserExist = await userModel.findOne({ email: email });
        if(isUserExist)
            return res.status(400).json({ message: "Email already exist. Please login" })

        //Adding user to database
        const user = new userModel(req.body)
        await user.save();

        const token = await user.generateAuthToken();
        return res.status(201).json({ data: { user: user, token: token }});

        
   } catch (err) {
       return res.status(500).json({ message: err })
   }

}


//Logging in user
exports.LoginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        //Validation
        validation(req)

        //checking email exist
        const isUserExist = await userModel.findOne({email: email});
        if(!isUserExist)
           return res.status(400).json({ message: "Email do not exist" });
        
        //Checking password
        const checkPassword = await bcryptjs.compare( password, isUserExist.password);
        if(!checkPassword){
           return res.status(400).json({ message : "Email and password do not match" });
        }

        const token = await isUserExist.generateAuthToken();

        return res.status(200).json({ data:{
            user: isUserExist,
            token : token
        } })
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message : error });
    }
}

//User Logout
exports.LogoutUser = async (req, res) => {
    
    try {
        req.user.tokens = req.user.tokens.filter(token=>req.token != token.token)
        await req.user.save();
        res.status(200).json({ message: "Logout successfully." });
    } catch (error) {
        res.status(401).json({ message: "Invalid Request"});
    }
}


//User Logout from all device
exports.LogoutUserFromAllDevice = async (req, res) => {
    
    try {
        req.user.tokens = [];
        await req.user.save();
        res.status(200).json({ message: "Logout successfully." });
    } catch (error) {
        res.status(401).json({ message: "Invalid Request"});
    }
}

exports.getUserById = async (req, res, next, id) => {
    
    try {
        const user = await userModel.findById(id);
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({status: 0, data: { message: "Server Error" }});
    }
}

exports.read = (req, res) => {
    try {
        //Making password null
        req.user.password = undefined

        if(!req.user)
            return res.status(404).json({status: 0, data: {message: "No user found"}})
        
        return res.status(200).json({status: 1, data: {user: req.user}});
    } catch (error) {
        return res.status(500).json({status: 0, data: {message: "Invalid request"}})
    }
}

exports.update = (req, res) => {
    try {
        userModel.findByIdAndUpdate({_id: req.user._id},{$set: req.body}, {new: true}) 
            .then(user => {
                user.password = undefined;
                return res.status(200).json({status: 1, data: {user: req.user}})
            })
            .catch(err => res.status(403).json({status: 0, data: {message: "Not Authorized"}}))
    } catch (error) {
        return res.status(500).json({status: 0, data: {message: "Invalid request"}})
    }
}

