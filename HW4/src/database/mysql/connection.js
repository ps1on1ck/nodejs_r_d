const { Sequelize } = require('sequelize');
const UserModel = require("./models/user.model");
const TokenModel = require("./models/token.model");

const config = {
    host: process.env.DATABASE_HOST || 'localhost',
    database: process.env.DATABASE_NAME || 'test',
    username: process.env.DATABASE_USERNAME || 'test',
    password: process.env.DATABASE_PASSWORD || 'test',
};


const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql'
});

const User = UserModel(sequelize);
const Token = TokenModel(sequelize);

const connect = async () => {
    try {
        await sequelize.authenticate();
        await User.sync();
        await Token.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};



module.exports = { connect, User, Token };
