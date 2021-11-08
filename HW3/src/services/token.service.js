const fs = require("fs");
const filePath = "./src/database/tokens.json";

const getTokens = function () {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
};

const getTokenById = function (tokenId) {
    const tokens = getTokens();
    return tokens.find(token => tokenId === token.id);
};

const getTokensByUserId = function (userId) {
    const tokens = getTokens();
    return tokens.filter(token => userId === token.userId);
};

const addTokenByUserId = function (userId, token) {
    const tokens = getTokens();
    token.id = tokens.length + 1;
    token.userId = userId;
    tokens.push(token);
    fs.writeFileSync(filePath, JSON.stringify(tokens));
    return token;
};

const updateTokenById = function (token) {
    const tokens = getTokens();
    const currentTokenIndex = tokens.findIndex(t => t.id === token.id);
    const oldToken = { ...tokens[currentTokenIndex]};
    tokens[currentTokenIndex] = { ...oldToken, ...token};
    fs.writeFileSync(filePath, JSON.stringify(tokens));
    return token;
};

const removeUserTokenById = function (tokenId) {
    const tokens = getTokens();
    const tokenIndex = tokens.findIndex(token => tokenId === token.id);
    if (tokenIndex < 0) {
        return;
    }
    const deletedToken = tokens.splice(tokenIndex, 1)[0];
    const newTokens = tokens.map((token, i) => {
        token.id = i + 1;
        return token;
    });
    fs.writeFileSync(filePath, JSON.stringify(newTokens));
    return deletedToken;
};

module.exports = { getTokens, getTokensByUserId, addTokenByUserId, updateTokenById, removeUserTokenById, getTokenById };
