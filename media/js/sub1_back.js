$(document).ready(function(){
//visual
    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top',screenHeight);

    if( screenSize > 768){
        $('#imgBG').attr('src','./images/sub1_visual.png');
    }
    if(screenSize <= 768){
        $('#imgBG').attr('src','./images/sub1_visual_768.png');
    }
    
    $(window).resize(function(){   
    screenSize = $(window).width(); 
    screenHeight = $(window).height();
        
    $("#content").css('margin-top',screenHeight);
        
    if( screenSize > 768){
        $('#imgBG').attr('src','./images/sub1_visual.png');
    }
    if(screenSize <= 768){
        $('#imgBG').attr('src','./images/sub1_visual_768.png');
    }
    }); 

    $('.down').click(function(){
		screenHeight = $(window).height();
		$('html,body').animate({'scrollTop':screenHeight}, 700);
	});


//scroll animation
    var h1 = $('.plot1').offset().top - 200;
    var h2 = $('.seperation:eq(2)').offset().top - 200;
    var h0 = $('.plot2').offset().top - 200;

    //sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); //스크롤top의 좌표 담기

        if (scroll >= h1 && scroll < h2) {
            $('.plot1 .mask img').addClass('sticky'); 
        } else {
            $('.plot1 .mask img').removeClass('sticky');
        }
    });

    //zoom 
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(); //스크롤top의 좌표 담기

        if (scroll >= h0 && scroll < h2) {
            $('.plot2 .img_box img').addClass('zoom'); 
        } else {
            $('.plot2 .img_box img').removeClass('zoom');
        }
    });
});


