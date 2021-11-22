const bcrypt = require('bcryptjs');
const userModel = require("../database/mongo/models/user.model");

const getUsers = async function () {
    return userModel.find({}).select("-password");
};

const getUsersByEmail = async function (email) {
    try {
        return userModel.find({email: email});
    } catch (e) {
        return e;
    }

};

const addUser = async function (user) {
    try {
        const encryptedPassword = await bcrypt.hashSync(user.password, 10);
        const userM = new userModel({ ...user, password: encryptedPassword});
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

module.exports = { getUsers, addUser, removeUserById, updateUserById, getUsersByEmail };
