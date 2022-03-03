<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
    /*
    table=$table
    num=$num
    real_name=$real_name(저장)
    show_name=$show_name(실제)
    file_type=$real_type
    
    */


	if(!$userid) {
		echo("
		<script>
	        window.alert('로그인 후 이용해 주세요.');
	        history.go(-1);
	    </script>
		");
		exit;
	}
    $file_path = "./data/".$real_name;
          //$file_path =./data/2019_03_25_10_01_04_1.jpg

    if( file_exists($file_path) )  //file_exists() -> 경로에 해당 파일이 있는지 확인 (T/F반환)
    { 
		   $fp = fopen($file_path,"rb"); //fp=파일포인터, rb=이진모드면서 읽기모드
           //$fp => 메모리에 올려진 파일의 시작 주소
           if( $file_type ) 
           { 
				Header("Content-type: application/x-msdownload"); 
                Header("Content-Length: ".filesize($file_path));     
                Header("Content-Disposition: attachment; filename=$show_name");   
                Header("Content-Transfer-Encoding: binary"); 
				Header("Content-Description: File Transfer"); 
                header("Expires: 0"); 
            } 
            else 
            { 
                if(eregi("(MSIE 5.0|MSIE 5.1|MSIE 5.5|MSIE 6.0)", $HTTP_USER_AGENT)) 
                { 
                    Header("Content-type: application/octet-stream"); 
                    Header("Content-Length: ".filesize($file_path));     
                    Header("Content-Disposition: attachment; filename=$show_name");   
                    Header("Content-Transfer-Encoding: binary");   
                    Header("Expires: 0");   
                 } 
                 else 
                 { 
                    Header("Content-type: file/unknown");     
                    Header("Content-Length: ".filesize($file_path)); 
                    Header("Content-Disposition: attachment; filename=$show_name"); 
                    Header("Content-Description: PHP3 Generated Data"); 
                    Header("Expires: 0"); 
                 } 
             } 

			if(!fpassthru($fp))   //버터(임시저장소) 선 저장 후 사용자pc에 파일 다운로드 
				fclose($fp);      //파일 다운로드 후 메모리에서 삭제
	}
?>

  
