const CategoryModel = require('../models/Category');
const {validation} = require('../ErrorHandler/Validation/Validation');

//Add new category
exports.createCategory = async (req, res) => {

   try {
        //Validation
        validation(req);

        //Saving doc
        const category = new CategoryModel(req.body);
        category.save()
            .then(data=> res.status(201).json({status:1, data:{ category: data } }))
            .catch(err => res.status(203).json({status:0, message: err}))
   } catch (error) {
       res.status(500).json({status:0, message: error })
   }

}

//Update category  
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

//delete category
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


//Fetch all category
exports.getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        return res.status(200).json({status: 1, data:{categories: categories}})
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: 0, message: "Unable to fetch from DB" });
    }
}

//middleware 

//fetching category by id
exports.categoryById = async (req, res, next, id) => {
    try {
        const category = await CategoryModel.findById(id);

        if(!category)
            return res.status(404).json({status: 0, message: "Invalid category Id"})

        req.category = category;
        next();
    } catch (error) {
        
    }
}

//Read the category
exports.read = (req, res) => {
    return res.status(200).json({status: 1, data: req.category});
}
