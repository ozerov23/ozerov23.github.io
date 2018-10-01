$(document).ready(function(){
   function s_b(){
       var s=$(window).scrollTop();
      
        if(s<585){
                $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                     $(this).removeClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });                    

           
        }
        if(s>585){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).addClass("col");
                }
                if(i==1){
                     $(this).removeClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
            
            
        }
        if(s>1990){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                     $(this).addClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
       if(s>3920){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).addClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
        
        
        if(s>5295 && s<7841){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
        
        if(s>7841){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).removeClass("col");
                }
                if(i==3){
                     $(this).addClass("col");
                }
            });
        }
   }
  s_b();
    
    
    $(window).scroll(function(){
       var s=$(this).scrollTop();
     
        if(s<585){
                $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                     $(this).removeClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });                    

           
        }
        if(s>585){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).addClass("col");
                }
                if(i==1){
                     $(this).removeClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
            
            
        }
        if(s>1990){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                     $(this).addClass("col");
                }
                if(i==2){
                     $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
       if(s>3920){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).addClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
        
        
        if(s>5295 && s<7841){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).removeClass("col");
                }
                if(i==3){
                     $(this).removeClass("col");
                }
            });
        }
        
        if(s>7841){
            $(".menu1 li a").each(function(i){
       
                if(i==0){
                    $(this).removeClass("col");
                }
                if(i==1){
                    $(this).removeClass("col");
                }
                if(i==2){
                    $(this).removeClass("col");
                }
                if(i==3){
                     $(this).addClass("col");
                }
            });
        }
        
        
        
        
        
        
        
    });
    
    
    
    
    
});
