const express = require('express');
const exphbs = require('express-handlebars');
const { Sequelize } = require('sequelize');
const path = require('path');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// use the .authenticate() function to test if the connection is OK:
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the Database');
  });

// ROUTES
// set up home route
app.get('/', (req, res) => res.send('INDEX'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
