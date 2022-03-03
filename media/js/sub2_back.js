$(document).ready(function(){
//visual
    var screenSize = $(window).width();
    var screenHeight = $(window).height();

    $("#content").css('margin-top',screenHeight);

    if( screenSize > 768){
        $('#imgBG').attr('src','./images/sub2_visual.png');
    }
    if(screenSize <= 768){
        $('#imgBG').attr('src','./images/sub2_visual_768.png');
    }
    
    $(window).resize(function(){   
    screenSize = $(window).width(); 
    screenHeight = $(window).height();
        
    $("#content").css('margin-top',screenHeight);
        
    if( screenSize > 768){
        $('#imgBG').attr('src','./images/sub2_visual.png');
    }
    if(screenSize <= 768){
        $('#imgBG').attr('src','./images/sub2_visual_768.png');
    }
    }); 

    $('.down').click(function(){
		screenHeight = $(window).height();
		$('html,body').animate({'scrollTop':screenHeight}, 700);
	});
});


