$(document).ready(function(){
	var p = [];
    var count;
    var num = -1
		
	
	$("#portfolio .item img").each(function(i){
		/*if(i==0){
             
             p[i] = $(this).attr('src');
         }else if(i!=0){
              p[i] = $(this).attr('src');
         }*/
		
       var path = $(this).attr("src");
       $(this).click(function(){
          var path = $(this).attr("src");
          $('#win .image img').attr('src',path); 
		   
		  var height = $('#win .image img').height();	
	
		  $('#win .image').css({
				height: (height-700)+"px"
			});
		  
          count = i;
           
       });  
		
		
	});
   
});