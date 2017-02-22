var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var postsSchema = new Schema({	'post' : String,	'userId' : String,	'tag' : Array,	'createdAt' : Date});

module.exports = mongoose.model('posts', postsSchema);
