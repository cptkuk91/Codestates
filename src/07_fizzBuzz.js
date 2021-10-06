function fizzBuzz(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num % 3 == 0 && num % 5 ==0){
        return 'FizzBuzz';
    } else if (num % 5 == 0){
        return 'Buzz';
    } else if (num  % 3 == 0){
        return 'Fizz';
    } else {
        return 'No FizzBuzz';
    }
}

// 3,5 동시에 나눠지는 값이 먼저와야지 3을 먼저 할 경우
// 30이 3으로 나눠져서 문제가 발생할 수 있다.
// 컴퓨터는 제일 처음부터 차근차근 출력한다.