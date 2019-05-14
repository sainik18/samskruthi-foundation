$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

  // for gallery start
  $('#galleryRow').html();
  for(var i=1;i<=8;i++){
    $('#galleryRow').append('<div class="col-lg-3 col-sm-4">'+
    '<a class="portfolio-box" href="img/gallery/'+i+'.jpg">'+
      '<img class="img-fluid" src="img/gallery/'+i+'.jpg" alt="">'+
    '</a>'+
  '</div>')
  }
  // for gallery end
 
});