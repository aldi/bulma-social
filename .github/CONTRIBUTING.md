### Raising an issue

- Make sure the issue hasn't been raised yet
- Include **screenshots** in your issue whenever possible

### Submitting a Pull Request

- Include **screenshots** in your pull request whenever possible
- Use the **present** tense ("Add youtube" not "Added youtube")
- Limit the first line to 72 characters or fewer

If you are going to add a new social provider, got to the `sass/social-providers/all.sass` file and add your new social provider after the last entry but before function  
Replace the "replaceme" text with the social provider's text (e.g. youtube).

```
// Your new social provider color
$replaceme: hsl(0, 100%, 50%) !default
$replaceme-invert: findColorInvert($replaceme)
$replaceme-light: findLightColor($replaceme)
$replaceme-dark: findDarkColor($replaceme)
$replacemeColours: ("replaceme": ($replaceme, $replaceme-invert, $replaceme-light, $replaceme-dark))
```

Remember to add your new variable in the **\$socialProvidersList** afterwards.

### Try your changes

When modifying any `.sass`, you will need to rebuild the css. You can do this by running:

```
npm install
npm run build
```

### Sass styleguide

- **No semi-colons** `;` or **curly braces** `{` `}`
- **Make sure your new variables are in camelCase**
- Order the your variables **alphabetically**
