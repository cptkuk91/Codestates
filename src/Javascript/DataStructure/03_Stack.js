function browserStack(actions, start) {
    // TODO: 여기에 코드를 작성합니다.
    // 우선 3개의 페이지가 필요합니다. 이전 페이지, 현재 페이지, 다음 페이지
    let prev = [];
    let cur = start;
    let next = [];
  
    // for문을 사용해서 actions의 길이를 활용합니다.
    for(let i = 0; i < actions.length; i++){
       // 뒤로 가기 버튼을 누르면 -1 로 표기합니다. 이때 조건은 이전 페이지가 0이면 안됩니다.
      if(actions[i] === -1 && prev.length !== 0){
        next.push(cur); // 뒤로가기 버튼을 누르면 현재를 push 합니다.
        cur = prev[prev.length -1]; // 이전 의 값을 가져오니까 이전 값은 -1 됩니다.
        prev.pop();
        // 앞으로 가기 버튼을 누를 때 행동은 1로 표기합니다. 이 때 조건은 전에 보던 페이지가 0이면 안됩니다.
      } else if(actions[i] === 1 && prev.length !== 0){
        // 앞으로 가기 버튼을 누르면 현재 값은 이전으로 가기에 추가됩니다. prev.push(cur);
        prev.push(cur);
        // 현재 값으로 온 경우 next 값이 하나 사라집니다. next[next.length -1]
        cur = next[next.length - 1];
        // next.pop을 통해 next 마지막 요소를 하나 제거해줍니다.
        next.pop();
      } else {
        // 이전에는 현재를 삽입해줍니다.
        prev.push(cur);
        // 현재에는 actions[i]를 넣어 어느 위치에 있는지 알려줍니다.
        cur = actions[i];
        // 새로운 페이지에서는 next페이지가 존재할 수 없기 때문에 빈배열을 만들어줍니다.
        next = [];
      }
    }
    // 반환은 prev, cur, next 배열입니다.
    return [prev, cur, next];
  }