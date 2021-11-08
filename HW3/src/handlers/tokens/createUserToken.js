const { v4: uuidv4 } = require('uuid');
const { isNumeric }  = require('../../utils');
const { addTokenByUserId } = require('../../services/token.service');
const { getUserById } = require('../../services/user.service');

const createUserToken = (req, res) => {
    const { name, userId } = req.body;
    if (!isNumeric(userId)) {
        return res.sendStatus(400);
    }

    const user = getUserById(Number(userId));
    if (!user) {
        return res.status(404).send({message: `User not found by id: ${userId}`, status: 404});
    }

    const token = {name: name + '-' + uuidv4()};
    const data = addTokenByUserId(Number(userId), token);
    return res.send(data);
};

module.exports = createUserToken;
