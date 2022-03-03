// JavaScript Document

$(document).ready(function() {
  var timeonoff; //자동기능 구현
  var imageCount=4;  //이미지 개수 *** 
  var cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
  var direct=1;  //1씩 증가(+1)/감소(-1) 방향타
  var position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
  var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
   $('.btn1').css('background','#ed1c24'); //첫번째 불켜
   $('.btn1').css('width','30');
    
   $('.gallery ul li:eq(0)').find('.slogan').fadeIn('slow');  //첫번째 텍스트만 보여라~~~

 function moveg(){
      cnt+=direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......
	     //각각의 카운트에 대한 left 좌표값을 처리

/* 		if(cnt==1){
		   position=0;  
		}else if(cnt==2){
	       position=-1000;
		}else if(cnt==3){
		   position=-2000;
		}else if(cnt==4){
		   position=-3000;
		}else if(cnt==5){
		   position=-4000;
		} */
      position = -(cnt-1)*2000;  //cnt에 해당하는 left값(목적지) 처리
      $('.gallery').animate({left:position}, 'slow'); //겔러리 무비의 left값을 움직여라~
     
      $('.gallery ul li .slogan').hide(); //모든 텍스트를 안보이게...
      $('.gallery ul li:eq('+ (cnt-1) +')').find('.slogan').fadeIn('slow'); //해당 텍스트만 보여라                                        
/* 	   for(var i=1;i<=imageCount;i++){
          $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
         $('.btn'+i).css('width','16'); 
      } */
      $('.mbutton').css('background','rgba(255,255,255,.7)'); //버튼불다꺼!!
      $('.mbutton').css('width','16'); 
      $('.btn'+cnt).css('background','#ed1c24');//자신만 불켜
      $('.btn'+cnt).css('width','30');   
                        

		if(cnt==imageCount)direct=-1;     //마지막 카운트가 되면 방향타는 -1 (5 4 3 2 1)
      if(cnt==1)direct=1;               //카운트가 1이 되면 방향타는 1 (1 2 3 4 5)
 }

//----------------------------------

  timeonoff= setInterval( moveg , 4000); //4초마다 자동기능 

  $('.mbutton').click(function(event){  //각각의 버튼을 클릭한다면...

	var $target=$(event.target); //$target == this =>실제 클릭한 버튼
	clearInterval(timeonoff);   //타이머를 중지!! 청부살인 ^^;;

/* 	for(var i=1;i<=imageCount;i++){
			  $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
              $('.btn'+i).css('width','16');
    } */
    $('.mbutton').css('background','rgba(255,255,255,.7)'); //버튼불 다꺼!!
    $('.mbutton').css('width','16'); 

/* 	if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:0}, 'slow');
         cnt=1;
         direct=1;
	}else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-1000}, 'slow');
         cnt=2;
	}else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-2000}, 'slow');
         cnt=3;
	}else if($target.is('.btn4')){  //네번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-3000}, 'slow');
         cnt=4;
	}else if($target.is('.btn5')){  //다섯번째 버튼을 클릭했다면...
    	   $('.gallery').animate({left:-4000}, 'slow');
         cnt=5;
         direct=-1;
	} */
	if($target.is('.btn1')){  //첫번째 버튼을 클릭했다면...
         cnt=1;
         direct=1;
	}else if($target.is('.btn2')){ //두번째 버튼을 클릭했다면...
         cnt=2;
	}else if($target.is('.btn3')){ //세번째 버튼을 클릭했다면...
         cnt=3;
	}else if($target.is('.btn4')){  //네번째 버튼을 클릭했다면...
         cnt=4;
         direct=-1;
	}
   position = -(cnt-1)*2000
   $('.gallery').animate({left:position}, 'slow');

      
   $('.gallery ul li .slogan').hide();
   $('.gallery ul li:eq('+ (cnt-1) +')').find('.slogan').fadeIn('slow'); //해당 텍스트만 보여라      
      
   $('.btn'+cnt).css('background','#ed1c24');//자신 버튼만 불켜 
   $('.btn'+cnt).css('width','30');
      
    timeonoff= setInterval( moveg , 4000);  //타이머의 재 동작
      
    if(onoff==false){
		   onoff=true;
		   $('.ps').css('background','url(images/stop.png)');
     }  
  });
 
     //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(./images/start.png)');
           onoff=false;   
	   }else{
		  timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		   $(this).css('background','url(./images/stop.png)');
		   onoff=true; 
	   }
  });	
  
});




