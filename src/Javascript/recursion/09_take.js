function take(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 0 || arr.length === 0){
      return [];
    };
    // 2, [1, -2, 1, 3]
    let head = arr[0]; // 1
    let tail = arr.slice(1); // [-2, 1, 3] 
  
    // 풀이가 필요합니다.
    return [head].concat(take(num -1, tail)); // num-1 === 1, [-2,1,3];
    // [1, -2]?
  }
  