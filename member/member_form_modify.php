<?
    session_start();

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>금호석유화학-회원정보수정</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/member_form.css">

    <script src="../common/js/prefixfree.min.js"></script>
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>

    <script>
        $(document).ready(function() {       
        //nick 중복검사		 
            $("#nick").keyup(function() {    // nick입력 상자에 nick값 입력시
                var nick = $('#nick').val();
            
                $.ajax({
                    type: "POST",
                    url: "check_nick.php",
                    data: "nick="+ nick,  
                    cache: false, 
                    success: function(data)
                    //success -> 데이터 처리가 성공이 되면 함수가 동작한다. 
                    //echo 문자열이 data 에 저장 된다.
                    {
                        $("#loadtext2").html(data);  //data => echo "문자열" 이 저장된
                    }
                });
            });		 
        });	
    </script>

    <script>
        /* function check_id()
        {
         window.open("check_id.php?id=" + document.member_form.id.value,
             "IDcheck", "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
        }
    
        function check_nick()
        {
            window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
                "NICKcheck", "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
        } */
    
        function check_input()
        {
           if (!document.member_form.pass.value)
           {
               alert("비밀번호를 입력하세요");    
               document.member_form.pass.focus();
               return;
           }
       
           if (!document.member_form.pass_confirm.value)
           {
               alert("비밀번호확인을 입력하세요");    
               document.member_form.pass_confirm.focus();
               return;
           }
       
           if (!document.member_form.name.value)
           {
               alert("이름을 입력하세요");    
               document.member_form.name.focus();
               return;
           }
       
           if (!document.member_form.nick.value)
           {
               alert("닉네임을 입력하세요");    
               document.member_form.nick.focus();
               return;
           }
       
           if (!document.member_form.hp2.value || !document.member_form.hp3.value )
           {
               alert("휴대폰 번호를 입력하세요");    
               document.member_form.nick.focus();
               return;
           }
       
           if (document.member_form.pass.value != 
                 document.member_form.pass_confirm.value)
           {
               alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
               document.member_form.pass.focus();
               document.member_form.pass.select();
               return;
           }
       
           document.member_form.submit();
        }
    
        function reset_form()
        {
           document.member_form.id.value = "";
           document.member_form.pass.value = "";
           document.member_form.pass_confirm.value = "";
           document.member_form.name.value = "";
           document.member_form.nick.value = "";
           document.member_form.hp1.value = "010";
           document.member_form.hp2.value = "";
           document.member_form.hp3.value = "";
           document.member_form.email1.value = "";
           document.member_form.email2.value = "";
        
           document.member_form.id.focus();
        
           return;
        }
    </script>

<?
    //$userid='green'; => 세션변수
    
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level]

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
</head>
<body>
    <div class="wrap">
        <header>
            <h1><a class="logo" href="../index.html">금호석유화학로고</a></h1>
        </header>
        <article id="content">
            <form  name="member_form" method="post" action="modify.php"> 
		        <div id="title">
                    <h2>회원정보수정</h2>
                    <p>* 모든 항목은 필수입니다.</p>
		        </div>

		        <div id="form_join">
                    <table>
                        <caption class="hidden">회원가입</caption>
     	                <tr>
     		                <th scope="col"><label for="id">아이디</label></th>
     		                <td><input id="id" type="text" name="text" value="<?= $row[id] ?>" readonly></td>
     	                </tr>
     	                <tr>
     	                	<th scope="col"><label for="pass">비밀번호</label></th>
     	                	<td>
                                <input id="pass" type="password" name="pass" value="" required>
     	                	</td>
     	                </tr>
     	                <tr>
     	                	<th scope="col"><label for="pass_confirm">비밀번호 확인</label></th>
     	                	<td>
                                <input id="pass_confirm" type="password" name="pass_confirm" value="" required>
     	                	</td>
     	                </tr>
     	                <tr>
     	                	<th scope="col"><label for="name">이름</label></th>
     	                	<td>
                                <input id="name" type="text" name="name" value="<?= $row[name] ?>" required>
     	                	</td>
     	                </tr>
     	                <tr>
     	                	<th scope="col"><label for="nick">닉네임</label></th>
     	                	<td>
                                <input id="nick" type="text" name="nick" value="<?= $row[nick] ?>" required>
		                	    <div id="loadtext2" class="loadtext"></div>
     	                	</td>
     	                </tr>
     	                <tr class="phone">
     	                	<th scope="col">휴대폰</th>
     	                	<td>
     	                	    <label class="hidden" for="hp1">전화번호앞3자리</label>
     	                	    <select class="hp" name="hp1" id="hp1"> 
                                    <option value='010'>010</option>
                                    <option value='011'>011</option>
                                    <option value='016'>016</option>
                                    <option value='017'>017</option>
                                    <option value='018'>018</option>
                                    <option value='019'>019</option>
                                </select>  - 
                                <label class="hidden" for="hp2">전화번호중간4자리</label>
                                <input type="text" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" maxlength="4" required> - 
                                <label class="hidden" for="hp3">전화번호끝4자리</label>
                                <input type="text" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>" maxlength="4" required>    			
     	                	</td>
     	                </tr>
     	                <tr class="mail">
     	                	<th scope="col">이메일</th>
     	                	<td>
                                <label class="hidden" for="email1">이메일아이디</label>
     	        	            <input type="text" id="email1" name="email1" value="<?= $email1 ?>" required> @ 
     	        	            <label class="hidden" for="email2">이메일주소</label>
     	        	            <input type="text" id="email2" name="email2" value="<?= $email2 ?>" required>
     	                	</td>
     	                </tr>
                         <tr>
     	                	<td colspan="2">
                                <a class="btn" href="#" onclick="check_input()">저장하기</a>&nbsp;&nbsp;
		                		<a class="btn" href="#" onclick="reset_form()">수정하기</a>
     	                	</td>
     	                </tr>
                    </table>
                </div>
	        </form>
        </article>
    </div>
</body>
</html>
