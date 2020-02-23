$(document).ready(function(){
	
	$("#sw1").on("click",function(){
        $("#sw2,#sw3").removeClass("active");
        $("#sw1").addClass("active");
        $(".w3,.w2").fadeOut(1000);
        setTimeout(function(){
            $(".w1").fadeIn(1000);
        },1000);
    });
    
    
    $("#sw2").on("click",function(){
        $(".w1,.w3").fadeOut(1000);
         $("#sw1,#sw3").removeClass("active");
        $("#sw2").addClass("active");
        setTimeout(function(){
            $(".w2").fadeIn(1000);
        },1000);
    });
    
    $("#sw3").on("click",function(){
        $("#sw2,#sw1").removeClass("active");
        $("#sw3").addClass("active");
        $(".w1,.w2").fadeOut(1000);
        setTimeout(function(){
            $(".w3").fadeIn(1000);
        },1000);
    });
    
    
    $(".c-o").each(function(){
    
        $(this).on("click",function(){
            
            $(".q-a .an").slideUp(1200);
            $(this).parents('.q-block').next(".an").slideToggle(1200);
        });
    });
});