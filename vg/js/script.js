$(document).ready(function() { 
	var pos;
	var pos2;
	  $(".menu1 li a").each(function(i){
           $(this).click(function(e){
               e.preventDefault();

               if(i==0){
                 pos = $("#s-p").offset().top;
                   $("html,body").animate({
                       scrollTop:pos
                   },1500);
               }
               if(i==1){
                 pos = $("#clients").offset().top;
                   $("html,body").animate({
                       scrollTop:pos
                   },1500);
               }
               if(i==2){
                 pos = $("#comments").offset().top;
                   $("html,body").animate({
                       scrollTop:pos
                   },1500);
               }
               if(i==3){
                 pos = $("#form").offset().top;
                   $("html,body").animate({
                       scrollTop:pos
                   },1500);
               }
               
               
           });
       });
   $(".menu2 li a").each(function(i){
           $(this).click(function(e){
               e.preventDefault();

               if(i==0){
                 pos2 = $("#s-p").offset().top;
                   $("html,body").animate({
                       scrollTop:pos2
                   },1500);
               }
               if(i==1){
                 pos2 = $("#clients").offset().top;
                   $("html,body").animate({
                       scrollTop:pos2
                   },1500);
               }
               if(i==2){
                 pos2 = $("#comments").offset().top;
                   $("html,body").animate({
                       scrollTop:pos2
                   },1500);
               }
               if(i==3){
                 pos2 = $("#form").offset().top;
                   $("html,body").animate({
                       scrollTop:pos2
                   },1500);
               }
               
               
           });
       });

	
    $(".btn").click(function(){
        $(".link-list").slideToggle(1500);
    });
    
    
    
    
    
       
});