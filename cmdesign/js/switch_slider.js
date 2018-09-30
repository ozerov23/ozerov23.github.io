$(document).ready(function(){
    
    /*header slider*/
    var count=1;
    var sw='on';
    var click=setInterval(function(){
          count++;
        $("#s"+count).click();
        $("#s"+count).prop("checked",true);
        if(count==6){
            count=0;
        }
        
    },8200);
    
    $(".content label").each(function(i){
       $(this).click(function(){
         if(i==0){
            count=1;
            clearInterval(click)
         }
           if(i==1){
            count=2;
            clearInterval(click)
         }
        if(i==2){
            count=3;
            clearInterval(click)
         }
           if(i==3){
            count=4;
            clearInterval(click)
         }
           if(i==4){
            count=5;
            clearInterval(click)
         }
           if(i==5){
            count=6;
            clearInterval(click)
         }
       });
    });

    
    /*portfolio slider*/
    
    /*#1*/
    
    
    
    
    
    
});