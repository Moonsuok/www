<?
  session_start();
  unset($_SESSION['userid']);    //세션변수 삭제 (=로그아웃)
  unset($_SESSION['username']);  //세션변수 삭제 (=로그아웃)
  unset($_SESSION['usernick']);  //세션변수 삭제 (=로그아웃)
  unset($_SESSION['userlevel']); //세션변수 삭제 (=로그아웃)

  echo("
        <script>
          location.href = '../index.html'; 
        </script>
      ");
?>
