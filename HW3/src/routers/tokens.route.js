const express = require('express');
const router = express.Router();
const getAllTokens = require('../handlers/tokens/getTokens');
const getUserTokens = require('../handlers/tokens/getUserTokens');
const createUserToken = require('../handlers/tokens/createUserToken');
const removeTokenById = require('../handlers/tokens/removeTokenById');
const updateUserToken = require('../handlers/tokens/updateUserToken');

router.get('/', getAllTokens);
router.get('/:userId', getUserTokens);
router.post('/', createUserToken);
router.put('/', updateUserToken);
router.delete('/:userId/:tokenId', removeTokenById);

module.exports = router;
