const { User } = require("../database/mysql/connection");

const getUsers = async function () {
    return User.findAll({attributes: {exclude: ['password']}});
};

const addUser = async function (user) {
    return User.create(user);
};

const removeUserById = async function (userId) {
    try {
        const user = await User.findByPk(userId);
        await User.destroy({where: {id: userId}});
        return user;
    } catch (e) {
        return e;
    }
};

const updateUserById = async function (userId, user) {
    try {
        await User.update(user, {where: {id: userId}});
        return await User.findByPk(userId);
    } catch (e) {
        return e;
    }
};

module.exports = { getUsers, addUser, removeUserById, updateUserById };
