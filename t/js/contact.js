$(document).ready(function(){
	
	
	
	
                
   $('#ff').validate({
       
        rules: {
                name: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                }
            }
   });             

	
});