$(document).ready(function(){
    
    var ind=true;
    var i = 1;
    var w1 = $(window).width();
   
    function i_display(){
    
      var w = $(window).width();
      var h = $(window).height();
       
        if(w === 1024 && h ===1366){
            
             $("#pos1").addClass("mL");
            
        }
        

    }
    
    i_display();
    
    
$(window).scroll(function(){
           var sc = $(this).scrollTop();
           
            if(ind){
                
                if(sc>=550){
                   
                    if(w1>833){
                        $("#pos1").addClass("mL");
                         
                        
                    }
                    
                }
                 if(sc>=800){
                    if(w1>833){
                        $("#pos2").addClass("mR");
                      
                        
                    }  
                    
                    
                }
                if(sc>=1000){
                    if(w1>833){
                        $("#pos3").addClass("mL");
                       
                        
                    } 
                    
                    
                }
                
                
                
            }
    
      
  });   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
$(window).resize(function(){
   
    var res_wid = $(window).width();
   
   if(res_wid>833){
       ind=true;
       w1=res_wid;
        
       $("#pos1").addClass("mL");
       $("#pos2").addClass("mR");
       $("#pos3").addClass("mL");
       
   }
    if(res_wid<833){
         ind=false;
        $("#pos1").removeClass("mL");
        $("#pos2").removeClass("mR");
        $("#pos3").removeClass("mL");
    } 
    
    
    
    
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
});