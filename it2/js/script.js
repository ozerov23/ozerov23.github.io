$(document).ready(function(){
	
	$("#sw1").on("click",function(){
        $("#sw2,#sw3").removeClass("active");
        $("#sw1").addClass("active");
        $(".w3,.w2").fadeOut(1000);
        setTimeout(function(){
            $(".w1").fadeIn(1000);
        },1000);
    });
    
    
    $("#sw2").on("click",function(){
        $(".w1,.w3").fadeOut(1000);
         $("#sw1,#sw3").removeClass("active");
        $("#sw2").addClass("active");
        setTimeout(function(){
            $(".w2").fadeIn(1000);
        },1000);
    });
    
    $("#sw3").on("click",function(){
        $("#sw2,#sw1").removeClass("active");
        $("#sw3").addClass("active");
        $(".w1,.w2").fadeOut(1000);
        setTimeout(function(){
            $(".w3").fadeIn(1000);
        },1000);
    });
    
    var count = 0;
    $(".c-o").each(function(){
    
        $(this).on("click",function(){
            count++;
            
            if($(this).text()=="+"){
                 $(this).parents('.q-block').next(".an").slideDown(1200);
                $(this).text("-")
                
            }else if($(this).text()=="-"){
                 $(this).parents('.q-block').next(".an").slideUp(1200);
                  $(this).text("+")
            }
            
        });
    });
    
    
    
    
    
    

    
    
    
    
    
        
                
      $('#fault .item button').each(function(){
          
      
        
        $(this).click(function(){
           $("#about-win").fadeIn(1500);
            $("#main-bg").fadeIn(1500); 
            var h1 = $(this).parent(".item").find("h1");
            console.log(h1.text());
           
            var h1_win =  $("#about-win").find("h1");
            
            h1_win.text(h1.text())
            
            var desc = $(this).prev(".hide").children("p.desc");
            
            
            var desc_win =  $("#about-win").find(".problem p");
            desc_win.text(desc.text());
            
            var field  = $(this).prev(".hide").find(".price-field").clone();
            console.log(field)
            
            var field_win = $("#about-win").find(".list");
            
            field_win.html(field);
            
            
        });
        
      });
        
    
    
    $("#about-win .ex").on("click",function(){
        
       $("#about-win").fadeOut(1500); 
       $("#main-bg").fadeOut(1500); 
        
        setTimeout(function(){
            $("#about-win .list").html('<p>ddddd</p>');
        },1500);
        
    });
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});