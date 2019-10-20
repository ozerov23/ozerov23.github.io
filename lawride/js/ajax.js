$(function() {
  "use strict";


$("#form1").submit(function(e){
   e.preventDefault();
    console.log('yes');
   $.ajax({
       type:'POST',
       url:"index.php",
       data:{
           name:$("#winForm .name").val(),
           email:$("#winForm .email").val(),
           subject:$("#winForm .subject").val()
       },
       dataType: "html",
       success: function(){  
            $("#win").fadeOut(1500);
		    
           setTimeout(function(){
               $("#send").fadeIn(1500);  
           },500)
	   }
   });
    
    
});
    
    
    
    
});


