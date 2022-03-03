<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       

	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$file_name[0]   = $row[file_name_0];
	$file_name[1]   = $row[file_name_1];
	$file_name[2]   = $row[file_name_2];

	$file_type[0]   = $row[file_type_0];
	$file_type[1]   = $row[file_type_1];
	$file_type[2]   = $row[file_type_2];

	$file_copied[0] = $row[file_copied_0];
	$file_copied[1] = $row[file_copied_1];
	$file_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = str_replace(" ", "&nbsp;", $row[content]);
	$item_content = str_replace("\n", "<br>", $item_content);
	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>고객지원-자료실-게시글보기</title>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
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
            <li><a href="./greet/list.php">공지사항</a></li>
            <li><a href="./sub6_3.html">오시는길</a></li>
            <li class="current"><a href="./list.php">자료실</a></li>
        </ul>
    </div>
	<article id="content">
		<div class="title_area">
            <div class="line_map">
                <p>home   &gt;   고객지원   &gt;   <strong>자료실</strong></p>
            </div>
            <h2>자료실</h2>
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
				<?
					for ($i=0; $i<3; $i++)
					{
						if ($userid && $file_copied[$i])  //로그인 된 상태 및 첨부된 파일이 있다면
						{
							$show_name = $file_name[$i];
							$real_name = $file_copied[$i];
							$real_type = $file_type[$i];
							$file_path = "./data/".$real_name;  //./data/2022_02_24_10_29_18_0.jpg
							$file_size = filesize($file_path);
						
							echo "<i class='fas fa-file'></i><span>&nbsp;첨부파일 : $show_name ($file_size Byte) &nbsp;&nbsp;</span> 
							        <a href='download.php?table=$table&num=$num&real_name=$real_name&show_name=$show_name&file_type=$real_type'>
										<i class='fas fa-download'></i>&nbsp;&nbsp;[저장]
								    </a><br>";
						}
					}
				?>
					<br> <?= $item_content ?>
				</div>

				<div id="view_button">
					<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userlevel==1 || $userid=="suock4843")  //세션변수id==글에저장되어있는id || 관리자 || 관리자
	{
?>
					<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
					<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid)  //로그인이 되면 글쓰기 보여주기
	{
?>
					<a href="write_form.php?table=<?=$table?>">글쓰기</a>
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