var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var twitSchema = new Schema({	'content' : String,	'hashtag' : Array,	'createdAt' : Date,	'userid' : {	 	type: Schema.Types.ObjectId,	 	ref: 'users'	}});

module.exports = mongoose.model('twits', twitSchema);
