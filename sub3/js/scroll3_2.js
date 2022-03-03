$(document).ready(function () {

    var h1= $('#content .content_area p').offset().top - 200;
    var h2= $('#content .content_area .edu').offset().top - 200;
    var h3= $('#content .content_area .welfare').offset().top - 400;

    $(window).on('scroll',function(){  //스크롤의 좌표가 변하면.. 스크롤 이벤트
        var scroll = $(window).scrollTop();        //스크롤top의 좌표를 담는다.

        if(scroll>=0 && scroll<h1){          //스크롤의 거리의 범위를 처리
           $('.content_area p').addClass('aNi');  //첫번째 내용 콘텐츠 애니메이션
           $('.personnel_system .system li').addClass('aNi');  
        }else if(scroll>=h1 && scroll<h2){
            $('#content .content_area .edu').addClass('moveBox_L');
        }else if(scroll>=h2){
            $('#content .content_area .welfare').addClass('aNi');
        }
    });


});