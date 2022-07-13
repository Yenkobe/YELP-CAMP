const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});
// Is going to add on to our schema a username, it's going to add on a field for password.
//It's going to make sure those usernames are unique, they're not duplicated.

//https://github.com/saintedlama/passport-local-mongoose

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);