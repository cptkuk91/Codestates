function boringBlackjack(cards) {
    // TODO: 여기에 코드를 작성합니다.
    // 소수를 확인하기 위한 count 선언
    let count = 0;
    // 소수를 판별하는 함수 만들기
    function checkPrime(number) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        } // 나눠 떨어지면 소수가 아니다.
      }
      return true;
    }
  
    // 3개의 수 조합을 통해 소수 확인하기, i,j,k 중복은 불허한다.
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        for (let k = j + 1; k < cards.length; k++) {
          let sum = cards[i] + cards[j] + cards[k];
          if (checkPrime(sum)) {
            count++;
          }
        }
      }
    }
    return count;
  }
  