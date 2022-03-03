// JavaScript Document

$(document).ready(function(){
  var cnt=2;  //탭메뉴 개수 ***
  $('.content_area .sub1').show(); // 첫번째 탭 내용만 열어라
  $('.content_area .sub_tab a:eq(0)').parent().css('border-bottom','3px solid #ed1c24'); //첫번째 탭메뉴 활성화
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
  $('.content_area .sub_tab a').click(function(e){
    e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
        
    var ind = $(this).index('.content_area .sub_tab a');  // 클릭시 해당 index를 뽑아준다
        //console.log(ind);

    $(".content_area .sub").hide(); //모든 탭내용을 안보이게...
    $(".content_area .sub:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 천천히 보여라
    //$(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
    $('.sub_tab li').css('border-bottom','3px solid #ccc'); //모든 탭메뉴를 비활성화
    $(this).parent().css('border-bottom','3px solid #ed1c24'); // 클릭한 해당 탭메뉴만 활성화

   });
 

});