$(document).ready(function(){
//visual ---------------------------
var timeonoff; //타이머 처리
var imageCount = 4; //이미지 총개수
var cnt = 1; //이미지 순서 1 2 3 4 1 2 3 4 ...
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

$('.btn1').css('background', '#ed1c24'); //첫번째 불켜
$('.gallery li').hide(); 
$('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..

function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; //카운트 초기화

  cnt++; //카운트 1씩 증가, 4가되면 다시 초기화 0  1 2 3 4 1 2 3 4 ...

  $('.gallery li').hide(); 
  $('.gallery .link' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..

  //  for(var i=1;i<=imageCount;i++){
  //       $('.btn'+i).css('background','#00f'); 
  //   }

  $('.mbutton').css('background', 'rgba(225, 225, 225, .8)'); 
  $('.btn' + cnt).css('background', '#ed1c24'); 

  if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
}

timeonoff = setInterval(moveg, 4000); // 타이머를 동작 1~4이미지를 순서대로 자동 처리
//var 변수 = setInterval( function(){처리코드} , 4000); 
//clearInterval(변수); -> 타이머중지코드


$('.mbutton').click(function (event) {
  var $target = $(event.target); //클릭한 버튼 $target == $(this)
  clearInterval(timeonoff); //타이머 중지     

  //  for(var i=1;i<=imageCount;i++){
  //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
  //    } 
  $('.gallery li').hide(); //모든 이미지 안보인다.

  if ($target.is('.btn1')) { 
    cnt = 1; 
  } else if ($target.is('.btn2')) { 
    cnt = 2;
  } else if ($target.is('.btn3')) {
    cnt = 3;
  } else if ($target.is('.btn4')) {
    cnt = 4;
  } 

  $('.gallery .link' + cnt).fadeIn('slow'); 

  // for(var i=1;i<=imageCount;i++){
  //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
  //   $('.btn'+i).css('width','16');
  // }
  $('.mbutton').css('background', 'rgba(225, 225, 225, .8)'); 
  $('.btn' + cnt).css('background', '#ed1c24');  

  if (cnt == imageCount) cnt = 0; //카운트 초기화

  timeonoff = setInterval(moveg, 4000); //타이머 재시작

});

//bntLeft bntRight 작동
$('.visual .btn').click(function () {

  clearInterval(timeonoff); //타이머 중지

  if ($(this).is('.btnRight')) { // 오른쪽 버튼 클릭
    if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(4)라면 초기화 0
    //if(cnt==imageCount+1)cnt=1;  
    cnt++; 
  } else if ($(this).is('.btnLeft')) { //왼쪽 버튼 클릭
    if (cnt == 1) cnt = imageCount + 1;
    if (cnt == 0) cnt = imageCount;
    cnt--; //카운트 감소
  }

  // for(var i=1;i<=imageCount;i++){
  //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  // }
  $('.gallery li').hide(); //모든 이미지를 보이지 않게.
  $('.gallery .link' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..

  $('.mbutton').css('background', 'rgba(225, 225, 225, .8)'); //버튼 모두불꺼
  $('.btn' + cnt).css('background', '#ed1c24'); //자신 버튼만 불켜 

  // if($(this).is('.btnRight')){
  //   if(cnt==imageCount)cnt=0;
  // }else if($(this).is('.btnLeft')){
  //   if(cnt==1)cnt=imageCount+1;
  // }

  timeonoff = setInterval(moveg, 4000); //타이머 재시작
});

});