function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  let boxCount = 0;
  let sorted = stuff.sort((a, b) => a - b, 0);
  let biggest = stuff.length - 1;
  let smallest = 0;

  // 작은박스와 큰 박스보다 작으면 계속해서 반복한다.
  while (biggest > smallest) {
    if (sorted[smallest] + sorted[biggest] <= limit) {
      boxCount++;
      smallest++; // 작은 건 더하고,
      biggest--; // 큰건 제외하면서 온다.
    } else {
      biggest--; // 한 박스만 들어가도 limit에 걸린다면 biggest를 빼준다.
    }
  }
  return stuff.length - boxCount;
}

// function movingStuff(stuff, limit) {
//     // TODO: 여기에 코드를 작성합니다.
//     let count = 0;
//     let sorted = stuff.sort((a, b) => a - b);
//     let biggest = sorted.length - 1;
//     let smallest = 0;

//     while(biggest > smallest){
//       if(sorted[smallest] + sorted[biggest] <= limit){
//         count++;
//         smallest++;
//         biggest--; // 무거운 짐을 뺀다.
//       } else {
//         biggest--; // 애초에 무겁다..
//       }
//     }
//     return stuff.length - count;
//   }
