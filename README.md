# Sequelize with MySQL, Handlebars, Express

## Branches
```
git checkout html-template
git checkout express
git checkout sequelize
git checkout modular-sequelize
git checkout models
git checkout routes
```

## Notes
* We add this in our server.js

```
// MORE CODE

// Gig routes
app.use('/gigs', require('./routes/gigs'));
// MORE CODE
```

* And we create `routes/gigs.js`

```
// if this is empty we'll get an error that Router.use() requires a middleware function but got an Object
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GIGS'));

// don't forget to export it or the error won't go away
module.exports = router;
```


## Manually drop the table in Workbench
* Run app again

`$ npm run dev`




