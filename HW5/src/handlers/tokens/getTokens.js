const { getTokens } = require('../../services/token.mongo.service');

const getAllTokens = async (req, res) => {
    const content = await getTokens();
    return res.send(content);
};

module.exports = getAllTokens;
