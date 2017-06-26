# rsat.ui
rsat UI is the material design ui components library bulit reference implementation of Google's Material Design Specification.It internally makes use of [Material Design Lite](https://getmdl.io/index.html), a cross-device material design ui components library that lets you add a Material Design look and feel to your websites.

This component library includes new versions of common user interface controls such as buttons, check boxes, and text fields, adapted to follow Material Design concepts. 

Explore. [here](https://rohithsathya.github.io/rsat.ui/example/)

## Dependencies
* Angular Js
* [Material Design Lite](https://getmdl.io/index.html)

## GETTING STARTED
Getting started with rsat.ui is very simple, please follow the simple steps below
1. Add refrence to rsat.ui.elements.min.js and rsat.ui.elements.min.css files present in the "dist" folder
    ```html
        <link rel="styleSheet" href="../dist/rsat.ui.elements.min.css"/>
        <script src="../dist/rsat.ui.elements.min.js"></script>
    ```
2. Add Module depedency of "rsat.ui.elements" to your angularjs application
    ```javascript
    var app = angular.module('myApp', ['rsat.ui.elements']);
    ```

    Thats it..:), you have successfully added rsat.ui into your angularjs project.
    
# Components
rsat.ui includes new versions of common user interface controls such as buttons, check boxes, and text fields, adapted to follow Material Design concepts.

## Buttons

Variations on Material Design buttons.

| Button Types       | How To Use  | Preview  |
| ------------- | ------------- |------------- |
|Raised button|`<button rsat-Button-raised>Raised</button>`||
|Raised button Primary|`<button rsat-Button-raised-primary>Raised Primary</button>`||
|Raised button Accent|` <button rsat-Button-raised-accent>Raised Accent</button>`||
|Flat button|`<button rsat-Button-flat>Flat</button>`||
|Flat button Primary|`<button rsat-Button-flat-primary>Flat primary</button>`||
|Flat button Accent|`<button rsat-Button-flat-accent>Flat Accent</button>`||
|FAB|`<button rsat-fab>+</button>`||
|Icon button|`<button rsat-Button-icon>+</button>`||
|Icon button Primary|`<button rsat-Button-icon-primary>+</button>`||
