$(document).ready(function () {
   //GNB
    var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)

    $(".menu_open").click(function (e) { //메뉴버튼 클릭시
        e.preventDefault();

        var documentHeight = $(document).height();
        $("#gnb ul").css('height', documentHeight); // 전체 body의 높이를 네비에 높이로 반환

        if (op == false) { //네비가 닫혀있는 상태에서 클릭 시
            $("#gnb ul").animate({
                right: 0,
                opacity: 1
            }, 'fast');
            $('#headerArea').addClass('mn_open');
            op = true;
            //$('.gnb_modal_box').fadeIn('slow');
        } else { //네비가 열려있는 상태에서 클릭 시
            $("#gnb ul").animate({
                right: '-100%',
                opacity: 0
            }, 'fast');
            $('#headerArea').removeClass('mn_open');
            op = false;
           //$('.gnb_modal_box').fadeOut('fast');
        }
    });

    var current = 0;  //0->Mini tablet 이하 상황, 1->Mini tablet 이상 상황
    $(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
       var screenSize = $(window).width();  //해상도 감지
       if (screenSize > 768) {  //해상도가 tablet 초과면
          current = 1;
          $("#nav").css({right: 0, opacity: 1});
       }
       if (current == 1 && screenSize <= 768) { //해상도가 소형 tablet 이하면 
          $("#nav").css({right: '-100%', opacity: 0});
          current = 0;
       }
    });

 });