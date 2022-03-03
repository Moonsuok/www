$(document).ready(function(){

    //약관 모두 체크/해제
    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);
    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);
    });
        
    //회원가입 개인정보 동의 ------------------------------------
    
    $('.check_agree').on('click',check_agree);
    
    function check_agree(e){
        var checkboxLength=$('input[type="checkbox"]').length;
			// checkbox 타입의 input 의 개수 = 체크박스의 총개수 = 5개
        var checkedLength=$('input[type="checkbox"]:checked').length;   
            //체크가 되어있는 체그박스 개수
            //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
            e.preventDefault();
        } else{
            location.href="member_form.php";   //회원가입 폼 입력 페이지로 이동
        }
    }
    
   });


function join_cancel(){
    history.go(-1);
    //또는 location.href="index.html";   //홈으로 이동
}

















