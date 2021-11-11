const { getTokens } = require('../../services/token.service');

const getAllTokens = async (req, res) => {
    const content = await getTokens();
    return res.send(content);
};

module.exports = getAllTokens;
