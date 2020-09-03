const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');
const config = require('config');
const { deleteOne } = require('../models/User');
const secretKey = config.get('jwt_secret_key');

const auth = async (req, res, next) => {

    try {
        const token = req.header('Authorization').replace('bearer','');
        const decoded = jwt.verify(token, secretKey);
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token});
        if(!user){
            return res.status(401).json({message: "Please Authenticate"});
        }
            req.token = token;
            req.user = user;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Please authenticate" })
        }
}

module.exports = auth;