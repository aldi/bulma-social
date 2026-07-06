### Raising an issue

- Make sure the issue hasn't been raised yet
- Include **screenshots** in your issue whenever possible

### Submitting a Pull Request

- Include **screenshots** in your pull request whenever possible
- Use the **present** tense ("Add youtube" not "Added youtube")
- Limit the first line to 72 characters or fewer

### Adding a new social provider

To add a new social provider, follow these steps:

1. **Add the provider color** to `sass/utilities/_providers.scss`:

```scss
$providers: (
  // ... existing providers
  "newprovider": hsl(210, 80%, 50%),  // Add alphabetically
);
```

2. **Create a single provider file** at `sass/social-providers/single/_newprovider.scss`:

```scss
@charset "utf-8";
@use "../../utilities/derived" as dv;
@use "../../elements/animations";
@use "../../elements/button";
@include button.renderButtonColors(dv.get-provider-color("newprovider"));
```

3. **Add the provider metadata** to `docs/src/data/socialProviders.js` (alphabetically ordered):

```js
{ code: "newprovider", name: "New Provider", hsl: "hsl(210, 80%, 50%)", icon: "fa-newprovider" },
```

4. **Update `README.md`** with the provider count and `.is-newprovider` table entry.

### Try your changes

When modifying any `.scss` file, rebuild the CSS by running:

```
npm install
npm run build
npm run check:providers
```

This will generate:
- `css/all.css` and `css/all.min.css` - All providers bundled
- `css/single/<provider>/<provider>.css` and `.min.css` - Individual provider files
- `docs/public/all.min.css` - Documentation bundle

### Sass styleguide

- Use **SCSS syntax** (with semicolons and curly braces)
- Use the **@use/@forward** module system (not @import)
- Add provider colors in **HSL format**
- Order providers **alphabetically** in `_providers.scss`
- Use **kebab-case** for file names (e.g., `_new-provider.scss`)
