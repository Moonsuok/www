//스티키&스크롤 
$(document).ready(function () {

    var smh= $('.visual').height()+400;
    var h1 = $('#content .content_area p:eq(0)').offset().top - 350;
    var h2 = $('#content .content_area p:eq(1)').offset().top - 350;
    var h3 = $('#content .content_area p:eq(2)').offset().top - 350;
    var h4 = $('#content .content_area p:eq(3)').offset().top - 350;
    var h5 = $('#content .content_area p:eq(4)').offset().top - 350;
/*     var h6 = $('#content .content_area p:eq(5)').offset().top - 350;
    var h7 = $('#content .content_area p:eq(6)').offset().top - 350;
    var h8 = $('#content .content_area p:eq(7)').offset().top - 350;
    var h9 = $('#content .content_area p:eq(8)').offset().top - 350;
    var h10 = $('#content .content_area p:eq(9)').offset().top - 350; */



    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다

        //sticky menu 처리
        if (scroll > smh) {
            $('#content .content_area .navBox').addClass('navOn'); //스크롤의 거리가 비주얼높이+400px 이상이면 서브메뉴 고정
            $('header').hide();
        } else {
            $('#content .content_area .navBox').removeClass('navOn'); //스크롤의 거리가 비주얼높이+400px 보다 작으면 서브메뉴 원위치
            $('header').show();
        }

        $('#content .navBox li a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!

        //스크롤의 거리의 범위를 처리
        if (scroll >= h1 && scroll < h2) {
            $('#content .navBox li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성
        } else if (scroll >= h2 && scroll < h3) {
            $('#content .navBox li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
        } else if (scroll >= h3 && scroll < h4) {
            $('#content .navBox li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
        } else if (scroll >= h4 && scroll < h5) {
            $('#content .navBox li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
        } else if (scroll >= h5) {
            $('#content .navBox li:eq(4)').find('a').addClass('spy');
            //다섯번째 서브메뉴 활성화
        } 

    });
    
/* 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다

        //sticky menu 처리
        if (scroll > smh) {
            $('#content .content_area .navBox2').addClass('navOn'); //스크롤의 거리가 비주얼높이+400px 이상이면 서브메뉴 고정
            $('header').hide();
        } else {
            $('#content .content_area .navBox2').removeClass('navOn'); //스크롤의 거리가 비주얼높이+400px 보다 작으면 서브메뉴 원위치
            $('header').show();
        }

        $('#content .navBox li a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!

        //스크롤의 거리의 범위를 처리
        if (scroll >= h6 && scroll < h7) {
            $('.link6').addClass('spy');
            //첫번째 서브메뉴 활성
        } else if (scroll >= h7 && scroll < h8) {
            $('.link7').addClass('spy');
            //두번째 서브메뉴 활성화
        } else if (scroll >= h8 && scroll < h9) {
            $('.link8').addClass('spy');
            //세번째 서브메뉴 활성화
        } else if (scroll >= h9 && scroll < h10) {
            $('.link9').addClass('spy');
            //네번째 서브메뉴 활성화
        } else if (scroll >= h10) {
            $('.link10').addClass('spy');
            //다섯번째 서브메뉴 활성화
        } 

    }); */

});