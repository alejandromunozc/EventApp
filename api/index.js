const express = require('express');
const app = express();
require('./lib/connect');

const { config } = require('./config/index');
const speakers = require('./routes/speaker.routes');
const associates = require('./routes/associate.routes');
const organizations = require('./routes/organization.routes');
const events = require('./routes/event.routes');
const users = require('./routes/user.routes');

app.use(express.json());

app.use(speakers);
app.use(associates);
app.use(organizations);
app.use(events);
app.use(users);


app.listen(config.port, function() {
    console.log(`listening http://localhost:${config.port}`);
});