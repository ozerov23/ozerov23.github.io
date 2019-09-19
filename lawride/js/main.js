$(function() {
  "use strict";



  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  //------- video popup -------//
  $(".hero-banner__video, .video-play-button").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  // //------- mailchimp --------//  
	// function mailChimp() {
	// 	$('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


  if ($('.blog-slider').length) {
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>","<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>"],
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  }

  /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            items: 5,
            nav: false,
            dots: true,
            responsiveClass: true,
            slideSpeed: 300,
            paginationSpeed: 500,
            responsive: {
                0: {
                    items: 1
                }
            }
        })
    }

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
    
    
    $(".social li img").each(function(i){
       if(i==0){
           $(this).hover(function(){
               
                $(this).attr("src","img/icons/i-g.png")
               
           },function(){
               
               $(this).attr("src","img/icons/i-b.png")
               
               
           });
       } 
        if(i==1){
           $(this).hover(function(){
               
                $(this).attr("src","img/icons/t-h.png")
               
           },function(){
               
               $(this).attr("src","img/icons/t-b.png")
               
               
           });
       } 
        
        
    });
    
    
  $(".social-footer a img").each(function(i){
       if(i==0){
           $(this).hover(function(){
               
                $(this).attr("src","img/icons/i-g.png")
               
           },function(){
               
               $(this).attr("src","img/icons/i-b.png")
               
               
           });
       } 
        if(i==1){
           $(this).hover(function(){
               
                $(this).attr("src","img/icons/t-h.png")
               
           },function(){
               
               $(this).attr("src","img/icons/t-b.png")
               
               
           });
       } 
        
        
    });
    
      
    
    
    
    
    
    
    
    
    
    
    
    
});


