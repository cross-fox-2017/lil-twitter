var mongoose = require('mongoose')
var Schema = mongoose.Schema

var storiesSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  story: String,
  is_deleted: Number
})

var stories = mongoose.model('Stories', storiesSchema)

module.exports = stories
