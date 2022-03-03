$(document).ready(function(){
    
//영상 이미지 클릭 시 스크롤 이동
    $('.con_inner ul li a').click(function(e){
        var value=767;       //이동할 스크롤의 거리
        $("html,body").stop().animate({"scrollTop":value},1000); //value값으로 스크롤 이동
    });


//영상 이미지 클릭 시 player 내용 체인지
var player_con = [
    {
        title:'금호석유화학그룹 홍보 영상(Short Ver.)', 
        explain:'우리가 만든 소재에서 더 편리한 세상과 더 안전한 일상이 시작되기에, 소재의 혁신이 곧 일상의 혁신을 만든다는 믿음으로 금호석유화학그룹은 생활의 가장 가까운 곳에서 함께하고 있습니다.', 
        date:'2021.02.15', 
    },
    {
        title:'금호석유화학그룹 뉴비전 선포 기념 홍보 영상(Full Ver.)', 
        explain:'우리가 만든 소재에서 더 편리한 세상과 더 안전한 일상이 시작되기에, 소재의 혁신이 곧 일상의 혁신을 만든다는 믿음으로 금호석유화학그룹은 생활의 가장 가까운 곳에서 함께하고 있습니다. 50년간 석유화학 분야의 전통을 지키며 첨단의 영역을 개척해온 금호석유화학그룹이 이제 새로운 비전으로 다가올 내일을 준비하고 있습니다. "화학 그 이상의 가치로 공동의 미래를 창조하는 솔루션 파트너"', 
        date:'2021.02.14', 
    },
    {
        title:'금호석유화학 홍보영상', 
        explain:'금호석유화학 홍보영상입니다.', 
        date:'2014.05.19', 
    },
    {
        title:'금호석유화학 회사 홍보 Kor', 
        explain:'금호석유화학 국문 회사 홍보 자료입니다.', 
        date:'2014.02.10', 
    },
    {
        title:'금호석유화학 홍보 동영상', 
        explain:'금호석유화학 회사에 기본적인 소개애 대한 이야기 입니다', 
        date:'2014.02.09', 
    },
    {
        title:'금호석유화학 Vision2020영상', 
        explain:'금호석유화학 Vision2020의 대한 이야기 입니다', 
        date:'2014.02.09', 
    }
  ];

  
  $('.con_inner ul li a').click(function(e){
    var txt ='';
    var ind = $(this).index('.con_inner ul li a');

    txt+= '<dl>';
    txt+= '<dt>'+player_con[ind].title+'</dt>';
    txt+= '<dd>'+player_con[ind].explain+'</dd>';
    txt+= '<dd><span>'+player_con[ind].date+'</span></dd>';
    txt+= '</dl>';

    $('.player iframe').next().html(txt);

    });
});