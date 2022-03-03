
// JavaScript Document
$(document).ready(function () {
	var article = $('.faq_box .article');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-angle-down"></i>');
    $('.faq .article:first').find('.answer').slideDown(100);
    $('.faq .article:first').find('span').html('<i class="fas fa-angle-up"></i>');
	
	$('.faq .article .question a').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.answer').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-angle-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.answer').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-angle-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.answer').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-angle-down"></i>');
        }  
    });
  

  //모두여닫기
    $('.all').toggle(function(e){ 
        e.preventDefault();
        article.find('.answer').slideDown(100);   //모든 li의 답변을 열어라
        article.removeClass('hide').addClass('show');  //모든 li의 클래스를 hide에서 show로 바꿔라
        //$(this).text('모두닫기');
        $(this).html('<i class="fas fa-chevron-circle-up"></i><span class="hidden">모두닫기</span>');
    },function(e){ 
        e.preventDefault();
        article.find('.answer').slideUp(100);   //모든 li 답변 닫아라
        article.removeClass('show').addClass('hide');  //모든 li의 클래스를 show에서 hide로 바꿔라
        //$(this).text('모두열기');
        $(this).html('<i class="fas fa-chevron-circle-down"></i><span class="hidden">모두열기</span>');
    });

}); 