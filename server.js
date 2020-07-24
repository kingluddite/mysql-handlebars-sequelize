const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// ROUTES
// set up home route
app.get('/', (req, res) => res.send('INDEX'));

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
