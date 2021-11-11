const { isNumeric }  = require('../../utils');
const { removeUserById } = require('../../services/user.service');

const removeUser = async (req, res) => {
    const userId = req.params.id;
    if (!isNumeric(userId)) {
        return res.sendStatus(400);
    }

    try {
        const user = await removeUserById(Number(userId));
        if (!user) {
            return res.status(404).send({message: `User not found by id: ${userId}`, status: 404});
        }
        const {id, firstName, lastName, isAdmin, email} = user;
        return res.send({id, firstName, lastName, isAdmin, email});
    } catch (error) {
        return res.status(400).send({message: error.errors[0].message, status: 400});
    }
};

module.exports = removeUser;
