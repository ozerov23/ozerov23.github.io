$(document).ready(function(){

    
        var i=0;
    
    
    
      /*$(this).attr("disabled",true);*/
    

$(".switch span").each(function(i){
    $(this).click(function(){
        if(i==0){
            $(".switch span").removeClass("click");
            $(this).addClass("click");
            
            $(".comment").fadeOut(1000);
            setTimeout(function(){
                 $(".c1").fadeIn(1000);
            },1000);
        }
         if(i==1){
            $(".switch span").removeClass("click");
            $(this).addClass("click");
             
            $(".comment").fadeOut(1000);
            setTimeout(function(){
                 $(".c2").fadeIn(1000);
            },1000);
        }
         if(i==2){
            $(".switch span").removeClass("click");
            $(this).addClass("click");
             
            $(".comment").fadeOut(1000);
            setTimeout(function(){
                 $(".c3").fadeIn(1000);
            },1000);
        }
         if(i==3){
            $(".switch span").removeClass("click");
            $(this).addClass("click");
             
            $(".comment").fadeOut(1000);
            setTimeout(function(){
                 $(".c4").fadeIn(1000);
            },1000);
        }
        
    });     
});    
    
    
    
    
});