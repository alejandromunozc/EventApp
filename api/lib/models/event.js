const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    event_title: {
        type: String,
    },
    info: {
        type: String
    },
    organization: {
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
    start_hour: {
        type: String
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    template: {
        type: String,
        enum: [
            "classic",
            "minimalist"
        ]
    },
    logo_url: {
        type: String
    },
    banner_url: {
        type: String
    },
    img_url: {
        type: String
    },
    partners: {
        type: [String]
    },
    register: {
        type: [String]
    },
    sendedMail: {
        type: String
    },
    schedule: [{
        title: {
            type: String
        },
        description: {
            type: String
        },
        speaker: {
            type: String
        },
        date: {
            type: Date
        },
        hour: {
            type: String
        },
        duration: {
            type: String
        }

    }]
}, {
    timestamps: true
});

module.exports = model('Event', eventSchema);