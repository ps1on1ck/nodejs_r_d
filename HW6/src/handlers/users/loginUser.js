const bcrypt = require('bcryptjs');
const { getUsersByEmail } = require('../../services/user.mongo.service');
const { getJWT } = require('../../utils/jwt.service');

const loginUser = async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    if (!(req.body.email && req.body.password)) {
        res.status(400).send("All input is required");
    }
    try {
        const response = await getUsersByEmail(req.body.email);
        if (response.length) {
            const {id, firstName, lastName, isAdmin, email, password} = response[0];
            const isEqual = await bcrypt.compareSync(req.body.password, password);
            if (email && isEqual) {
                const token = getJWT({email});
                return res.send({id, firstName, lastName, isAdmin, email, token});
            }
        }
        res.status(400).send("Invalid Credentials");
    } catch (error) {
        const err = error && error.errors && error.errors[0] && error.errors[0].message;
        return res.status(400).send({message: err, status: 400});
    }

};

module.exports = loginUser;
