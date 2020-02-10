const { body } = require('express-validator/check');

exports.validate = (method) => {
    switch(method){
        case 'createUser': {
            return [
                body('username', "Username required").exists(),
                body('email', 'Invalid email').exists().isEmail(),
                body('password', 'Password required').exists(),
            ]
        }
        case 'updateUser': {
            return [
                body('password', 'Password required').exists(),
            ]
        }
        case 'updatePassword': {
            return [
                body('old_password').not().isEmpty(),
                body('new_password').not().isEmpty(),
            ]
        }
    }
}