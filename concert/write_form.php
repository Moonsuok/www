<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    //새글쓰기 => $table=concert;


	include "../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기면
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject = $row[subject];
		$item_content = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>홍보센터-금호뉴스-글쓰기</title>
	<link href="../common/css/common.css" rel="stylesheet">
	<link href="../sub6/common/css/sub6common.css" rel="stylesheet">
	<link href="./css/write_form.css" rel="stylesheet">
	<script>
	  function check_input()
	   {
	      if (!document.board_form.subject.value)
	      {
	          alert("제목을 입력하세요!");    
	          document.board_form.subject.focus();
	          return;
	      }

	      if (!document.board_form.content.value)
	      {
	          alert("내용을 입력하세요!");    
	          document.board_form.content.focus();
	          return;
	      }
	      document.board_form.submit();
	   }
	</script>
</head>
<body>
	<? include "../common/sub_header.html" ?>
	<div class="visual">
        <img src="../sub4/common/images/visual.jpg" alt="비주얼 이미지">
        <h3>홍보센터</h3>
        <p>PR CENTER</p>
    </div>
	<div class="sub_menu">
        <ul>
            <li class="current"><a href="./list.php">금호뉴스</a></li>
            <li><a href="./sub4_2.html">금호사진</a></li>
            <li><a href="./sub4_3.html">금호영상</a></li>
            <li><a href="./sub4_4.html">지면광고</a></li>
        </ul>
    </div>
	<article id="content">
		<div class="title_area">
            <div class="line_map">
                <p>home   &gt;   홍보센터   &gt;   <strong>금호뉴스</strong></p>
            </div>
            <h2>금호뉴스</h2>
        </div>

		<div class="content_area">   
<?
	if($mode=="modify")  //수정 글쓰기라면
	{  

?>
		<form name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}
	else  //새글쓰기라면
	{
?>
		<form name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}
?>
				<div id="write_form">
					<ul>
						<li class="col1">
							<dl>
								<dt>닉네임</dt>
								<dd><?=$usernick?>
<?
	if( $userid && ($mode != "modify") )
	{   //새글쓰기 에서만 HTML 쓰기가 보이기
?>
									<span><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</span>
<?
	}
?>	
								</dd>
							</dl>
						</li>
						<li class="col2">
							<dl>
								<dt>제목</dt>
								<dd><input type="text" name="subject" value="<?=$item_subject?>" ></dd>
							</dl>
						</li>
						<li class="col3">
							<dl>
								<dt>내용</dt>
								<dd><textarea rows="15" cols="87" name="content"><?=$item_content?></textarea></dd>
							</dl>
						</li>
						<li class="col4">
							<dl>
								<dt>이미지 파일1</dt>
								<dd><input type="file" name="upfile[]"></dd>
							</dl>
						</li>
<? 	if ($mode=="modify" && $item_file_0)
	{
?>
						<li class="delete_ok">
							<?=$item_file_0?> 파일이 등록되어 있습니다. 
							<input type="checkbox" name="del_file[]" value="0"> 삭제
						</li>
<?
	}
?>
						<li class="col5">
							<dl>
								<dt>이미지 파일2</dt>
								<dd><input type="file" name="upfile[]"></dd>
							</dl>
						</li>
<? 	if ($mode=="modify" && $item_file_1)
	{
?>
						<li class="delete_ok">
							<?=$item_file_1?> 파일이 등록되어 있습니다. 
							<input type="checkbox" name="del_file[]" value="1"> 삭제
						</li>
<?
	}
?>
						<li class="col6">
							<dl>
								<dt>이미지 파일3</dt>
								<dd><input type="file" name="upfile[]"></dd>
							</dl>
						</li>
<? 	if ($mode=="modify" && $item_file_2)
	{
?>
						<li class="delete_ok">
							<?=$item_file_2?> 파일이 등록되어 있습니다. 
							<input type="checkbox" name="del_file[]" value="2"> 삭제
						</li>
<?
	}
?>
					</ul>
				</div>
				<div id="write_button">
					<!-- <a href="#" onclick="check_input()">확인</a>&nbsp; -->
					<input type="submit" value="확인">
					<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
				</div>
			</form>
        </div> <!-- end of list content -->
	</article>
	<? include "../common/sub_footer.html" ?>
</body>
</html>

