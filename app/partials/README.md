# Partials

Any template files put into this directory can be accessed from your page templates.

# How to render a partial in a page template

Write the following code in `app-index.hbs`:

```
{{> say-hello}}
```

# The partial file

In order to include the above partial, you need to create a file in `/app/partials/say-hello.hbs` and add the following code:

```
<div>Hello {{currentUser.details.username}}</div>
```

Your partial file will have access to all the template variables from the page that it's included in.

# Handlebars docs

To learn more about templates and partials, read the Handlebars.js documentation: https://handlebarsjs.com/guide/partials.html

