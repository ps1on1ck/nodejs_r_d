const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');
const validateToken = require('../middleware/checkToken');
const getAllTokens = require('../handlers/tokens/getTokens');
const getUserTokens = require('../handlers/tokens/getUserTokens');
const createUserToken = require('../handlers/tokens/createUserToken');
const removeTokenById = require('../handlers/tokens/removeTokenById');
const updateUserToken = require('../handlers/tokens/updateUserToken');

router.get('/', checkAuth, getAllTokens);
router.get('/:userId', checkAuth, getUserTokens);
router.post('/', checkAuth, validateToken, createUserToken);
router.put('/', checkAuth, validateToken, updateUserToken);
router.delete('/:tokenId', checkAuth, removeTokenById);

module.exports = router;
