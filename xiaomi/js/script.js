$(document).ready(function() { 
	
	
	$(".button img").click(function(){
     
		$('.menu2').slideToggle(1000);
		
	});
	
	
	
	$(".order").click(function(){
          
        var height=$(document).height();
      $("body").append("<div class='mbg'></div>");
        $("#modal").fadeIn(1500);
        $('.mbg').height(height);
       
       
    });
	$(".cancel").click(function(){
          
       $("#modal").fadeOut(1500);
        $('.mbg').remove();
       
       
    });
	
	
	$('#link1').click(function(){
       $(".p1 ul").slideToggle(1200); 
    });
	
	$('#link2').click(function(){
       $(".p2 ul").slideToggle(1200); 
    });
    
    $('#link3').click(function(){
       $(".p3 ul").slideToggle(1200); 
    }); 
    
    $('#link4').click(function(){
       $(".p4 ul").slideToggle(1200); 
    });
	
    
    

    
    
       
});