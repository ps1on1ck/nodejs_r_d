const { isNumeric }  = require('../../utils');
const { getTokensByUserId } = require('../../services/token.service');

const getUserTokens = (req, res) => {
    const userId = req.params.userId;
    if (!isNumeric(userId)) {
        return res.sendStatus(400);
    }
    const tokens = getTokensByUserId(Number(userId));
    return res.send(tokens);
};

module.exports = getUserTokens;
