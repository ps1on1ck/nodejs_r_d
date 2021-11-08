const { isNumeric }  = require('../../utils');
const { getUserById } = require('../../services/user.service');
const { removeUserTokenById } = require('../../services/token.service');

const removeTokenById = async (req, res) => {
    const userId = req.params.userId;
    const tokenId = req.params.tokenId;
    if (!isNumeric(userId) || !isNumeric(tokenId)) {
        return res.sendStatus(400);
    }

    const user = getUserById(Number(userId));
    if (!user) {
        return res.status(404).send({message: `User not found by id: ${userId}`, status: 404});
    }

    const token = removeUserTokenById(Number(tokenId));
    return res.send(token);
};

module.exports = removeTokenById;
