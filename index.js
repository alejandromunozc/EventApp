const express = require('express');
const app = express();

const { config } = require('./config/index');
const eventsApi = require('./routes/events');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

app.use(express.json());

eventsApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
    //console.log(`listening http://localhost:${config.port}`);
});