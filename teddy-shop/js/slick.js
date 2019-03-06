$(document).ready(function(){
   
    
      var patch;
      var main_patch;
    $('.line-img img').each(function(){
         $(this).on("click",function(){
          main_patch=$(this).attr('src');
          patch = $(this).parent().prev().children();
             
             patch.fadeOut(1000);
             setTimeout(function(){
                 patch.attr("src",main_patch);
                 patch.fadeIn(1000)
             },1500);
             
             

         });
        
    });
    
    
    
    
    
    
});



