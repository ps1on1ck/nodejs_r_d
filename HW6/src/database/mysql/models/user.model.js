const { Model, DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    class User extends Model {}
    return User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be a valid email address",
                }
            }
        },
    }, {
        sequelize,
        modelName: 'User',
        indexes: [{ unique: true, fields: ['email'] }]
    });
};
