# Layout templates

* Every template in Remake uses Handlebars to render itself (https://handlebarsjs.com/)
* Every template in Remake gets access to the same template variables (https://docs.remaketheweb.com/templating/), as well as any data that you define in `/app/data/global.json`

# Tip

You don't need to load Remake's front-end JS file if a user can't edit the page. So, if
you create a new layout template, you can use the following code to make sure it's loaded if the page's author is the current user.

```
{{#if isPageAuthor}}
  {{!-- Prevent loading the Remake framework if the page isn't editable --}}
  <script src="/js/remake-init.js"></script>
{{/if}}
```

# Layouts

In order to use a layout other than the default one, add the following to the top of a page template:

```
{{ layout "layout-name" }}
```

