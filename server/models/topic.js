var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate')
var Schema = mongoose.Schema

var topicSchema = new Schema({
  topic: String,
  storyid: [{type: Schema.Types.ObjectId, ref: 'Stories'}]
})

topicSchema.plugin(findOrCreate)
var Topic = mongoose.model('Topic', topicSchema)

module.exports = Topic
