const router = require('express').Router();
const userValidator = require('../validator/user-validator');
const authCore = require('../../core/auth-core');
const userCore = require('../../core/user-core');
const userModel = require('../../models/user');
const db = require('../../models');

router.post('/',
    userValidator.validate('login'),
    function(req, res, next){
        authCore(req, res, next);
    }
)

router.post('/registration', 
    userValidator.validate('createUser'),
    function(req, res){
        let user = userModel(db.sequelize, db.Sequelize.DataTypes);
        userCore.create(req,res,user);
    })

module.exports = router;