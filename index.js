const express = require('express');
const app = express();
require('./lib/connect');

const { config } = require('./config/index');
const speakers = require('./routes/speaker.routes');

app.use(express.json());

app.use(speakers);


app.listen(config.port, function() {
    console.log(`listening http://localhost:${config.port}`);
});