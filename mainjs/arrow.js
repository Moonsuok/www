// JavaScript Document

$(document).ready(function () {
    var pcnt=1;  // 카운터=순서
    var totalcnt=2; // 총 개수   ****

   //$('.news_inner ul:eq(0)').show();
    
$('.RightBtn').click(function (e) {
   e.preventDefault();
   pcnt++;  // 카운터를 1씩 증가
    if(pcnt>totalcnt){  //카운터가 2가되면
       pcnt=1;  //카운터를 1로 바꾼다
    }
    
    $('.news_inner ul').hide();
    $('.news_inner ul:eq('+ (pcnt-1) +')').fadeIn('slow');

    //$('.news ul').first().appendTo('.news .news_inner');  //첫번째꺼 제일 밑으로 보내기
    });


    $('.leftBtn').click(function (e) {
       e.preventDefault();
      pcnt--;	 //카운트 1씩 감소
      if(pcnt<1){  //1보다 작아지면(=0)
       pcnt=totalcnt;  //2으로 바꾼다 총개수..
      }
        
      $('.news_inner ul').hide();
      $('.news_inner ul:eq('+ (pcnt-1) +')').fadeIn('slow');
  
      //$('.news ul').last().prependTo('.news .news_inner'); //prependTo 가장 위로 보내기 
    });

    $('.news_inner a').click(function (e) {
        e.preventDefault();
     });
});