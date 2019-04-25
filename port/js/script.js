$(document).ready(function(){
  
    
  $("nav .menu").click(function(){
      $("nav").animate({
          left:0
      },500);
      $('nav .menu').hide(); 
  });
  
  $("nav").mouseleave(function(){
   
    $("nav").stop().animate({
          left: '-290'
      },500);  
      
       setTimeout(function(){
             $('nav .menu').show(); 
      },500);
  });    
    
    
 setTimeout(function(){
      $('header .content').fadeIn(1500);
     
     
  },1000);
 setTimeout(function(){
      $('header').removeData('data-vide-bg');
     
 },1500);   
    
    
 $("#menu2 img").click(function(){
    $("#menu2 ul").slideToggle(1000) ;
 });
    
    
    
    
    
    
    
    
    
    
    
    
    
});