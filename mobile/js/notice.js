//공지사항
// JavaScript Document
$(document).ready(function () {
   var position = 0; //최초위치
   var movesize = 18; //이미지 하나의 너비, 이동 폭 
   var timeonoff;
   // 자동 넘어가기
   function moveNitice() {
      position -= movesize; // 17씩 감소
      $('.slide').stop().animate({
            top: position
         }, 'slow',
         function () {
            if (position == -90) {
               $('.slide').css('top', 0);
               position = 0;
            }
         });
   }

   timeonoff = setInterval(moveNitice, 3000);
   $('.slide ul').after($('.slide ul').clone()); // a의 뒤에 b를 복사해서 넣기
   //슬라이드 겔러리를 한번 복제
   $('.slide ul').hover(function () {
      clearInterval(timeonoff);
   }, function () {
      timeonoff = setInterval(moveNitice, 3000);
   });
});
 
 
 