const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const ArticleSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Name field is required.']
	},
	author: {
		type: String,
		required: [true, 'Body field is required.']
  },
  time: {
    type: String,
		required: [true, 'Body field is required.']
  },
  content: {
    type: String,
		required: [true, 'Body field is required.']
	},
	img_source: {
		type: String,
		required: [true, 'Body field is required.']
	}
})

// Creating a table within database with the defined schema
const Article = mongoose.model('article', ArticleSchema);

// Exporting table for querying and mutating
module.exports = Article;
