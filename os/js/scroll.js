$(document).ready(function(){
     
    var pos;
    
    $(".nav-menu li a").each(function(i){
        $(this).on("click",function(e){
            if(i==0){
                e.preventDefault();
                
                pos = $("#about").position().top;
                
                $("html,body").animate({
                    scrollTop:pos
                },1500);
            }
            if(i==1){
                e.preventDefault();
                
                pos = $("#serv").position().top;
                
                $("html,body").animate({
                    scrollTop:pos
                },1500);
            }
            if(i==2){
                e.preventDefault();
                
                pos = $("#contact").position().top;
                
                $("html,body").animate({
                    scrollTop:pos
                },1500);
            }
            
        });        
    });
    
    
    
    
    
  
});	
	
	
	