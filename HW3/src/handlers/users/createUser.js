const { addUser } = require('../../services/user.service');

const createUser = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const user = req.body;
    const {id, firstName, lastName, isAdmin, email} = addUser(user);
    return res.send({id, firstName, lastName, isAdmin, email});
};

module.exports = createUser;
