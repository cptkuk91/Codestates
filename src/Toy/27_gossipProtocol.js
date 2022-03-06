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
  };
  
  // 3월 7일