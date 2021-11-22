const express = require('express');
const router = express.Router();
const validateUser = require('../middleware/checkUser');
const registerUser = require('../handlers/users/registerUser');
const loginUser = require('../handlers/users/loginUser');

router.post('/register', validateUser, registerUser);
router.post('/login', loginUser);

module.exports = router;
