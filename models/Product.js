const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const productSchema = new mongoose.Schema({

    name:{
        type : String,
        trim : true,
        unique : true,
        lowercase : true,
        required : true,
        maxlength : 32
    },

    description:{
        type : String,
        trim : true,
        unique : true,
        required : true,
        maxlength : 2000
    },

    price:{
        type : Number,
        trim : true,
        required : true,
        maxlength : 32
    },

    category:{
        type : ObjectId,
        ref : 'category',
        required : true
    },

    quantity:{
        type : Number,
        required : true
    },

    image: {
        data: Buffer,
        contentType : String
    },

    shipping: {
        required: false,
        type: Boolean
    }

},{ timestamps: true });

const Product = mongoose.model('product', productSchema);

module.exports = Product;