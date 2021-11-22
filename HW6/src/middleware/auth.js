const jwt = require("jsonwebtoken");
const tokenKey = process.env.TOKEN_KEY || 'token';

const verifyToken = (req, res, next) => {
    const token = req.headers["Authorization"] || req.headers["authorization"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        req.decodedToken = jwt.verify(token, tokenKey);
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;
