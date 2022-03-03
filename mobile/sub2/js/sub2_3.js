
$(document).ready(function(){
    //객체배열(json)

    //정밀화학
    var prd_con = [
        {
            title:'노화방지제<span>Antioxidants</span>', 
            explan:'산소나 오존이 고무와 반응하여 고무 노화를 촉진시키는 연쇄반응을 차단해주는 물질로서 고무에 대한 용해도가 크고 반응성이 없으며, 가황을 방해하지 않아야 합니다. 당사는 착색성이 있어 주로 타이어용 고무에 사용하는 방향족 아민계통과 제품 색상을 오염시키지 않는 페놀류 제품을 생산하고 있습니다.', 
            sub1:'<span>· 방향족 아민계 : 타이어용 합성고무</span><span>· 페놀계 : 색상용 합성고무, 합성수지</span>', 
            sub2:'<span>· 방향족 아민계 : 일광/Ozone균열 방지에 특히 효과가 좋고 굴곡균열 방지에도 유효하며 Blooming성이 있으나 다량 배합이 가능</span><span>· 페놀계 : 분자량이 큰 비오염성 산화방지제 또는 1,2차 동시 산화방지제</span>', 
            sub3:'<span>· 노화방지제(Antioxidant) : KUMANOX 13L, KUMANOX 13P, KUMANOX 3C (IPPD), KUMANOX SP, KUMANOX SP-N, KUMANOX 3020, KUMANOX 5010L</span>'
        },
        {
            title:'가황촉진제<span>Vulcanization Accelerators</span>', 
            explan:'고무 가황 시 반응 시간의 단축 또는 가황제의 사용량을 줄이기 위해 사용하는 물질로 주로 유기촉진게를 사용하며 가황속도가 매우 빠른 Thiuram계, 비교적 빠른 Sulfenamide계, 중가정도의 속도를 나타내는 Guanidine계 촉진제를 공급하고 있습니다.', 
            sub1:'<span>· 가황용 합성고무(타이어, 고무 벨트류, 신발 등)</span>', 
            sub2:'<span>· 가황속도별 제품이 준비되어 있으며, 다양한 고무에 적용가능</span>', 
            sub3:'<span>· 가황촉진제(Vulcanization Accelerators) : KUMAC D (DPG), KUMAC NS (TBBS), KUMAC TS (TMTM)</span>'
        },
        {
            title:'페인트첨가제<span>Paint Additives/Diluent</span>', 
            explan:'Kumanox-3110, 3111 제품은 에폭시페인트 diluent 첨가제로서 기존 Nonylphenol이 갖고 있는 화학적 특징을 포함하며, NP의 위험성을 배제한 환경친화형 제품이다. 특히 경화촉진효과가 우수하고, 점도가 낮아 상용성이 우수한 장점이 있다.', 
            sub1:'<span>· 에폭시페인트 주제</span><span>· 경화제 Part 첨가제용도 (가소제 diluent)</span>', 
            sub2:'<span>· 점도가 낮아 작업성과, self-leveling 효과가 뛰어남</span><span>· 가공성과 기계적물성 Balance 우수경화촉진 효과가 기존 제품보다 향상</span><span>NP-Free 제품으로 환경친화형 제품</span>', 
            sub3:'<span>· 페인트첨가제(Paint Additives/Diluent) : KUMANOX 3110, KUMANOX 3111, KUMANOX 3120 (TSP)</span>'
        }
      ];

    $('.pop .pop_menu').click(function(e){
        e.preventDefault();
        var txt1 ='';
        var txt2 ='';
        var ind = $(this).index('.pop_menu');
  
        $('.popup').fadeIn('slow');

        $('.popup .prd_info img').attr('src','./images/sub2_3_product2_'+(ind+1)+'.jpg');

        txt1+= '<dl>';
        txt1+= '<dt>'+prd_con[ind].title+'</dt>';
        txt1+= '<dd>'+prd_con[ind].explan+'</dd>';
        txt1+= '</dl>';


        txt2+= '<dl>';
        txt2+= '<dt>용도</dt>';
        txt2+= '<dd>'+prd_con[ind].sub1+'</dd>';
        txt2+= '</dl>';

        txt2+= '<dl>';
        txt2+= '<dt>특징</dt>';
        txt2+= '<dd>'+prd_con[ind].sub2+'</dd>';
        txt2+= '</dl>';
        
        txt2+= '<dl>';
        txt2+= '<dt>제품분류</dt>';
        txt2+= '<dd>'+prd_con[ind].sub3+'</dd>';
        txt2+= '</dl>';

        $('.popup .prd_info img').next().html(txt1);
        $('.popup .prd_con').html(txt2);
        $('html').css('overflow','hidden');
        $('.popup').scrollTop(0);
    });

    $('.popup .close_btn, .modal_box').click(function(e){
        e.preventDefault();
        $('html').css('overflow','');
        $('.popup').hide();
    });
  });