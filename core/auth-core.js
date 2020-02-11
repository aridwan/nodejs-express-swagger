const {validationResult} = require('express-validator');
const passport = require('passport');
const jwt = require('jsonwebtoken');

async function login(req,res,next){
    if (!validationResult(req).isEmpty()) {
        return res.status(422).json({ errors: validationResult(req).array() });
    }

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                status: false,
                message: err
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           delete user.password
           const token = jwt.sign(user, process.env.JWT_SECRET || 'secret');
           user.token = token
           return res.json({
               status: true,
               message: "Logged in successfully",
               data: user
           });
        });
    })(req,res,next)
}

module.exports = login;