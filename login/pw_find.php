<?
	session_start();
    @extract($_GET); 
    @extract($_POST); 
    @extract($_SESSION);  
?>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>금호석유화학-비밀번호찾기</title>
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="css/find.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script>
	$(document).ready(function() {

         $(".find").click(function() {    // id입력 상자에 id값 입력시
            var id = $('.find_id').val(); //green2
            var name = $('.find_name').val(); //홍길동
            var hp1 = $('#hp1').val(); 
            var hp2 = $('#hp2').val(); 
            var hp3 = $('#hp3').val(); 

            $.ajax({
                type: "POST",
                url: "find2.php", /*매개변수인 check_id.php파일을 post방식으로 넘기세요*/
                data: "id="+ id+ "&name="+ name+ "&hp1="+hp1+ "&hp2="+hp2+ "&hp3="+hp3,  /*매개변수id도 같이 넘겨줌*/
                cache: false, 
                success: function(data) /*이 메소드가 완료되면 data라는 변수 안에 echo문이 들어감*/
                {
                     $("#loadtext").html(data); /*span안에 있는 태그를 사용할것이기 때문에 html 함수사용*/
                }
            });
             
        $("#loadtext").addClass('loadtexton');     
        }); 

    });
</script>
</head>
<body>
    <div id="wrap">
        <h1><a href="../index.html" class="logo">금호석유화학로고</a></h1>
	    <div id="content">
            <form  name="find" method="post" action="find2.php"> 
	    	    <div class="title">
	    	    	<h2>비밀번호찾기</h2>
	    	    	<p>가입 시 입력하신 정보로 비밀번호를 찾아드립니다.</p>
	    	    </div>

	    	    <div id="login_form">
	    		<!-- <div class="clear"></div> -->
	    		    <div id="login2">
	    			    <div id="id_input_button">
	    			    	<fieldset>
                                <input class="find_input find_name" type="text" name="name" placeholder="이름을 입력해주세요. (ex. 홍길동)">
                                <input class="find_input find_id" type="text" name="id" placeholder="아이디를 입력해주세요. (ex. test)">
                                <div class="telBox">
                                    <label class="hidden" for="hp1">연락처 앞3자리</label>
                                    <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요." class="find_input">
                                        <option>010</option>
                                        <option>011</option>
                                        <option>016</option>
                                        <option>017</option>
                                        <option>018</option>
                                        <option>019</option>
                                    </select> -
                                    <label class="hidden" for="hp2">연락처 가운데3자리</label>
                                    <input class="find_input" type="text" id="hp2" name="hp2" title="연락처 가운데3자리를 입력하세요." maxlength="4" placeholder="(ex. 1111)" required> -
                                    <label class="hidden" for="hp3">연락처 마지막3자리</label>
                                    <input class="find_input" type="text" id="hp3" name="hp3" title="연락처 마지막3자리를 입력하세요." maxlength="4" placeholder="(ex. 2222)" required>
                                </div>
                                <input type="button" value="비밀번호찾기" class="find">
                            </fieldset>

                            <span id="loadtext"></span>

                            <ul class="go">
                                <li><a href="login_form.php"><i class="fas fa-sign-in-alt"></i> 로그인하기</a></li>
                                <li>아이디를 잊으셨나요?<a href="id_find.php"> 아이디 찾기</a></li>
                            </ul>
	    			    </div>
	    			    <!-- <div class="clear"></div>
                        <div id="login_line"></div> -->
	    			    <div id="join_button">
                            <p>아직도 회원이 아니신가요?</p>
                            <a href="../member/member_check.html" class="go_join">회원가입</a>
                        </div>
	    		    </div>			 
	    	    </div> <!-- end of form_login -->
	        </form>
	    </div> <!-- end of content -->
    </div> <!-- end of wrap -->
</body>
</html>