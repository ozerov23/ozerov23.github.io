$(document).ready(function(){
    
   
    
    
    $(".m-b").on('click',function(){
        $("#move-win").animate({
            left:"0px"
        },1000);
    });
    
    
    
     $(".ex").on('click',function(){
        $("#move-win").animate({
            left:"-280px"
        },1000);
    });
    
    
    $(window).resize(function(){
        var width = $(this).width();
        
        console.log(width);
        
        
        if(width>=974){
            
            $("#move-win").css({
                
                left:"-280px"
            });
            
        }
    });
    
    
    
    $(".switch span").each(function(i){
        $(this).on('click',function(){
           if(i==0){
               $(".switch span").removeClass('sw_col');
               $(this).addClass('sw_col');
               $(".content2").fadeOut(1000);
               setTimeout(function(){
                   $(".content1").fadeIn(1000);
               },1000);
           } 
           if(i==1){
               $(".switch span").removeClass('sw_col');
               $(this).addClass('sw_col');
               $(".content1").fadeOut(1000);
               setTimeout(function(){
                   $(".content2").fadeIn(1000);
               },1000);
           }    
        });
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});