# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: https://github.com/CharlesSquirel/Article-preview-component
- Live Site URL: https://article-preview-component-pi-seven.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

1. Img/icon svg as a link or toogle's button can be nested in anchor or button tag

```html
<!-- Social media icons -->
<a><img /></a>

<!-- Toogle icon -->
<button><img /></button>
```

2. Change the color of svg in fill atribute in the svg's code.

3. Object-fit and object-position properties. Object-fit: scale-down for smaller svgs.

4. This form of ternary operator

```js
popup.style.display = popup.style.display === "flex" ? "none" : "flex";
```

5. Different methodologies about ordering the properties in css selectors – type and alphabetic.
