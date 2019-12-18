$(document).ready(function(){
	
	
	
	$(".switch .wrraper .s").each(function(i){
       
        $(this).on("click",function(){
            if(i==0){
                $(".prod").fadeOut(1000);
                 $('.s .point').hide();
                
                setTimeout(function(){
                    $('.s1 .point').fadeIn(100);
                    $(".product1").fadeIn(1000);
                    
                },1000)
            }
            if(i==1){
                $(".prod").fadeOut(1000);
                 $('.s .point').hide();
                setTimeout(function(){
                    $('.s2 .point').fadeIn(100);
                    $(".product2").fadeIn(1000);
                    
                },1000)
            }
            if(i==2){
                $(".prod").fadeOut(1000);
                 $('.s .point').hide();
                setTimeout(function(){
                     $('.s3 .point').fadeIn(100);
                    $(".product3").fadeIn(1000);
                    
                },1000)
            }
            
            
            
        });
    });
	
	$("#catalog a").each(function(){
        var wr= $(this).children('p');
        $(this).hover(function(){
            wr.stop().animate({
                top:"-250px"
                
            },500);
            
            
        },function(){
             wr.animate({
                top:"0px"
                
            },500);
        });
        
        
    });
	
	
	
	
	
	
	
	
	
	
});