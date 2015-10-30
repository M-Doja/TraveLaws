var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  name: { required: true, type: String },
  bio: String,
  photo: String,
  created: Date,
  deleted: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  
});

mongoose.model('Profile', ProfileSchema);
