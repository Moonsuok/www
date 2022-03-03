
$(document).ready(function(){
    //객체배열(json)

    //합성수지
    var prd_con = [
        {
            title:'GPPS<span>General Purpose Polystyrene</span>', 
            explan:'KUMHO GPPS는 강도가 높고 성형 가공성이 우수하여 가전제품, 구조부품, 일상잡화에 사용되는 범용 수지입니다. 무착색, 무첨가로 고도의 광택과 빛갈 그리고 투명성을 가진 견고하고 강성있는 재료로, 광범위한 착색이 용이하며 성형품은 여러 방법에 의해 장식되기 때문에 유용하게 사용됩니다.', 
            sub1:'<span>· 1회용 컵</span><span>· 광학</span><span>· 건축자재</span><span>· 전자제품 부품</span>', 
            sub2:'<span>· 투명성, 착색성, 전기적 특성, 내수성, 무독성, 성형가공성, 치수안정성 우수</span><span>· 용융점도가 낮고 가열분해가 잘 일어나지 않아서 성형가공(열성형과 발포성형) 용이</span>', 
            sub3:'<span>· GPPS : GP 125, GP 125EB, GP 125E, GP 150K, GP 150I, GP 150E</span>'
        },
        {
            title:'HIPS<span>High Impact Polystyrene</span>', 
            explan:'PS와 고무를 접목시켜 충격강도 및 성형가공성이 우수 가전제품, 구조부품, 일상잡화에 사용되는 범용 수지입니다.', 
            sub1:'<span>· 전자제품 부품</span><span>· 일용잡화</span><span>· 식품용기</span><span>· 잡화류</span>', 
            sub2:'<span>· 내충격성, 전기적 특성, 내수성, 무독성, 성형가공성, 치수안정성 우수</span><span>· 미국FDA 및 EU 식품위생관련 규격에 적합하며, grade별로 다양한 용도에 만족시킴</span>', 
            sub3:'<span>· 일반 : HI 425, HI 425TVL, HI 425TV, HI 450W, HI 425E, HI 425EH, HI 425EP, HI 425ER/HI470R, HI 450PG, MIB IT, MIB 237</span><span>· 난연 : HFH 402ND, HFH 407, HFH 430U, HFH 412, HFH 405</span>'
        },
        {
            title:'ABS<span>Acrylonitrile Butadiene Styrene</span>', 
            explan:'최종 성형품의 치수 안정성과 표면 광택이 우수하고, 자동차 및 가전제품, 일상잡화 등 수요처가 다양한 대표적인 수지 제품입니다.', 
            sub1:'<span>· 완구</span><span>· 가전제품</span><span>· 자동차</span><span>· 잡화</span><span>· 건축자재</span>', 
            sub2:'<span>· 도금과 도장, 증착, 접착 등 2차 가공에 적합한 물성 특성을 보유</span><span>· 사출과 압출, 중공성형 등 다양한 가공 방법으로 고객의 용도에 맞춰서 적용 가능</span>', 
            sub3:'<span>· 일반 : ABS 775/775EG/775T, ABS ER872M, ABS BM510/BM530/BM533, ABS H2938/H2938Z, ABS HU650ZW, ABS 730, ABS HU600/HU621/HU650, ABS HGX4500, ABS H2938DS/H2938L, ABS HU600DS/HU601, ABS HU651, ABS HU600PF</span><span>· 난연 : HFA 703/707, HFA 451/452/456/462, HFA 705/700HT</span>'
        },
        {
            title:'EP<span>Engineering Plastics</span>', 
            explan:'범용 플라스틱 대비 금속류나 열경화성 수지의 대체로 사용되며, 성형 가공성 우수하여 자동차 부품 및 정밀기계 분야 등 다양한 분야에 적용되는 수지 제품입니다.', 
            sub1:'<span>· 자동차</span><span>· 가전제품</span><span>· 잡화</span><span>· 건축자재</span>', 
            sub2:'<span>· 재질별 우수한 기계적 물성과 특성을 갖춘 다양한 제품 보유</span><span>· 다양한 고객의 Needs에 맞춘 우수한 성형 가공성 보유</span>', 
            sub3:'<span>· ABS/PC Alloy, ABS/PBT/PC Alloy, ABS/PA Alloy, 내후성 AES 수지, 내후성 ASA 수지, GF 강화수지, MPPO 수지, 고광택 수지, ABS/PLA alloy</span>'
        },
        {
            title:'EPS<span>Expandable Polystyrene</span>', 
            explan:'폴리스티렌(PS) 수지에 발포제를 함침시킨 발포성 수지로, 제품내 잔류 휘발물질이 적은 친환경 제품입니다. EPS는 용도에 따라 포장용(일반용), 건축용(자기소화, 단열강화용), 특수용으로 구분되고 있습니다.', 
            sub1:'<span>· 부자</span><span>· 농수산물 포장재</span><span>· 가전제품 포장제</span><span>· 건축용 판물</span><span>· 샌드위치 판넬</span>', 
            sub2:'<span>· 단열성, 완충성, 방수성, 방음성이 우수</span><span>· 가격, 강도, 경량성, 취급 용이성 등의 장점으로 인해 사용분야가 다양</span>', 
            sub3:'<span>· 일반용(포장용) : EPS GN12, EPS GN16, EPS GN20, EPS GN30</span><span>· 자기소화용 : SEPS N12, SEPS N16, SEPS N20, SEPS N30</span><span>· Hy-Cycle용 : EPS GN20HC, SEPS N20HC, SEPS N20SC, EPS GN30HC, SEPS N16HC, SEPS N30HC</span>'
        },
        {
            title:'ENERPOR<span>ENERPOR</span>', 
            explan:'종래의 발포폴리스티렌에 결정구조상 복사열 흡수 개념을 도입하여 혁신적으로 단열 성능을 향상시킴으로써 고유가 시대에 에너지 절약과 환경 보호에 부합되는 신개념의 단열재 원료입니다.', 
            sub1:'<span>· 건축용 판물</span><span>· 농수산물 포장재</span><span>· 층간음 완충재</span>', 
            sub2:'<span>· 가등급, 고 열효율 단열재</span><span>· 합리적 가격, 안목치수 적용 용이(내, 외벽 슬림화)</span><span>· 웰빙 단열재 (습기, 세균 차단)</span>', 
            sub3:'<span>· ENERPOR : EPOR 20I, EPOR 30I, EPOR 16S, EPOR 20D, EPOR 30D</span>'
        },
        {
            title:'SAN<span>Styrene Acrylonitrile</span>', 
            explan:'성형품의 투명성과 고강성, 내약품성에 적합한 수지 제품으로서 전기전자 제품, 일상잡화, ABS 및 각종 컴파운딩 등에 적용함니다.', 
            sub1:'<span>· 가전제품</span><span>· 화장품</span><span>· 컴파운딩</span><span>· 잡화</span><span>· 건축자재</span>', 
            sub2:'<span>· 고투명성, 강성, 내마모성, 내약품성 등 다양한 품종으로 적용</span><span>· 성형시 열이력에 의한 황색도 증가를 Blue tint 첨가제로 억제 가능</span>', 
            sub3:'<span>· SAN : SAN 300, SAN 310TR, SAN 310CTR, SAN 320, SAN 326, SAN 330I, SAN 300EF, SAN 335T, SAN 340EF, SAN 350, SAN 350HW</span>'
        }
      ];

    $('.product .pop_menu').click(function(e){
        e.preventDefault();
        var txt1 ='';
        var txt2 ='';
        var ind = $(this).index('.pop_menu');
  
        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');

        $('.popup .prd_info img').attr('src','./images/content2/product_'+(ind+1)+'.jpg');

        txt1+= '<dl>';
        txt1+= '<dt>'+prd_con[ind].title+'</dt>';
        txt1+= '<dd>'+prd_con[ind].explan+'</dd>';
        // txt+= '<dd>제품설명1 : '+prd_con[ind].sub1+'</dd>';
        // txt+= '<dd>제품설명2 : '+prd_con[ind].sub2+'</dd>';
        // txt+= '<dd>제품설명2 : '+prd_con[ind].sub3+'</dd>';
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
    });

    $('.popup .close_btn, .modal_box').click(function(e){
        e.preventDefault();
        $('.modal_box').hide();
        $('.popup').hide();
    });
  });