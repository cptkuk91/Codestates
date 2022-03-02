function boardGame(board, operation) {
  let x = 0;
  let y = 0;
  let result = 0;
  // 현재 위치값이 1인 경우 result에다가 현재 위치의 값을 더해준다.
  // i를 통해 조작을 가한 횟수만큼 돌려버린다.
  for (let i = 0; i < operation.length; i++) {
    // 각 조작 경우의 수를 전부 설정해준다.
    if (operation[i] === "U") {
      y--;
    }
    if (operation[i] === "D") {
      y++;
    }
    if (operation[i] === "R") {
      x++;
    }
    if (operation[i] === "L") {
      x--;
    }
    // 범위를 벗어나버리는 경우
    if (y < 0 || y >= board.length || x < 0 || x >= board.length) {
      return "OUT";
    }
    // board[y][x] 로 준 이유가 무엇일지에 대해서 생각해 볼 필요성이 있다.
    let now = board[y][x];
    result += now;
  }
  return result;
}
