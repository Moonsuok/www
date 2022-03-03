<meta charset="utf-8">
<?
	session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

	if(!$userid) {
		echo("
		<script>
	    	window.alert('로그인 후 이용해 주세요.')
	    	history.go(-1)
	    </script>
		");
		exit;
	}
	$regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장

	// 다중 파일 업로드
	$files = $_FILES["upfile"];
	$count = count($files["name"]);	 //첨부된 파일 개수 3		
	$upload_dir = './data/';

	for ($i=0; $i<$count; $i++)
	{
		$upfile_name[$i]     = $files["name"][$i];
		$upfile_tmp_name[$i] = $files["tmp_name"][$i];
		$upfile_type[$i]     = $files["type"][$i];
		$upfile_size[$i]     = $files["size"][$i];
		$upfile_error[$i]    = $files["error"][$i];
      
		$file = explode(".", $upfile_name[$i]);  //a1.jpg
		$file_name = $file[0];  //a1
		$file_ext  = $file[1];  //jpg

		if (!$upfile_error[$i])  //파일에 에러가 없다면
		{
			$new_file_name = date("Y_m_d_H_i_s");
			$new_file_name = $new_file_name."_".$i;
			$copied_file_name[$i] = $new_file_name.".".$file_ext;      //2022_02_24_10_29_18_0.jpg
			$uploaded_file[$i] = $upload_dir.$copied_file_name[$i];    // ./data//2022_02_24_10_29_18_0.jpg

			if( $upfile_size[$i]  > 5000000 ) {
				echo("
				<script>
					alert('업로드 파일 크기가 지정된 용량(5MB)을 초과합니다.\\n파일 크기를 체크해주세요.');
					history.go(-1)
				</script>
				");
				exit;
			}

			if (!move_uploaded_file($upfile_tmp_name[$i], $uploaded_file[$i]) )
			{
				echo("
					<script>
						alert('파일을 지정한 디렉토리에 복사하는데 실패했습니다.');
						history.go(-1)
					</script>
				");
				exit;
			}
		}
	}

	include "../lib/dbconn.php";       // dconn.php 파일을 불러옴
	if ($mode=="modify")
	{
		$num_checked = count($_POST['del_file']);
		$position = $_POST['del_file'];

		for($i=0; $i<$num_checked; $i++)                      // delete checked item
		{
			$index = $position[$i];
			$del_ok[$index] = "y";
		}

		$sql = "select * from $table where num=$num";   // get target record
		$result = mysql_query($sql);
		$row = mysql_fetch_array($result);

		for ($i=0; $i<$count; $i++)					// update DB with the value of file input box
		{
			$field_org_name = "file_name_".$i;
			$field_real_name = "file_copied_".$i;

			$org_name_value = $upfile_name[$i];
			$org_real_value = $copied_file_name[$i];
			if ($del_ok[$i] == "y")
			{
				$delete_field = "file_copied_".$i;
				$delete_name = $row[$delete_field];				
				$delete_path = "./data/".$delete_name;
				unlink($delete_path);

				$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
				mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
			}
			else
			{
				if (!$upfile_error[$i])
				{
					$sql = "update $table set $field_org_name = '$org_name_value', $field_real_name = '$org_real_value'  where num=$num";
					mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행				
				}
			}

		}
		$sql = "update $table set subject='$subject', content='$content' where num=$num";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}
	else
	{
		$sql = "insert into $table (id, name, nick, subject, content, regist_day, hit, ";
		$sql .= " file_name_0, file_name_1, file_name_2, file_type_0, file_type_1, file_type_2, file_copied_0,  file_copied_1, file_copied_2) ";
		$sql .= " values('$userid', '$username', '$usernick', '$subject', '$content', '$regist_day', 0, ";
		$sql .= " '$upfile_name[0]', '$upfile_name[1]',  '$upfile_name[2]', '$upfile_type[0]', '$upfile_type[1]',  '$upfile_type[2]', ";
		$sql .= " '$copied_file_name[0]', '$copied_file_name[1]','$copied_file_name[2]')";
		mysql_query($sql, $connect);  // $sql 에 저장된 명령 실행
	}
	mysql_close();                // DB 연결 끊기

	echo "
	    <script>
	   		location.href = 'list.php?table=$table&page=$page';
	    </script>
	";
?>

  
