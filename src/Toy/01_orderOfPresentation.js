function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.

  // 모든 경우의 수를 구하기 위해 팩토리얼을 돌립니다.
  const factorial = (e) => {
    if(e <= 1) {
      return 1;
    }
    return e * factorial(e - 1);
  }

  //--------------------

  // 발표 순서를 담는 변수를 생성합니다.
  let order = 0;

  // 발표 순서를 구해야하기 때문에 Index 값에 dummy data를 추가해 자연수 시작으로 만들어줍니다.
  let pNumber = Array(N + 1).fill(false);

  // K 배열을 전부 찾아보면서 K 요소에 맞는 pNumber가 있을 때 true로 변경해줍니다.
  for(let i = 0; i < K.length; i++){
    let num = K[i];
    pNumber[num] = true;

    // 자연수에서 0 번 째는 없기 때문에 false로 설정해줍니다.
    let cNumber = pNumber.slice(1, num);

    // false를 미리 방지해줘야 합니다. 
    // K[0] 값 보다 앞에 올 수 있는 값은 1입니다.
    let fNumber = cNumber.filter((el) => el === false).length;

    // 경우의 수를 확인해야합니다.
    // i가 0부터 시작했기 때문에 첫 경우의 수를 N - i - 1, -1을 반드시 붙여줘야 합니다.
    let rNumber = fNumber * factorial(N - i -1);

    order += rNumber;
  }
  return order;
}