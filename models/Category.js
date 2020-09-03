const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    name:{
        type : String,
        trim : true,
        unique : true,
        lowercase : true,
        required : true,
        maxlength : 32
    }

});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;