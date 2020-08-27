const mailgun = require('mailgun-js');
const { config } = require('../config/index');

const mg = mailgun({ apiKey: config.mgApiKey, domain: config.mgDomain });
const data = {
    from: "Event App <eventapp@mail.koalab.tech>",
    to: ["alejandromunozc@gmail.com"],
    subject: "Event App is about to start!",
    template: "template",
    'h:X-Mailgun-Variables': '{ "name": "Event title", "img_url": "https://pmeventapp.s3.us-east-2.amazonaws.com/bannerMail.jpg", "event_title": "Titulo Descriptivo", "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, minima dolorum eligendi architecto at, assumenda nihil pariatur deleniti fugit fugiat voluptatibus ratione excepturi magnam iste, commodi beatae hic. Quos, natus?", "event_url": "https://google.com" }'
};
mg.messages().send(data, function(error, body) {
    if (error) {
        console.log(error);
    }
    console.log(body);
});