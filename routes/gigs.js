// if this is empty we'll get an error that Router.use() requires a middleware function but got an Object
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => db.Gig.findAll().then(gigs => {
  console.log(gigs);
  res.sendStatus(200);
}).catch(err => console.log(err)));

// don't forget to export it or the error won't go away
module.exports = router;
