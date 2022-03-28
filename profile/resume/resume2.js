
$(document).ready(function() {
   //topMenu   
   $('.topMove').hide();
           
   $(window).on('scroll',function(){ 
      var scroll = $(window).scrollTop(); 

      if(scroll > 900){       
          $('.topMove').fadeIn('slow'); 
      }else{
          $('.topMove').fadeOut('fast'); 
      }
   });
 
   $('.topMove').click(function(e){
      e.preventDefault(); 
      $("html,body").stop().animate({"scrollTop":0},1000);  
    });      


    //tab
    $('.tab').toggle(function(e){
        e.preventDefault();
        $(this).parent('h2').next('ul').slideUp();
        $(this).children('i').css({transform: 'rotate(180deg)'});
    }, function(e){
        e.preventDefault();
        $(this).parent('h2').next('ul').slideDown();
        $(this).children('i').css({transform: 'rotate(0)'});
    });
});
