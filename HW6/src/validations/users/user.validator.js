const Validator = require("fastest-validator");
const userValidator = new Validator();

const schema = {
    "id": { type: "string", optional: true },
    "email": "string",
    "lastName": "string",
    "firstName": "string",
    "isAdmin": { type: "boolean", default: false },
    "password": "string"
};

module.exports = userValidator.compile(schema);
