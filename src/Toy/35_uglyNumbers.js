const uglyNumbers = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    // 2,3,5 로 나눠야 한다.
    let num2 = 0;
    let num3 = 0;
    let num5 = 0;

    // 2,3,5를 곱하면서 올라간다.
    // 각각의 수를 모두 모아준다.
    for(let i = 0; i < n; i++){
        let result2 = uglyNumbers[num2] * 2;
        let result3 = uglyNumbers[num3] * 3;
        let result5 = uglyNumbers[num5] * 5;
        let FinalResult = Math.min(
            result2,
            result3,
            result5
        );
        uglyNumbers.push(FinalResult);
    }

    // 중복된 숫자를 방지하기 위해 2인 경우, 3인 경우, 5인 경우를 각각의 조건문으로 작성해준다.
    if(FinalResult === result2){
        num2++;
    }
    if(FinalResult === result3){
        num3++;
    }
    if(FinalResult === result5){
        num5++;
    }
    return uglyNumbers[n-1];
  };
  