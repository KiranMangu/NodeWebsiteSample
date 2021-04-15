const mongoose = require('mongoose');
const db = require('./connectDB');

db.connect();

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

UserSchema.pre('save', function (next) {

    const user = this;
    console.log('Mongoose hook');
    //user.password = user.password + '123';
    next();

});

module.exports = mongoose.model('User', UserSchema);