# Sequelize with MySQL, Handlebars, Express

## Branches
```
git checkout 01-html-template
git checkout 02-express
git checkout 03-models
git checkout 04-sequelize
git checkout 05-modular-sequelize
git checkout 07-routes-get-gigs
git checkout 08-routes-add-gigs
```

## Notes
* Add comments to routes
* Hard code data for post route

```
const data = {
    title: 'Looking for a React Junior Developer',
    technologies: 'react,JavaScript,html,css',
    budget: '$10000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus adipisci alias sint aliquam explicabo, nostrum accusantium iste cum. Officia voluptate esse voluptatum quas dignissimos rerum aperiam iste dolorem illo.',
    contact_email: 'jane.doe@example.com'
  }
```

* Sequelize will handle `updatedAt` and `createdAt`
* Destructure to make data easier to access and code easier to read

```
const { title, technologies, budget, description, contact_emal } = data;
```

* Insert into our gigs table
* Naming in sequelize (discuss)
* It returns a Promise so we use `.then()` and `.catch()`
* [Discuss object property value shorthand in ES6](https://alligator.io/js/object-property-shorthand-es6)

```
// MORE CODE

 db.Gig.create({
    title: title,
    technologies: technologies,
    description: description,
    budget: budget,
    contact_email: contact_email
  })
// MORE CODE
```
* Adding eslint
* `localhost:5000/gigs/add` and view terminal and you will see our data added
* Redirects
* Add another record, change data and add one more gig
* View in Workbench (database)

