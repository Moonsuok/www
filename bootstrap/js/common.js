$(document).ready(function(){
    // intro
    setTimeout(function(){
        $('.cover').fadeOut();
        
    }, 1500);

    //topMove
    $('.topMove').hide(); 
           
    $(window).on('scroll',function(){ 
        var scroll = $(window).scrollTop(); 
        var vh = $('.carousel-inner').offset().top + 600;
        console.log(vh);
         
        if(scroll > vh){       
            $('.topMove').fadeIn('slow');  
        }else{
            $('.topMove').fadeOut('fast');  
        }
    });     
    
    //identity
    $('.id-imgbox li').hide();
    $('.id-imgbox li:eq(0)').show();
    $('.panel .panel-title a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.panel .panel-title a');

        $('.id-imgbox li').hide();
        $('.id-imgbox li:eq('+(ind)+')').fadeIn('slow');
    });
});