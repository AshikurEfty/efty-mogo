$(function(){

// navbar bg
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navbg');
    }
    else {
       $('.navbar').removeClass('navbg'); 
    }
});    
    
   
    
    
    
// counter js
$('.counter').counterUp({
    delay: 5,
    time: 1500
});
    
// feedback slider
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
});
    
    
// team slider
$('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  speed:1500,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }  
  ]    
});    
    
    
  //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });  
    
// Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });    
    
    
    
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
}); 
    
    
    
    
    
    
    
    
});