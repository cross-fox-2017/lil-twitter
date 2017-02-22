const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  picture: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Users', UserSchema)
