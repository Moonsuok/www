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
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>금호석유화학-로그인</title>
	<link href="../common/css/common.css" rel="stylesheet">
	<link href="./css/login.css" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>
</head>
<body>
<div id="wrap">
  <div id="header">
    <header>
		<h1>
			<a class="logo" href="../index.html">금호석유화학로고</a>
		</h1>
	</header>
	<article id="content">
		<form name="member_form" method="post" action="login.php"> 
			<h2>Login</h2>
			<div id="login_form">
				<div id="id_pw_input">
					<ul>
						<li>
							<label class="hidden" for="id">아이디</label>
							<input type="text" name="id" id="id" placeholder="아이디를 입력해주세요.">
						</li>
						<li>
							<label class="hidden" for="pass">비밀번호</label>
							<input type="password" name="pass" id="pass" placeholder="비밀번호를 입력해주세요.">
						</li>
					</ul>						
				</div>
				<div class="find">
                    <ul>
                        <li><i class="fas fa-lock"></i> 보안접속</li>
                        <li>
                            <a href="./id_find.php">아이디 찾기</a>
                            <a href="./pw_find.php">비밀번호 찾기</a>
                        </li>
                    </ul>
                </div>
				<div id="login_button">
					<input class="btn submit" type="submit" value="로그인">
					<a class="btn cancle" href="../index.html">취소</a>
				</div>
				<div class="join">
					<p>금호석유화학 회원가입을 하고 더 많은 서비스를 이용해보세요.</p>
					<a href="../member/member_check.html">회원가입</a>
				</div>
			</div>
		</form>
	</article>
</div>  <!-- end of header -->

</body>
</html>
