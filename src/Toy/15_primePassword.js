const isPrime = (num) => {
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  };
  
  // 4자리 수를 받아서 각 자리수의 수들의 배열로 변환하는 함수
  //  let output = splitNum(3359);
  //  console.log(output); // --> [3, 3, 5, 9]
  const splitNum = (num) => {
    const digits = num.toString().split('');
    return digits.map((d) => Number(d));
  };
  
  // 길이의 4의 수 배열을 받아서, 4자리의 수로 변환하는 함수
  //  let output = splitNum([3, 3, 5, 9]);
  //  console.log(output); // --> 3359
  const joinDigits = (digits) => Number(digits.join(''));
  
  const primePassword = (curPwd, newPwd) => {
    if (curPwd === newPwd) return 0;
    // bfs를 위해 queue를 선언
    let front = 0;
    let rear = 0;
    const queue = [];
    const isEmpty = (queue) => front === rear;
    const enQueue = (queue, item) => {
      queue.push(item);
      rear++;
    };
    const deQueue = (queue) => {
      return queue[front++];
      // const item = queue[front];
      // front++;
      // return item;
    };
  
    // 각 4자리의 방문 여부를 저장하는 배열
    // 한 번 방문한 수(가장 최소의 동작으로 만든 수)는 다시 방문할 필요가 없다.
    const isVisited = Array(10000).fill(false);
    isVisited[curPwd] = true;
    // bfs를 위한 시작점
    // 큐에는 [필요한 동작 수, 비밀번호]가 저장된다.
    enQueue(queue, [0, curPwd]);
    // bfs는 큐가 빌(empty) 때까지 탐색한다.
    while (isEmpty(queue) === false) {
      const [step, num] = deQueue(queue);
      // 각 자리수 마다 변경이 가능하므로 4번의 반복이 필요하다.
      for (let i = 0; i < 4; i++) {
        const digits = splitNum(num);
        // 0부터 9까지 시도한다.
        for (let d = 0; d < 10; d++) {
          // 각 자리수마다 원래 있던 수(digits[i])는 피해야 한다.
          if (d !== digits[i]) {
            // 현재 자리수의 수를 변경하고,
            digits[i] = d;
            // 변경한 후 4자리 수를 구한다.
            const next = joinDigits(digits);
            // 만약 이 수가 새 비밀번호와 같다면 리턴한다.
            // next는 deQueue된 num으로부터 1단계 다음에 도달한 수이다.
            if (next === newPwd) return step + 1;
            // 1,000보다 큰 소수여야 하고, 방문된 적이 없어야 한다.
            if (next > 1000 && isPrime(next) && isVisited[next] === false) {
              // 방문 여부를 표시하고,
              isVisited[next] = true;
              // 큐에 넣는다.
              enQueue(queue, [step + 1, next]);
            }
          }
        }
      }
    }
  
    // 큐가 빌 때까지, 즉 모든 경우의 수를 탐색할 때까지 리턴되지 않은 경우
    // 현재 비밀번호에서 새 비밀번호를 만들 수 없다.
    return -1;
  };