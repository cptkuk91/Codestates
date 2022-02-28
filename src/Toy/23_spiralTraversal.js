const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  // 재귀의 종료 조건은 matrix.length === 0 or matrix.length === 1
  let str = "";
  if(matrix.length === 0){
      return '';
  }

  if(matrix.length === 1){
      for(let i = 0; i < matrix[0].length; i++){
          str = str + matrix[0][i];
      }
      return str;
  }

  for(let i = 0; i < matrix[0].length-1; i++){
      str = str + matrix[0][i];
  }

  for(let i = 0; i < matrix.length-1; i++){
      str = str + matrix[i][matrix[0].length -1];
  }

  for(let i = matrix[0].length-1; i > 0; i--){
      str = str + matrix[matrix.length -1][i];
  }
  for(let i = matrix.length-1; i > 0; i--){
      str = str + matrix[i][0]; 
  }

  let reMatrix = matrix.slice(1, matrix.length-1);
  for(let i = 0; i < reMatrix.length; i++){
      reMatrix[i] = reMatrix[i].slice(1, reMatrix[i].length -1);
  }
  return str + spiralTraversal(reMatrix);
};
