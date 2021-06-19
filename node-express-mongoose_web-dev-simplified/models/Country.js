const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Country', countrySchema);
