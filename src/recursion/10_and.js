function and(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0){
      return true;
    }
  
    let head = arr[0];
    let tail = arr.slice(1);
  
    return head && and(tail);
  }
  