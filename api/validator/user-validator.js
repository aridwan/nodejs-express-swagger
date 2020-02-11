const { body } = require('express-validator/check');
const passport = require('../../config/strategies');

exports.validate = (method) => {
    switch(method){
        case 'createUser': {
            return [
                body('username', "Username required").exists(),
                body('email', 'Invalid email').exists().isEmail(),
                body('password', 'Password required').exists(),
            ]
        }
        case 'login': {
            return [
                body('password', 'Password required').exists(),
                body('email', 'Invalid email').exists().isEmail(),
            ]
        }
        case 'updatePassword': {
            return [
                body('old_password').not().isEmpty(),
                body('new_password').not().isEmpty(),
            ]
        }
        case 'getAllUser': {
            return [
                passport.authenticate('jwt', {session: false})
            ]
        }
    }
}