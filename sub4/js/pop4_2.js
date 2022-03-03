
$(document).ready(function(){
    //객체배열(json)

    //금호사진
    var photo_con = [
        {
            title:'금호석유화학 예산공장', 
            explain:'금호석유화학 예산 공장 전경입니다.', 
            date:'2021.12.21', 
        },
        {
            title:'금호석유화학 예산공장', 
            explain:'금호석유화학 예산 공장 전경입니다.', 
            date:'2021.12.21', 
        },
        {
            title:'금호석유화학 예산공장', 
            explain:'금호석유화학 예산 공장 전경입니다.', 
            date:'2021.12.21', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 생산 제품입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 내부 전경입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 외부 전경입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 내부 전경입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 야경입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제2공장', 
            explain:'금호석유화학 여수고무제2공장 야경입니다.', 
            date:'2021.12.20', 
        },
        {
            title:'금호석유화학 여수고무제1공장', 
            explain:'금호석유화학 여수고무제1공장 전경입니다.', 
            date:'2021.12.19', 
        },
        {
            title:'금호석유화학 여수고무제1공장', 
            explain:'금호석유화학 여수고무제1공장 전경입니다.', 
            date:'2021.12.19', 
        },
        {
            title:'금호석유화학 여수고무제1공장', 
            explain:'금호석유화학 여수고무제1공장 전경입니다.', 
            date:'2021.12.19', 
        }
      ];

    $('.pop .pop_menu').click(function(e){
        e.preventDefault();
        var txt ='';
        var ind = $(this).index('.pop_menu');
  
        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');

        $('.popup .image img').attr('src','./images/content2/photo_b_'+(ind+1)+'.jpg');

        txt+= '<dl>';
        txt+= '<dt>'+photo_con[ind].title+'</dt>';
        txt+= '<dd>'+photo_con[ind].explain+'</dd>';
        txt+= '<dd>'+photo_con[ind].date+'</dd>';
        txt+= '</dl>';

        $('.popup .image').next().html(txt);
    });

    $('.popup .close_btn, .modal_box').click(function(e){
        e.preventDefault();
        $('.modal_box').hide();
        $('.popup').hide();
    });
  });