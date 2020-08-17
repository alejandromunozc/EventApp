const { Schema, model } = require('mongoose');

const speakerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    rol: {
        type: String
    },
    twitter: {
        type: String
    },
    img_url: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Speaker', speakerSchema);