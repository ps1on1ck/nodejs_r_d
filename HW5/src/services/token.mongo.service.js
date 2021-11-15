const tokenModel = require("../database/mongo/models/token.model");

const getTokens = async function () {
    return tokenModel.find({});
};

const getTokenById = async function (tokenId) {
    return tokenModel.findById(tokenId);
};

const getTokensByUserId = async function (userId) {
    return tokenModel.find({userId: userId});
};

const addTokenByUserId = async function (token) {
    const tokenM = new tokenModel(token);
    try {
        await tokenM.save();
        return tokenM;
    } catch (error) {
        return error
    }
};

const updateTokenById = async function (token) {
    try {
        await tokenModel.findByIdAndUpdate(token.id, token, {upsert: true});
        return token;
    } catch (e) {
        return e;
    }
};

const removeUserTokenById = async function (tokenId) {
    try {
        return await tokenModel.findByIdAndRemove(tokenId);
    } catch (e) {
        return e;
    }
};

module.exports = { getTokens, getTokensByUserId, addTokenByUserId, updateTokenById, removeUserTokenById, getTokenById };
