$(document).ready(function(){

			$(".button").on("click",function(){
				
				$("#menu").animate({
					left:"0px"
				},1000);
				
			});
			$(".ex").on("click",function(){
				
				$("#menu").animate({
					left:"-250px"
				},1000);
				
			});
	
	
	$(window).resize(function(){
		
		var width = $(this).width();
		
		
		
		
		if(width>=1009){
			
			$("#menu").css({
				
				left:"-250px"
			});
			
			
			
		}
		
		
	});
	
	
	
	function win_width(){
		
		var width = $(window).width();
		
		console.log(width);	
		
		if(width>=1009){
			
			$("#menu").css({
				
				left:"-250px"
			});
		
		
	}
	}
	win_width();
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});