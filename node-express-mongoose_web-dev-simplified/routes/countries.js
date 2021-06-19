const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

// Getting all
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ message: err.message });  // server error
  }
});

// Getting one
router.get('/:id', getCountry, (req, res) => {
  res.send(res.country);
});

// Creating one
router.post('/', async (req, res) => {
  const { name, language, population } = req.body;
  const country = new Country({ name, language, population });
  try {
    const newCountry = await country.save();
    res.status(201).json(newCountry);  // successfully created object
  } catch (err) {
    res.status(400).json({ message: err.message });  // user sent a bad data
  }
});

// Updating one
router.patch('/:id', getCountry, async (req, res) => {
  if (req.body.name != null) {
    res.country.name = req.body.name;
  }
  if (req.body.language != null) {
    res.country.language = req.body.language;
  }
  if (req.body.population != null) {
    res.country.population = req.body.population;
  }
  try {
    const updatedCountry = await res.country.save();
    res.json(updatedCountry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete('/:id', getCountry, async (req, res) => {
  try {
    await res.country.remove();
    res.json({ message: "Country deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCountry(req, res, next) {
  let country;
  try {
    country = await Country.findById(req.params.id);
    if (country == null) {
      return res.status(404).json({ message: "Couldn't find the country" });  // not found
    }
  } catch (err) {
    res.status(500).json({ message: err.message });  // server error
  }

  res.country = country;
  next();
}

module.exports = router;
