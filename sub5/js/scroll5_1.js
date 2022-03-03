$(document).ready(function () {

    var h1= $('#content .content_area .moral_intro').offset().top - 200;
    var h2= $('#content .content_area .moral_rule').offset().top - 200;


    $(window).on('scroll',function(){  //스크롤의 좌표가 변하면.. 스크롤 이벤트
        var scroll = $(window).scrollTop();        //스크롤top의 좌표를 담는다.

        if(scroll>=0 && scroll<h1){          //스크롤의 거리의 범위를 처리
           $('#content .content_area .moral_intro').addClass('moveBox');  //첫번째 내용 콘텐츠 애니메이션
        }else if(scroll>=h1 && scroll<h2){
            $('#content .content_area .moral_rule').addClass('oPa');
        }else if(scroll>=h2){
            $('#content .content_area .moral_act').addClass('moveBox');
        }
    });


});