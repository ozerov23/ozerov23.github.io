$(document).ready(function(){
    var i=0;
    var j=0;
    
    $(".show1").click(function(){
      
        if(i==0){
            $(".list1").slideDown(1500);
            setTimeout(function(){
                 $(".show1").text("Закрыть");
            },1500);
            i++;
        }else if(i==1){
            i=0;
            $(".list1").slideUp(1500);
            setTimeout(function(){
                 $(".show1").text("Показать");
            },1500);
        }
    });
    $(".show2").click(function(){
         if(j==0){
               $(".list2").slideDown(1500);
            setTimeout(function(){
                 $(".show2").text("Закрыть");
            },1500); 
            j++;
        }else if(j==1){
            j=0;
           $(".list2").slideUp(1500);
           setTimeout(function(){
                 $(".show2").text("Показать");
            },1500); 
        }
        
    });
    
    
    
    
    
    var q1=$("#questiont1").val();
    var q2=$("#questiont2").val();
    
    
    $("#next2").click(function(){
        
       console.log(q1+"------"+q2);
       alert('eee');
    });
    
    
    
    
    
    
    
    
    
    
});