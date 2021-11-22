const checkToken = require("../validations/tokens/token.validator");

const validateToken = (req, res, next) => {
    if(!req.body) return res.sendStatus(400);
    const token = req.body;
    try {
        const resToken = checkToken(token);
        if (resToken && resToken.length && resToken[0].message) {
            return res.status(400).send(resToken[0].message);
        }
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = validateToken;
