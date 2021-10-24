# Bulma-Social Changelog

## [2.1.0](https://github.com/aldi/bulma-social/tree/2.1.0) (2021-10-24)

### New features

- Slack colors (Pull Request [#18](https://github.com/aldi/bulma-social/pull/18) by [@mariotaddeucci](https://github.com/mariotaddeucci))

## [2.0.0](https://github.com/aldi/bulma-social/tree/2.0.0) (2020-11-19)

### BIG UPDATE - BREAKING CHANGES

The css files are now located in the `css` folder:  
**before:** `bin/bulma-social.min.css`  
**after:** `css/all.min.css`

**Visit the [documentation page](https://aldi.github.io/bulma-social) for more information.**

### New Features

**Selective Import**  
Import the Social Providers that you really need.

**Sass Support**  
Sass files and functions are based on the original work of @jgthms (Bulma creator).

**New Colors and Classes**  
Colors are generated with Bulma's original functions for seamless integration with your project.  
You can now use:  
`.is-inverted`  
`.is-outlined`  
`.is-light`  
along with the Social Providers classes.

In addition, you can use these classes independently:  
`.has-text-<socialprovider>`  
`.has-text-<socialprovider>-light`  
`.has-text-<socialprovider>-dark`  
`.has-background-<socialprovider>`  
`.has-background-<socialprovider>-light`  
`.has-background-<socialprovider>-dark`

**New Scripts**  
Compile your own Bulma Social `all.min.css` file with the Social Providers you really need.  
You can find the scripts in the `package.json` file and the steps in the documentation.

**Browser Compatibility**  
New vendor prefixes for the most popular browsers (thanks to Autoprefixer)

### Updated

- Discord colors (Pull Request [#7](https://github.com/aldi/bulma-social/pull/7) by [@nathanchere](https://github.com/nathanchere) - Fixes Issue [#6](https://github.com/aldi/bulma-social/issues/6))
- Facebook colors
- Github colors
- Gitlab colors
- Instagram colors
- LinkedIn colors
- Microsoft colors
- Okru colors
- Openid colors
- Pinterest colors
- Reddit colors
- Tumblr colors
- Twitter colors
- Vimeo colors
- VK colors
- Yahoo colors

## [1.2.0](https://github.com/aldi/bulma-social/tree/1.2.0) (2020-08-06)

### New features

- Apple colors. (Pull Request [#5](https://github.com/aldi/bulma-social/pull/5) by [@mariotaddeucci](https://github.com/mariotaddeucci))

### Improvements

- Border color of buttons is now transparent
- Round buttons are now round
- `disabled` button styles
- You can now use `.is-active`, `.is-focused` and `.is-hovered` classes

### Updated

- Reddit colors
- Instagram static colours

### Removed

- Unused `.badge` and `.dropdown-toggle` styles
- Appnet colors
- Google colors

## [1.1.1](https://github.com/aldi/bulma-social/tree/1.1.1) (2020-03-20)

### Improvements

- #4 Bin directory missing when installing version 1.1.0 on NPM (Issue [#4](https://github.com/aldi/bulma-social/issues/4) by [@chrisgacsal](https://github.com/chrisgacsal))

## [1.1.0](https://github.com/aldi/bulma-social/tree/1.1.0) (2020-02-11)

### New features

- Gitlab buttons (Pull Request [#1](https://github.com/aldi/bulma-social/pull/1) by [@nathanchere](https://github.com/nathanchere))
- Button animations (by default) on button hover (cubic-bezier effect)
- `no-animation` class to disable button animations
- New tabs on the right column to preview normal/rounded/loading and static button types

### Improvements

- Instagram colours

## [1.0.1](https://github.com/aldi/bulma-social/tree/1.0.1) (2019-12-15)

### Improvements

- Added .npmignore to ignore files not needed for production

## [1.0.0](https://github.com/aldi/bulma-social/tree/1.0.0) (2019-12-15)

- Initial Release!
