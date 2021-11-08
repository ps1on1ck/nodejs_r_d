const { v4: uuidv4 } = require('uuid');
const { isNumeric }  = require('../../utils');
const { getUserById } = require('../../services/user.service');
const { updateTokenById, getTokenById } = require('../../services/token.service');

const updateUserToken = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const updateToken = req.body;

    if (!isNumeric(updateToken.userId)) {
        return res.sendStatus(400);
    }

    const user = getUserById(Number(updateToken.userId));
    if (!user) {
        return res.status(404).send({message: `User not found by id: ${updateToken.userId}`, status: 404});
    }

    const token = getTokenById(updateToken.id);
    if (!token) {
        return res.status(404).send({message: `Token not found by id: ${updateToken.id}`, status: 404});
    }

    updateToken.name = updateToken.name + '-' + uuidv4();
    const data = updateTokenById(updateToken);

    return res.send(data);
};

module.exports = updateUserToken;
