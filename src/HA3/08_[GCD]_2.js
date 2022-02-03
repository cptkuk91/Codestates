// 유클리드 호제법
function gcd(M, N) {
  return M % N === 0 ? N : gcd(N, M % N);
}

function divideChocolateStick(M, N) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let value = 0; // 최대 공약수를 담을 변수
  let temp = 0;

  if (M > N) {
    value = gcd(M, N);
  } else {
    value = gcd(N, M);
  }

  // 최대 공약수를 바탕으로
  // 제곱근 기준 양쪽의 값을 하나씩 곱해서 확인
  for (let i = 1; i * i <= value; i++) {
    if (value % i === 0) {
      result.push([i, M / i, N / i]);
      if (i !== value / i) {
        // 제곱근이 아닌 경우
        temp = value / i; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구한다.
        result.push([temp, M / temp, N / temp]);
      }
    }
  }
  return result;
}
