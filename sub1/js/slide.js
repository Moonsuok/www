$(document).ready(function(){

//년도 tap 클릭 시 스크롤 이동
$('.year_tab a').click(function(e){
    e.preventDefault();  //href="#"속성을 막아주는 메소드  
    var value1=0;       //이동할 스크롤의 거리 값

        if($(this).hasClass('link1')){  //link1 클래스를 가지느냐? 가지고 있으면 참, 없으면 거짓 => is('.link')
            value1= $('.history_present').offset().top; 
        }else if($(this).hasClass('link2')){
            value1= $('.history_2000s').offset().top; 
        }else if($(this).hasClass('link3')){
            value1= $('.history_1990s').offset().top; 
        }else if($(this).hasClass('link4')){
            value1= $('.history_1980s').offset().top; 
        }else if($(this).hasClass('link5')){
            value1= $('.history_1970s').offset().top; 
        }
       
        value1 -= 231;

        $("html,body").stop().animate({"scrollTop":value1},1000); //value값으로 스크롤 이동
    });


//수상 tap 클릭 시 스크롤 이동
$('.grade_tab a').click(function(e){
    e.preventDefault();  //href="#"속성을 막아주는 메소드  
    var value2=0;       //이동할 스크롤의 거리 값

        if($(this).hasClass('link6')){  //link1 클래스를 가지느냐? 가지고 있으면 참, 없으면 거짓 => is('.link')
            value2= $('.head_office').offset().top; 
        }else if($(this).hasClass('link7')){
            value2= $('.center_lab').offset().top; 
        }else if($(this).hasClass('link8')){
            value2= $('.ulsan_rub').offset().top; 
        }else if($(this).hasClass('link9')){
            value2= $('.ulsan_resin').offset().top; 
        }else if($(this).hasClass('link10')){
            value2= $('.yeosu_rub').offset().top; 
        }
       
        value2 -= 231;

        $("html,body").stop().animate({"scrollTop":value2},1000); //value값으로 스크롤 이동
    });
});