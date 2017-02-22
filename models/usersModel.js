var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({	'username' : String,	'password' : String,	'avatar' : String,	'createdAt' : Date});

module.exports = mongoose.model('users', usersSchema);
