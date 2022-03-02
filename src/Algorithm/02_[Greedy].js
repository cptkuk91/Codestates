function partTimeJob(k) {
  // 동전의 갯수를 확인할 수 있는 count를 선언한다.
  let count = 0;
  // 가장 큰 동전부터 사용해야 최소값을 확인 할 수 있기 때문에 배열을 만들어준다.
  let coin = [500, 100, 50, 10, 5, 1];

  for (let i = 0; i <= coin.length; i++) {
    if (k > 0) {
      let result = Math.floor(k / coin[i]);
      k = k % coin[i];
      count += result;
    }
  }
  return count;
}
