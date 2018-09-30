$(document).ready(function() { 
	

	
    var len_items=$("#reviews .item").length;
    
   $('.line').css({
       width:len_items*100+"%"
   });
    
   
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
	
	
});