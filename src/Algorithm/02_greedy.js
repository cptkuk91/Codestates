function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  // 동전의 개수를 확인해야 한다.
  let count = 0;

  // 동전을 종류별로 배열에 담아준다.
  let coin = [500, 100, 50, 10, 5, 1];

  // 동전의 최대값부터 나누면서 나머지를 계속해서 작은 동전 단위로 나눠준다.
  for (let i = 0; i < coin.length; i++) {
    // k가 0보다 크고 계속 나눌 수 있게 if 문을 만들어 돌려버린다.
    if (k > 0) {
      let coinCount = Math.floor(k / coin[i]);
      k = k % coin[i];
      count += coinCount;
    }
  }
  return count;
}

// function partTimeJob(k) {
//     // TODO: 여기에 코드를 작성하세요.

//     // 거스름돈 K를 0으로 만들어야 한다.
//     count = 0;

//     // 최대값 부터 나누기 시작해, 나누지 못한 값을 최소값(1)으로 나누면서 진행한다.
//     let coin = [500, 100, 50, 10, 5, 1];

//     // 동전의 최소값 반환
//     // for (let i = 0; i < coin.length; i++) {
//     //   if (k > 0) {
//     //     let coinCount = Math.floor(k / coin[i]);
//     //     count += coinCount;
//     //     k = k % coin[i];
//     //   }
//     // }
//     // return count;

//     for(let m of coin){
//       if(k > 0){
//         let coinCount = Math.floor(k / m); //
//         count += coinCount;
//         k = k % m;
//       }
//     }
//     return count;
//   }
