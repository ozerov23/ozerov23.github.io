$(document).ready(function(){

    $('.content input').each(function(i){
       $(this).click(function(){
           if(i==0){
              
               $(".slider .win").fadeOut(1000).fadeIn(100);
               $(".content h1").fadeOut(1000);
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg2");
                   $(".slider .win").removeClass("bg3");
                   $(".slider .win").removeClass("bg4");
                   $(".slider .win").removeClass("bg5");
                   $(".slider .win").removeClass("bg6");              
                   $(".slider .win").addClass("bg1");
                  $(".content h1").fadeIn(100);
               },1000);
               
                   
               
           $("#s1").prop('disabled',true);
           $("#s2").prop('disabled',false);
           $("#s3").prop('disabled',false);
           $("#s4").prop('disabled',false);
           $("#s5").prop('disabled',false);
           $("#s6").prop('disabled',false);
           }
           if(i==1){
               
               $(".slider .win").fadeOut(1000).fadeIn(100);
                $(".content h1").fadeOut(1000);
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg1");
                   $(".slider .win").removeClass("bg3");
                   $(".slider .win").removeClass("bg4");
                   $(".slider .win").removeClass("bg5");
                   $(".slider .win").removeClass("bg6");
                   $(".slider .win").addClass("bg2");
                   $(".content h1").fadeIn(100);
               },1000);
           $("#s1").prop('disabled',false);
           $("#s2").prop('disabled',true);
           $("#s3").prop('disabled',false);
           $("#s4").prop('disabled',false);
           $("#s5").prop('disabled',false);
           $("#s6").prop('disabled',false);
           }
           if(i==2){
               
             
               $(".slider .win").fadeOut(1000).fadeIn(100);
               $(".content h1").fadeOut(1000);
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg1");
                   $(".slider .win").removeClass("bg2");
                   $(".slider .win").removeClass("bg4");
                   $(".slider .win").removeClass("bg5");
                   $(".slider .win").removeClass("bg6");
                   $(".slider .win").addClass("bg3");
                   $(".content h1").fadeIn(100);
               },1000);
           $("#s1").prop('disabled',false);
           $("#s2").prop('disabled',false);
           $("#s3").prop('disabled',true);
           $("#s4").prop('disabled',false);
           $("#s5").prop('disabled',false);
           $("#s6").prop('disabled',false);  
               
               
           }
           if(i==3){
               
               $(".slider .win").fadeOut(1000).fadeIn(100);
               $(".content h1").fadeOut(1000);
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg1");
                   $(".slider .win").removeClass("bg2");
                   $(".slider .win").removeClass("bg3");
                   $(".slider .win").removeClass("bg5");
                   $(".slider .win").removeClass("bg6");
                   $(".slider .win").addClass("bg4");
                   $(".content h1").fadeIn(100);
               },1000);
               
               
              $("#s1").prop('disabled',false);
              $("#s2").prop('disabled',false);
              $("#s3").prop('disabled',false);
              $("#s4").prop('disabled',true);
              $("#s5").prop('disabled',false);
              $("#s6").prop('disabled',false);  
           }
           if(i==4){
              
               $(".slider .win").fadeOut(1000).fadeIn(100);
                $(".content h1").fadeOut(1000);
        
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg1");
                   $(".slider .win").removeClass("bg2");
                   $(".slider .win").removeClass("bg3");
                   $(".slider .win").removeClass("bg4");
                   $(".slider .win").removeClass("bg6");
                   $(".slider .win").addClass("bg5");
                   $(".content h1").fadeIn(100);
               },1000);
               
              $("#s1").prop('disabled',false);
              $("#s2").prop('disabled',false);
              $("#s3").prop('disabled',false);
              $("#s4").prop('disabled',false);
              $("#s5").prop('disabled',true);
              $("#s6").prop('disabled',false); 
       }
            if(i==5){
               
               $(".slider .win").fadeOut(1000).fadeIn(100);
                  $(".content h1").fadeOut(1000);
            
               
               setTimeout(function(){
                   $(".slider .win").removeClass("bg1");
                   $(".slider .win").removeClass("bg2");
                   $(".slider .win").removeClass("bg3");
                   $(".slider .win").removeClass("bg4");
                   $(".slider .win").removeClass("bg5");
                   $(".slider .win").addClass("bg6");
                   $(".content h1").fadeIn(100);
               },1000);
              $("#s1").prop('disabled',false);
              $("#s2").prop('disabled',false);
              $("#s3").prop('disabled',false);
              $("#s4").prop('disabled',false);
              $("#s5").prop('disabled',false);
              $("#s6").prop('disabled',true); 
           }
       }); 
    });
  /*  
    var i=1;
    setInterval(function(){
       $("#s"+i).click();
       i++;
        
       if(i==7){
           i=1;
       }    
        
    },10000);
  */
    
 

    
});