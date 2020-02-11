const router = require('express').Router();
const userValidator = require('../validator/user-validator');
const authCore = require('../../core/auth-core');

router.post('/login',
    userValidator.validate('login'),
    function(req, res, next){
        authCore(req, res, next);
    }
)

module.exports = router;