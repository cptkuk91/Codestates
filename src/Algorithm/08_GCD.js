function divideChocolateStick(M, N) {
    // TODO: 여기에 코드를 작성합니다.
    // 유클리드 호제법을 통해서 최대 공약수 구하기
    // 유클리드 호제법은 외워놓는게 좋다.
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    let GCD = gcd(M, N);
  
    // 결과를 담아줄 result 배열을 선언해준다.
    let result = [];
    // 정수, 함수의 숫자 제곱근 반환하기
    for (let i = 1; i <= Math.floor(Math.sqrt(GCD)); i++) {
      if (GCD % i === 0) {
        // 2차원 배열로 정렬하기 위해서 [] 대괄호 씌워주기 
        result.push([i, M / i, N / i]);
        // i 가 1인 경우?
        if (i * i < GCD) {
          let j = GCD / i;
          result.push([j, M / j, N / j]);
        }
      }
    }
    // 인원수 별 정렬하기
    result.sort((a, b) => a[0] - b[0]);
    return result;
  }
  