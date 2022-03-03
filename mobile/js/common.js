//네비게이션, top, familysite ...

$(document).ready(function () {
//GNB
var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
$(".menu_open").click(function(e) { //메뉴버튼 클릭시
    e.preventDefault();
    
    var documentHeight =  $(document).height();
    $("#gnb").css('height',documentHeight); // 전체 body의 높이를 네비에 높이로 반환

   if(op==false){ //네비가 닫혀있는 상태에서 클릭 시
     $("#gnb").animate({right:0,opacity:1}, 'fast');
     $('#headerArea').addClass('mn_open');
     op=true;
     $('.gnb_modal_box').fadeIn('slow');
   }else{ //네비가 열려있는 상태에서 클릭 시
     $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
     $('#headerArea').removeClass('mn_open');
     op=false;
     $('.gnb_modal_box').fadeOut('fast');
   }

   $('#headerArea .gnb_modal_box').click(function(e){
    e.preventDefault();
    $('.gnb_modal_box').hide();
    $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
    $('#headerArea').removeClass('mn_open');
});
 });


 //2depth 메뉴 교대로 열기 처리 
 var onoff=[false,false,false,false]; //각각의 메뉴가 닫혀있으면(false) / 열려있으면(true)
 var arrcount=onoff.length;  //메뉴의개수 4
 
 //console.log(arrcount);
 
 $('#gnb .depth1 h3 a').click(function(){  //1depth 메뉴를 각각 클릭하면
     var ind=$(this).parents('.depth1').index();  // 0~3
     //console.log(ind);
     
    if(onoff[ind]==false){ //클릭한 depth1의 a가 닫혀있다면
     //$('#gnb .depth1 ul').hide();
     $(this).parents('.depth1').find('ul').slideDown('slow'); //클릭한 해당 메뉴의 2depth open
     $(this).parent('h3').css('border-color','#ed1c24'); //클릭한 해당 메뉴의 h3 border color change
     $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //나머지 메뉴의 2depth close 
     $(this).parents('.depth1').siblings('li').find('h3').css('border-color','#ccc'); //나머지 메뉴의 2depth close 
     for(var i=0; i<arrcount; i++) {
        onoff[i]=false; //모든 메뉴의 상태->false
     }
      onoff[ind]=true;  //자신의 상태만 true
        
      $('.depth1 a b').html('<i class="fas fa-chevron-down"></i><span class="hidden">메뉴열기</span>').css('color','#333'); ;   
      $('.depth1 h3').css('border-color','#ccc');
      $(this).find('b').html('<i class="fas fa-chevron-up"></i><span class="hidden">메뉴닫기</span>').css('color','#ed1c24'); ;   
      $(this).parent('h3').css('border-color','#ed1c24'); 
         
    }else{  //클릭한 해당메뉴가 열려있다면
      $(this).parents('.depth1').find('ul').slideUp('fast'); // 자신의 서브메뉴 close
      $('.depth1 h3').css('border-color','#ccc'); //h3 border color change 
      onoff[ind]=false;   
        
      $(this).find('b').html('<i class="fas fa-chevron-down"></i><span class="hidden">메뉴열기</span>').css('color','#333');  
      $('.depth1 h3').css('border-color','#ccc'); //h3 border color change   
    }
 });




//상단으로 이동 topMenu -------------------------
  $('.topMove').hide();

  $(window).on('scroll', function () { 
    var scroll = $(window).scrollTop(); //스크롤의 거리 출력


    $('.text').text(scroll); 
    if (scroll > 335) {
      $('.topMove').fadeIn('slow'); 
    } else {
      $('.topMove').fadeOut('fast'); 
    }
  });

  $('.topMove').click(function (e) {
    e.preventDefault();   

    $("html,body").stop().animate({
      "scrollTop": 0
    }, 1000); 
  });



//family site --------------------
  $('.select .arrow').toggle(function () { //패밀리사이트 클릭
    $('.select .aList').slideDown('slow'); //홀수 클릭 열기
    $(this).css('color', '#ed1c24');
    $(this).find('b').html('<i class="fas fa-chevron-down"></i><span class="hidden">메뉴닫기</span>').css('color', '#ed1c24');
  }, function () {
    $('.select .aList').slideUp('fast'); //짝수 클릭 닫기
    $(this).css('color', '#333');
    $(this).find('b').html('<i class="fas fa-chevron-up"></i><span class="hidden">메뉴열기</span>').css('color', '#666');
  });
 
  //tab키 처리
  $('.select .arrow').on('focus', function () { //focus는 a태그만 받을 수 있음
    $(this).css('color', '#ed1c24');
    $('.select .aList').slideDown('slow');
    $(this).find('b').html('<i class="fas fa-chevron-down"></i><span class="hidden">메뉴닫기</span>').css('color', '#ed1c24');
  });
  $('.select .arrow').on('blur', function () {
    $(this).css('color', '#333');
  });

  $('.select .aList a').on('focus', function () {
    $(this).css('color', '#fff').css('background', '#999');
  });
  $('.select .aList a').on('blur', function () {
    $(this).css('color', '#333').css('background', '#f2f2f2');
  });


  $('.select .aList li:last a').on('blur', function () { //blur <=> focus
    $('.select .aList').slideUp('fast');
    $('.select .arrow').find('b').html('<i class="fas fa-chevron-up"></i><span class="hidden">메뉴열기</span>').css('color', '#666');
  }); 




});
