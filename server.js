const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
// set up home route
app.get('/', (req, res) => res.send('INDEX'));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});
