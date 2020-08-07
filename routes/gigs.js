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

// Add a gig
// we change this from get to post
router.post('/add', (req, res) => {
  // normally your data would come from form but we'll first hardcode it
  const data = {
    title: 'Looking for a React Senior Developer',
    technologies: 'react,JavaScript,html,css',
    budget: '$4000',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus adipisci alias sint aliquam explicabo, nostrum accusantium iste cum. Officia voluptate esse voluptatum quas dignissimos rerum aperiam iste dolorem illo.',
    contact_email: 'jane.doe@example.com',
  };

  const { title, technologies, budget, description, contact_email } = data; // eslint-disable-line camelcase
  // Insert into gigs table
  db.Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email,
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});
// don't forget to export it or the error won't go away
module.exports = router;
