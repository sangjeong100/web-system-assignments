/*edit */ 
function goEditPage(data){
  console.log(data._id);
  const form = document.createElement('form');
    form.method = 'get';
    form.action = `/routes/movie/read/${data._id}`;
    document.body.appendChild(form);
    
    form.submit();
}

/*update*/ 
function update(data, check){
  const form =document.createElement('form');
  form.method= 'post';
  form.action = `/routes/movie/update/${data._id}`;
  const isTrending = document.createElement('input');
  const hiddenField = document.createElement('input');
  isTrending.type = 'hidden';
  isTrending.name = 'isTrending';
  hiddenField.type = 'hidden';
  
  if (check ==="edit Movie"){
    hiddenField.name = 'movie_content';
    hiddenField.value = data.textContent;
    
    isTrending.value = false;
  }
  else if(check === "UpTrending"){
  
    hiddenField.name = 'Trending';
    hiddenField.value = true;

    isTrending.value = true;
  }
  else if(check === "DownTrending"){
    hiddenField.name = 'Trending';
    hiddenField.value = false;

    isTrending.value = true;
  }
  form.appendChild(hiddenField);
  form.appendChild(isTrending);
  document.body.appendChild(form);
  form.submit();
}

/*ajax Trending Update */
function ajaxTrendingUpdate(id,trending){
  //XMLHttpRequest 객체 생성
  var xhr = new XMLHttpRequest();
  
  //전송할 데이터
  var sendData = {
    id: id,
    trending: !trending 
  }

  //요청의 상태가 DONE 일 경우 프론트엔드 측에서 요청을 처리하는 방식을 정의
  xhr.onload = function(){
    if(xhr.status === 200 || xhr.status === 201){
      //string 으로 받은 Json 타입의 데이터를 JSON 객체화
      let response = JSON.parse(xhr.response);
      // response JSON 타입 객체 내 people 데이터에 접근
      //이후, 응답 값을 통해 HTML 문서 내 정의된 정보를 변경가능;
      
      let star = document.querySelector(`#starPosition_${id}`);
      if (!trending)
      {
        star.childNodes[0].src = "http://localhost:3000/images/YesTrending_star.png" ;
        if(document.querySelector('#yellowStar'))
          document.querySelector('#yellowStar').onclick = () => { ajaxTrendingUpdate(id,!trending)};
        else 
          document.querySelector('#blackStar').onclick = () => { ajaxTrendingUpdate(id,!trending)};
      }
      else
      {
        star.childNodes[0].src = "http://localhost:3000/images/NoTrending_star.png"  ;
        if(document.querySelector('#yellowStar'))
          document.querySelector('#yellowStar').onclick = () => {ajaxTrendingUpdate(id,!trending)};
        else
          document.querySelector('#blackStar').onclick = () => { ajaxTrendingUpdate(id,!trending)};
      }
    }
    else{
      alert("movie Ajax Trending Update fail!");
    }
  }
  
  //생성된 XmlHttpRequest 객체의 초기화
  xhr.open("POST", `/routes/movie/ajaxTrendingUpdate/`);
  //요청의 헤더 설정(json 타입을 통신에 활용할 것이므로, 컨텐츠 타입을 json 으로 선언)
  xhr.setRequestHeader("Content-Type", 'application/json');
  //서버측으로 전달할 json 타입의 데이터를 string 화 한 데이터와 함께 요청을 전달.
  xhr.send(JSON.stringify(sendData));
}


/*delete */
function deleteFunc(data){
  const form = document.createElement('form');
  form.method = 'post';
  form.action = `/routes/movie/delete/${data._id}`;
  document.body.appendChild(form);
  form.submit();
}