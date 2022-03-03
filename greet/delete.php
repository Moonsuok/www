<?
   session_start();
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
   //$num = 글 번호;

   include "../lib/dbconn.php";

   $sql = "delete from greet where num = $num";  
   mysql_query($sql, $connect);

   mysql_close();

   echo "
	   <script>
	    location.href = 'list.php';
	   </script>
	";
?>

