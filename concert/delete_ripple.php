<?
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    $table = "concert";
	$ripple = "free_ripple";
/*

$table=메인테이블 (get)
$item_num=메인글번호 (get)
ripple_num=$ripple_num(리플 글번호)

*/

      include "../lib/dbconn.php";

      $sql = "delete from $ripple where num=$ripple_num";
      mysql_query($sql, $connect);
      mysql_close();

      echo "
	   <script>
	    location.href = 'view.php?table=$table&num=$num';
	   </script>
	  ";
?>
