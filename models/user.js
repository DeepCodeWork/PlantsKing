const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecretKey = config.get('jwt_secret_key');

const userSchema = new mongoose.Schema({

    name:{
        type : String,
        trim : true,
        required : true,
        maxlength : 32
    },

    email:{
        type : String,
        trim : true,
        unique : true,
        required : true,
        maxlength : 32,
        lowercase: true
    },

    password:{
        type : String,
        trim : true,
        required : true,
        minlength : 6
    },

    about:{
        type: String,
        trim: true
    },

    history:{
        type: Array,
        default: []
    },

    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },

    date: {
        type: Date,
        default: Date.now()
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

}, {timestamps: true});

//Hashing password
userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcryptjs.hash( user.password, 8 );
    }
    
    next();
})

//Generating auth token
userSchema.methods.generateAuthToken = async function(){
    const user = this;
    console.log(user._id);
    const token = jwt.sign({ _id: user._id.toString() }, jwtSecretKey);
    console.log(jwt.verify(token, jwtSecretKey));
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

const User = mongoose.model('user', userSchema);

module.exports = User;