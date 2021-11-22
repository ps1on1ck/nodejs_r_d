const { Model, DataTypes } = require("sequelize");
const User = require('./user.model');

module.exports = function (sequelize) {
    class Token extends Model {}
    const UserModel = User(sequelize);

    return Token.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
    }, {
        sequelize,
        modelName: 'Token'
    });
};
