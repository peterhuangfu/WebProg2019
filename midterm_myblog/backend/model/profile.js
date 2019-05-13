const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema, sort of like working with an ORM
const ProfileSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Body field is required.']
    },
    content: {
        type: String,
		required: [true, 'Body field is required.']
	},
	img_source: {
		type: String
	}
})

// Creating a table within database with the defined schema
const Profile = mongoose.model('profile', ProfileSchema);

// Exporting table for querying and mutating
module.exports = Profile;
