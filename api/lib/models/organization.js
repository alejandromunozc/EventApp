const { Schema, model } = require('mongoose');

const organizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        type: [String]
    }
}, {
    timestamps: true
});

module.exports = model('Organization', organizationSchema);