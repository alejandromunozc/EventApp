const moment = require('moment');
const cron = require('node-cron');
const eventModel = require('./models/event');
const sendMessage = require('./mailgun');

const today = moment().toISOString();
const tomorrow = moment().add(1, 'days').toISOString();

const getEventsDate = async () => {
    const events = await eventModel.find({ "date": { $gte: today, $lte: tomorrow } });
    events.map(async event => {
        if (event.register.length <= 0 || event.sendedMail === "true") {
            return false
        }
        const sendTo = event.register;
        const mailData = {
            name: event.name,
            img_url: event.img_url,
            event_title: event.event_title,
            info: event.info,
            event_url: event.event_url
        };

        sendMessage(sendTo, JSON.stringify(mailData));
        await eventModel.findByIdAndUpdate(event.id, { $set: { sendedMail: "true" } });
    });
}

cron.schedule('0 * * * *', () => {
    getEventsDate();
});