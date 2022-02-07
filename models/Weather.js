const mongoose = require('mongoose');

// This is a schema for current weather which is shown in MongoDB
const WeatherSchema = new mongoose.Schema({
    location: {
        type: String
    },
    currentweather: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Weather = mongoose.model('weather', WeatherSchema);