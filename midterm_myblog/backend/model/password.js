const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const PasswordSchema = new Schema({
    id: {
        type: String,
    },
    content: {
        type: String,
		required: [true, 'Body field is required.']
	}
})

// Creating a table within database with the defined schema
const Password = mongoose.model('password', PasswordSchema);

// Exporting table for querying and mutating
module.exports = Password;
