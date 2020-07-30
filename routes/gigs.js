// if this is empty we'll get an error that Router.use() requires a middleware function but got an Object
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GIGS'));

// don't forget to export it or the error won't go away
module.exports = router;
