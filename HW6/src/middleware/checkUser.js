const checkUser = require("../validations/users/user.validator");

const validateUser = (req, res, next) => {
    if(!req.body) return res.sendStatus(400);
    const user = req.body;
    try {
        const resUser = checkUser(user);
        if (resUser && resUser.length && resUser[0].message) {
            return res.status(400).send(resUser[0].message);
        }
    } catch (err) {
        return res.status(401).send("Invalid User");
    }
    return next();
};

module.exports = validateUser;
