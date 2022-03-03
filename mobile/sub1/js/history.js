//스티키&스크롤 
$(document).ready(function () {

    var smh= $('.visual').height() + 100;
    var h1 = $('.history_box p:eq(0)').offset().top - 100;
    var h2 = $('.history_box p:eq(1)').offset().top - 100;
    var h3 = $('.history_box p:eq(2)').offset().top - 100;
    var h4 = $('.history_box p:eq(3)').offset().top - 100;
    var h5 = $('.history_box p:eq(4)').offset().top - 100;

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다

        //sticky menu 처리
        if (scroll > smh) {
            $('#content .content_area .navBox').addClass('navOn'); 
            $('header').hide();
        } else {
            $('#content .content_area .navBox').removeClass('navOn'); 
            $('header').show();
        }

        $('#content .navBox li a').removeClass('spy'); //모든 서브메뉴 비활성화

        //스크롤의 거리의 범위를 처리
        if (scroll >= h1 && scroll < h2) {
            $('#content .navBox li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성
        } else if (scroll >= h2 && scroll < h3) {
            $('#content .navBox li:eq(1)').find('a').addClass('spy'); //두번째 서브메뉴 활성화
        } else if (scroll >= h3 && scroll < h4) {
            $('#content .navBox li:eq(2)').find('a').addClass('spy'); //세번째 서브메뉴 활성화
        } else if (scroll >= h4 && scroll < h5) {
            $('#content .navBox li:eq(3)').find('a').addClass('spy'); //네번째 서브메뉴 활성화
        } else if (scroll >= h5) {
            $('#content .navBox li:eq(4)').find('a').addClass('spy'); //다섯번째 서브메뉴 활성화
        } 
    });

    //년도 tap 클릭 시 스크롤 이동 - index값 이용
    $('.year_tab a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.year_tab a');
        var gap = 50;
        var value = $('.history_box p:eq(' + ind + ')').offset().top - gap;

        $("html,body").stop().animate({"scrollTop":value},700); //value값으로 스크롤 이동
    });
});