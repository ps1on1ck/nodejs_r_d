const { isNumeric }  = require('../../utils');
const { removeUserTokenById } = require('../../services/token.service');

const removeTokenById = async (req, res) => {
    const tokenId = req.params.tokenId;
    if (!isNumeric(tokenId)) {
        return res.sendStatus(400);
    }

    try {
        const token = await removeUserTokenById(Number(tokenId));
        return res.send(token);
    } catch (error) {
        const message = (error.errors && error.errors[0] && error.errors[0].message) || 'Bad request';
        return res.status(400).send({message: message, status: 400});
    }
};

module.exports = removeTokenById;
