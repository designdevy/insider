var mongoose = require('mongoose');

var articlesSchema = new mongoose.Schema({
  articleid: Number,
  author: {type: String, required: true},  
  title: {type: String, required: true},  
  text: {type: String, required: true},
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String
});

mongoose.model('Articles', articlesSchema);