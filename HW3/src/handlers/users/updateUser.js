const { updateUserById } = require('../../services/user.service');

const updateUser = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const updateUser = req.body;
    const user = updateUserById(updateUser.id, updateUser);
    if (!user) {
        return res.status(404).send({message: `User not found by id: ${updateUser.id}`, status: 404});
    }
    const {id, firstName, lastName, isAdmin, email} = user;
    return res.send({id, firstName, lastName, isAdmin, email});
};

module.exports = updateUser;
