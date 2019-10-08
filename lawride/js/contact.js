$(document).ready(function(){
    
    
    $("#contactForm").validate({
        rules:{
            name:{
                required:true
             
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        },
        messages:{
            name:{
                required:"Заполните это поле"
            },
            email:{
                required:"Заполните это поле",
                email:"Введите коректный email"
            },
            subject:{
                required:"Заполните это поле"
            },
            message:{
                required:"Заполните это поле"
            }
        }
    });
    
    
    
    $("#question_form").validate({
        rules:{
            name:{
                required:true
             
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        },
        messages:{
            name:{
                required:"Заполните это поле"
            },
            email:{
                required:"Заполните это поле",
                email:"Введите коректный email"
            },
            subject:{
                required:"Заполните это поле"
            },
            message:{
                required:"Заполните это поле"
            }
        }
    })
    
    
});