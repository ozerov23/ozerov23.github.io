$(document).ready(function(){
	/*
        $("aside ul.sub-menu").each(function(i){
                if($(this).is(".sub-menu")){
                    var el = $(this).parent(".menu-item");
                    el.children("a").addClass('amb').addClass("sub_menu");

                }

        });
*/


$("aside .menu-item-has-children>a").addClass('amb');


$(".main-1 .menu-item-has-children").hover(function(){

            $("nav .sub-menu").stop().slideDown(400);
            },function(){

                $("nav .sub-menu").stop().slideUp(400);

});

	var count=1;

   $("aside .menu-item-has-children>a").each(function( ){
    $(this).on("click",function(e){
         e.preventDefault();
    
           var n_elem = $(this).next(".sub-menu")
         
        
        
        
        if(n_elem.is(":visible")==false){
            
            n_elem.slideDown(500);
            $(this).addClass("amt");
            $(this).removeClass("amb");
            
        }else{
              $(this).addClass("amb");
              $(this).removeClass("amt");
              n_elem.slideUp(500);
        }
        
        
        
        
       });
       
       
   }); 
    
    
    $(".anim_list").each(function(){
        $(this).on("click",function(){
         
        var n_elem = $(this).next(".menu")
         
     
        
        
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
    
    



$(".category .item .card").each(function(){
    $(this).hover(function(){
        var s_el = $(this).next(".shadow");
        
        s_el.fadeIn(500)
        
    },function(){
         var s_el = $(this).next(".shadow");
        
        s_el.fadeOut(500)
        
    });
    
    
});





    
	
});