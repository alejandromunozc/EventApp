const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    img_url: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.methods.encryptPass = async password => {
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(password, salt);
}

userSchema.methods.matchPass = async function(password) {
    await bcrypt.compare(password, this.password);
}

module.exports = model('User', userSchema);