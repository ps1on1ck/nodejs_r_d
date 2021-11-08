const fs = require("fs");
const filePath = "./src/database/users.json";

const getUsers = function () {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
};

const addUser = function (user) {
    const users = getUsers();
    user.id = users.length + 1;
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users));
    return user;
};

const getUserById = function (userId) {
    const users = getUsers();
    return users.find(user => userId === user.id);
};

const removeUserById = function (userId) {
    const users = getUsers();
    const userIndex = users.findIndex(user => userId === user.id);
    if (userIndex < 0) {
        return;
    }
    const deletedUser = users.splice(userIndex, 1)[0];
    const newUsers = users.map((user, i) => {
        user.id = i + 1;
        return user;
    });
    fs.writeFileSync(filePath, JSON.stringify(newUsers));
    return deletedUser;
};

const updateUserById = function (userId, user) {
    const users = getUsers();
    const userIndex = users.findIndex(user => userId === user.id);
    if (userIndex < 0) {
        return;
    }
    const oldUser = { ...users[userIndex]};
    users[userIndex] = { ...oldUser, ...user};
    fs.writeFileSync(filePath, JSON.stringify(users));
    return user;
};

module.exports = { getUsers, addUser, removeUserById, updateUserById, getUserById };
