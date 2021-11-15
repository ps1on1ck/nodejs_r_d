const express = require('express');
const router = express.Router();
const getAllUsers = require('../handlers/users/getUsers');
const createUser = require('../handlers/users/createUser');
const removeUser = require('../handlers/users/removeUser');
const updateUser = require('../handlers/users/updateUser');

router.get('/', getAllUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/:id', removeUser);

module.exports = router;
