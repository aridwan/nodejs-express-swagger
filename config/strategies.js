const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../models/user');
const db = require('../models/');
var bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (email, password, cb) {
        let userModel = User(db.sequelize, db.Sequelize.DataTypes);
        let user = await userModel.findOne({where: {email: email}});
        
        if (!user){
            return cb("Incorrect email or password",false,null);
        } 
        if(bcrypt.compareSync(password, user.toJSON().password)){
            return cb(null, user.toJSON(), null);
        } else {
            return cb("Incorrect email or password",false,null);
        }
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET || 'secret'
    },
    async function (jwtPayload, cb) {
        try {
            let userModel = User(db.sequelize, db.Sequelize.DataTypes);
            let user = await userModel.findOne({where: {id: jwtPayload.id}});
            return cb(null,user);
        } catch(error) {
            return cb(error);
        }
    }
))

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport
