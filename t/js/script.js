$(document).ready(function(){
	
	$("#ff").on("submit",function(e){
        console.log('work');
        e.preventDefault();
        $.ajax({
            url:"send.php",
            type:"POST",
            data:{
                name:$("#name").val()
            },
            error:function(){
             console.log("Error");
            },
            success:function(res){
                
                console.log(res);
            }
        })
    });
	

	
});