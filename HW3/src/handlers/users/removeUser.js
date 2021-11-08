const { isNumeric }  = require('../../utils');
const { removeUserById } = require('../../services/user.service');

const removeUser = async (req, res) => {
    const userId = req.params.id;
    if (!isNumeric(userId)) {
        return res.sendStatus(400);
    }
    const user = removeUserById(Number(userId));
    if (!user) {
        return res.status(404).send({message: `User not found by id: ${userId}`, status: 404});
    }
    const {id, firstName, lastName, isAdmin, email} = user;
    return res.send({id, firstName, lastName, isAdmin, email});
};

module.exports = removeUser;
