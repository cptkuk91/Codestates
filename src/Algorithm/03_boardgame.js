function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  // 보드의 최대값을 구한다.
  let [maxRow, maxCol] = [board[0].length, board.length];
  // 이동 값 반환을 위한 result를 설정해준다.
  let result = 0;
  // 시작점은 [0, 0]
  let [row, col] = [0, 0];

  // char = "U", "L", "D", "R" 이 존재하고 있으면 operation내에 담겨있다.
  // 따라서 for char of operation을 활용한다.
  for (let char of operation) {
    // 만약 char === "D"라면 아래로 가기 때문에 열을 더해준다.
    // 이 때 row의 값이 maxRow값보다 크다면 "OUT"을 반환한다.
    if (char === "D") {
      row++;
      if (row >= maxRow) {
        return "OUT";
      }
      // 결과값을 result에 board[row, col]을 통해 담아주자.
      result += board[row][col];
    }
    // 그 외 "U", "L", "R"을 만들어보자.
    if (char === "U") {
      row--;
      if (row < 0) {
        return "OUT";
      }
      // 결과값을 result에 board[row, col]을 통해 담아주자.
      result += board[row][col];
    }
    if (char === "L") {
      col--;
      if (col < 0) {
        return "OUT";
      }
      // 결과값을 result에 board[row, col]을 통해 담아주자.
      result += board[row][col];
    }
    if (char === "R") {
      col++;
      if (col >= maxCol) {
        return "OUT";
      }
      // 결과값을 result에 board[row, col]을 통해 담아주자.
      result += board[row][col];
    }
  }
  return result;
}

// function boardGame(board, operation) {
//     // TODO: 여기에 코드를 작성하세요.
//     let [maxRow, maxCol] = [board[0].length, board.length];
//     let result = 0;
//     let [row, col] = [0, 0];
//     for (let char of operation) {
//       if (char === 'D') {
//         row++;
//         if (row >= maxRow) {
//           return 'OUT';
//         }
//         result += board[row][col];
//       }
//       if (char === 'U') {
//         row--;
//         if (row <= -1) {
//           return "OUT";
//         }
//         result += board[row][col];
//       }
//       if (char === 'L') {
//         col--;
//         if (col <= -1) {
//           return "OUT";
//         }
//         result += board[row][col];
//       }
//       if (char === 'R') {
//         col++;
//         if (col >= maxCol) {
//           return "OUT";
//         }
//         result += board[row][col];
//       }
//     }
//     return result;
//   };
