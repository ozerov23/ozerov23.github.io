$(document).ready(function(){
     

    
    
    var i=1;

        
        
        
 //slider       
        setInterval(function(){
            if(i<2){
            
                if(i==0){
                    $(".img-bg").animate({
                        opacity:0
                    },1500,function(){
                         $(".img-bg").removeClass('img-bg3');
                        $(".img-bg").addClass('img-bg1');
                        $(".img-bg").animate({
                                opacity:1
                            },1500);
                    });
                    
                    
                }
                if(i==1){
                     $(".img-bg").animate({
                        opacity:0
                    },1500,function(){
                         $(".img-bg").removeClass('img-bg1');
                        $(".img-bg").addClass('img-bg2');
                        $(".img-bg").animate({
                                opacity:1
                            },1500);
                    });
                }
                 i++;
            }
            else if(i==2){
                i=0;
                $(".img-bg").animate({
                opacity:0
            },1500,function(){
                 $(".img-bg").removeClass('img-bg2');
                $(".img-bg").addClass('img-bg3');
                $(".img-bg").animate({
                        opacity:1
                    },1500);
            }); 
            }
            
        },10000);
        
        
        
        $(window).scroll(function(){
            var scroll = $(this).scrollTop();
             if(scroll>0){
                 
                 $("header").addClass("fixed");
                 
             }else if(scroll == 0){
                   $("header").removeClass("fixed")
             }
        });
        
        
        
        $(".serv .item .image").each(function(i){
            var elem = $(this).children('.bg');
          $(this).hover(function(){
                elem.fadeIn(500);
               },function(){
                    elem.fadeOut(500);
                 
               });
               
           
            
        });
        
 
    
    
    
 //menu   
    
    
  $(".btn-menu").on("click",function(){
      $(".nav-menu").stop().animate({
          left:'0%'
          
      },1500);
      
      
  });  
    
  $(".exit").on("click",function(){
      $(".nav-menu").stop().animate({
          left:'-100%'
          
      },1500);
      
  });  
    
    
    
    
     $(".nav-menu li a").each(function(i){
         $(this).click(function(e){
             
                if(i==0){
                        $(".nav-menu").stop().animate({
                            left:'-100%'
          
                        },500);
                }
                if(i==1){
                   
                        $(".nav-menu").stop().animate({
                            left:'-100%'
          
                        },500);
                         
                }
                if(i==2){
                        $(".nav-menu").stop().animate({
                            left:'-100%'
          
                        },500);
                          
                }
        
        });
     });
    
    
    
   var sw = true;
    

    
 
    
                   
    
   
   var w = $(window).width(); 
    
   
    
    if(w>564){
         
         $(window).scroll(function(){
            var height = $(window).scrollTop();
           
             
             if(height>1200 && sw==true){
                 
                 
                  var c1=0;
                  var c2=0;
                  var c3=0; 
                   setInterval(function(){

                       if(c1<174){
                           c1++;
                           $(".count1").text("+"+c1);
                       }
                   },1);     

                    setInterval(function(){

                       if(c2<15){
                           c2++;
                           $(".count2").text("+"+c2);
                       }
                   },120);   

                   setInterval(function(){

                       if(c3<400){
                           c3++;
                           $(".count3").text("+"+c3);
                       }
                   },1);
                 
                 sw=false;
             }
             
             
             
         });
         
         
         
     }
     if(w<564 && w>414){
         
          
         $(window).scroll(function(){
            var height = $(window).scrollTop();
            
             
             if(height>1000 && sw==true){
                 
                 
                  var c1=0;
                  var c2=0;
                  var c3=0; 
                   setInterval(function(){

                       if(c1<174){
                           c1++;
                           $(".count1").text("+"+c1);
                       }
                   },1);     

                    setInterval(function(){

                       if(c2<15){
                           c2++;
                           $(".count2").text("+"+c2);
                       }
                   },120);   

                   setInterval(function(){

                       if(c3<400){
                           c3++;
                           $(".count3").text("+"+c3);
                       }
                   },1);
                 
                 sw=false;
             }
        
         
     });
    }
    if(w<=414){
        
        $(window).scroll(function(){
            var height = $(window).scrollTop();
            
             
             if(height>1500 && sw==true){
                 
                 
                  var c1=0;
                  var c2=0;
                  var c3=0; 
                   setInterval(function(){

                       if(c1<174){
                           c1++;
                           $(".count1").text("+"+c1);
                       }
                   },1);     

                    setInterval(function(){

                       if(c2<15){
                           c2++;
                           $(".count2").text("+"+c2);
                       }
                   },120);   

                   setInterval(function(){

                       if(c3<400){
                           c3++;
                           $(".count3").text("+"+c3);
                       }
                   },1);
                 
                 sw=false;
             }
            
         
     });
        
    }
    
    
 /*text modal*/       
 var header;
 var p;   
    
    
    $("#description .ex").on("click",function(){
        
        $("#description").fadeOut(1000);
    });
    
    $(".item .image .bg .des").each(function(i){
        $(this).on("click",function(e){
            
            e.preventDefault();
            if(i==0){
                
                 $("#description").fadeIn(1000);
                header = "Подготовительные и Земляные работы";
                
                p  = "Земляные работы - работы по разработке грунта в выемках, его транспортированию (перемещению) и укладке в насыпи. Выемки и насыпи представляют собой земляные сооружения, которые в зависимости от их назначения и срока эксплуатации могут быть постоянными и временными.Результатом земляных работ является создание постоянных и временных земляных сооружений.";
                
                $('#description h1').text(header);
                $('#description p').text(p);
                var heightP = $('#description p').height();
                var heightH = $('#description h1').height();
                $('#description').height(heightP+heightH+130);
                
            }
            if(i==1){
                
                $("#description").fadeIn(1000);
                 header = "Устройство снежно-ледовых переправ";
                
                p  = "Ледовые переправы на автомобильных дорогах организуют в случаях отсутствия мостовых переходов, невозможности устройства паромной переправы в зимний период и при образовании на водных преградах требуемого ледяного покрова.";
                
                
                $('#description h1').text(header);
                $('#description p').text(p);
                var heightP = $('#description p').height();
                var heightH = $('#description h1').height();
                $('#description').height(heightP+heightH+130);
                
            }
            if(i==2){
                $("#description").fadeIn(1000);
                header = "Строительство и содержание автозимников";
                
                p  = "К зимним автомобильным дорогам - автозимникам - относятся сезонные дороги с полотном и дорожной одеждой из снега,льда и мерзлого грунта. В зимниках нуждаются не толькоудаленные поселки, для которых зимняя дорога является буквальном смысле жизненной артерией, но также и отдаленные месторождения, газо- и нефтепроводы, для которых техническое обслуживание в зимнийпериод просто невозможно без прокладки зимних вдольтрассовых автодорог. Автозимники надлежит проектировать с учетом типов транспортных средств и организации перевозок во времени по мере изменения несущей способности полотна автозимника.";
                $('#description h1').text(header);
                $('#description p').text(p);
                var heightP = $('#description p').height();
                var heightH = $('#description h1').height();
                $('#description').height(heightP+heightH+130);
            }
            
        });
    });

    
    
    
/*win form*/
    
    $(".win").on("click",function(e){
       e.preventDefault();
       $("#bg").fadeIn(1000);
        
        setTimeout(function(){
            $("#contactForm").fadeIn(1000);
        },1000)
        
    });
    
    $("#contactForm .ex").on("click",function(e){
       e.preventDefault();
       $("#contactForm").fadeOut(1000);
        
        setTimeout(function(){
            $("#bg").fadeOut(1000);
        },1000)
        
    });
    
    
    
    
});	
	
	
	