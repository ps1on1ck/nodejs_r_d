const { getTokens } = require('../../services/token.service');

const getAllTokens = (req, res) => {
    const content = getTokens();
    return res.send(content);
};

module.exports = getAllTokens;
