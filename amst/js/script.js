$(document).ready(function(){
    
     
       
    $(".open").click(function(){
        console.log("on");
       if($(".menu-nav1").is(":hidden")){
           $(".menu-nav2").slideToggle(1500);
       }else{
           $('.menu-nav1').animate({
            left:0
        },500);

         $('#cancel').click(function(){
            $('.menu-nav1').animate({
                left:"-200px"
         });
         });
       } 
    });
    
    
    
    setInterval(function(){
          $('.arrow').animate({
              top:25
          });
          $('.arrow').animate({
              top:16
          });
          
      },100);  
    
    
    
    
       jQuery.scrollSpeed(100,1000);
    
    
    
    
    
    var href;
    var pos;
    $('.menu-nav1 a').each(function(i){
      $(this).click(function(e){
          if(i==0){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==1){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==2){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==3){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
      });
        
    });
    $('.menu-nav2 a').each(function(i){
      $(this).click(function(e){
          if(i==0){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==1){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==2){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
          if(i==3){
              e.preventDefault();
               href=$(this).attr("href");
               pos=$(href).position().top;
              
              $("html,body").animate({
                  scrollTop: pos+"px"
              },1500);
          }
      });
        
    });
    
    
});