<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //세션변수
    //view.php?num=7&page=1

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;   // 글 조회수 증가시킴

	$sql = "update greet set hit=$new_hit where num=$num";
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>고객지원-공지사항-게시글보기</title>
<link href="../common/css/common.css" rel="stylesheet">
<link href="../sub6/common/css/sub6common.css" rel="stylesheet">
<link href="./css/view.css" rel="stylesheet">

<script>
function del(href) //delete.php?num=7
{
    if(confirm("삭제한 자료는 복구 할 수 없습니다.\n\n정말 삭제하시겠습니까?")) {
        document.location.href = href;
    }
}
</script>
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
			<div id="con_inner">
				<ul id="view_title">
					<li id="view_title1"><b><?= $item_subject ?></b></li>
					<li id="view_title2">
						<span><?= $item_nick ?></span>
						<span><?= $item_date ?>&nbsp;&nbsp;|&nbsp;&nbsp;조회 : <?= $item_hit ?></span>
					</li>	
				</ul>

				<div id="view_content">
					<?= $item_content ?>
				</div>

				<div id="view_button">
					<a href="list.php?page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userlevel==1 || $userid=="suock4843")  //세션변수id==글에저장되어있는id || 관리자 || 관리자
	{
?>
					<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
					<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid)  //로그인이 되면 글쓰기 보여주기
	{
?>
					<a href="write_form.php">글쓰기</a>
<?
	}
?>
				</div>
			</div> <!-- end of con_inner -->
        </div> <!-- end of list content -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>