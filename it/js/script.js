$(document).ready(function(){
	
	
	
	$("#sw1").on("click",function(){
         $(".block2").fadeOut(1000);
        $("#sw1").addClass("active");
        $("#sw2").removeClass("active");
        setTimeout(function(){
             $(".block1").fadeIn(1000);
        },1000);
    
    });
	$("#sw2").on("click",function(){
         $(".block1").fadeOut(1000);
          $("#sw2").addClass("active");
        $("#sw1").removeClass("active");
         setTimeout(function(){
             $(".block2").fadeIn(1000);
        },1000);
    });
	
	
	$(".item button").each(function(){
        $(this).click(function(){
            
           $(this).prev(".des").slideDown(900);
            console.log('Yes');
        });
        
        
    });
	
	
});