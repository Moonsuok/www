$(document).ready(function () {
        
    $('#content .content_area .intro').addClass('boxMove');  //첫번째 내용글 애니메이션 처리

    var smh= $('.intro').height()+ 700; 
    var h1= $('#content .content_area .vision').offset().top + 900 ;
    var h2= $('#content .content_area .active').offset().top + 900 ;

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다       
        
        //sticky menu 처리
        if(scroll>smh){ 
            $('.navBox').addClass('navOn'); //서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn'); //서브메뉴 원래 상태로
            $('header').show();
        }
        

        $('.navBox li').find('a').removeClass('spy');  //모든 서브메뉴 비활성화
               
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
            $('.navBox li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성화            
            $('#content .content_area .vision').addClass('boxMove'); 
        }else if(scroll>=h1 && scroll<h2){
            $('.navBox li:eq(1)').find('a').addClass('spy'); //두번째 서브메뉴 활성화        
            $('#content .content_area .active').addClass('boxMove');
        }else if(scroll>=h2){
            $('.navBox li:eq(2)').find('a').addClass('spy');//세번째 서브메뉴 활성화    
            $('#content .content_area .enviro').addClass('boxMove');
        }
        
    });



    /* 클릭 시 스크롤 이동 */
    $('.navBox a').click(function(e){
        e.preventDefault();  //href="#"속성을 막아주는 메소드  
        var value=0;       //이동할 스크롤의 거리 값

            if($(this).hasClass('link1')){  //link1 클래스를 가지느냐? 가지고 있으면 참, 없으면 거짓 => is('.link')
                value= $('.vision h3').offset().top; 
            }else if($(this).hasClass('link2')){
                value= $('.active h3').offset().top; 
            }else if($(this).hasClass('link3')){
                value= $('.enviro h3').offset().top; 
            }
        
            value -= 240;

            $("html,body").stop().animate({"scrollTop":value},1000); //value값으로 스크롤 이동
        });
});