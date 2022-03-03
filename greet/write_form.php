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
	<title>고객지원-공지사항-글쓰기</title>
	<link href="../common/css/common.css" rel="stylesheet">
	<link href="../sub6/common/css/sub6common.css" rel="stylesheet">
	<link href="./css/write_form.css" rel="stylesheet">
</head>
<body>
	<? include "../common/sub_header.html" ?>
	<div class="visual">
        <img src="../sub6/common/images/visual.jpg" alt="비주얼 이미지">
        <h3>고객지원</h3>
        <p>CS</p>
    </div>
	<div class="sub_menu">
        <ul>
            <li><a href="./sub6_1.html">제품문의</a></li>
            <li class="current"><a href="./list.php">공지사항</a></li>
            <li><a href="./sub6_3.html">오시는길</a></li>
        </ul>
    </div>
	<article id="content">
		<div class="title_area">
            <div class="line_map">
                <p>home   &gt;   고객지원   &gt;   <strong>공지사항</strong></p>
            </div>
            <h2>공지사항</h2>
        </div>

		<div class="content_area">     
			<form name="board_form" method="post" action="insert.php"> 
				<div id="write_form">
					<ul>
						<li class="col1">
							<dl>
								<dt>닉네임</dt>
								<dd><?=$usernick?>
									<span><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</span>
								</dd>
							</dl>
						</li>
						<li class="col2">
							<dl>
								<dt>제목</dt>
								<dd><input type="text" name="subject"></dd>
							</dl>
						</li>
						<li class="col3">
							<dl>
								<dt>내용</dt>
								<dd><textarea rows="15" cols="87" name="content"></textarea></dd>
							</dl>
						</li>
					</ul>
				</div>
				<div id="write_button">
					<input type="submit" value="확인">
					<a href="list.php?page=<?=$page?>">목록</a>
				</div>
			</form>
        </div> <!-- end of list content -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>