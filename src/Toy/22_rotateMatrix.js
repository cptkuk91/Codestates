const rotateMatrix = function (matrix, rotateNum = 1) {
  // TODO: 여기에 코드를 작성합니다.
  // 문제의 핵심은 정사각형이 아니다.
  // 90 270 || 180 360이다.
  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4; // 공식이다. 외워라
  // 회전하지 않는 경우도 있다. (그대로 반환해라);
  if (rotateNum === 0) return matrix;

  const rotated = [];
  // 홀수번 회전 시 M , N, 짝수번 회전시 N , M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    // RC[0]은 몇번 돌리냐를 뜻한다.
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) {
        // 90도 회전 한 경우 1번 회전 한경우다. 따라서 공식 N - col -1 [row] 대입
        rotated[row][col] = matrix[N - col - 1][row];
      } else if (rotateNum === 2) {
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      } else {
        rotated[row][col] = matrix[col][M - row - 1];
      }
    }
  }
  return rotated;
};
