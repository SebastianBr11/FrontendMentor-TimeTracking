# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Svelte](https://svelte.dev)

### What I learned

To dynamically import svg files in svelte I needed to install the rollup-plugin-inline-svg plugin,
then I created an Icon component which takes a name prop and then imports the svg inside an each block.

```js
const getIcon = async () => {
  const icon = await import(`../public/images/icon-${name}.svg`);
  return icon.default;
};
```

```html
{#await getIcon() then svg} {@html svg} {/await}
```

### Useful resources

- [Codesandbox](https://codesandbox.io)

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/SebastianBr11)
