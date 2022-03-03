<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
    //$id='a';

    if(!$id) 
   {
      echo("아이디를 입력하세요.");
   } 
   else if (strpos($id, ' ') !== false) 
   {
      echo "<span style='color:red'>공백을 제외한 문자를 입력하세요.</span>";
   }
   else
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


     
      if ($num_record)
      {
         echo "<span style='color:red'>다른 아이디를 사용하세요.</span>";
      }
      else
      {
         echo "<span style='color:green'>사용가능한 아이디입니다.</span>";
      }
    
 
      mysql_close();
   }

?>

