class User {
    constructor() {
        console.log('User created');
    }
};

module.exports.create = function () {
    return new User();
}