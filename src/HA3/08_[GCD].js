function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  // Github Test
  // 최대 공약수를 구하는 유클리드 호제법
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const GCD = gcd(M, N);

  let result = [];

  for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
    if (GCD % 1 === 0) {
      result.push([i, M / i, N / i]);
      if (i * i < GCD) {
        let j = GCD / i;
        result.push([j, M / j, N / j]);
      }
    }
  }
  result.sort((a, b) => a[0] - b[0]);
  return result;
}
