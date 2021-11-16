function sumAll(...args) { // args는 배열의 이름
    let sum = 0;
  
    for (let el of args) sum += el;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
  