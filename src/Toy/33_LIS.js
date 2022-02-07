const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  // 배열의 길이 최소값은 1로 설정한다.
  let N = arr.length;
  let result = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      // 만약 arr[i] 값이 arr[j] 보다 큰 경우 숫자를 하나씩 더해준다.
      if (arr[i] > arr[j] && result[i] < result[j] + 1) {
        result[i] = result[j] + 1;
      }
    }
  }
  return Math.max(...result);
};
