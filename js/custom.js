//////////////// Back To Top ///////////

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

//////////////// owl carousel ///////////
/// slider ///
// $(function () {
//     $(".owl-new-slider").owlCarousel({
//       loop: true,
//       dots: false,
//       nav: true,
//       navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//       ],
//       navContainer: ".container-fluid .custom-nav",
//       animateOut: "slideOutRight",
//       animateIn: "flipInY",
//       autoplay: true,
//       autoplayTimeout: 3000,
//       pagination: false,
//       autoplaySpeed: 2500,
//       fluidSpeed:true,
//       items: 1,
//       margin: 0,
//       stagePadding: 0,
//       smartSpeed: 2000
//     });
//   });
  $(document).ready(function() {
    $(".owl-new-slider").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        itemsMobile : [768,1],
        navigation: true,
        navigationText: ["",""],
        dots: false, 
        loop: true,
        pagination: false,
        autoplayTimeout: 1000,
        autoplaySpeed: 1500,
        autoPlay: true
    });
});   
// team///
$(document).ready(function() {
    $("#our-team").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        itemsMobile : [768,1],
        navigation: true,
        navigationText: ["",""],
        dots: true, 
        loop: true,
        pagination: true,
        autoplayTimeout: 1500,
        autoplaySpeed: 2000,
        autoPlay: true
    });
}); 
// social //
$(document).ready(function() {
    $("#social").owlCarousel({
        items : 1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[980,1],
        itemsMobile : [600,1],
        itemsMobile : [768,1],
        navigation: true,
        navigationText: ["",""],
        dots: false, 
        loop: true,
        pagination: false,
        autoplayTimeout: 1500,
        autoplaySpeed: 2000,
        autoPlay: true
    });
});
// smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// changes made by kashmira

