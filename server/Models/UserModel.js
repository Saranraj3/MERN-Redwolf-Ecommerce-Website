const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Enter Your email']
    },
    username: {
        type: String,
        required: [true, 'Enter Your username']
    },
    password: {
        type: String,
        required: [true, 'Enter Your password']
    },
    createdAT: {
        type: Date,
        default: new Date(),
    },
});

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('user', UserSchema);
