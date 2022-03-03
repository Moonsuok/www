var scrh = screenHeight = $(window).height()/2;  //스크린의 높이
var h0 = $('.main_charac li:eq(0)').offset().top + scrh;
var h1 = $('.main_charac li:eq(1)').offset().top + scrh;
var h2 = $('.main_charac li:eq(2)').offset().top + scrh;

window.addEventListener('scroll', function () {
    //console.log(window.scrollY)
  });
  $(document).ready(function () {

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < h0){
            $('.charac_box .main_charac li:eq(0) img').css('right', '-150%');
            $('.charac_box .main_charac li:eq(1) img').css('left', '-150%');
            $('.charac_box .main_charac li:eq(2) img').css('right', '-150%');
        } else if (scroll >= h0 && scroll < h1) {
            $('.charac_box .main_charac li:eq(0) img').css('right', '0');
        } else if (scroll >= h1 && scroll < h2) {
            $('.charac_box .main_charac li:eq(1) img').css('left', '0');
        } else if (scroll >= h2) {
            $('.charac_box .main_charac li:eq(2) img').css('right', '0');
        }
    });  
});