const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    event_url: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    template: {
        type: String,
        default: "template_1"
    },
    logo_url: {
        type: String
    },
    banner_url: {
        type: String
    },
    associates: {
        type: [String]
    },
    register: {
        type: [String]
    },
    schedule: [{
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        speaker: {
            type: String
        },
        date: {
            type: Date
        }
    }]
}, {
    timestamps: true
});

module.exports = model('Event', eventSchema);