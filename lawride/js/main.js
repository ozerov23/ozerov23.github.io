$(function() {
  "use strict";



  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  //------- video popup -------//
  

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
    
      
    
    
    $(".order").on("click",function(){
        $("#bg").fadeIn(800);
        setTimeout(function(){
            $("#win").fadeIn(800);
        },800);
    });
    
    
     $(".ex").on("click",function(){
        $("#win").fadeOut(800);
        setTimeout(function(){
            $("#bg").fadeOut(800);
        },800);
    });
    
    
    
    
    
    
});


