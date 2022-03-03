// JavaScript Document
$(document).ready(function(){
    
    var h1, h2, h3, h4, h5, h6, h7, h8, h9, h10;
    var smh = $('.content_area').offset().top + 80;


    // 초기세팅
    $('.sub_tab a:eq(0)').parent().css('border-bottom-color','#ed1c24');
    $('.sub1').show();

    $('.sub_tab a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.sub_tab a');

        // 모두끄기
        $('.sub_tab a').parent().css('border-bottom-color','');
        $('.sub').hide();

        // 해당 탭만 열기
        $('.sub_tab a:eq('+ ind+')').parent().css('border-bottom-color','#ed1c24');
        $('.sub'+(ind+1)).fadeIn();
        
        funcCall(); // tab click시 마다 offset().top 값을 다시 받기 위해 call

    });

    // offset().top 값을 받기 위해 tab 밑에서 실행 //spy
    function funcCall(){
        var gap = 300;

        h1 = $('.history_box1 p:eq(0)').offset().top - gap;
        h2 = $('.history_box1 p:eq(1)').offset().top - gap;
        h3 = $('.history_box1 p:eq(2)').offset().top - gap;
        h4 = $('.history_box1 p:eq(3)').offset().top - gap;
        h5 = $('.history_box1 p:eq(4)').offset().top - gap;

        h6 = $('.history_box2 p:eq(0)').offset().top - gap;
        h7 = $('.history_box2 p:eq(1)').offset().top - gap;
        h8 = $('.history_box2 p:eq(2)').offset().top - gap;
        h9 = $('.history_box2 p:eq(3)').offset().top - gap;
        h10 = $('.history_box2 p:eq(4)').offset().top - gap;
    };
    funcCall();



    // 스크롤 이벤트
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다

        //sticky menu 처리
        if (scroll > smh) {
            $('.navBox').addClass('navOn');
            $('#headerArea').hide();
            $('.history_box').css('marginTop',454); // 스크롤 이동 높이값을 맞추기 위해 tab 높이만큼 마진값 추가
        } else {
            $('.navBox').removeClass('navOn');
            $('#headerArea').show();
            $('.history_box').css('marginTop',''); // 제거
        }


        // spy 모두 끄기
        $('#content .navBox li a').removeClass('spy');

        // 기업연혁
        if (scroll >= 0 && scroll <= h2) {
            $('.horizon_tab li:eq(0)').find('a').addClass('spy');
            
        } else if (scroll > h2 && scroll <= h3) {
            $('.horizon_tab li:eq(1)').find('a').addClass('spy');
            
        } else if (scroll > h3 && scroll <= h4) {
            $('.horizon_tab li:eq(2)').find('a').addClass('spy');
            
        } else if (scroll > h4 && scroll <= h5) {
            $('.horizon_tab li:eq(3)').find('a').addClass('spy');
            
        } else if (scroll > h5) {
            $('.horizon_tab li:eq(4)').find('a').addClass('spy');
        }


        // 기업수상
        if (scroll >= smh && scroll < h7) {
            $('.grade_tab li:eq(0)').find('a').addClass('spy');
            //여섯번째 서브메뉴 활성
        } else if (scroll >= h7 && scroll < h8) {
            $('.grade_tab li:eq(1)').find('a').addClass('spy');
            //일곱번째 서브메뉴 활성화
        } else if (scroll >= h8 && scroll < h9) {
            $('.grade_tab li:eq(2)').find('a').addClass('spy');
            //여덟번째 서브메뉴 활성화
        } else if (scroll >= h9 && scroll <= h10) {
            $('.grade_tab li:eq(3)').find('a').addClass('spy');
            //아홉번째 서브메뉴 활성화
        } else if (scroll > h10) {
            $('.grade_tab li:eq(4)').find('a').addClass('spy');
            //열번째 서브메뉴 활성화
        }

    });
    

    



    //년도 tap 클릭 시 스크롤 이동 - index값 이용
    $('.year_tab a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.year_tab a');
        var gap = 120;
        var value = $('.history_box1 p:eq(' + ind + ')').offset().top - gap;

        $("html,body").stop().animate({"scrollTop":value},700); //value값으로 스크롤 이동
    });

    //수상 tap 클릭 시 스크롤 이동 - index값 이용
    $('.grade_tab a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.grade_tab a');
        var gap = 120;
        var value = $('.history_box2 p:eq(' + ind + ')').offset().top - gap;

        $("html,body").stop().animate({"scrollTop":value},700); //value값으로 스크롤 이동
    });





    // //년도 tap 클릭 시 스크롤 이동 - if값 이용
    // $('.year_tab a').click(function(e){
    //     e.preventDefault();

    //     var value = 0;
    //     var calc = 120;

    //     if($(this).is('.link1')){
    //         value= $('.history_box1 p:eq(0)').offset().top - calc; 
    //     }else if($(this).is('.link2')){
    //         value= $('.history_box1 p:eq(1)').offset().top - calc; 
    //     }else if($(this).is('.link3')){
    //         value= $('.history_box1 p:eq(2)').offset().top - calc; 
    //     }else if($(this).is('.link4')){
    //         value= $('.history_box1 p:eq(3)').offset().top - calc; 
    //     }else if($(this).is('.link5')){
    //         value= $('.history_box1 p:eq(4)').offset().top - calc; 
    //     }

    //     $("html,body").stop().animate({"scrollTop":value},700); //value값으로 스크롤 이동
    // });

    // //수상 tap 클릭 시 스크롤 이동 - if값 이용
    // $('.grade_tab a').click(function(e){
    //     e.preventDefault();

    //     var value = 0;
    //     var calc = 120;

    //     if($(this).is('.link6')){  //link1 클래스를 가지느냐? 가지고 있으면 참, 없으면 거짓 => is('.link')
    //         value= $('.history_box2 p:eq(0)').offset().top - calc; 
    //     }else if($(this).is('.link7')){
    //         value= $('.history_box2 p:eq(1)').offset().top - calc; 
    //     }else if($(this).is('.link8')){
    //         value= $('.history_box2 p:eq(2)').offset().top - calc; 
    //     }else if($(this).is('.link9')){
    //         value= $('.history_box2 p:eq(3)').offset().top - calc; 
    //     }else if($(this).is('.link10')){
    //         value= $('.history_box2 p:eq(4)').offset().top - calc; 
    //     }

    //     $("html,body").stop().animate({"scrollTop":value},700); //value값으로 스크롤 이동
    // });

    
});