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
git checkout 09-add-handlebars
```

## Notes
* Add two lines and require `express-handlebars`
* `views/layouts/main.handlebars`
* layouts main.handlebars and landing.handlebars
* Copy gigs.html into main.html and delete the section
* Output view with `{{{body}}}`
* Update routes
* Add static folder - we'll call it `public`
* Update path `/css/style.css` (adding slash before css)
* Copy img and css into public
* Set static folder in server.js
* Add render to route and point to template gigs.handlebars and pass it gigs data object
* Wrap main content in container class
* Hardcoded gigs with section first
* Then pull from Database
