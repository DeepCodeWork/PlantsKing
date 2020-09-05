const { validationResult } = require('express-validator');

exports.validation = (req) => {
   
    //Validation
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).send({errors: errors.array()})
    }
    
}