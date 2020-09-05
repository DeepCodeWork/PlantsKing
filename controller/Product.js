const ProductModel = require('../models/Product');
const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { nextTick } = require('process');
const { sortBy } = require('lodash');


//Add New Products
exports.create = async (req, res) => {

  try {
        let form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
        
        if(err){
            return res.status(200).json({status: 0, data:{ message: err }})
        }

        let product = new ProductModel(fields);

        if(files.image){
            //validating image size
            if(files.image.size > 2000000){
                return res.status(400).json({status: 0, data: { message: "Image size should be less than 2mb" }});
            }

            //Validating other fields
            const {name, description, price, quantity, category, shipping} = fields;

            if( !name || !description || !price || !quantity || !category || !shipping){
                return res.status(400).json({status: 0, data: { message: "All fields are required." }})
            }

            product.image.data = fs.readFileSync(files.image.path);
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

//Product By Id
exports.getProductById = async (req, res, next, id) => {

    ProductModel.findById(id).exec((err, product)=>{
        if(err || !product){
            return res.status(404).json({status: 0, data: { message: "Product not found" }})
        }

        req.product = product;
        next();
    }) 
}

//Product Read
exports.read = (req, res) => {
    req.product.image = undefined;
    return res.status(200).json({status: 1, data: req.product});
}

//Fetch all products
exports.getAllProduct = async (req, res) => {
    
    try {
        ProductModel.find({})
            .then(products => res.status(200).json({status: 1, data: products }))
            .catch( err => res.status(404).json({status: 0, message: err}))
    } catch (error) {
        return res.status(400).json({status: 0, message: error})
    }

}

//Delete product
exports.deleteProduct = async (req, res) => {
    try {
        let product = req.product;
        product.remove()
            .then(() => res.status(200).json({status: 1, data: {message: "Deleted"}} ))
            .catch(() => res.status(404).json({status: 0, data: {message: "Not found"}}))
    } catch (error) {
            return res.status(500).json({status: 0, data: {message: "Server Error"}});
    }
}

//Add New Products
exports.update = async (req, res) => {

    try {
          let form = new formidable.IncomingForm();
          form.keepExtensions = true;
          form.parse(req, (err, fields, files) => {
          
          if(err){
              return res.status(200).json({status: 0, data:{ message: err }})
          }
  
          let product = req.product;
          product = _.extend(product, fields);
  
          if(files.image){
              //validating image size
              if(files.image.size > 2000000){
                  return res.status(400).json({status: 0, data: { message: "Image size should be less than 2mb" }});
              }
  
              //Validating other fields
              const {name, description, price, quantity, category, shipping} = fields;
  
              if( !name || !description || !price || !quantity || !category || !shipping){
                  return res.status(400).json({status: 0, data: { message: "All fields are required." }})
              }
  
              product.image.data = fs.readFileSync(files.image.path);
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

  //Listing products
exports.list = async (req, res) => {

    let order   = req.query.order ? req.query.order : 'asc';
    let sortBy  = req.query.sortBy ? req.query.sortBy : '_id';
    let limit   = req.query.limit ? parseInt(req.query.limit) : 20;

    try {
        ProductModel.find()
            .select("-image")
            .populate('category')
            .sort([[sortBy, order]])
            .limit(limit)
            .then(products => {
                if(products.length ===  0)
                    return res.status(404).json({ status: 0, data: {message : "No Products Found"} })
                return res.status(200).json({ status: 1, data : {products} })
            })
            .catch( err => res.status(404).json({ status: 0, data: {message: "Invalid request"} }))
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: 0, data: {message: "Invalid Request"}})
    }
        
}

exports.listRelated = async (req, res) => {

    try {
        let limit   = req.query.limit ? parseInt(req.query.limit) : 6;

        ProductModel.find({ _id: { $ne: req.product }, category : req.product.category })
            .limit(limit)
            .populate('category', '_id name')
            .then(products => {
                if(products.length ===  0)
                    return res.status(404).json({ status: 0, data: {message : "No Products Found"} })
                return res.status(200).json({ status: 1, data : {products} })
            })
            .catch( err => res.status(404).json({ status: 0, data: {message: "Invalid request"} }))
    } catch (error) {
        return res.status(500).json({ status: 0, data: {message: "Invalid Request"}})  
    }
}

exports.productCategories = async (req, res) => {
    try {
        ProductModel.distinct('category', {})
            .then( categories => res.status(200).json({ status: 1, data: {categories} }))
            .catch( err => res.status(404).json({ status: 0, data: {message: "No product found"} }))
    } catch (error) {
        return res.status(500).json({ status: 0,  message: "Invalid Request"});
    }
}

exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};
 
    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);
 
    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }
 
    ProductModel.find(findArgs)
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};


//Get Product Image
exports.getProductImage = (req, res, next) => {
    if(req.product.image.data){
        res.set('Content-Type', req.product.image.contentType);
        return res.status(200).json({ status: 1, data: req.product.image.data })
    }

    next();
}