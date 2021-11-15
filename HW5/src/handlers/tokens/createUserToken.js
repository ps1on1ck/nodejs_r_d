const { v4: uuidv4 } = require('uuid');
const { addTokenByUserId } = require('../../services/token.mongo.service');

const createUserToken = async (req, res) => {
    const { name, userId } = req.body;

    try {
        const token = {name: name + '-' + uuidv4(), userId: userId};
        const data = await addTokenByUserId(token);
        return res.send(data);
    } catch (error) {
        const message = (error.errors && error.errors[0] && error.errors[0].message) || 'Bad request';
        return res.status(400).send({message: message, status: 400});
    }

};

module.exports = createUserToken;
