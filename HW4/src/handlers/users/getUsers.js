const { getUsers } = require('../../services/user.service');

const getAllUsers = async (req, res) => {
    const content = await getUsers();
    return res.send(content);
};

module.exports = getAllUsers;
