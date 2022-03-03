<?
   session_start();
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   //$table, $num , 세션변수

   include "../lib/dbconn.php";

   $sql = "select * from $table where num = $num";
   $result = mysql_query($sql, $connect);

   $row = mysql_fetch_array($result);

   $copied_name[0] = $row[file_copied_0];
   $copied_name[1] = $row[file_copied_1];
   $copied_name[2] = $row[file_copied_2];

   for ($i=0; $i<3; $i++)  //업로든된 파일 삭제
   {
		if ($copied_name[$i])
	   {
			$image_name = "./data/".$copied_name[$i]; //'./data/2022_02_22_10_43_06_0.jpg'
			unlink($image_name);
         //unlink(업드로된 파일경로 파일명); => 파일삭제
	   }
   }

   $sql = "delete from $table where num = $num";
   mysql_query($sql, $connect);

   $sql = "delete from free_ripple where parent=$num"; 
   mysql_query($sql, $connect); 

   mysql_close();

   echo "
	   <script>
	      location.href = 'list.php?table=$table';
	   </script>
	";
?>

