const { Token } = require("../database/mysql/connection");

const getTokens = async function () {
    return Token.findAll();
};

const getTokenById = async function (tokenId) {
    return await Token.findByPk(tokenId);
};

const getTokensByUserId = async function (userId) {
    return Token.findAll({where: {userId: userId}});
};

const addTokenByUserId = async function (token) {
    return Token.create(token);
};

const updateTokenById = async function (token) {
    try {
        await Token.update(token, {where: {id: token.id}});
        return await Token.findByPk(token.id);
    } catch (e) {
        return e;
    }
};

const removeUserTokenById = async function (tokenId) {
    try {
        const token = await Token.findByPk(tokenId);
        await Token.destroy({where: {id: tokenId}});
        return token;
    } catch (e) {
        return e;
    }
};

module.exports = { getTokens, getTokensByUserId, addTokenByUserId, updateTokenById, removeUserTokenById, getTokenById };
