var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: { required: true, type: String },
  subject: String,
  body: String,
  created: Date,
  deleted: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [{
    body: { required: true, type: String },
    commenter: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true }],
    createdOn: Date
  }]
});

mongoose.model('Blog', BlogSchema);
