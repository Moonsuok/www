

$(document).ready(function(){
    //$('#content').addClass('album');

    $('.view1').click(function(e){
        e.preventDefault();
        $('#content').removeClass();
        $('#content').addClass('album');
        
    });
    $('.view2').click(function(e){
        e.preventDefault();
        $('#content').removeClass();
        $('#content').addClass('list');
    });
});