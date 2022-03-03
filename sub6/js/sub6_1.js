$(document).ready(function(){
    // 체크박스 해제 시 form 비활성화
    $('#contactForm,.row input,.row textarea,#content .send button').addClass('blocked');
    $('.row input,.row textarea,#content .send button').attr('disabled','disabled');
    
    
    $("#check01").change(function(){
        if($("#check01").is(":checked")){//체크박스 체크되면
            $('#contactForm,.row input,.row textarea,#content .send button').removeClass('blocked');
            $('.row input,.row textarea,#content .send button').removeAttr('disabled');
        }else{//체크박스 해제되면
            $('#contactForm,.row input,.row textarea,#content .send button').addClass('blocked');
            $('.row input,.row textarea,#content .send button').attr('disabled','disabled');
        }
    });
});