var mongoose = require('mongoose');

var articlesSchema = new mongoose.Schema({
  articleid: Number,
  isPublished: Boolean,
  picture: String,
  writer: String,
  title: {type: String, required: true},  
  tags: [String],
  text: {type: String, required: true}
});

mongoose.model('Articles', articlesSchema);