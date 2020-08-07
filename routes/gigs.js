// if this is empty we'll get an error that Router.use() requires a middleware function but got an Object
const express = require('express');

const router = express.Router();
const db = require('../models');

// Get gig list
router.get('/', (req, res) =>
  db.Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.render('gigs', {
        gigs,
      });
    })
    .catch(err => console.log(err))
);

// Display add gig form
router.get('/add', (req, res) => res.render('add'));

// Add a gig
router.post('/add', (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body; // eslint-disable-line camelcase
  const errors = [];

  // Validate Fields
  if (!title) {
    errors.push({ text: 'Please add a title' });
  }
  if (!technologies) {
    errors.push({ text: 'Please add some technologies' });
  }
  if (!description) {
    errors.push({ text: 'Please add a description' });
  }

  // if (!contact_email) {
  //   errors.push({ text: 'Please add a contact email' });
  // }

  // Check for errors
  if (errors.length > 0) {
    res.render('add', {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email,
    });
  } else {
    if (!budget) {
      budget = 'Unknown';
    } else {
      budget = `$${budget}`;
    }

    // Make lowercase and remove space after comma
    technologies = technologies.toLowerCase().replace(/,[ ]+/g, ',');

    // Insert into table
    db.Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email,
    })
      .then(gig => res.redirect('/gigs'))
      .catch(err => res.render('error', { error: err.message }));
  }
});

// don't forget to export it or the error won't go away
module.exports = router;
