// JavaScript Document

/* smooth scrolling */

// Select all links with hashes
/*$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  */
  function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 70
    }, 400);
    return false;
  });
 // $('.scrollTop a').scrollTop();
}
scrollNav();
  
/* Fixed navigation*/
/*
$('#navigation').affix({
      offset: {
        top: 400
      }
});
*/

$(document).ready(function(){
	/*if($(".header").hasClass('affix')){
		$('.content').css('margin-top','70px');
	} else {
		$('.content').css('margin-top','0px');
	}*/
    $(".header").affix({
        offset: { 
            top: $(".parallax-bg").outerHeight(true)			
        }
		//$(".parallax-bg").style()
	});
	
});

// on scroll animation

//Progress bar visible on scroll

