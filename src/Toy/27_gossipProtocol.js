const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // TODO: 여기에 코드를 작성합니다.
  // R,C는 특정 주민의 집이다.
  const R = village.length;
  const C = village[0].length;
  const matrix = createMatrix(village); // 마을을 돌아다니는 matrix
  const Moves = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, -1], // LEFT
    [0, 1], // RIGHT
  ];
  // 마을을 벗어나는지 안벗어나는지 검사(유효한가?)
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  const queue = [];
  const enQueue = (queue, pos) => {
    queue.push(pos);
  };
  const deQueue = (queue) => {
    const pos = queue.shift();
    return pos;
  };

  // 소문이 퍼지는 시간
  let count = 0;

  enQueue(queue, [row, col]);
  matrix[row][col] = 0;
  while (queue.length > 0) {
    const [row, col] = deQueue(queue);
    count = matrix[row][col];

    // 현재를 기준으로 모든 방향을 검토해야한다.
    Moves.forEach((move) => {
      const nextRow = row + move[0];
      const nextCol = col + move[1];
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1;
      }
    });
  }
  return count;
};

// 3월 7일
