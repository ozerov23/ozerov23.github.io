$(document).ready(function() { 
	
	
	
    
    
    var len_items=$("#reviews .item").length;
    
   $('.line').css({
       width:len_items*100+"%"
   })
    
   
    $('.line .item').css({
        width:100/len_items+"%"
    });
    
    
    
	$(".s1").on("click",function(){
        var i1=0;
     $(".line").animate({
        left:-i1*100+"%"
     });
    
    });
    $(".s2").on("click",function(){
        var i2=1;
     $(".line").animate({
         left:-i2*100+"%"
     }); 
    });
    $(".s3").on("click",function(){
        var i3=2;
     $(".line").animate({
         left:-i3*100+"%"
     }); 
    });
    
	$(".s1").click();
    
    
    
    
        $(".link1").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1100);
                return false;
        });
        
       $(".link2").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1100);
                return false;
        });
    
    $(".link3").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1100);
                return false;
        });
	$(".link4").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1100);
                return false;
        });
    $(".link5").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1100);
                return false;
        });
});