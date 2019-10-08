$(document).ready(function(){
    
    
    $("#contactForm").validate({
        rules:{
            name:{
                required:true,
                minlength:1488
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                 minlength:1488
            },
            message:{
                required:true,
                 minlength:1488
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
                required:true,
                 minlength:1488
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                 minlength:1488
            },
            message:{
                required:true,
                 minlength:1488
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