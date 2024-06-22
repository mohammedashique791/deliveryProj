const { model, default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    phoneNumber: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;