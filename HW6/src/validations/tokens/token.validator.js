const Validator = require("fastest-validator");
const tokenValidator = new Validator();

const schema = {
    "id": { type: "string", optional: true },
    "name": "string",
    "userId": "string"
};

module.exports = tokenValidator.compile(schema);
