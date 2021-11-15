const { v4: uuidv4 } = require('uuid');
const { updateTokenById } = require('../../services/token.mongo.service');

const updateUserToken = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const updateToken = req.body;

    try {
        updateToken.name = updateToken.name + '-' + uuidv4();
        const data = await updateTokenById(updateToken);

        return res.send(data);
    } catch (error) {
        return res.status(400).send({message: error.errors[0].message, status: 400});
    }
};

module.exports = updateUserToken;
