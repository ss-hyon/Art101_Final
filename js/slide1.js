/**
 * Author:    Selena Hyon
 * Created:   Spring 2021
 *
 * Public Domain
 **/
 $(document).mousemove(function(e) {
   $("#follow").css({
     left: e.pageX,
     top: e.pageY
   });
 });
