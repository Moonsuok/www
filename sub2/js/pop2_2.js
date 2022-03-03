
$(document).ready(function(){
    $('.product .pop_menu').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.pop_menu');
  
        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');
        $('.popup .prd_info img').attr('src','./images/content2/product_'+(ind+1)+'.jpg');
        //$('.popup .prd_info dl').html('dl'+(ind+1));
    });

    $('.popup .close_btn, .modal_box').click(function(e){
        e.preventDefault();
        $('.modal_box').hide();
        $('.popup').hide();
    });
  });

