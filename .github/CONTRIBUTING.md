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
@use "../../utilities" as *;

$button-colors: get-provider-color("newprovider");
@use "../../elements/button";
```

3. **Import it in the all providers file** `sass/social-providers/_all.scss`:

```scss
@forward "single/newprovider";
```

### Try your changes

When modifying any `.scss` file, rebuild the CSS by running:

```
npm install
npm run build
```

This will generate:
- `css/all.css` and `css/all.min.css` - All providers bundled
- `css/single/<provider>/<provider>.css` - Individual provider files

### Sass styleguide

- Use **SCSS syntax** (with semicolons and curly braces)
- Use the **@use/@forward** module system (not @import)
- Add provider colors in **HSL format**
- Order providers **alphabetically** in `_providers.scss`
- Use **kebab-case** for file names (e.g., `_new-provider.scss`)
