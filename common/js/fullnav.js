
$(document).ready(function() {
  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:470},'fast').clearQueue();            //높이는 좀 더 넉넉하게 줘도 됨
       },function() {
          $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:231},'normal').clearQueue();
     });
     
/*      //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#ed1c24');
       },function() {
          $('.depth1',this).css('color','#333');
     }); */

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:470},'fast').clearQueue();
        $(this).css('color','#ed1c24');
     });

     $('ul.dropdownmenu li.menu .depth1').on('blur', function () {        
      $(this).css('color','#333');
   });

   $('ul.dropdownmenu li.menu ul li a').on('focus', function () {        
      $(this).css('color','#ed1c24');
   });

   $('ul.dropdownmenu li.menu ul li a').on('blur', function () {        
      $(this).css('color','#666');
   });

    $('ul.dropdownmenu li.m6 li:last a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:231},'normal').clearQueue();
    });



    //상단으로 이동 topMenu
    $('.topMove').hide();  //처음엔 안보이게
           
    $(window).on('scroll',function(){   //스크롤이벤트 시작하겠다! (스크롤의 변화가 생기면)
         var scroll = $(window).scrollTop();  //스크롤의 거리 출력
        
        
         $('.text').text(scroll);   //스크롤 거리를 text클래스한테 출력
         if(scroll>900){         //스크롤 거리가 y 값보다 커지면
             $('.topMove').fadeIn('slow');   //topMove가 천천히 생겨나
         }else{
             $('.topMove').fadeOut('fast');  //아니면 topMove가 빠르게 사라져
         }
    });
  
     $('.topMove').click(function(e){
      e.preventDefault();  //href="#"속성을 막아주는 메소드(안막아주면 스크롤 진동현상 일어날 수 있음)   
         //topMove를 클릭하면 상단으로 스르륵 이동합니다.  
        $("html,body").stop().animate({"scrollTop":0},1000);   //스크롤 움직이는 건 무조건 html, body 한번에 잡아야함
     });         //"scrollTop":0 (스크롤 0만큼 올라가라/만약 100이면 100거리만큼만 올라가라)

});
