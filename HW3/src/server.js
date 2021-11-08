const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const usersRouter = require('./routers/users.route');
const tokensRouter = require('./routers/tokens.route');

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use('/users', usersRouter);
router.use('/tokens', tokensRouter);

app.on('listening', () => console.log(`Server listening on port ${PORT}`));

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT);
module.exports = app;
