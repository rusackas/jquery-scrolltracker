# jquery-scrolltracker
A jQuery plugin that tracks designated elements' scroll position relative to the viewport, and adds CSS classes to the element(s) describing the current position. Great for adding CSS transitions to elements as they appear/disappear from view. 
## Demo
[Vertical scrolling demo](demos/index.html)
## Installation
To install, copy the javascript file into your project and add it in the header like so:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.js" type="text/javascript"></script>
    <script src="jquery.scrolltracker.js" type="text/javascript"></script>

Then, in your site's main javascript file, initialize the plugin with jQuery selector(s) of the elements you'd like to track, like so:

    $(function () {
      $.scrolltracker('body .watchpos, section');
    });

Then, as you scroll your page, the element(s) will have one of the following CSS classes added:

**Vertical statuses**
* onscreen_vert = element contained completely in the viewport, not cut off on the top or bottom
* offscreen_vert = element is completely offscreen, not at all in the viewport
* overflowing_vert = element is onscreen, but does not fit in the viewport, and is cropped off on both the top and bottom
* onfromtop = element is partly onscreen, partly cropped off at the top of the viewport
* onfrombottom = element is partly onscreen, partly cropped off at the bottom of the viewport

**NOTE:** At the moment, only vertical scroll tracking is supported. Horizontal tracking coming soon.

You can then use CSS to style elements according to their position quite easily. Demos coming soon...

## Copyright

Copyright (c) Evan Rusackas. See LICENSE for details.

[http://rusackas.com](http://www.rusackas.com)