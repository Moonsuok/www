

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes

  function pro(p){  //숫자 천단위 구분
    return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

 
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    var newContent = '';
    
    newContent = '<h3>경영실적</h3><p>&#42; 연결재무재표 기준</p>';
    newContent += '<table>';
    newContent += '<thead>';
    newContent += '<tr><th>구분</th><th>2020년</th><th>2019년</th><th>2018년</th><th>2017년</th><th>2016년</th></tr>';
    newContent += '</thead>';
    newContent += '<tbody>';

    for (var i = 0; i < responseObject.management.length; i++) { 
      newContent += '<tr>';
      newContent += '<th>' + responseObject.management[i].division + '</th>';
      newContent += '<td>' + pro(responseObject.management[i].year20) + '</td>';
      newContent += '<td>' + pro(responseObject.management[i].year19) + '</td>';
      newContent += '<td>' + pro(responseObject.management[i].year18) + '</td>';
      newContent += '<td>' + pro(responseObject.management[i].year17) + '</td>';
      newContent += '<td>' + pro(responseObject.management[i].year16) + '</td>';
      newContent += '</tr>';
    }
    newContent += '</tbody>';
    newContent += '</table>';
 
    document.getElementById('table_con').innerHTML = newContent;
  }



};

xhr.open('GET', './js/tabledata.json', true);        // 요청을 준비한다.
xhr.send(null);   

