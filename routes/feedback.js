const User = require('../models/user');
const Feed = require('../models/feedback'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {
  /* ==============
     Register Route
  ============== */
 
  router.post('/newFeed', (req, res) => {
   // Check if description was provided
    if (!req.body.description) {
      res.json({ success: false, message: 'Description is required.' }); // Return error message
    } else {
      // Check if rating was provided
      if (!req.body.rating) {
        res.json({ success: false, message: 'Rating is required.' }); // Return error message
      } else {
        // Check if creator was provided
        if (!req.body.createdBy) {
          res.json({ success: false, message: 'Creator is required.' }); // Return error
        } else {
          // Create the object for insertion into database
          const feed = new Feed({
            description: req.body.description, 
            text:req.body.text,
            rating: req.body.rating,
            createdBy: req.body.createdBy // CreatedBy field
          });
          // Save blog into database
          feed.save((err) => {
            // Check if error
            if (err) {
              // Check if error is a validation error
              if (err.errors) {
                // Check if validation error is in the title field
                if (err.errors.description) {
                  res.json({ success: false, message: err.errors.description.message }); // Return error message
                } else {
                  // Check if validation error is in the body field
                  if (err.errors.rating) {
                    res.json({ success: false, message: err.errors.rating.message }); // Return error message
                  } else {
                    res.json({ success: false, message: err }); // Return general error message
                  }
                }
              } else {
                res.json({ success: false, message: err }); // Return general error message
              }
            } else {
              res.json({ success: true, message: 'Feedback saved!' }); // Return success message
            }
          });
        }
      }
    }
  });

  return router;
};
