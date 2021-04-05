# Templating

* Every template in Remake uses Handlebars to render itself (https://handlebarsjs.com/)
* Every template in Remake gets access to the same template variables (https://docs.remaketheweb.com/templating/), as well as any data that you define in `/app/data/global.json`

# Pages

Pages are special in Remake. Remake doesn't want you to think about routing, so it makes routing as simple (and flexible) as possible.

A page named `hello-world.hbs` in the `pages` directory will match ALL of the following routes:

* `http://localhost:3000/hello-world`
* `http://localhost:3000/john-doe/hello-world`
* `http://localhost:3000/john-doe/hello-world/45678`

This means you don't have to nest pages in a particular directory structure or add special configuration to get them working.

All your pages can just be right inside the `/pages` directory and they'll do they're best to render at the appropriate time.

# Special pages

There are a few special pages you should know about:

* `index.hbs` will render when the root of your app is loaded up (e.g. `http://localhost:3000/`). This page isn't editable by any user — it's just a static page.
* `app-index.hbs` will render when a user's username -- and no other parameters -- are in the url (e.g. `http://localhost:3000/jane-doe`, but NOT `http://localhost:3000/jane-doe/some-page-name`). The current user can edit this page if it belong to them.
* If you pass a parameter in after the username (e.g. `http://localhost:3000/jane-doe/some-page-name`), Remake will render `some-page-name.hbs` and pass in the `currentUser` variable, so you can display their name.
* If you pass in a third parameter (e.g. `http://localhost:3000/jane-doe/some-page-name`), Remake will treat it as a id and search the current user's data for an object with a matching that id. If found, that object will be accessible in the `currentItem` variable.
* All the templates in `/pages/user` are used to render special account-level pages (e.g. the sign up page, the login page, the forgot password page, and the reset password page). They have special names that can't be changed, but you have complete control over their CSS and HTML.






