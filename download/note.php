<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<link href="../css/common.css" rel="stylesheet" type="text/css" media="all">
<link href="../css/board3.css" rel="stylesheet" type="text/css" media="all">
<script>
    function del(href) 
    {
        if(confirm("삭제한 자료는 복구 할 수 없습니다.\n\n정말 삭제하시겠습니까?")) {
            document.location.href = href;
        }
    }
</script>
</head>

<body>
<div id="wrap">

  <div id="header">
    <? include "../lib/top_login2.php"; ?>
  </div>  <!-- end of header -->

  <div id="menu">
	<? include "../lib/top_menu2.php"; ?>
  </div>  <!-- end of menu --> 

  <div id="content">
	<div id="col1">
		<div id="left_menu">
<?
			include "../lib/left_menu.php";
?>
		</div>
	</div> <!-- end of col1 -->

	<div id="col2">     
		<div id="title">
			<img src="../img/title_download.gif">
		</div>
		<div id="view_comment"> &nbsp;</div>

		<div id="view_title">
			<div id="view_title1">
				<?= $item_subject ?>
			</div>
			<div id="view_title2">
				<?= $item_nick ?> | 조회 : <?= $item_hit ?>  | <?= $item_date ?> 
			</div>	
		</div>

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

			echo "▷ 첨부파일 : $show_name ($file_size Byte) &nbsp;&nbsp;&nbsp;&nbsp;
			       <a href='download.php?table=$table&num=$num&real_name=$real_name&show_name=$show_name&file_type=$real_type'>[저장]
				   </a><br>";
		}
	}
?>
		    <br>
			<?= $item_content ?>
		</div>

		<div id="view_button">
			<a href="list.php?table=<?=$table?>&page=<?=$page?>"><img src="../img/list.png"></a>&nbsp;
<? 
	if($userlevel==1 || $userid==$item_id || $userid=='suock4843')
	{
?>
			<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>"><img src="../img/modify.png"></a>&nbsp;
			<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')"><img src="../img/delete.png"></a>&nbsp;
<?
	}
?>
<? 
	if($userid)
	{
?>
			<a href="write_form.php?table=<?=$table?>"><img src="../img/write.png"></a>
<?
	}
?>
		</div>
		<div class="clear"></div>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->
</div> <!-- end of wrap -->

</body>
</html>
