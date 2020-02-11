const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
var passport = require('../config/strategies');

async function create(req,res,userModel){
    if (!validationResult(req).isEmpty()) {
      return res.status(422).json({ errors: validationResult(req).array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    try{
        let response = await userModel.create(req.body);
        let user = response.toJSON();
        delete user.password;
        if (response) {
            return res.status(201).json({
                status: true,
                message: "registered succesfully",
                data: user
            })
        } else {
            res.status(500).json({
                status: false,
                message: response
            })
        }
    } catch(error){
        res.status(500).json(error)
    }
}

async function getAll(req,res,userModel){
    try{
        let response = await userModel.findAll({
            attributes: ['id', 'username', 'email', 'name', 'address', 'phone']
        });
        if (response) {
            return res.status(201).json({
                status: true,
                message: "OK",
                data: response
            })
        } else {
            res.status(500).json({
                status: false,
                message: response
            })
        }
    }catch(error){
        res.status(500).json(error)
    }
}

module.exports = {
    create,
    getAll
};