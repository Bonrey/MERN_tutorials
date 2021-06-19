require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());
const countriesRouter = require('./routes/countries');
app.use('/countries', countriesRouter);


app.listen(3000, () => console.log('The server has started.'));
