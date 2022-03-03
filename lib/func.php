<?
   function latest_article($table, $loop, $char_limit) //테이블명, 보여질 리스트개수, 제목글자제한
   {
	   //latest_article("concert", 4, 30);
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result = mysql_query($sql, $connect);

		// echo "<ul class='news1'>";

		while ($row = mysql_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');  //한글은 원래 2byte, mb_strlen -> 한글도 1byte로 처리, 제목의 총 글자수
			$subject = $row[subject];
			/* $len_content = mb_strlen($row[content], 'utf-8');
			$content = $row[content]; */

			if ($len_subject > $char_limit)
			{
				//$subject = str_replace("&#039;", "'", $subject);               
                $subject = mb_substr($subject, 0, $char_limit, 'utf-8');  //0번 인덱스부터 30자만큼 빼기
				$subject = $subject."...";
			}
			/* if ($len_content > 50)
			{
				//$subject = str_replace("&#039;", "'", $subject);               
                $content = mb_substr($content, 0, 50, 'utf-8'); 
				$content = $content."...";
			} */

			$regist_day = substr($row[regist_day], 0, 10); //'2022-02-21'

            if($table=='concert'){
                if ($row[file_copied_0]){  //첨부된 이미지가 없으면
                	$concertimg='./concert/data/'.$row[file_copied_0];  // './concert/data/2022_02_22_10_43_34_0.jpg'
                } else{
                	$concertimg= './concert/data/default.jpg';
                }
            }
            

           /* if($table=='greet'){ 
            
			echo "      
				<li class='col1'>
					<a href='./$table/view.php?table=$table&num=$num'>$subject
						<span class='date'>$regist_day</span>
					</a>
				</li>
			";
               
           } else */ if($table=='concert'){
             static $i=0;
             echo "      
				<li>
					<a href='./$table/view.php?table=$table&num=$num&page=1'>
                        <div class='image'>
                            <img src='$concertimg' alt='$subject'>
                        </div>
                        <dl>
                            <dt>$subject</dt>
                            <dd class='date'>$regist_day</dd>
                        </dl>
                    </a>
				</li>
			";

			if($i == 3){
				echo "</ul><ul class='news2'>";
			}

			$i++;

           }
		}
		// echo "</ul>";
	mysql_close();
   }
?>