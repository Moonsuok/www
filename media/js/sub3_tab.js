$(document).ready(function(){
    //tab
    var clip = [
        {
            title:'The Dentist Scene', 
            madeby:'Disney/Pixar',
            link:'https://www.youtube.com/embed/3sAWDQjCOeU',
        },
        {
            title:'Marlin and Dory in the Jellyfish Forest', 
            madeby:'Disney/Pixar',
            link:'https://www.youtube.com/embed/pNyUjG3aFEM',
        },
        {
            title:'Welcome to the EAC', 
            madeby:'Disney/Pixar',
            link:'https://www.youtube.com/embed/fiLZhsCpd6c',
        }
    ];

    $('.show_box .tab li a').click(function(e){
        e.preventDefault();
        var txt ='';
        var ind = $(this).index('.show_box .tab li a');

        txt+= '<dt>'+clip[ind].title+'</dt>';
        txt+= '<dd>'+clip[ind].madeby+'</dd>';

        $('.play_box dl').html(txt);
        $('iframe').attr('src', clip[ind].link);
    });
});