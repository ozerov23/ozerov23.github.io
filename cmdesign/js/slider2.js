$(document).ready(function(){
   
  /*item1*/
  $(".n1 input").each(function(i){
      $(this).click(function(){
         if(i==0){
             $('.slider1>.win>div').fadeOut(1000).fadeIn();
             
             setTimeout(function(){
                 $('.slider1>.win>div').removeClass("img1-1");
                 $('.slider1>.win>div').removeClass("img1-2");
                 $('.slider1>.win>div').addClass("img1");

             },1000);
             
             $(this).prop("disabled",true);
             $("#sl2").prop("disabled",false);
             $("#sl3").prop("disabled",false);
             
         }
        if(i==1){
           $('.slider1>.win>div').fadeOut(1000).fadeIn();
             
             setTimeout(function(){
                 $('.slider1>.win>div').removeClass("img1");
                 $('.slider1>.win>div').removeClass("img1-2");
                 $('.slider1>.win>div').addClass("img1-1");

             },1000);
             
             $(this).prop("disabled",true);
             $("#sl1").prop("disabled",false);
             $("#sl3").prop("disabled",false);
         
        }
        if(i==2){
             $('.slider1>.win>div').fadeOut(1000).fadeIn();
             
             setTimeout(function(){
                 $('.slider1>.win>div').removeClass("img1");
                 $('.slider1>.win>div').removeClass("img1-1");
                 $('.slider1>.win>div').addClass("img1-2");

             },1000);
             
             $(this).prop("disabled",true);
             $("#sl1").prop("disabled",false);
             $("#sl2").prop("disabled",false);
        }
      });
  });
 
    
    
    
    
    
    
    
    
 /*item2*/   
 $(".n2 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider2>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider2>.win>div").removeClass('img2-1');     
                 $(".slider2>.win>div").removeClass('img2-2');   
                 $(".slider2>.win>div").addClass("img2");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl5").prop("disabled",false);
             $("#sl6").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider2>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider2>.win>div").removeClass('img2-2');     
                 $(".slider2>.win>div").removeClass('img2');   
                 $(".slider2>.win>div").addClass("img2-1");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl4").prop("disabled",false);
             $("#sl6").prop("disabled",false);  
              
          }
          if(i==2){
                $(".slider2>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider2>.win>div").removeClass('img2-1');     
                 $(".slider2>.win>div").removeClass('img2');   
                 $(".slider2>.win>div").addClass("img2-2");
             },1000);   
              
             $(this).prop("disabled",true);
             $("#sl4").prop("disabled",false);
             $("#sl5").prop("disabled",false);  
          }
      }); 
  });   
    
    
    
 /*item3*/    
 $(".n3 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider3>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider3>.win>div").removeClass('img3-1');     
                 $(".slider3>.win>div").removeClass('img3-2');   
                 $(".slider3>.win>div").addClass("img3");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl8").prop("disabled",false);
             $("#sl9").prop("disabled",false);   
              
          }
          if(i==1){
        $(".slider3>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider3>.win>div").removeClass('img3-2');     
                 $(".slider3>.win>div").removeClass('img3');   
                 $(".slider3>.win>div").addClass("img3-1");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl7").prop("disabled",false);
             $("#sl9").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider3>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider3>.win>div").removeClass('img3-1');     
                 $(".slider3>.win>div").removeClass('img3');   
                 $(".slider3>.win>div").addClass("img3-2");
             },1000);  
              
               $(this).prop("disabled",true);
             $("#sl7").prop("disabled",false);
             $("#sl8").prop("disabled",false);  
          }
      }); 
  });   
    
    
  /*item4*/   
  $(".n4 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider4>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider4>.win>div").removeClass('img4-1');     
                 $(".slider4>.win>div").removeClass('img4-2');   
                 $(".slider4>.win>div").addClass("img4");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl11").prop("disabled",false);
             $("#sl12").prop("disabled",false);  
              
          }
          if(i==1){
        $(".slider4>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider4>.win>div").removeClass('img4-2');     
                 $(".slider4>.win>div").removeClass('img4');   
                 $(".slider4>.win>div").addClass("img4-1");
             },1000); 
              
              $(this).prop("disabled",true);
             $("#sl10").prop("disabled",false);
             $("#sl12").prop("disabled",false);  
          }
          if(i==2){
               $(".slider4>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider4>.win>div").removeClass('img4-1');     
                 $(".slider4>.win>div").removeClass('img4');   
                 $(".slider4>.win>div").addClass("img4-2");
             },1000);  
              
             $(this).prop("disabled",true);
             $("#sl10").prop("disabled",false);
             $("#sl11").prop("disabled",false);  
          }
      }); 
  });    
    
    
/*item5*/ 
 $(".n5 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider5>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider5>.win>div").removeClass('img5-1');     
                 $(".slider5>.win>div").removeClass('img5-2');   
                 $(".slider5>.win>div").addClass("img5");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl14").prop("disabled",false);
             $("#sl15").prop("disabled",false);  
              
          }
          if(i==1){
        $(".slider5>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider5>.win>div").removeClass('img5-2');     
                 $(".slider5>.win>div").removeClass('img5');   
                 $(".slider5>.win>div").addClass("img5-1");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl13").prop("disabled",false);
             $("#sl15").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider5>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider5>.win>div").removeClass('img5-1');     
                 $(".slider5>.win>div").removeClass('img5');   
                 $(".slider5>.win>div").addClass("img5-2");
             },1000);  
              
              $(this).prop("disabled",true);
             $("#sl13").prop("disabled",false);
             $("#sl14").prop("disabled",false);  
              
              
          }
      }); 
  });       
    
    
 /*item6*/   
 $(".n6 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider6>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider6>.win>div").removeClass('img6-1');     
                 $(".slider6>.win>div").removeClass('img6-2');   
                 $(".slider6>.win>div").addClass("img6");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl17").prop("disabled",false);
             $("#sl18").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider6>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider6>.win>div").removeClass('img6-2');    
                 $(".slider6>.win>div").removeClass('img6');   
                 $(".slider6>.win>div").addClass("img6-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl16").prop("disabled",false);
             $("#sl18").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider6>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider6>.win>div").removeClass('img6-1');     
                 $(".slider6>.win>div").removeClass('img6');   
                 $(".slider6>.win>div").addClass("img6-2");
             },1000);  
              
                 $(this).prop("disabled",true);
             $("#sl16").prop("disabled",false);
             $("#sl17").prop("disabled",false);  
          }
      }); 
  });     
    
    
/*item7*/    
 $(".n7 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider7>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider7>.win>div").removeClass('img7-1');     
                 $(".slider7>.win>div").removeClass('img7-2');   
                 $(".slider7>.win>div").addClass("img7");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl20").prop("disabled",false);
             $("#sl21").prop("disabled",false);  
              
          }
          if(i==1){
        $(".slider7>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider7>.win>div").removeClass('img7-2');     
                 $(".slider7>.win>div").removeClass('img7');   
                 $(".slider7>.win>div").addClass("img7-1");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl19").prop("disabled",false);
             $("#sl21").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider7>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider7>.win>div").removeClass('img7-1');     
                 $(".slider7>.win>div").removeClass('img7');   
                 $(".slider7>.win>div").addClass("img7-2");
             },1000);  
              
               $(this).prop("disabled",true);
             $("#sl19").prop("disabled",false);
             $("#sl20").prop("disabled",false);  
          }
      }); 
  });     
    
    /*item8*/    
   $(".n8 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider8>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider8>.win>div").removeClass('img8-1');     
                 $(".slider8>.win>div").removeClass('img8-2');   
                 $(".slider8>.win>div").addClass("img8");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl23").prop("disabled",false);
             $("#sl24").prop("disabled",false);   
              
          }
          if(i==1){
        $(".slider8>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider8>.win>div").removeClass('img8-2');     
                 $(".slider8>.win>div").removeClass('img8');   
                 $(".slider8>.win>div").addClass("img8-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl22").prop("disabled",false);
             $("#sl24").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider8>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider8>.win>div").removeClass('img8-1');     
                 $(".slider8>.win>div").removeClass('img8');   
                 $(".slider8>.win>div").addClass("img8-2");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl22").prop("disabled",false);
             $("#sl23").prop("disabled",false);  
              
          }
      }); 
  });    
    
    
    
 /*item9*/       
 $(".n9 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider9>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider9>.win>div").removeClass('img9-1');     
                 $(".slider9>.win>div").removeClass('img9-2');   
                 $(".slider9>.win>div").addClass("img9");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl26").prop("disabled",false);
             $("#sl27").prop("disabled",false);   
              
          }
          if(i==1){
        $(".slider9>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider9>.win>div").removeClass('img9-2');     
                 $(".slider9>.win>div").removeClass('img9');   
                 $(".slider9>.win>div").addClass("img9-1");
                 
             },1000); 
              $(this).prop("disabled",true);
             $("#sl25").prop("disabled",false);
             $("#sl27").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider9>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider9>.win>div").removeClass('img8-1');     
                 $(".slider9>.win>div").removeClass('img9');   
                 $(".slider9>.win>div").addClass("img9-2");
             },1000);  
               $(this).prop("disabled",true);
             $("#sl25").prop("disabled",false);
             $("#sl26").prop("disabled",false); 
          }
      }); 
  });       
    
 /*item10*/     
 $(".n10 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider10>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider10>.win>div").removeClass('img10-1');     
                 $(".slider10>.win>div").removeClass('img10-2');   
                 $(".slider10>.win>div").addClass("img10");
             },1000); 
              
              $(this).prop("disabled",true);
             $("#sl29").prop("disabled",false);
             $("#sl30").prop("disabled",false); 
          }
          if(i==1){
        $(".slider10>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider10>.win>div").removeClass('img10-2');     
                 $(".slider10>.win>div").removeClass('img10');   
                 $(".slider10>.win>div").addClass("img10-1");
             },1000); 
              
             $(this).prop("disabled",true);
             $("#sl28").prop("disabled",false);
             $("#sl30").prop("disabled",false);  
          }
          if(i==2){
               $(".slider10>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider10>.win>div").removeClass('img10-1');     
                 $(".slider10>.win>div").removeClass('img10');   
                 $(".slider10>.win>div").addClass("img10-2");
             },1000);  
              
              
              $(this).prop("disabled",true);
             $("#sl28").prop("disabled",false);
             $("#sl29").prop("disabled",false);
          }
      }); 
  });       
   /*item11*/  
  $(".n11 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider11>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider11>.win>div").removeClass('img11-1');     
                 $(".slider11>.win>div").removeClass('img11-2');   
                 $(".slider11>.win>div").addClass("img11");
             },1000); 
              
               $(this).prop("disabled",true);
             $("#sl32").prop("disabled",false);
             $("#sl33").prop("disabled",false); 
          }
          if(i==1){
        $(".slider11>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider11>.win>div").removeClass('img11-2');     
                 $(".slider11>.win>div").removeClass('img11');   
                 $(".slider11>.win>div").addClass("img11-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl31").prop("disabled",false);
             $("#sl33").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider11>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider11>.win>div").removeClass('img11-1');     
                 $(".slider11>.win>div").removeClass('img11');   
                 $(".slider11>.win>div").addClass("img11-2");
             },1000);  
              
                $(this).prop("disabled",true);
             $("#sl31").prop("disabled",false);
             $("#sl32").prop("disabled",false); 
          }
      }); 
  });        
        
  /*item12*/    
  $(".n12 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider12>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider12>.win>div").removeClass('img12-1');     
                 $(".slider12>.win>div").removeClass('img12-2');   
                 $(".slider12>.win>div").addClass("img12");
             },1000); 
              
             $(this).prop("disabled",true);
             $("#sl35").prop("disabled",false);
             $("#sl36").prop("disabled",false);  
              
          }
          if(i==1){
        $(".slider12>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider12>.win>div").removeClass('img12-2');     
                 $(".slider12>.win>div").removeClass('img12');   
                 $(".slider12>.win>div").addClass("img12-1");
             },1000); 
              
             $(this).prop("disabled",true);
             $("#sl34").prop("disabled",false);
             $("#sl36").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider12>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider12>.win>div").removeClass('img12-1');     
                 $(".slider12>.win>div").removeClass('img12');   
                 $(".slider12>.win>div").addClass("img12-2");
             },1000);  
              
             $(this).prop("disabled",true);
             $("#sl34").prop("disabled",false);
             $("#sl35").prop("disabled",false);  
          }
      }); 
  });    
   
 /*item13*/        
  $(".n13 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider13>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider13>.win>div").removeClass('img13-1');     
                 $(".slider13>.win>div").removeClass('img13-2');   
                 $(".slider13>.win>div").addClass("img13");
             },1000); 
              
              
             $(this).prop("disabled",true);
             $("#sl38").prop("disabled",false);
             $("#sl39").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider13>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider13>.win>div").removeClass('img13-2');     
                 $(".slider13>.win>div").removeClass('img13');   
                 $(".slider13>.win>div").addClass("img13-1");
             },1000); 
              
               
             $(this).prop("disabled",true);
             $("#sl37").prop("disabled",false);
             $("#sl39").prop("disabled",false);   
              
          }
          if(i==2){
               $(".slider13>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider13>.win>div").removeClass('img13-1');     
                 $(".slider13>.win>div").removeClass('img13');   
                 $(".slider13>.win>div").addClass("img13-2");
             },1000);  
              
               
             $(this).prop("disabled",true);
             $("#sl37").prop("disabled",false);
             $("#sl38").prop("disabled",false);  
          }
      }); 
  });      
 
/*item14*/
$(".n14 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider14>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider14>.win>div").removeClass('img14-1');     
                 $(".slider14>.win>div").removeClass('img14-2');   
                 $(".slider14>.win>div").addClass("img14");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl41").prop("disabled",false);
             $("#sl42").prop("disabled",false);  
              
          }
          if(i==1){
        $(".slider14>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider14>.win>div").removeClass('img14-2');     
                 $(".slider14>.win>div").removeClass('img14');   
                 $(".slider14>.win>div").addClass("img14-1");
             },1000); 
              
             $(this).prop("disabled",true);
             $("#sl40").prop("disabled",false);
             $("#sl42").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider14>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider14>.win>div").removeClass('img14-1');     
                 $(".slider14>.win>div").removeClass('img14');   
                 $(".slider14>.win>div").addClass("img14-2");
             },1000);  
              
               $(this).prop("disabled",true);
             $("#sl40").prop("disabled",false);
             $("#sl41").prop("disabled",false);
          }
      }); 
  });    
 
 /*item15*/   
 $(".n15 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider15>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider15>.win>div").removeClass('img15-1');     
                 $(".slider15>.win>div").removeClass('img15-2');   
                 $(".slider15>.win>div").addClass("img15");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl44").prop("disabled",false);
             $("#sl45").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider15>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider15>.win>div").removeClass('img15-2');     
                 $(".slider15>.win>div").removeClass('img15');   
                 $(".slider15>.win>div").addClass("img15-1");
             },1000); 
              
              $(this).prop("disabled",true);
             $("#sl43").prop("disabled",false);
             $("#sl45").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider15>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider15>.win>div").removeClass('img15-1');     
                 $(".slider15>.win>div").removeClass('img15');   
                 $(".slider15>.win>div").addClass("img15-2");
             },1000);  
              
             $(this).prop("disabled",true);
             $("#sl43").prop("disabled",false);
             $("#sl44").prop("disabled",false);  
              
          }
      }); 
  });       
    
    
  /*item16*/    
  $(".n16 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider16>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider16>.win>div").removeClass('img16-1');     
                 $(".slider16>.win>div").removeClass('img16-2');   
                 $(".slider16>.win>div").addClass("img16");
             },1000); 
              
              $(this).prop("disabled",true);
             $("#sl47").prop("disabled",false);
             $("#sl48").prop("disabled",false); 
          }
          if(i==1){
        $(".slider16>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider16>.win>div").removeClass('img16-2');     
                 $(".slider16>.win>div").removeClass('img16');   
                 $(".slider16>.win>div").addClass("img16-1");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl46").prop("disabled",false);
             $("#sl48").prop("disabled",false);  
              
          }
          if(i==2){
               $(".slider16>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider16>.win>div").removeClass('img16-1');     
                 $(".slider16>.win>div").removeClass('img16');   
                 $(".slider16>.win>div").addClass("img16-2");
             },1000); 
              
             $(this).prop("disabled",true);
             $("#sl46").prop("disabled",false);
             $("#sl47").prop("disabled",false);
          }
      }); 
  });        
    
    
 $(".n17 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider17>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider17>.win>div").removeClass('img17-1');     
                 $(".slider17>.win>div").removeClass('img17-2');   
                 $(".slider17>.win>div").addClass("img17");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl50").prop("disabled",false);
             $("#sl51").prop("disabled",false);
              
          }
          if(i==1){
        $(".slider17>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider17>.win>div").removeClass('img17-2');     
                 $(".slider17>.win>div").removeClass('img17');   
                 $(".slider17>.win>div").addClass("img17-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl49").prop("disabled",false);
             $("#sl51").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider17>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider17>.win>div").removeClass('img17-1');     
                 $(".slider17>.win>div").removeClass('img17');   
                 $(".slider17>.win>div").addClass("img17-2");
             },1000);  
              
              $(this).prop("disabled",true);
             $("#sl49").prop("disabled",false);
             $("#sl50").prop("disabled",false); 
          }
      }); 
  });        
       
    
    
    
    
$(".n18 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider18>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider18>.win>div").removeClass('img18-1');     
                 $(".slider18>.win>div").removeClass('img18-2');   
                 $(".slider18>.win>div").addClass("img18");
             },1000); 
                $(this).prop("disabled",true);
             $("#sl53").prop("disabled",false);
             $("#sl54").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider18>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider18>.win>div").removeClass('img18-2');     
                 $(".slider18>.win>div").removeClass('img18');   
                 $(".slider18>.win>div").addClass("img18-1");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl52").prop("disabled",false);
             $("#sl54").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider18>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider18>.win>div").removeClass('img18-1');     
                 $(".slider18>.win>div").removeClass('img18');   
                 $(".slider18>.win>div").addClass("img18-2");
             },1000); 
              
              
               $(this).prop("disabled",true);
             $("#sl52").prop("disabled",false);
             $("#sl53").prop("disabled",false); 
          }
      }); 
  });    
    
 $(".n19 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider19>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider19>.win>div").removeClass('img19-1');     
                 $(".slider19>.win>div").removeClass('img19-2');   
                 $(".slider19>.win>div").addClass("img19");
             },1000); 
              
              $(this).prop("disabled",true);
             $("#sl56").prop("disabled",false);
             $("#sl57").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider19>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider19>.win>div").removeClass('img19-2');     
                 $(".slider19>.win>div").removeClass('img19');   
                 $(".slider19>.win>div").addClass("img19-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl55").prop("disabled",false);
             $("#sl57").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider19>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider19>.win>div").removeClass('img19-1');     
                 $(".slider19>.win>div").removeClass('img19');   
                 $(".slider19>.win>div").addClass("img19-2");
             },1000);  
              
               $(this).prop("disabled",true);
             $("#sl55").prop("disabled",false);
             $("#sl56").prop("disabled",false);
          }
      }); 
  });       
    
    
$(".n20 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider20>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider20>.win>div").removeClass('img20-1');     
                 $(".slider20>.win>div").removeClass('img20-2');   
                 $(".slider20>.win>div").addClass("img20");
             },1000); 
             $(this).prop("disabled",true);
             $("#sl59").prop("disabled",false);
             $("#sl60").prop("disabled",false);
              
          }
          if(i==1){
        $(".slider20>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider20>.win>div").removeClass('img20-2');     
                 $(".slider20>.win>div").removeClass('img20');   
                 $(".slider20>.win>div").addClass("img20-1");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl58").prop("disabled",false);
             $("#sl60").prop("disabled",false);
              
          }
          if(i==2){
               $(".slider20>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider20>.win>div").removeClass('img20-1');     
                 $(".slider20>.win>div").removeClass('img20');   
                 $(".slider20>.win>div").addClass("img20-2");
             },1000);
               $(this).prop("disabled",true);
             $("#sl58").prop("disabled",false);
             $("#sl59").prop("disabled",false);
          }
      }); 
  });           
    
    
 $(".n21 input").each(function(i){
      $(this).click(function(){
          if(i==0){
        $(".slider21>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider21>.win>div").removeClass('img21-1');     
                 $(".slider21>.win>div").removeClass('img21-2');   
                 $(".slider21>.win>div").addClass("img21");
             },1000); 
              $(this).prop("disabled",true);
             $("#sl62").prop("disabled",false);
             $("#sl63").prop("disabled",false); 
              
          }
          if(i==1){
        $(".slider21>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider21>.win>div").removeClass('img21-2');     
                 $(".slider21>.win>div").removeClass('img21');   
                 $(".slider21>.win>div").addClass("img21-1");
             },1000); 
               $(this).prop("disabled",true);
             $("#sl61").prop("disabled",false);
             $("#sl63").prop("disabled",false); 
              
          }
          if(i==2){
               $(".slider21>.win>div").fadeOut(1000).fadeIn();
             setTimeout(function(){
                $(".slider21>.win>div").removeClass('img21-1');     
                 $(".slider21>.win>div").removeClass('img21');   
                 $(".slider21>.win>div").addClass("img21-2");
             },1000);  
                  $(this).prop("disabled",true);
             $("#sl61").prop("disabled",false);
             $("#sl62").prop("disabled",false); 
          }
      }); 
  });     
    
   
    
    
    
    
    });