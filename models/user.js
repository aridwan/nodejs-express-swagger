'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};