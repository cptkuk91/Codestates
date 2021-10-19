function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for(let key in obj){
      if(typeof(obj[key]) === "number"){
          // 여기서 왜 number 속성에 "" 붙였는가?
        delete obj[key]
      }
    }
    obj;
  }
  