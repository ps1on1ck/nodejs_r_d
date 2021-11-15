const mongoose = require('mongoose');

const config = {
    databaseHost: process.env.DATABASE_HOST || 'localhost',
    databaseName: process.env.DATABASE_NAME || 'test',
    databasePort: process.env.DATABASE_PORT || 27017
};

const connect = async() => {
    try {
        await mongoose.connect(`mongodb://${config.databaseHost}:${config.databasePort}/${config.databaseName}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

module.exports = { connect };
