const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // radio:{
  //   type:String,
  //   required: true
  // },
  // date:{
  //   type:String,
  //   required: true
  // },
  // number:{
  //   type:String,
  //   required: true
  // },
  // text:{
  //   type:String,
  //   required: true
  // },
  // Inst:{
  //   type:String,
  //   required: true
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
