$(document).ready(function(){
    $("#winform").validate({
        rules:{
            name:{
                required:true,
                maxlength:1488
            },
            phone:{
                 required:true,
                 digits:true   
            }
        },
        messages:{
            name:{
                required:"Заполните это поле"
            },
            phone:{
                required:"Заполните это поле",
                digits:"Введите номер телефона"
            }
        }
    });
    
    $("#pageForm").validate({
        rules:{
            name:{
                required:true,
                maxlength:1488
            },
            phone:{
                 required:true,
                 digits:true   
            }
        },
        messages:{
            name:{
                required:"Заполните это поле"
            },
            phone:{
                required:"Заполните это поле",
                digits:"Введите номер телефона"
            }
        }
    });
    
});