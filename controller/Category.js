const CategoryModel = require('../models/Category');
const { validationResult } = require('express-validator');

exports.createCategory = async (req, res) => {

   try {
        //Validation
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send({errors: errors.array()})
    }
    
        //Saving doc
        const category = new CategoryModel(req.body);
        category.save()
            .then(data=> res.status(201).json({status:1, data:{ category: data } }))
            .catch(err => res.status(401).json({status:0, message: err}))
   } catch (error) {
       res.status(500).json({status:0, message: error })
   }

}

exports.updateCategory = async (req, res) => {
    try {

        //Validation
        const errors = validationResult(req.query)
        if(!errors.isEmpty()){
            return res.status(400).send({errors: errors.array()})
        }
        CategoryModel.findOneAndUpdate({name:req.query.name},{name:req.query.newName})
            .then( data => res.status(200).json({status: 1, data : { message : data }}))
            .catch( err => res.status(200).json({ status: 0, data : { message : err } }))
            
    } catch (error) {
        console.log(error)
        res.status(500).json({status:0, message: error });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = req.query.name;
        const deleteResult = await CategoryModel.deleteOne({ name: category });
        if(deleteResult.deletedCount>0){
            return res.status(200).json({status:1, data:{message: "Deleted"}});
        }else{
            return res.status(400).json({status:0, data:{message: "Invalid request"}});
        }
        

    } catch (error) {
        return res.status(500).json({ status: 0, data:{ message: error } })
    }
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        return res.status(200).json({status: 1, data:{categories: categories}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: 0, message: "Unable to fetch from DB" });
    }
}

