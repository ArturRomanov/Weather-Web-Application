const express = require('express');
const router = express.Router();
const Weather = require('../../models/Weather');
const formidable = require('formidable');

// This API posts current weather to console and to MongoDB
router.post('/weather', async (req, res) => {
    
    // This form takes formData from actions
    let form = new formidable.IncomingForm();

    // This code parses the form
    form.parse(req, (err, fields) => {
        if(err) {
            return res.status(400).json({
                error: 'Current weather could not be logged'
            });
        }

        // This code assigns location and current weather from the fields of the form
        const { location,
                currentweather,
         } = fields;

        // This code calculates a timestamp using date, month and year
        let timeStamp = Date.now();
        let dateObject = new Date(timeStamp);
        let date = dateObject.getDate();
        let month = dateObject.getMonth() + 1;
        let year = dateObject.getFullYear();

        // This code logs location, current weather and timestamp to console
        console.log(location, JSON.parse(currentweather), date + "/" + month + "/" + year);

        // This code logs location and current weather to MongoDB
        let weather = new Weather({
            location,
            currentweather: JSON.parse(currentweather),
        });

        weather.save((err, success) => {
            if(err) {
                console.log(err);
                res.status(400).json({ error: 'Current weather could not be logged to MongoDB' })
            }
            
            return res.json(success);
        })
    })
});

module.exports = router;