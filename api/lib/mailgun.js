const mailgun = require('mailgun-js');
const { config } = require('../config/index');
const DOMAIN = "mail.koalab.tech";
const mg = mailgun({ apiKey: config.mgApiKey, domain: DOMAIN });
const data = {
    from: "Mailgun Sandbox <mailgun@mail.koalab.tech>",
    to: ["alejandromunozc@gmail.com", "koalabtech@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function(error, body) {
    if (error) {
        console.log(error);
    }
    console.log(body);
});