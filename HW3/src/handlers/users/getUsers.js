const { getUsers } = require('../../services/user.service');

const getAllUsers = async (req, res) => {
    const content = getUsers();
    return res.send(content);
};

module.exports = getAllUsers;
