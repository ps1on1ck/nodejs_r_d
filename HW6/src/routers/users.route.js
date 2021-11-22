const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const validateUser = require('../middleware/checkUser');
const getAllUsers = require('../handlers/users/getUsers');
const createUser = require('../handlers/users/createUser');
const removeUser = require('../handlers/users/removeUser');
const updateUser = require('../handlers/users/updateUser');

router.get('/', checkAuth, getAllUsers);
router.post('/', checkAuth, validateUser, createUser);
router.put('/', checkAuth, updateUser);
router.delete('/:id', checkAuth, removeUser);

module.exports = router;
