const router = require('express').Router();
const userValidator = require('../validator/user-validator');
const userCore = require('../../core/user-core');
const userModel = require('../../models/user');
const db = require('../../models');

router.post('/register',
    userValidator.validate('createUser'),
    function(req, res){
        let user = userModel(db.sequelize, db.Sequelize.DataTypes);
        userCore.create(req, res, user);
    }
)

module.exports = router;