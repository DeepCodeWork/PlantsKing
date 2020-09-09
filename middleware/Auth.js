const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const config = require('config');
const secretKey = config.get('jwt_secret_key');

exports.auth = async (req, res, next) => {

    try {

        const token = req.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(token, secretKey);
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token});
        if(!user){
            return res.status(401).json({message: "Please Authenticate"});
        }else{
            req.token = token;
            req.user = user;
            next();
        }
        } catch (error) {
            return res.status(400).json({ message: "Invalid Request" })
        }
}

exports.isAdmin = async (req, res, next) => {
    try {

        console.log(req.user.role)
        if(req.user.role === 'ADMIN')
            next();
        else
            return res.status(401).json({status: 0, data: {message: "Not Authorised"}});
    } catch (error) {
        return res.status(400).json({message: "You are not authorized to access this page"})
    }
}