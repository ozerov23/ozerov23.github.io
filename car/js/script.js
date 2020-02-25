$(document).ready(function(){
    
    
    $("#btn,.req,.send").click(function(){
		$("#main-win").fadeIn(1000);
		setTimeout(function(){
			$("#win-modal").fadeIn(1000);
			
		},1000)
	});
     $(".ex").click(function(){
		$("#win-modal").fadeOut(1000);
		setTimeout(function(){
			$("#main-win").fadeOut(1000);
			
		},1000)
	});
	
    $(".nav-pag .s").each(function(i){        
        
        $(this).click(function(){
             
            if(i==0){
                
                 $(".nav-pag .s").removeClass('point');
                $(this).addClass('point');
                $(".c2").fadeOut(1000);
                $(".c3").fadeOut(1000);
                $(".c4").fadeOut(1000);
                
                setTimeout(function(){
                    $(".c1").fadeIn(500);
                },1000);
            }
            if(i==1){
                 $(".nav-pag .s").removeClass('point');
                $(this).addClass('point');
                $(".c1").fadeOut(1000);
                $(".c3").fadeOut(1000);
                $(".c4").fadeOut(1000);
        
                setTimeout(function(){
                    $(".c2").fadeIn(500);
                },1000);    
            }
            if(i==2){
                 $(".nav-pag .s").removeClass('point');
                $(this).addClass('point');
                $(".c1").fadeOut(1000);
                $(".c2").fadeOut(1000);
                $(".c4").fadeOut(1000);
        
                setTimeout(function(){
                    $(".c3").fadeIn(500);
                },1000);
            }
            if(i==3){
                 $(".nav-pag .s").removeClass('point');
                $(this).addClass('point');
                $(".c1").fadeOut(1000);
                $(".c2").fadeOut(1000);
                $(".c3").fadeOut(1000);
        
                setTimeout(function(){
                    $(".c4").fadeIn(500);
                },1000);
            }
            
            
        });
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});