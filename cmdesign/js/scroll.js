$(document).ready(function(){
  
     
    
var start_pos=$('nav').offset().top;
var adv_pos=$('.advanced2').offset().top;
    
    
function show_item(){
    if($(window).scrollTop()>=adv_pos-500){
       $('.advanced2 .item').each(function(i){
          $(this).show(); 
       });
      }
}     
 
    show_item()
 $(window).scroll(function(){
  if ($(window).scrollTop()>=start_pos){
      if ($('nav').hasClass()==false) $('nav').addClass('stickytop');
  }
  else{
      
      $('nav').removeClass('stickytop');
  }
 });
    
  $(window).scroll(function(){
        
      if($(window).scrollTop()>=adv_pos-500){
       $('.advanced2 .item').each(function(i){
          $(this).fadeIn(i*600); 
       });
      }
 
 
 });  
    
    
    
    
    
    
    
    
    
});
