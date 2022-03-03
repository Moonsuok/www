// JavaScript Document
$(document).ready(function () {
//FAQ open close
	var article = $('.faq_box .article');  //모든 질문의 답변 리스트
	article.find('.answer').slideUp(100); // 모든 답변 close
    article.find('span').html('<i class="fas fa-angle-down"></i>');
    $('.faq .article:first').find('.answer').slideDown(100);  //첫번째 질문의 답변만 open
    $('.faq .article:first').find('span').html('<i class="fas fa-angle-up"></i>');
	
	$('.faq .article .question a').click(function(e){  // 각각의 질문을 클릭 시
	    e.preventDefault();  
        var myArticle = $(this).parents('.article'); //클릭한 해당 li
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide(=답변 닫힘 상태)라면
            article.find('.answer').slideUp(100); //모든 답변 close
            article.removeClass('show').addClass('hide'); // 모든 리스트의 클래스 hide로 교체
            article.find('span').html('<i class="fas fa-angle-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // 해당 li 클래스에 show 
            myArticle.find('.answer').slideDown(100);  //해당 리스트의 답변 open  
            myArticle.find('span').html('<i class="fas fa-angle-up"></i>');
        } else {  // 클릭한 해당 리스트의 상태가 show(=답변 열림 상태)라면
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.answer').slideUp(100);  //해당 리스트의 답변 close
            myArticle.find('span').html('<i class="fas fa-angle-down"></i>');
        }  
    });
  

  //모두여닫기
    $('.all').toggle(function(e){ 
        e.preventDefault();
        article.find('.answer').slideDown(100);   //모든 li의 답변 open
        article.removeClass('hide').addClass('show');  //모든 li의 클래스 hide->show change
        $(this).html('<i class="fas fa-chevron-circle-up"></i><span class="hidden">모두닫기</span>');
    },function(e){ 
        e.preventDefault();
        article.find('.answer').slideUp(100);   //모든 li 답변 close
        article.removeClass('show').addClass('hide');  //모든 li의 클래스 show->hide change
        $(this).html('<i class="fas fa-chevron-circle-down"></i><span class="hidden">모두열기</span>');
    });


//tabs
var cnt=5;  //탭메뉴 개수 ***
    $('.content_area .faq_box:eq(0)').show(); // 첫번째 탭 내용만 open
    $('.content_area .tab:eq(0)').parent().css('border-top-color','#ed1c24'); //첫번째 탭메뉴 활성화
      
    $('.content_area .tab').click(function(e){
        e.preventDefault();   
          
        var ind = $(this).index('.content_area .tab'); 
  
        $(".content_area .faq_box").hide(); //모든 탭 hide
        $(".content_area .faq_box:eq("+ind+")").fadeIn('slow'); //클릭한 해당 탭내용만 천천히 open
        $('.sub_tab li').css('border-top-color','#ccc'); //모든 탭메뉴를 비활성화
        $(this).parent().css('border-top-color','#ed1c24'); // 클릭한 해당 탭메뉴만 활성화
  
    });
}); 