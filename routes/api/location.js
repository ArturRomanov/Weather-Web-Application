const express = require('express');
const router = express.Router();
const Location = require('../../models/Location');
const formidable = require('formidable');

// This API posts location to console and to MongoDB
router.post('/location', async (req, res) => {
    
    // This form takes formData from actions
    let form = new formidable.IncomingForm();

    // This code parses the form
    form.parse(req, (err, fields) => {
        if(err) {
            return res.status(400).json({
                error: 'Location could not be logged'
            });
        }

        // This code assigns location from the fields of the form
        const { location,
         } = fields;

        // This code logs location to console
        console.log(location);

        // This code logs location to MongoDB
        let locations = new Location({
            location,
        });

        locations.save((err, success) => {
            if(err) {
                console.log(err);
                res.status(400).json({ error: 'Location could not be logged to MongoDB' })
            }
            
            return res.json(success);
        })
    })
});

module.exports = router;