# jquery-scrolltracker
A jQuery plugin that tracks designated elements' scroll position relative to the viewport, and adds CSS classes to the element(s) describing the current position. Great for adding CSS transitions to elements as they appear/disappear from view. 
## Demo
[Vertical scrolling demo](https://rusackas.github.io/jquery-scrolltracker/demos/vertical/index.html)

[Horizontal scrolling demo](https://rusackas.github.io/jquery-scrolltracker/demos/horizontal/index.html)

## Installation
To install, copy the javascript file into your project and add it in the header like so:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.js" type="text/javascript"></script>
    <script src="jquery.scrolltracker.js" type="text/javascript"></script>

Then, in your site's main javascript file, initialize the plugin with jQuery selector(s) of the elements you'd like to track, like so:

    $(function () {
      $.scrolltracker('div.watchme, div.thistoo');
    });
    
By default, the plugin tracks vertical scrolling. You can override that to track horizontal position by setting the "direction" option like so:

    $(function () {
      $.scrolltracker('#trackthis',{direction:"horizontal"});
    });

You can also set the direction to "both" if you want to track elements on both axes.

As you scroll your page, the element(s) will have CSS classes added reflecting their position relative to the viewport:

**Vertical statuses** [See demo](https://rusackas.github.io/jquery-scrolltracker/demos/vertical/index.html)
* onscreen_vert = element contained completely in the viewport, not cut off on the top or bottom
* offscreen_vert = element is completely offscreen, not at all in the viewport
* overflowing_vert = element is onscreen, but does not fit in the viewport, and is cropped off on both the top and bottom
* onfromtop = element is partly onscreen, partly cropped off at the top of the viewport
* onfrombottom = element is partly onscreen, partly cropped off at the bottom of the viewport

**Horizontal statuses** [See demo](https://rusackas.github.io/jquery-scrolltracker/demos/horizontal/index.html)
* onscreen_horiz = element contained completely in the viewport, not cut off on the left or right
* offscreen_horiz = element is completely offscreen, not at all in the viewport
* overflowing_horiz = element is onscreen, but does not fit in the viewport width, and is cropped off on both the left and right
* onfromleft = element is partly onscreen, partly cropped off at the left of the viewport
* onfromright = element is partly onscreen, partly cropped off at the right of the viewport

You can then use these classes in your CSS to style/animate elements according to their position quite easily. 

## Copyright

Copyright (c) Evan Rusackas. See LICENSE for details.

[http://rusackas.com](http://www.rusackas.com)