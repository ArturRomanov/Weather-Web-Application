const mongoose = require('mongoose');

// This is a schema for location which is shown in MongoDB
const LocationSchema = new mongoose.Schema({
    location: {
        type: String
    }
})

module.exports = Location = mongoose.model('location', LocationSchema);