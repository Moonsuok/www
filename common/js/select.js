$(document).ready(function () {

    $('.select .arrow').toggle(function () {  //패밀리사이트 클릭
        $('.select .aList').slideDown('slow');  //홀수 클릭 열기
    }, function () {
        $('.select .aList').slideUp('fast');  //짝수 클릭 닫기
    });

    //tab키 처리
    $('.select .arrow').on('focus', function () { //focus는 a태그만 받을 수 있음
        $(this).css('color','#ed1c24');
        $('.select .aList').slideDown('slow');
    });
    $('.select .arrow').on('blur', function () { 
        $(this).css('color','#333');
    });
    $('.select .aList a').on('focus', function () { 
        $(this).css('color','#fff').css('background','#999');
    });
    $('.select .aList a').on('blur', function () { 
        $(this).css('color','#333').css('background','#f2f2f2');
    });


    $('.select .aList li:last a').on('blur', function () { //blur <=> focus
        $('.select .aList').slideUp('fast');
    });
});