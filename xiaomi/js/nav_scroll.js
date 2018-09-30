$(document).ready(function(){ 
    
   
	$(window).scroll(function(){
        var scroll=$(this).scrollTop();
             console.log(scroll)
             
        if(scroll>0 && scroll<200){
             $(".link1").addClass('bor');
             $(".link1").removeClass('h_b');
             
            
            $(".link2").removeClass('bor');
            $(".link2").addClass('h_b');
            
            $(".link3").removeClass('bor');
            $(".link3").addClass('h_b');
            
            $(".link4").removeClass('bor');
            $(".link4").addClass('h_b');
        }
        if(scroll>200 && scroll<1837){
            $(".link2").addClass('bor');
             $(".link2").removeClass('h_b');
            
            
             $(".link1").removeClass('bor');
             $(".link1").addClass('h_b');
            
             $(".link3").removeClass('bor');
             $(".link3").addClass('h_b');
            
             $(".link4").removeClass('bor');
             $(".link4").addClass('h_b');
        }
        if(scroll>2885 && scroll<=3500){
            $(".link3").addClass('bor');
             $(".link3").removeClass('h_b');
            
            
             $(".link1").removeClass('bor');
             $(".link1").addClass('h_b');
            
             $(".link2").removeClass('bor');
             $(".link2").addClass('h_b');
            
             $(".link4").removeClass('bor');
             $(".link4").addClass('h_b');
        }
        if(scroll>3500 && scroll<=4000){
            $(".link4").addClass('bor');
             $(".link4").removeClass('h_b');
            
             $(".link1").removeClass('bor');
             $(".link1").addClass('h_b');
            
             $(".link2").removeClass('bor');
             $(".link2").addClass('h_b');
            
             $(".link3").removeClass('bor');
             $(".link3").addClass('h_b');
             
             $(".link5").removeClass('bor');
             $(".link5").addClass('h_b');
        }
        if(scroll>4000){
            $(".link5").addClass('bor');
             $(".link5").removeClass('h_b');
            
             $(".link1").removeClass('bor');
             $(".link1").addClass('h_b');
            
             $(".link2").removeClass('bor');
             $(".link2").addClass('h_b');
            
             $(".link3").removeClass('bor');
             $(".link3").addClass('h_b');
            
             $(".link4").removeClass('bor');
             $(".link4").addClass('h_b');
             console.log("Link5");
            
        }
    });
    
    
    
    
    
    
    
});