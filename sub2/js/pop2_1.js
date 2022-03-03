
$(document).ready(function(){
    //객체배열(json)

    //합성고무
    var prd_con = [
        {
            title:'SBR<span>Styrene Butadiene Rubber</span>', 
            explan:'KUMHO SBR은 Styrene과 Butadiene을 저온 유화 중합하여 제조한 합성고무 제품입니다. SBR은 천연고무(NR)에 비해 품질이 균일하고 특히 내열성과 내마모성이 우수하며, 타이어, 신발, 산업용품 등의 재료로 널리 사용되고 있습니다.', 
            sub1:'<span>· 타이어</span><span>· 신발</span><span>· 고무호스</span><span>· 자동차부품</span>', 
            sub2:'<span>· 가공성 우수</span><span>· 천연고무에 비해 내마모성, 내열성 우수</span>', 
            sub3:'<span>· SBR 1500 Series : SBR 1500, SBR 1500NF, SBR 1502, SBR 1502NF, SBR 1502G, SBR 1507L, SBR 1507</span><span>· SBR 1700 Series : SBR 1712, SBR 1712G, SBR 1721, SBR 1723, SBR 1739, SBR 1745T, SBR 1783, SBR 1789, SBR 1793, SBR 1778K</span>'
        },
        {
            title:'Latex<span>Latex</span>', 
            explan:'스타이렌-부타디엔 라텍스(Styrene Butadiene Latex) 및 카르복시 변성 스타이렌-부타디엔 라텍스 (Carboxyl 변성 Styrene Butadiene Latex)입니다.', 
            sub1:'<span>· 장갑</span><span>· 라텍스 폼</span><span>· 제지</span><span>· 토목 및 건축</span><span>· 카페트</span>', 
            sub2:'<span>· 100 Grade - 높은 접착력, 우수한 작업성 및 발포성, 섬유 부직포 기타 접착제 분야에 최적화</span><span>· 200 Grade - 모든 제지용 coater 및 제품 처방에 적용 가능 라텍스</span><span>· 300 Grade - 고고형분, 저점도 제품 및 건축, 건설용의 라텍스</span>', 
            sub3:'<span>· SB Latex : KSL 106, KSL 150, KSL 202, KSL 203, KSL 215, KSL 252, KSL 2601, KSL 341, KSL 362, KSL 363</span><span>· NBR Latex : KNL 830, KNL 834, KNL 850, KNL 860, KNL 870</span>'
        },
        {
            title:'NBR<span>Acrylonitrile Butadiene Rubber</span>', 
            explan:'KUMHO KNB는 아크릴로니트릴과 부타디엔을 저온 유화중합하여 만든 공중합체로서 내유성과 내약품성이 우수한 합성고무 제품입니다. 당사의 NBR 제품은 롤(Roll)권취성, 배합 분산성 및 압출성 등 작업성이 양호하고 가황 특성이 적절하여 가공이 용이하며, 내유성이 요구되는 팩킹, 가스켓, 호스, 롤, 신발, 가전제품 부품 등에 사용됩니다.', 
            sub1:'<span>· 연료호스</span><span>· 오일호스</span><span>· Seal</span><span>· Gasket</span><span>· 프린트롤러</span><span>· 건축용 발포단열재</span>', 
            sub2:'<span>· 우수한 내유특성, 전기전도성</span><span>· 가공성과 기계적물성 Balance 우수</span>', 
            sub3:'<span>· NBR : KNB 1845, KNB 25LM, KNB 25M, KNB 25H, KNB 3345, KNB 35LL, KNB 35L, KNB 35LM, KNB 35M, KNB 35H, KNB 0230L, KNB 40M, KNB 40H, KNV 0072S, KNV 0072M, KNV 0072H, KNV 0072DM</span>'
        },
        {
            title:'NdBR<span>Ultra High-cis Polybutadiene Rubber</span>', 
            explan:'KUMHO NdBR은 네오디뮴 촉매를 사용하여 제조한 ultra high-cis polybutadiene rubber(BR) 입니다. Cis 함량이 97% 이상인 제품으로 내마모성, 반발탄성, 내발열 특성이 우수하여 타이어, 골프공, 신발, 호스, 벨트 제조에 주로 사용되는 합성고무 제품입니다.', 
            sub1:'<span>· 골프공</span><span>· 타이어</span><span>· 신발</span>', 
            sub2:'<span>· 내마모성, 반발탄성 우수</span><span>· 내발열성 우수</span>', 
            sub3:'<span>· NdBR : NdBR 40, NdBR 60, NdBR 80</span>'
        },
        {
            title:'SBS<span>Styrene Butadiene Styrene</span>', 
            explan:'KUMHO KTR은 styrene과 butadiene을 유기용매 내에서 중합한 스타이렌-부타디엔-스타이렌 블록 공중합체(SBS) 제품으로, 분자 구조상 가황 공정 없이도 고탄성이면서 변형 회복성이 우수한 열가소성 탄성체(thermoplastic elastomer)입니다. 당사 자체 기술로 개발하여 IR52 장영실상을 수상한 제품입니다.', 
            sub1:'<span>· 아스팔트 개질제</span><span>· 방수시트</span><span>· 접착제</span><span>· 컴파운딩</span><span>· 플라스틱 개질제</span>', 
            sub2:'<span>· 100 Grade - 흡유성 우수</span><span>· 200 Grade - 저점도로 배합분산성 우수</span><span>· 300 Grade - oil grade로써 가공성 우수</span><span>· 400 Grade -  방사형 분자구조로 기계적 물성 우수</span><span>· 500 Grade - 접착성 우수</span>', 
            sub3:'<span>· SBS : KTR 101, KTR 103, KTR 104, KTR 201, KTR 301, KTR 303, KTR 401, KTR 401H, KTR 602</span>'
        },
        {
            title:'LEADCAP<span>LEADCAP</span>', 
            explan:'아스콘 생산 시 LEADCAP을 아스팔트에 1.5% ~ 3.0%만 섞어줌으로써 생산 온도를 30도 낮출 수 있습니다. 이를 통해 아스콘 생산 에너지를 절약하고 유해가스 배출을 억제하는 한편 도로 개통 시간이 빨라지는, 친환경적 아스콘 첨가제입니다. 아울러 더 낮은 온도에서 다짐이 가능하기 때문에 온도 불균일에 의한 다짐 불량을 사전에 예방할 수 있습니다.', 
            sub1:'<span>· 중온 아스팔트 첨가제</span><span>· 재생 아스팔트 첨가제</span>', 
            sub2:'<span>· 아스팔트의 점도 강하 효과와 더불어 개질효과 있음</span><span>· 아스팔트에의 용해속도가 매우 빠름</span><span>· 별도의 설비 없이도 아스콘 플랜트 현장에 즉시 적용 가능</span>', 
            sub3:'<span>· Leadcap : LEADCAP-c64, LEADCAP-c70, LEADCAP-c76</span>'
        }
      ];

    $('.product .pop_menu').click(function(e){
        e.preventDefault();
        var txt1 ='';
        var txt2 ='';
        var ind = $(this).index('.pop_menu');
  
        $('.modal_box').fadeIn('fast');
        $('.popup').fadeIn('slow');

        $('.popup .prd_info img').attr('src','./images/content1/product_'+(ind+1)+'.jpg');

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