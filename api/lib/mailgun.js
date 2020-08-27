const mailgun = require('mailgun-js');
const { config } = require('../config/index');

const sendMessage = async(sendTo, mailData) => {
    const mg = mailgun({ apiKey: config.mgApiKey, domain: config.mgDomain });
    const data = {
        from: "Event App <eventapp@mail.koalab.tech>",
        to: sendTo,
        subject: "Event App is about to start!",
        template: "template",
        'h:X-Mailgun-Variables': mailData
    };
    await mg.messages().send(data, function(error, body) {
        if (error) {
            console.log(error);
        }
        console.log(body);
    });
}

module.exports = sendMessage;