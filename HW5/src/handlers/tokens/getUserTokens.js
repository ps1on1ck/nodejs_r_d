const { getTokensByUserId } = require('../../services/token.mongo.service');

const getUserTokens = async (req, res) => {
    const userId = req.params.userId;

    try {
        const tokens = await getTokensByUserId(userId);
        return res.send(tokens);
    } catch (error) {
        const message = (error.errors && error.errors[0] && error.errors[0].message) || 'Bad request';
        return res.status(400).send({message: message, status: 400});
    }
};

module.exports = getUserTokens;
