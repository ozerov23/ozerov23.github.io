$(document).ready(function(){
function del_win(){
    var width=$(window).width(); 
    if(width<=803){
       $(".background").remove();
       
   }
}
 del_win();   
    
$(window).resize(function(){

   var width=$(this).width(); 
    
   if(width<=803){
       $(".background").remove();
       
   }
    
});
    
})