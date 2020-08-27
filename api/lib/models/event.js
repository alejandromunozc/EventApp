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
        type: String,
        required: true
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

    },
    partners: {
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
            type: String,
            require: true
        },
        date: {
            type: Date,
            require: true
        },
        hour: {
            type: String,
            require: true
        },
        duration: {
            type: String,
            require: true
        }

    }]
}, {
    timestamps: true
});

module.exports = model('Event', eventSchema);