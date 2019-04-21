/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

let descriptionLengthChecker = (description) => {
  // Check if blog title exists
  if (!description) {
    return false; // Return error
  } else {
    // Check the length of description
    if (description.length < 5 ) {
      return false; // Return error if not within proper length
    } else {
      return true; // Return as valid description
    }
  }
};

// Array of Title Validators
const descriptionValidators = [
  // First Title Validator
  {
    validator: descriptionLengthChecker,
    message: 'Description must be more than 5 characters'
  },
  
];

// User Model Definition
const feedSchema = new Schema({
  
  description: { type: String, required: true ,validate: descriptionValidators },
  rating: {type:Number , default:0 , required: true},
  text:{type: String},
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now() }
  
});


// Export Module/Schema
module.exports = mongoose.model('Feed', feedSchema);
