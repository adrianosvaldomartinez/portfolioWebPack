## develop

to star a development run nodemon, so it can watch for changes in src and make a new build

```bash
npm run dev
```

## build

the build script runs webpack and makes a copy of index into the dist folder, that is the production served directory

## CSS Class Ordering Rule

To maintain a consistent and readable ordering of CSS classes in our HTML, please follow the structure below when assigning multiple classes to an element:

**Layout-related classes:** These include classes related to flexbox, grid, and general layout positioning (e.g., flex, grid, container, row, column).

**Size-related classes:** These include classes defining the span or size of elements, typically based on breakpoints (e.g., sm, lg, span-columns, col).

**Margin and padding classes:** These include classes for margins and padding to control spacing around elements (e.g., mt, mb, pt, pb).

**Typography and text alignment classes:** These include classes for font size, weight, and text alignment (e.g., text-center, font-bold, fontMedium).
Custom or utility classes: These are specific to the project's custom styles (e.g., oldStyle, switch-page-button).

```css
class="intro-1 sm:span-columns-2 lg:span-columns-1 sm:mt-normal lg:mt-normal fontBigBold"
```
