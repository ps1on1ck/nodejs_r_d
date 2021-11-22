const jwt = require('jsonwebtoken');
const tokenKey = process.env.TOKEN_KEY || 'token';

const getJWT = ({id, email}) => {
    return jwt.sign({ userId: id, email }, tokenKey, {expiresIn: "2h"});
};


module.exports = { getJWT };
