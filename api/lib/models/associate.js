const { Schema, model } = require('mongoose');

const associateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    img_url: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Associate', associateSchema);