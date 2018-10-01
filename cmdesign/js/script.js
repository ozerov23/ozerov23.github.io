$(document).ready(function(){
  
    /*zoom*/
   var cl;
   var c=1;
   var img1=0;
   var img2=0;
   var img3=0;
   var img4=0;
   var img5=0;
   var img6=0;
   $(".left").on("click",function(){
     
       if(c>1){
           img1--;
           img2--;
           img3--;
           img4--;
           img5--;
           img6--;
           c--;
           if(c==1){
               $(".zoom .image2").fadeOut(1000);
               setTimeout(function(){
                    $(".zoom .image1").fadeIn(1000);
               },1000);
               if(img1==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(700);
                       $('.zoom').height(693);
                   console.log(img1)
                   },1000)
               }
               if(img2==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(498);
                       $('.zoom').height(630);
                   console.log(img1)
                   },1000)
               }
               if(img3==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(460);
                       $('.zoom').height(649);
                   console.log(img1)
                   },1000)
               }
               if(img4==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(450);
                       $('.zoom').height(765);
                   console.log(img1)
                   },1000)
               }
               if(img5==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(587);
                   console.log(img1)
                   },1000)
               }
               if(img6==1){
                   
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(753);
                   console.log(img1)
                   },1000)
               }
           }
           if(c==2){
                $(".zoom .image3").fadeOut(1000);
               setTimeout(function(){
                $(".zoom .image2").fadeIn(1000);
               },1000);
               
               if(img1==2){
                   
                    setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000)
               }
               
               if(img2==2){
                   
                   setTimeout(function(){
                       $('.zoom').width(500);
                       $('.zoom').height(700);
                   console.log(img1)
                   },1000)
               }
               
               if(img3==2){
                   
                   setTimeout(function(){
                       $('.zoom').width(460);
                       $('.zoom').height(677);
                   console.log(img1)
                   },1000)
               }
               if(img4==2){
                   
                   setTimeout(function(){
                       $('.zoom').width(700);
                       $('.zoom').height(676);
                   console.log(img1)
                   },1000)
               }
               if(img5==2){
                   
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000)
               }
              if(img6==2){
                   
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000)
               }
           }
       }
       
   });
    
   $(".right").on("click",function(){
    
       if(c<3){
           c++;
           img1++;
           img2++;
           img3++;
           img4++;
           img5++;
           img6++;
           if(c==2){
               
               if(img1==2){
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000)
               }
               
               if(img2==2){
                   setTimeout(function(){
                       $('.zoom').width(500);
                       $('.zoom').height(700);
                   console.log(img1)
                   },1000)
               }
               
               if(img3==2){
                   setTimeout(function(){
                       $('.zoom').width(460);
                       $('.zoom').height(677);
                   console.log(img1)
                   },1000)
               }
               if(img4==2){
                   setTimeout(function(){
                       $('.zoom').width(700);
                       $('.zoom').height(676);
                   console.log(img1)
                   },1000);
               }
               if(img5==2){
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000);
               }
               if(img6==2){
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000);
               }
               $(".zoom .image1").fadeOut(1000);
               setTimeout(function(){
                    $(".zoom .image2").fadeIn(1000);
               },1000);
            
           }
           if(c==3){
                $(".zoom .image2").fadeOut(1000);
               setTimeout(function(){
                    $(".zoom .image3").fadeIn(1000);
               },1000);
               
               if(img1==3){
                   setTimeout(function(){
                       $('.zoom').width(700);
                       $('.zoom').height(768);
                   console.log(img1)
                   },1000) 
               }
               
               if(img2==3){
                   setTimeout(function(){
                       $('.zoom').width(600);
                       $('.zoom').height(510);
                   console.log(img1)
                   },1000) 
               }
               
               if(img3==3){
                   setTimeout(function(){
                       $('.zoom').width(600);
                       $('.zoom').height(605);
                   console.log(img1)
                   },1000) 
               }
               if(img4==3){
                   setTimeout(function(){
                       $('.zoom').width(550);
                       $('.zoom').height(682);
                   console.log(img1)
                   },1000) 
               }
              
               if(img5==3){
                   setTimeout(function(){
                       $('.zoom').width(500);
                       $('.zoom').height(640);
                   console.log(img1)
                   },1000);
               }
              if(img6==3){
                   setTimeout(function(){
                       $('.zoom').width(800);
                       $('.zoom').height(600);
                   console.log(img1)
                   },1000);
               }
           
           }
       }
   }); 
    
  /*
    /*load fuction*/
    
    /*
    
    /* end load fuction*/
    
   var Z_width;
   var Z_height;
    
    
    /*item1*/
    $(".slider1>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        cl=$(this).attr("class");
        
        
        if(cl==="img1"){
           
            c=1;
           
            
          $(".zoom .image1").show();
          $(".zoom .image2").hide();  
          $(".zoom .image3").hide();   
            
            $(".im1").attr("src","img/flat1/cover1.jpg");
            $(".im2").attr("src","img/flat1/1.2.jpg");
            $(".im3").attr("src","img/flat1/1.3.jpg");
             
           
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
           
        }
        if(cl==="img1-1"){
            
          
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   
            
            $(".im1").attr("src","img/flat1/cover1.jpg");
            $(".im2").attr("src","img/flat1/1.2.jpg");
            $(".im3").attr("src","img/flat1/1.3.jpg");
            
            
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
        }
        if(cl==="img1-2"){
            
            c=3;
            
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();  
            
            $(".im1").attr("src","img/flat1/cover1.jpg");
            $(".im2").attr("src","img/flat1/1.2.jpg");
            $(".im3").attr("src","img/flat1/1.3.jpg");
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
          
        }
    });
    
    
    
    /*item2*/
    $(".slider2>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        $(".zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img2"){
            
          
            
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat2/cover2.jpg");
            $(".im2").attr("src","img/flat2/2.1.jpg");
            $(".im3").attr("src","img/flat2/2.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
           
            
        }
        if(cl==="img2-1"){
           
            
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   
            
            
             $(".im1").attr("src","img/flat2/cover2.jpg");
             $(".im2").attr("src","img/flat2/2.1.jpg");
             $(".im3").attr("src","img/flat2/2.2.jpg");
            
           $(".zoom").animate({
                width:800,
                height:600
            },1500);

        }
        if(cl==="img2-2"){
           
            
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();   
            
            $(".im1").attr("src","img/flat2/cover2.jpg");
            $(".im2").attr("src","img/flat2/2.1.jpg");
            $(".im3").attr("src","img/flat2/2.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
            
        }
    });
    
    
    /*item3*/
    $(".slider3>.win>div").click(function(){
        
          $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img3"){
          
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  

            $(".im1").attr("src","img/flat3/cover3.jpg");
            $(".im2").attr("src","img/flat3/3.1.jpg");
            $(".im3").attr("src","img/flat3/3.2.jpg");
            
           
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
    
        }
        if(cl==="img3-1"){
            
             c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   

            
            $(".im1").attr("src","img/flat3/cover3.jpg");
            $(".im2").attr("src","img/flat3/3.1.jpg");
            $(".im3").attr("src","img/flat3/3.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
    
        }
        if(cl==="img3-2"){
            
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat3/cover3.jpg");
            $(".im2").attr("src","img/flat3/3.1.jpg");
            $(".im3").attr("src","img/flat3/3.2.jpg");
           
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
        }
    });
    
    /*item4*/
    $(".slider4>.win>div").click(function(){
        
       $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        
        var cl=$(this).attr("class");
        if(cl==="img4"){
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  

            $(".im1").attr("src","img/flat4/cover4.jpg");
            $(".im2").attr("src","img/flat4/4.1.jpg");
            $(".im3").attr("src","img/flat4/4.2.jpg");
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
         
        }
        if(cl==="img4-1"){
            
            c=2;
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide(); 
            
            $(".im1").attr("src","img/flat4/cover4.jpg");
            $(".im2").attr("src","img/flat4/4.1.jpg");
            $(".im3").attr("src","img/flat4/4.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
            
        }
        if(cl==="img4-2"){
           
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat4/cover4.jpg");
            $(".im2").attr("src","img/flat4/4.1.jpg");
            $(".im3").attr("src","img/flat4/4.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
        }
    });
    
    /*item5*/
    $(".slider5>.win>div").click(function(){
        
       $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img5"){
            
             c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat5/cover5.jpg");
            $(".im2").attr("src","img/flat5/5.1.jpg");
            $(".im3").attr("src","img/flat5/5.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
           
        }
        if(cl==="img5-1"){
          
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat5/cover5.jpg");
            $(".im2").attr("src","img/flat5/5.1.jpg");
            $(".im3").attr("src","img/flat5/5.2.jpg");
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
          
        }
        if(cl==="img5-2"){
            
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat5/cover5.jpg");
            $(".im2").attr("src","img/flat5/5.1.jpg");
            $(".im3").attr("src","img/flat5/5.2.jpg");
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);
        }
    });
    
    /*item6*/
    $(".slider6>.win>div").click(function(){
      $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img6"){
         
             c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat6/cover6.jpg");
             $(".im2").attr("src","img/flat6/6.1.jpg");
             $(".im3").attr("src","img/flat6/6.3.jpg");
            
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
            
            
        }
        if(cl==="img6-1"){
            
            c=2;
            
             $(".zoom .image2").show();
             $(".zoom .image1").hide();  
             $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat6/cover6.jpg");
             $(".im2").attr("src","img/flat6/6.1.jpg");
             $(".im3").attr("src","img/flat6/6.3.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
            
        }
        if(cl==="img6-2"){
           
             c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide(); 
            
             $(".im1").attr("src","img/flat6/cover6.jpg");
             $(".im2").attr("src","img/flat6/6.1.jpg");
             $(".im3").attr("src","img/flat6/6.3.jpg");
            
           $(".zoom").animate({
                width:800,
                height:600
            },1500);
        }
    });    

    /*item7*/
    $(".slider7>.win>div").click(function(){
        
         $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img7"){
            
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
             
            
            $(".im1").attr("src","img/flat7/cover7.jpg");
            $(".im2").attr("src","img/flat7/7.1.jpg");
            $(".im3").attr("src","img/flat7/7.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
           
        }
        if(cl==="img7-1"){
            
             c=2;
             
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat7/cover7.jpg");
            $(".im2").attr("src","img/flat7/7.1.jpg");
            $(".im3").attr("src","img/flat7/7.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
            
            
        }
        if(cl==="img7-2"){
          
             c=3;
             
             
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat7/cover7.jpg");
            $(".im2").attr("src","img/flat7/7.1.jpg");
            $(".im3").attr("src","img/flat7/7.2.jpg");
            
            $(".zoom").animate({
                width:800,
                height:600
            },1500);
           
        }
    });    


    /*item8*/
    $(".slider8>.win>div").click(function(){
        
      $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img8"){
              
              img1=1;
              c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide(); 
            
           $(".im1").attr("src","img/flat8/cover8.jpg");
           $(".im2").attr("src","img/flat8/8.1.jpg");
           $(".im3").attr("src","img/flat8/8.2.jpg");
            
            $(".zoom").animate({
                width:700,
                height:693
            },1500);
            
    
        }
        if(cl==="img8-1"){
             img1=2;
             c=2;
             
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   

            
            $(".im1").attr("src","img/flat8/cover8.jpg");
            $(".im2").attr("src","img/flat8/8.1.jpg");
            $(".im3").attr("src","img/flat8/8.2.jpg");
            
             $(".zoom").animate({
                width:800,
                height:600
            },1500);

        }
        if(cl==="img8-2"){
            img1=3;
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat8/cover8.jpg");
            $(".im2").attr("src","img/flat8/8.1.jpg");
            $(".im3").attr("src","img/flat8/8.2.jpg");
            
            
           $(".zoom").animate({
                width:700,
                height:768
            },1500);
        }
    });
    
    
    /*item9*/
    $(".slider9>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        
        var cl=$(this).attr("class");
        if(cl==="img9"){
            
           
            c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
 
            $(".im1").attr("src","img/flat9/cover9.jpg");
            $(".im2").attr("src","img/flat9/9.1.jpg");
            $(".im3").attr("src","img/flat9/9.2.jpg");
            
             $(".zoom").animate({
                width:660,
                height:770
            },1500);
          
        }
        if(cl==="img9-1"){
            
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat9/cover9.jpg");
            $(".im2").attr("src","img/flat9/9.1.jpg");
            $(".im3").attr("src","img/flat9/9.2.jpg");
            
            $(".zoom").animate({
                width:700,
                height:875
            },1500);
            
        }
        if(cl==="img9-2"){
           
              c=3;
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat9/cover9.jpg");
            $(".im2").attr("src","img/flat9/9.1.jpg");
            $(".im3").attr("src","img/flat9/9.2.jpg");
            
             $(".zoom").animate({
                width:700,
                height:875
            },1500);
            
        }
    }); 

    
     /*item10*/
    $(".slider10>.win>div").click(function(){
        
      $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img10"){
           
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
             $(".im1").attr("src","img/flat10/cover10.jpg");
             $(".im2").attr("src","img/flat10/10.1.jpg");
             $(".im3").attr("src","img/flat10/10.2.jpg"); 
            
            $(".zoom").animate({
                width:600,
                height:775
            },1500);
           
        }
        if(cl==="img10-1"){
         
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   

             $(".im1").attr("src","img/flat10/cover10.jpg");
             $(".im2").attr("src","img/flat10/10.1.jpg");
             $(".im3").attr("src","img/flat10/10.2.jpg"); 
             
              $(".zoom").animate({
                 width:600,
                height:775
            },1500);
            
        }
        if(cl==="img10-2"){
           
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat10/cover10.jpg");
            $(".im2").attr("src","img/flat10/10.1.jpg");
            $(".im3").attr("src","img/flat10/10.2.jpg"); 
            
             $(".zoom").animate({
                width:600,
                height:775
            },1500);
        }
    }); 
  
    
     /*item11*/
    $(".slider11>.win>div").click(function(){
        
       $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img11"){
          
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat11/cover11.jpg");
             $(".im2").attr("src","img/flat11/11.1.jpg");
             $(".im3").attr("src","img/flat11/11.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
        if(cl==="img11-1"){
            
             c=2;
             
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide(); 
            
             $(".im1").attr("src","img/flat11/cover11.jpg");
             $(".im2").attr("src","img/flat11/11.1.jpg");
             $(".im3").attr("src","img/flat11/11.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
           
        }
        if(cl==="img11-2"){
            
             c=3;
             
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat11/cover11.jpg");
            $(".im2").attr("src","img/flat11/11.1.jpg");
            $(".im3").attr("src","img/flat11/11.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
            
        }
    }); 
  
       /*item12*/
    $(".slider12>.win>div").click(function(){
      $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img12"){
          
            c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat12/cover12.jpg");
             $(".im2").attr("src","img/flat12/12.1.jpg");
             $(".im3").attr("src","img/flat12/12.2.jpeg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);

        }
        if(cl==="img12-1"){
          
            c=2;
             $(".zoom .image2").show();
             $(".zoom .image1").hide();  
             $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat12/cover12.jpg");
             $(".im2").attr("src","img/flat12/12.1.jpg");
             $(".im3").attr("src","img/flat12/12.2.jpeg"); 
            
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
        if(cl==="img12-2"){
            
             c=3;
              $(".zoom .image3").show();
              $(".zoom .image1").hide();  
              $(".zoom .image2").hide();
            
             $(".im1").attr("src","img/flat12/cover12.jpg");
             $(".im2").attr("src","img/flat12/12.1.jpg");
             $(".im3").attr("src","img/flat12/12.2.jpeg"); 
            
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
    }); 
  
         /*item13*/
    $(".slider13>.win>div").click(function(){
        
          $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        
        if(cl==="img13"){
            
             c=1;
             $(".zoom .image1").show();
             $(".zoom .image2").hide();  
             $(".zoom .image3").hide();
            
             $(".im1").attr("src","img/flat13/cover13.jpg");
             $(".im2").attr("src","img/flat13/13.1.jpg");
             $(".im3").attr("src","img/flat13/13.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
            
        }
        if(cl==="img13-1"){
           
             c=2;
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();  
            

            $(".im1").attr("src","img/flat13/cover13.jpg");
            $(".im2").attr("src","img/flat13/13.1.jpg");
            $(".im3").attr("src","img/flat13/13.2.jpg"); 
             
           $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
        if(cl==="img13-2"){
            
             c=3;
             
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat13/cover13.jpg");
            $(".im2").attr("src","img/flat13/13.1.jpg");
            $(".im3").attr("src","img/flat13/13.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
    }); 
    
        /*item14*/
    $(".slider14>.win>div").click(function(){
        
     $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img14"){
           
            c=1;
             $(".zoom .image1").show();
             $(".zoom .image2").hide();  
             $(".zoom .image3").hide();  
            
             $(".im1").attr("src","img/flat14/cover14.jpg");
             $(".im2").attr("src","img/flat14/14.1.jpg");
             $(".im3").attr("src","img/flat14/14.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
        if(cl==="img14-1"){
            
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   
            
            $(".im1").attr("src","img/flat14/cover14.jpg");
            $(".im2").attr("src","img/flat14/14.1.jpg");
            $(".im3").attr("src","img/flat14/14.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
        if(cl==="img14-2"){
           
            c=3;
           $(".zoom .image3").show();
           $(".zoom .image1").hide();  
           $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat14/cover14.jpg");
            $(".im2").attr("src","img/flat14/14.1.jpg");
            $(".im3").attr("src","img/flat14/14.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
             
        }
    }); 
    
        /*item15*/
    $(".slider15>.win>div").click(function(){
    
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        
        var cl=$(this).attr("class");
        if(cl==="img15"){
            
            img2=1;
            c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();   
            
            $(".im1").attr("src","img/flat15/cover15.jpg");
            $(".im2").attr("src","img/flat15/15.1.jpg");
            $(".im3").attr("src","img/flat15/15.2.jpg"); 
            
             $(".zoom").animate({
                width:498,
                height:630
             },1500);
          
        }
        if(cl==="img15-1"){
             
              img2=2;
              c=2;
             $(".zoom .image2").show();
             $(".zoom .image1").hide();  
             $(".zoom .image3").hide();   
            
             $(".im1").attr("src","img/flat15/cover15.jpg");
             $(".im2").attr("src","img/flat15/15.1.jpg");
             $(".im3").attr("src","img/flat15/15.2.jpg"); 
             
            $(".zoom").animate({
                width:500,
                height:700
             },1500);
        }
        if(cl==="img15-2"){
              
             img2=3;
              c=3;
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat15/cover15.jpg");
            $(".im2").attr("src","img/flat15/15.1.jpg");
            $(".im3").attr("src","img/flat15/15.2.jpg"); 
            
            $(".zoom").animate({
                width:600,
                height:510
             },1500); 
             
        }
    }); 
    
    
        /*item16*/
    $(".slider16>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img16"){
             img3=1;
             c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat16/cover16.jpg");
            $(".im2").attr("src","img/flat16/16.1.jpg");
            $(".im3").attr("src","img/flat16/16.2.jpg"); 
            
             $(".zoom").animate({
                width:460,
                height:649
             },1500); 
        }
        if(cl==="img16-1"){
              img3=2;
              c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();   
 
            $(".im1").attr("src","img/flat16/cover16.jpg");
            $(".im2").attr("src","img/flat16/16.1.jpg");
            $(".im3").attr("src","img/flat16/16.2.jpg"); 
            
            $(".zoom").animate({
                width:460,
                height:677
             },1500); 
        }
        if(cl==="img16-2"){
              img3=3;
              c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide(); 
            
            $(".im1").attr("src","img/flat16/cover16.jpg");
            $(".im2").attr("src","img/flat16/16.1.jpg");
            $(".im3").attr("src","img/flat16/16.2.jpg"); 
            
              $(".zoom").animate({
                width:600,
                height:605
             },1500); 
             
        }
    }); 
     
        /*item17*/
    $(".slider17>.win>div").click(function(){
        
       $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
        
        var cl=$(this).attr("class");
        if(cl==="img17"){
            
            img4=1;
            
         c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat17/cover17.jpg");
            $(".im2").attr("src","img/flat17/17.1.jpg");
            $(".im3").attr("src","img/flat17/17.2.jpg"); 
            
            $(".zoom").animate({
                width:450,
                height:765
             },1500); 
          
        }
        if(cl==="img17-1"){
             
             img4=2;
             c=2;
           
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat17/cover17.jpg");
            $(".im2").attr("src","img/flat17/17.1.jpg");
            $(".im3").attr("src","img/flat17/17.2.jpg"); 
            
             $(".zoom").animate({
                width:700,
                height:676
             },1500); 

        }
        if(cl==="img17-2"){
            
            img4=3;
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat17/cover17.jpg");
            $(".im2").attr("src","img/flat17/17.1.jpg");
            $(".im3").attr("src","img/flat17/17.2.jpg"); 
            
            $(".zoom").animate({
                width:550,
                height:682
             },1500); 
        }
    }); 
    
    
       /*item18*/
     $(".slider18>.win>div").click(function(){
         
         
      $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
         
        var cl=$(this).attr("class");
        if(cl==="img18"){
            
            
            c=1;
            
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat18/cover18.jpg");
            $(".im2").attr("src","img/flat18/18.1.jpg");
            $(".im3").attr("src","img/flat18/18.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
            
           
        }
        if(cl==="img18-1"){
            
            
            c=2;
            
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat18/cover18.jpg");
            $(".im2").attr("src","img/flat18/18.1.jpg");
            $(".im3").attr("src","img/flat18/18.2.jpg"); 
            
              $(".zoom").animate({
                width:800,
                height:600
             },1500); 
          
        }
        if(cl==="img18-2"){
            
           
            c=3;
            
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide();
            
            $(".im1").attr("src","img/flat18/cover18.jpg");
            $(".im2").attr("src","img/flat18/18.1.jpg");
            $(".im3").attr("src","img/flat18/18.2.jpg"); 
            
              $(".zoom").animate({
                width:800,
                height:600
             },1500); 
            
        }
    }); 
    
    
     /*item19*/
     $(".slider19>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
         
        var cl=$(this).attr("class");
        if(cl==="img19"){
           
            
             c=1;
           
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide(); 
            
            $(".im1").attr("src","img/flat19/cover19.jpg");
            $(".im2").attr("src","img/flat19/19.1.jpg");
            $(".im3").attr("src","img/flat19/19.2.jpg"); 
            
             $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
        if(cl==="img19-1"){
             
             
             c=2;
           
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide(); 
            
            $(".im1").attr("src","img/flat19/cover19.jpg");
            $(".im2").attr("src","img/flat19/19.1.jpg");
            $(".im3").attr("src","img/flat19/19.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
        if(cl==="img19-2"){
             
             
             c=3;
           
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide(); 
            
            $(".im1").attr("src","img/flat19/cover19.jpg");
            $(".im2").attr("src","img/flat19/19.1.jpg");
            $(".im3").attr("src","img/flat19/19.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500); 
        }
    }); 
    
    
    
     /*item20*/
     $(".slider20>.win>div").click(function(){
        $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
         
         
        var cl=$(this).attr("class");
        if(cl==="img20"){
            
           img5=1;    
           c=1;
            
           $(".zoom .image1").show();
           $(".zoom .image2").hide();  
           $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat20/cover20.jpg");
            $(".im2").attr("src","img/flat20/20.1.jpg");
            $(".im3").attr("src","img/flat20/20.2.jpg"); 
            
             $(".zoom").animate({
                width:800,
                height:587
             },1500); 
            
        }
        if(cl==="img20-1"){
             
            img5=2; 
             c=2;
            $(".zoom .image2").show();
            $(".zoom .image1").hide();  
            $(".zoom .image3").hide();
            
            $(".im1").attr("src","img/flat20/cover20.jpg");
            $(".im2").attr("src","img/flat20/20.2.jpg");
            $(".im3").attr("src","img/flat20/20.1.jpg"); 
            
            $(".zoom").animate({
                width:500,
                height:640
             },1500);
           
        }
        if(cl==="img20-2"){
            
            img5=3; 
            c=3;
            $(".zoom .image3").show();
            $(".zoom .image1").hide();  
            $(".zoom .image2").hide(); 
            
            $(".im1").attr("src","img/flat20/cover20.jpg");
            $(".im2").attr("src","img/flat20/20.2.jpg");
            $(".im3").attr("src","img/flat20/20.1.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:600
             },1500);
    
        }
    }); 
        
     $(".slider21>.win>div").click(function(){
         
       $(".background").css({
            top:$(this).offset().top
        });
        
        $(".background").show();
        $(".background .zoom").show();
         
        var cl=$(this).attr("class");
        if(cl==="img21"){
             img6=1;
             c=1;
            $(".zoom .image1").show();
            $(".zoom .image2").hide();  
            $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat21/cover21.jpg");
            $(".im2").attr("src","img/flat21/21.1.jpg");
            $(".im3").attr("src","img/flat21/21.2.jpg"); 
            
            $(".zoom").animate({
                width:800,
                height:753
             },1500);
            

        }
        if(cl==="img21-1"){
          
              img6=2;
             c=2;
           $(".zoom .image2").show();
           $(".zoom .image1").hide();  
           $(".zoom .image3").hide();  
            
            $(".im1").attr("src","img/flat21/cover21.jpg");
            $(".im2").attr("src","img/flat21/21.1.jpg");
            $(".im3").attr("src","img/flat21/21.2.jpg"); 
            
             $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
        if(cl==="img21-2"){
             
              img6=3;
             c=3;
           $(".zoom .image3").show();
           $(".zoom .image1").hide();  
           $(".zoom .image2").hide(); 
            
            
           $(".im1").attr("src","img/flat21/cover21.jpg");
           $(".im2").attr("src","img/flat21/21.1.jpg");
           $(".im3").attr("src","img/flat21/21.2.jpg"); 
             
           $(".zoom").animate({
                width:800,
                height:600
             },1500);
        }
    });    

$("#close").click(function(){
    $(".zoom").animate({
                width:0,
                height:0
            },1500);
  
    setTimeout(function(){
        $(".background").hide()
    },1500)
    
    img1=0;
    img2=0;
    img3=0;
    img4=0;
    img5=0;
    img6=0;
});    
    
    
/*fixed scroll nav menu*/    
    
    

    
    $(".img-2").click(function(){
        $(".menu2 ul").slideToggle(1000);
    });
    
    
    
    $('.b1, .b2, .b3, .b4').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); 
        }
	    return false; 
    });
   
    
  
$(".items .item").each(function(i){
       $(this).click(function(){
          if(i==0){
            $(".arrow").css({
                backgroundPositionX:"150px"
                
            });
              $(".one").show();
              $(".two").hide();
              $(".three").hide();
              
              $('.b').show();
              $('.m').hide();
              $('.f').hide();
          } 
          if(i==1){
             $(".arrow").css({
                backgroundPositionX:"500px"
            });
              $(".one").hide();
              $(".two").show();
              $(".three").hide();
              
               $('.b').hide();
              $('.m').show();
              $('.f').hide();
              
          }
          if(i==2){
             $(".arrow").css({
                backgroundPositionX:"850px"
            });
              $(".one").hide();
              $(".two").hide();
              $(".three").show();  
              
              $('.b').hide();
              $('.m').hide();
              $('.f').show();
          } 
       });
   }); 
     
    function show_list(){
        var width=$(window).width();
          if(width>=1084){
              $('#sentence ul').show();
          }
        
    }
    show_list();
    
    
      $(window).resize(function(){
          var width=$(this).width();
          console.log(width);
          if(width>=1084){
              $('#sentence ul').show();
          }
      });
 
 
    $(".button1").click(function(){
      $(".works1").slideToggle(1500);
  });
  $(".button2").click(function(){
      $(".works2").slideToggle(1500);
  });
  $(".button3").click(function(){
      $(".works3").slideToggle(1500);
  });  
});
