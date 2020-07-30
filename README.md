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

### `routes/gigs.js`
* View in browser OK
* We return a status of 200 so it doesn't "hang"
* We log to the terminal and see an empty array `[]`
  - Since we have no data this is what we expect
* And we see our SQL in terminal

```
Executing (default): SELECT `id`, `title`, `technologies`, `description`, `budget`, `contact_email`, `createdAt`, `updatedAt` FROM `Gigs` AS `Gig`;
```

## Next
* We could add data directly in our Database but we'll now add Handlebars to create a form and use that to add data into our Database

```
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
```




