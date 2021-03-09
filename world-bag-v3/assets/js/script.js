$(document).ready(function(){	
	
    $('#banner').slick({
        dots:true
    });
	
	
	
	 $('#banner .slick-dots li button').text("");
	
	
	
    $("#slider-range").slider({
        min: 10,
        max: 500,
        animate: "slow",
        range: "min",  
        values: [10, 500],
        slide : function(event, ui) { 
            $("#price1").val(ui.values[ 0 ]); 
            $("#price2").val(ui.values[ 1 ]);
        }
    });
	
	
});	
	