require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// const mysql = require('./database/mysql/connection');
const mongo = require('./database/mongo/connection');

const usersRouter = require('./routers/users.route');
const tokensRouter = require('./routers/tokens.route');
const rootRouter = require('./routers/root.route');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use('/', rootRouter);
router.use('/users', usersRouter);
router.use('/tokens', tokensRouter);

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


(async () => {
    await mongo.connect();
    app.listen(PORT);
})();
module.exports = app;
