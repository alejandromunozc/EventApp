const express = require('express');
const app = express();
require('./lib/connect');
require('./lib/cron');

const { config } = require('./config/index');
const speakers = require('./routes/speaker.routes');
const partners = require('./routes/partner.routes');
const organizations = require('./routes/organization.routes');
const events = require('./routes/event.routes');
const users = require('./routes/user.routes');

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(speakers);
app.use(partners);
app.use(organizations);
app.use(events);
app.use(users);


app.listen(config.port, function() {
    console.log(`listening http://localhost:${config.port}`);
});