$(document).ready(function () {

//스크롤 단위 애니메이션
    var h1= $('#content .vision').offset().top - 500;
    var h2= $('#content .business').offset().top + 200;
    var h3= $('#content .product').offset().top + 200;
    var h4= $('#content .management').offset().top - 200 ;
    var h5= $('#content .news').offset().top - 100 ;

    $(window).on('scroll',function(){  
        var scroll = $(window).scrollTop();  //스크롤top의 좌표 담기

        if(scroll>=0 && scroll<h1){ 
           $('#content .vision').addClass('boxMove'); 
        }else if(scroll>=h1 && scroll<h2){
            $('#content .business .business_text_con').addClass('boxMove');
        }else if(scroll>=h2 && scroll<h3){
            $('#content .product .product_text_con').addClass('boxMove');
            $('#content .product .product_con').animate({opacity: '1'}, 200);
            $('#content .product .product_con li:eq(0)').animate({top: '0'}, 200);
            $('#content .product .product_con li:eq(1)').animate({top: '0'}, 400);
            $('#content .product .product_con li:eq(2)').animate({top: '0'}, 600);
            $('#content .product .product_con li:eq(3)').animate({top: '0'}, 800);
            $('#content .product .product_con li:eq(4)').animate({top: '0'}, 1000);
        }else if(scroll>=h3 && scroll<h4){
            $('#content div.management').addClass('boxMove2');
        }else if(scroll>=h4 && scroll<h5){
            $('#content .news div.news_text_con').addClass('boxMove');
            $('#content .news div.news_inner').addClass('boxMove');
        }else if(scroll>=h5){
            $('#content .recruit').addClass('oPacity');
        }
    });

//스크롤 이벤트 business 숫자증가
var onoff = false;
    $(window).on('scroll',function(){
        var here = $('#content .business').offset().top -400;
        var scroll = $(window).scrollTop();

     if(scroll >= here && onoff == false){
        onoff = true;

        var memberCountConTxt = 50;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 1000,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(0)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(0)").text(number);
            }
        });

        var memberCountConTxt = 50273;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 1500,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(1)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(1)").text(number);
            }
        });

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        var memberCountConTxt = 48095;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 2000,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(2)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(2)").text(number);
            }
        });

        var memberCountConTxt = 7422;
        $({
            val: 0
        }).animate({
            val: memberCountConTxt
        }, {
            duration: 2500,
            step: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(3)").text(number);
            },
            complete: function () {
                var number = numberWithCommas(Math.floor(this.val));
                $(".big_text:eq(3)").text(number);
            }
        });
     }
    });  


//product 애니메이션
    $('.product_con li').hover(function(){  
        $('.product_con li').css({"width":"16%"});
        $(this).css({"width":"26%"});      //해당 li만 36%너비
        //$(this).find('dl').stop().fadeIn('slow');  //해당 li의 dl(설명) 오픈
        //$(this).find('dl').stop().show();  //해당 li의 dl(설명) 오픈
    }, function(){
        $('.product_con li').css({"width":"18%"}); //li 호버떼면 너비 복구
        //$(this).find('dl').stop().fadeOut('fast');  //dl(설명) 닫기
        //$(this).find('dl').stop().hide();  //dl(설명) 닫기
    }); 


//news 방향키 효과
    var pcnt = 1; // 카운터=순서
    var totalcnt = 2; // 총 개수

    $('.RightBtn').click(function (e) {
       e.preventDefault();
       pcnt++; // 카운터 1씩 증가
       if (pcnt > totalcnt) { //카운터가 2가되면
          pcnt = 1; //카운터를 1로 교체
       }

       $('.news_inner ul').hide();
       $('.news_inner ul:eq(' + (pcnt - 1) + ')').fadeIn('slow');
    });


    $('.leftBtn').click(function (e) {
       e.preventDefault();
       pcnt--; //카운트 1씩 감소
       if (pcnt < 1) { //1보다 작아지면(=0)
          pcnt = totalcnt; //2으로 바꾼다(=총개수)
       }

       $('.news_inner ul').hide();
       $('.news_inner ul:eq(' + (pcnt - 1) + ')').fadeIn('slow');
    });

    /* $('.news_inner a').click(function (e) {
       e.preventDefault();
    }); */

});