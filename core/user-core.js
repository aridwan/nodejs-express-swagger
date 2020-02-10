const {validationResult} = require('express-validator')

function create(req,res,userModel){
    if (!validationResult(req).isEmpty()) {
      return res.status(422).json({ errors: validationResult(req).array() });
    }
  
    var user = req.body;
    // user.password = bcrypt.hashSync(req.body.password, 10)
    userModel.create(user).then(function(response){
    delete user.password
    if (response) {
        return res.status(201).json({
            status: true,
            message: "registered succesfully",
            data: user
        })
    } else {
        res.status(500).json({
            status: false,
            error: response
        })
    }
    }).catch(function(error){
        var errMessages = []
        error.errors.forEach(element => {
            errMessages.push(element.message)
        })
        res.status(500).json({
            errors: errMessages
        })
    })
}

module.exports = {
    create
};