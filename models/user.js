const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

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
        maxlength : 32
    },

    about:{
        type: String,
        trim: true
    },

    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }

}, {timestamps: true});

const user = mongoose.model('user', userSchema);

userSchema.pre( 'save' , async function (next){

    const user = this;
    user.password = await bcryptjs.hash( user.password, 8 );

    next();
})