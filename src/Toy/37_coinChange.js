const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  // dp 를 이용한다.
  // total 금액까지 갈 수 있는 배열을 만들어준다.
  // 배열의 index가 각 동전보다 큰 경우 각 동전으로 target 값을 만들어본다.
  // total - coins = 금액
  let result = [1]; // 결과 값을 만들기 위해서는 최소한 하나의 동전이 필요하다.
  for (let i = 1; i <= total; i++) {
    result[i] = 0;
  }
  for (let j = 0; j <= coins.length; j++) {
    // 코인의 길이는 2 [1,5]
    for (let k = 1; k <= total; k++) {
      // total은 10이다.
      if (coins[j] <= k) {
        // 1 <= 1
        result[k] += result[k - coins[j]];
        // ???
      }
    }
  }
  return result[total];
};

//https://sangkwon2406.tistory.com/75 참고 자료
