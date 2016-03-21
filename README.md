# Wholesale-Design-System

The Wholesale-Design-System UI toolkit is a highly-modular design system for rapid web page development. It contains different materials that can be assembled into more complex page layouts.

## Getting Started

Wholesale-Design-System requires [node.js](http://nodejs.org). Make sure your have `v0.10` or higher installed before proceeding.

**Start the local development environment:**

Bundle jspm packages. Redo on dependency changes or when adding new files.
```
$ jspm bundle-sfx src/app dist/app.js
```
Build rest of files
```
$ gulp
```
The above does not terminate. Open a new console and do:
```
$ gulp serve
```

### Modifying

**Change the tokens**

The most basic design atoms should be located in `tokens/raw`. Changes there effect the rest of the design after a rebuild.

**Change the design**

The design is based on ([bourbon.io](http://bourbon.io)):

* Bourbon 4.2.x (Mixins)
* Neat 1.7.x (Grid)
* Refills (Components)
* Bitters (Basic Variables)

To change the design, we change the tokens or the components in `src/assets/toolkit/styles/refills/`.

To add the new components FANCY, add them via a new FANCY.html file to `src/materials/`. 
Add the styles as a new FANCY.scss file to `src/assets/toolkit/styles/custom/` and reference it in `src/assets/toolkit/styles/custom/_custom.scss`.

### Use the design/framework

**Get the tokens**

The tokens are available to download and to be used in an arbitrary system from:

`https://pages.github.bus.zalan.do/WholesaleDesignSystem/tokens/web/quark.scss`

or

`https://pages.github.bus.zalan.do/WholesaleDesignSystem/tokens/styleguide/quark.json`

**Get the css framework**

Add the css file to your page

`<link rel="stylesheet" href="https://pages.github.bus.zalan.do/WholesaleDesignSystem/toolkit.min.css">`
