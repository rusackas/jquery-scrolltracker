(function ( $ ) {

  $.scrolltracker = function( el, options ) {
    $(window).on('DOMContentLoaded load resize scroll', function(){
      //set default options
      var settings = $.extend({
        // These are the defaults.
        findVert: true,
        findHoriz:false
      }, options );
      
      //adjusting setings if correct options are passed in
      if(options=='horiz') settings.findVert = false;
      else if(options=='vert') settings.findHoriz = false;
    
      var locateVert = function(rect){
        if (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        ) return 'onscreen';
        else if(
          rect.top >= (window.innerHeight || document.documentElement.clientHeight) || rect.bottom <= 0
        ) return 'offscreen';
        else if(
          rect.top < 0 && rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
        ) return 'overflowing';
        else if(
          rect.top < 0 &&
          rect.bottom >= 0
        ) return 'onfromtop';
        else if(
          rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top < (window.innerHeight || document.documentElement.clientHeight)
        ) return 'onfrombottom';
      }
      
      var locateHoriz = function(rect){
        //console.log ('left: '+rect.left+' right: '+rect.right+' window.innerWidth: '+window.innerWidth);
        if (
          rect.left >= 0 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
        ) return 'onscreen';
        else if(
          rect.left >= (window.innerWidth || document.documentElement.clientWidth) || rect.right <= 0
        ) return 'offscreen';
        else if(
          rect.left < 0 && rect.right > (window.innerWidth || document.documentElement.clientWidth)
        ) return 'overflowing';
        else if(
          rect.left < 0 &&
          rect.right >= 0
        ) return 'onfromleft';
        else if(
          rect.right > (window.innerWidth || document.documentElement.clientWidth) &&
          rect.left < (window.innerWidth || document.documentElement.clientWidth)
        ) return 'onfromright';
      }
      
      var locateVertHoriz = function(rect){
        if (
          rect.left >= 0 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth) && 
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        ) return 'onscreen';
// this may be useful if you need to know if the offscreen element is ofscreen on both axes (diagonally), but that seems unlikely...        
//        else if(
//          (rect.left >= (window.innerWidth || document.documentElement.clientWidth) || rect.right <= 0) &&
//          (rect.top >= (window.innerHeight || document.documentElement.clientHeight) || rect.bottom <= 0)
//        ) return 'offscreen';
        else if(
          (rect.left < 0 && rect.right > (window.innerWidth || document.documentElement.clientWidth)) &&
          (rect.top < 0 && rect.bottom > (window.innerHeight || document.documentElement.clientHeight))
        ) return 'overflowing';
      }

      $(el).each(function(){
        var $this = $(this);
        
        //pull the element from the jQuery object, get its bounding rectangle
        var rect = $this[0].getBoundingClientRect();
        
        if(settings.findVert){
          var screenstatus = locateVert(rect);
          if (screenstatus == 'onscreen') {
            $this.addClass('onscreen_vert');
          } else $this.removeClass('onscreen_vert');
          if (screenstatus == 'offscreen') {
            $this.addClass('offscreen_vert');
          } else $this.removeClass('offscreen_vert');
          if (screenstatus == 'overflowing') {
            $this.addClass('overflowing_vert');
          } else $this.removeClass('overflowing_vert');
          if (screenstatus == 'onfromtop') {
            $this.addClass('onfromtop');
          } else $this.removeClass('onfromtop');
          if (screenstatus == 'onfrombottom') {
            $this.addClass('onfrombottom');
          } else $this.removeClass('onfrombottom');
        }
        if(settings.findHoriz){
          var screenstatus = locateHoriz(rect);
          if (screenstatus == 'onscreen') {
            $this.addClass('onscreen_horiz');
          } else $this.removeClass('onscreen_horiz');
          if (screenstatus == 'offscreen') {
            $this.addClass('offscreen_horiz');
          } else $this.removeClass('offscreen_horiz');
          if (screenstatus == 'overflowing') {
            $this.addClass('overflowing_horiz');
          } else $this.removeClass('overflowing_horiz');
          if (screenstatus == 'onfromleft') {
            $this.addClass('onfromleft');
          } else $this.removeClass('onfromleft');
          if (screenstatus == 'onfromright') {
            $this.addClass('onfromright');
          } else $this.removeClass('onfromright');
        }
//        if(settings.findVert && settings.findHoriz){
//          var screenstatus = locateVertHoriz(rect);
//          if (screenstatus == 'onscreen') {
//            $this.addClass('onscreen_horiz');
//          } else $this.removeClass('onscreen_horiz');
//          if (screenstatus == 'offscreen_horiz') {
//            $this.addClass('offscreen');
//          } else $this.removeClass('offscreen_horiz');
//          if (screenstatus == 'overflowing_horiz') {
//            $this.addClass('overflowing_horiz');
//          } else $this.removeClass('overflowing_horiz');
//        }
      }); 
    });
  };
 
}( jQuery ));