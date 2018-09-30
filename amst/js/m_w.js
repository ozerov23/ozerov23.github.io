$(document).ready(function(){

    
    $(".b").click(function(e){
        
    e.preventDefault();
       $(".b").each(function(i){
           if(i==0){
               $("#modal_window").fadeIn(1500);
               $("nav").css({
                  display:"none" 
               });
                 var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);   
           }
           if(i==1){
                $("#modal_window").fadeIn(1500);
                 var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);   
               
           }
           if(i==2){
               $("#modal_window").fadeIn(1500);
                 var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);
               
           }
           if(i==3){
               $("#modal_window").fadeIn(1500);
                 var docHeight = $(document).height();
               $("body").append("<div id='overlay'></div>");
               $("#overlay")
                  .height(docHeight);
           }
       });
});
    $(".cancel").click(function(){
         $("#overlay").remove();
        $("#modal_window").fadeOut(1500);
        $("nav").css({
                  display:"block" 
               });
    });
    
});