const { addUser } = require('../../services/user.mongo.service');

const createUser = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const user = req.body;
    try {
        const {id, firstName, lastName, isAdmin, email} = await addUser(user);
        return res.send({id, firstName, lastName, isAdmin, email});
    } catch (error) {
        return res.status(400).send({message: error.errors[0].message, status: 400});
    }

};

module.exports = createUser;
