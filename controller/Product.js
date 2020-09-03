const ProductModel = require('../models/Product');
const {Validation} = require('../ErrorHandler/Validation/Validation');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Product = require('../models/Product');

exports.create = async (req, res) => {

  try {
        //Validation
        Validation(req);

        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
        
        if(err){
            return res.status(200).json({status: 0, data:{ message: err }})
        }

        let product = new Product(fields);

        if(files.image){
            product.photo.data = fs.readFileSync(files.image.path);
            product.image.contentType = files.image.type;
        }

        product.save()
            .then(data => res.status(201).json({ status: 1, data: { product: data } }))
            .catch(err => res.status(400).json({ status: 0, data: { message: err } }));
    })
    } catch (error) {
        return res.status(400).json({ status: 0, data:{ message: error }});
    }


}