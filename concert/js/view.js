$(document).ready(function(){
    $('#content').addClass('album');

    $('.view1').click(function(e){
        e.preventDefault();
        $('#content').addClass('album');
        $('#content').removeClass('list');
    });
    $('.view2').click(function(e){
        e.preventDefault();
        $('#content').addClass('list');
        $('#content').removeClass('album');
    });
});