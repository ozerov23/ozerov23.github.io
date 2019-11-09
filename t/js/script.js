$(document).ready(function(){
	
	var count=1;

   $(".sub_menu").each(function(){
    $(this).on("click",function(e){
         e.preventDefault();
    
           var n_elem = $(this).next(".list-sub")
         
        
        
        
        if(n_elem.is(":visible")==false){
            
            n_elem.slideDown(500);
            $(this).addClass("amb");
            $(this).removeClass("amt");
            
        }else{
              $(this).addClass("amt");
              $(this).removeClass("amb");
              n_elem.slideUp(500);
        }
        
        
        
        
       });
       
       
   }); 
    
    
    $(".anim_list").each(function(){
        $(this).on("click",function(){
         
        var n_elem = $(this).next(".list")
         
     
        
        
        if(n_elem.is(":visible")==false){
            
            n_elem.slideDown(500);
            $(this).addClass("ahb");
            $(this).removeClass("aht");
            
        }else{
              $(this).addClass("aht");
              $(this).removeClass("ahb");
              n_elem.slideUp(500);
        }
        
        
       });
       
        
        
    });
    
    
    $(".btn").on("click",function(){
        
       $(".main-2").slideToggle(500) 
    });
    
    
    
	
});