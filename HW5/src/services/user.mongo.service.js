const userModel = require("../database/mongo/models/user.model");

const getUsers = async function () {
    return userModel.find({});
};

const addUser = async function (user) {
    const userM = new userModel(user);
    try {
        await userM.save();
        return userM;
    } catch (error) {
        return error
    }
};

const removeUserById = async function (userId) {
    try {
        return await userModel.findByIdAndRemove(userId);
    } catch (e) {
        return e;
    }
};

const updateUserById = async function (userId, user) {
    try {
        await userModel.findByIdAndUpdate(userId, user, {upsert: true});
        return user;
    } catch (e) {
        return e;
    }
};

module.exports = { getUsers, addUser, removeUserById, updateUserById };
