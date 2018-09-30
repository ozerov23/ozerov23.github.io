$(document).ready(function() { 
    
    
    
    
	

	
   $(".p1 .images .img").each(function(i){
        if(i==0){
             $(this).addClass('bor_img');
        }
       $(this).click(function(){
          if(i==0){
                $(".p1 .win img").attr("src","img/product1/p1-1.jpg");
                $(".p1 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==1){
                $(".p1 .win img").attr("src","img/product1/p1-2.jpg");
                 $(".p1 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==2){
                $(".p1 .win img").attr("src","img/product1/p1-3.jpg");
                $(".p1 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==3){
                $(".p1 .win img").attr("src","img/product1/p1-4.jpg");
                $(".p1 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
       }); 
   });
    
   $(".p2 .images .img").each(function(i){
          if(i==0){
             $(this).addClass('bor_img');
        }
       $(this).click(function(){
          if(i==0){
                $(".p2 .win img").attr("src","img/product2/p2-1.jpg");
                $(".p2 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==1){
                $(".p2 .win img").attr("src","img/product2/p2-2.jpg");
                $(".p2 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==2){
                $(".p2 .win img").attr("src","img/product2/p2-3.jpg");
                $(".p2 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
       });
   });
	
    $(".p3 .images .img").each(function(i){
           if(i==0){
             $(this).addClass('bor_img');
        }
       $(this).click(function(){
          if(i==0){
                $(".p3 .win img").attr("src","img/product3/p3-1.jpg");
                $(".p3 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==1){
                $(".p3 .win img").attr("src","img/product3/p3-2.jpg");
                $(".p3 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
       });
   });
   
     
    $(".p4 .images .img").each(function(i){
           if(i==0){
             $(this).addClass('bor_img');
        }
       $(this).click(function(){
          if(i==0){
                $(".p4 .win img").attr("src","img/product4/p4-1.jpg");
                $(".p4 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==1){
                $(".p4 .win img").attr("src","img/product4/p4-2.jpg");
                $(".p4 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
           if(i==2){
                $(".p4 .win img").attr("src","img/product4/p4-3.jpg");
                $(".p4 .images .img").removeClass('bor_img');
                $(this).addClass('bor_img');
          }
       });
   });


    
    
});