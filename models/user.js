const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passsportLoclaMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passsportLoclaMongoose);

module.exports = mongoose.model('User', UserSchema)

