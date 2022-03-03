<?
  session_start();
?>

<meta charset="utf-8">

<?
  @extract($_GET); 
  @extract($_POST); 
  @extract($_SESSION);
   // 이전화면에서 이름이 입력되지 않았으면 "이름을 입력하세요"
   // 메시지 출력
   // $id=>입력id값    $pass=>입력 pass
   
  if(!$id) {   //아무값도 입력되지 않았냐?
    echo("
          <script>
            window.alert('아이디를 입력하세요.');
            history.go(-1);
          </script>
        ");
    exit;
  }

  if(!$pass) {
    echo("
          <script>
            window.alert('비밀번호를 입력하세요.');
            history.go(-1);
          </script>
        ");
    exit;
  }

  include "../lib/dbconn.php";

  $sql = "select * from member where id='$id'";
  $result = mysql_query($sql, $connect);

  $num_match = mysql_num_rows($result);  //1 0

  if(!$num_match) 
  {
    echo("
          <script>
            window.alert('등록되지 않은 아이디입니다.');
            history.go(-1);
          </script>
        ");
  }
    else    //해당 아이디가 검색되었으면..
    {
		  $row = mysql_fetch_array($result); 
      //$row[id] ,.... $row[level]
      $sql ="select * from member where id='$id' and pass=password('$pass')";  //암호화된 비밀번호 다시 암호 풀기
      $result = mysql_query($sql, $connect);
      $num_match = mysql_num_rows($result);

      if(!$num_match)  //적은 패스워드와 디비 패스워드가 같지않을때
        {
          echo("
            <script>
                window.alert('비밀번호가 틀립니다.');
                history.go(-1);
            </script>
          ");
          exit;
        }
        else    // 입력 pass 와 테이블에 저장된 pass 일치한다.
        {
          $userid = $row[id];
		      $username = $row[name];
		      $usernick = $row[nick];
    		  $userlevel = $row[level];
  
          //세션변수에 id~level 값을 저장한다(로그인상태)
          $_SESSION['userid'] = $userid;       //$_SESSION['userid'] = $row[id];
          $_SESSION['username'] = $username;   //$_SESSION['username'] = $row[name];
          $_SESSION['usernick'] = $usernick;   //$_SESSION['usernick'] = $row[nick];
          $_SESSION['userlevel'] = $userlevel; //$_SESSION['userlevel'] = $row[level];

          echo("
              <script>
			          alert('$username'+'님, 반갑습니다.');
                location.href = '../index.html';
              </script>
            ");
          }
     }          
?>
